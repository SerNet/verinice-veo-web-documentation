/**
 * Move inline JS into external files.
 * This is done to satisfy CSP which does not allow inline scripts.
 */

import { writeFileSync, readFile } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { glob } from "glob";
import hash from "hash-sum";

export function init() {
  console.info("Removing inline scripts...");

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const BUILD_OUTPUT_DIR = resolve(__dirname, ".vitepress", "dist");
  const HTML_FILES = glob.sync(`${BUILD_OUTPUT_DIR}/**/*.html`);
  const REGEX = /<script([^>]*)>(.+?)<\/script>/gi;

  /**
   * In every HTML file, for every <script> tag containing inline JS:
   * extract inline JS,
   * write it into a file,
   * insert a script tag referencing this external source file.
   */
  HTML_FILES.forEach((file) => {
    let inlineScriptNames = [];
    let numOfInlineScripts = 0;

    readFile(file, (error, fileContent) => {
      if (error) console.error(error);

      const newFileContent = fileContent
        .toString()
        .replace(REGEX, (text, args, scriptContent) => {
          // If <script> has a source attribute, leave it as is
          if (args.includes("src=")) {
            return text;
          }

          const externalScriptName = `externalized-script-${numOfInlineScripts}.${hash(scriptContent)}.js`;

          // Write former inline JS into an external file
          writeFileSync(
            resolve(BUILD_OUTPUT_DIR, "assets", externalScriptName),
            scriptContent,
          );

          // Keep track of former inline JS tags and their newly created corresponding files
          inlineScriptNames.push(externalScriptName);

          // Replace inline JS with a reference to the new external script
          return `<script${args} src="/assets/${inlineScriptNames[numOfInlineScripts++]}"></script>`;
        });

      console.info("Replaced", numOfInlineScripts, "inline scripts", "in:");
      console.info(file);
      writeFileSync(file, newFileContent);
    });
  });
}

init();
