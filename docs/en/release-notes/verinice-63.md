<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# verinice 63

Release Date: November 27, 2026

The following new features are available to users with the release of **verinice 63**.

## Revamped User Interface
<!-- epics/410 -->

The user interface has been updated to a new version of the underlying UI framework. This has improved the appearance and accessibility in several areas.

- Improved color contrast for notes and links in accordance with WCAG, even in Dark Mode.
- Dashboard layout corrected.
- Profile descriptions when creating a unit are fully readable even in a narrow browser window.
- The display of the Getting Started page has been corrected.
- Links to requirements on the implementation page are now displayed as links again.
- The Apply button in the catalog is visible even with long lists of objects.

## Detail Improvements and Bug Fixes
<!-- epics/279 -->

- The Statement of Applicability (SoA) report in the ISO domains can now be generated again.
- Standardized the “Incidents” object type across all domains.
- The “Save” and “Cancel” buttons in the “Edit Implementation” dialog now display the correct active state.
- Removed redundant text from the “Documents” section of the full object view.
- When searching by status, the selection can now be confirmed using the Enter key.
- More understandable message for objects that need to be adjusted before migrating to a new domain version.
- Fixed an error when creating units behind certain proxies and load balancers.
- Forms are now recreated when new clients are created.
