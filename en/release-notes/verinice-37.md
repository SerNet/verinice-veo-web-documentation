<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# verinice 37

The following new features are available to users with the release of verinice 37:

## General functions

**Status: Productive**

### Detailed improvements

- A confirmation dialog informs about applied catalog elements, you can navigate directly to the respective catalog elements:
![Applied catalog elements]( /assets/en/release-notes/verinice-37-catalog.de.png)

### Bug fixes

- A problem when changing values in number fields by scrolling with the mouse wheel under Windows has been fixed.
- Scope objects can now be saved even if you have a link to one of their parts.
- Layout errors in the unit management have been fixed.
- When updating a catalog, obsolete objects are deleted correctly.
- Catalogs are updated correctly if catalog elements are referenced in profiles.

### Product maintenance
- Update of Nuxt/content to version 3

### REST API
- The endpoints for creating and executing searches **/elementType/searches** have been marked as deprecated and will be removed in a subsequent release.

## Domain IT-Grundschutz
**Status: Productive**
- The form for **Information security incidents** has been extended analogously to the ISO domain in order to be able to document all required information.
- In the **A.3 Modeling** report, the unused modules are now also output.
