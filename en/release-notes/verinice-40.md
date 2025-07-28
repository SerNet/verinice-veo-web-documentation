<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# verinice 40

The following new features are available to users with the release of verinice 40:

## General functions

### Multiple selection domain assignment

In the object overview, multiple objects can now be assigned to another domain at the same time using the multiple selection function:
![Multiple selection for domain assignment]( /assets/en/release-notes/verinice-40-domain-association.de.gif)

### Accessibility

The entire interface has been revised with regard to accessibility and fulfills the requirements of WCAG 2.1 AA:
![Accessibility Lighthouse]( /assets/en/release-notes/verinice-40-lighthouse.de.png)
![Accessibility AXE Developer Tools]( /assets/en/release-notes/verinice-40-axe.de.png)
::: info
To maintain accessibility, automated accessibility tests are currently being integrated into the development process and the acceptance criterion **Accessibility fulfilled** is included as a mandatory part of the acceptance process.
:::

### Detailed improvements

* Banner messages (e.g. announcements of new releases) are closed after confirmation by users and not automatically after 10 minutes.

### Bug fixes

* In the integration of domain-specific control details in the conversion dialog already published with verinice 39, a problem with the display of individual information has been fixed.
* Fixed an error when displaying the reason for the impact (protection requirement or business impact).
* Minor bug fixes within the scope of the feature flags.
* Fixed bugs and standardized the layout of page titles (H1 header).

### Product maintenance

* Nuxt and associated packages have been updated to newer versions.

## Domain ISO

**Status: Private Beta**

### Documentation

First version of the user documentation for the domain ISO.
