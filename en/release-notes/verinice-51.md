<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# verinice 51

The following new features are available to users with the release of verinice 51.

## Better mapping of scopes and parts <Badge type="info">Test</Badge>

To improve orientation, the following changes have been made to the object view:
- The Scopes and **Parts** tabs have been combined.
- The In Scope and **Part of** tabs have been combined.

![Parts and Part of](/assets/en/release-notes/verinice-50-parts.de.gif)

- A combined dialog for selecting and creating objects has been introduced.

![Combined dialog for object creation](/assets/en/release-notes/verinice-50-create-parts.de.gif)

### Improved operation of the collapsed menu <Badge type="info">Test</Badge>

The navigation menu remains operable when collapsed.

![Collapsed menu](/assets/en/release-notes/verinice-50-menu.de.gif)

## Detail Improvements

In the object view, the column layout is preserved when you return to the object view after switching to another page.

The default setting for light/dark mode is now read from the system settings.

The link **Further Domains** in the Domains selection field now opens the page for selecting domains for the active unit.

## Bug Fixes 

- Exported units contain correct and complete data.
- Control texts in Markdown fields can be saved.
- In the ISO domain, the container for mitigating measures is correctly created as a Control Group subtype rather than a Security Measure.
- When creating an account, an error message now informs the user that the username must be at least 3 characters long.
- Incorrect error message when deleting clients has been corrected.
- Fixed incorrect domain updates.
- Fixed a caching issue when activating feature flags.
- When creating a domain from a domain template, translations are now applied correctly.
- Upgrade to Nuxt version 4.3.0
- Upgrade to Spring Boot version 4
