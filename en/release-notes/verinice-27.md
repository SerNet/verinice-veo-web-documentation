<!-- © 2024 The Project Contributors - see AUTHORS.txt -->
# verinice 27

The following new features are available to users with the release of verinice 27:

## General functions
**Status: Productive**
### Improvement of the documentation
The documentation uses [Vitepress](https://vitepress.dev/) as the new framework and contains the new sections:

- Release Notes
- Known Issues
- Glossary
- Roadmap
The structure and content of the user manual has been extensively revised and updated.
The tutorials have been updated and the new unit administration tutorial has been added.

### Performance improvement
The performance of long-running actions has been significantly improved:

- All available profiles can be applied without error messages.
- The deletion of units has been accelerated so that every unit is deleted. In individual cases, a timeout may still occur, but the units are completely deleted after a short wait.
- A prototype for the execution and display of actions in the background has been implemented in order to avoid error messages (timeouts) for long-running actions.

### Search function for objects

In the object overview, objects can be searched by name, abbreviation or display name (composed of designator, abbreviation and name). By default, a free text search is implemented in the display name without specifying the search criterion.
The search will be expanded in future iterations to include additional search criteria, operators and functions.

### Detailed improvements and bug fixes

- Provision of the SBOM in SPDX format on Github.
- Fixed a display error in the new unit administration that prevents the application of individual profiles.
- Fixed a bug that prevents the modification and deletion of potential impact values (protection requirements) for processes and assets in the IT-Grundschutz and NIS2 domains.
- Upgrade to Nuxt v3.12.3.

## Data protection domain
**Status: Productive
- Fixed an error when running the data protection risk analysis reports if no risk definition has yet been selected.

## Domain IT-Grundschutz
**Status: Private Beta**
### Improvement of the modeling
To improve the procedure for modeling building blocks:
- the Measures tab has been renamed to Building blocks.
- the adding of measures has been renamed to Model building blocks.
- added a link to the catalog if no building blocks have yet been selected (applied) for the unit.

### Improvement of the IT-Grundschutz check
The dialog for documenting the implementation of the IT-Grundschutz check has been improved:
- The dialog has been structured more clearly.
- The requirement text is displayed.
- The implementation date has been added.
- The implementation date is displayed in the reference documents A.5 Risk analysis and A.6 Implementation plan.
- You can navigate directly from the dialog to the target object and the module.

### Creating the risk overview

To prepare a risk analysis, the hazard overview for scope, process and asset objects is created:
- All elementary hazards of the modeled building blocks are loaded according to the cross-reference tables.
- Risks are created for these elementary hazards.

## Domain NIS2
**Status: Prototype**
- Application of the fields for the protection requirement in the form schema editor corrected.

## Domain ISO
**Status: Prototype**
- Further development of the object schema for the ISO domain.

## Domain TISAX
**Status: Prototype**
- Further development of the object schema for the TISAX domain.
