<!-- © 2024 The Project Contributors - see AUTHORS.txt -->
# verinice 1.20

The following new features are available to all users with the release of verinice 1.20!

## New features

### First steps

- The first steps after login have been made more consistent and intuitive.
- The status after the first login is saved in the local storage of the browser used.
- When logging in again, the dashboard of the last unit visited with the last domain used is always called up.
- The unit administration can be accessed via a fixed URL (/units).
- Adaptation of the tutorial to this change.
- In the navigation, the unit and domain can be changed directly via two selection boxes or the unit or domain administration can be called up.

### Domain data protection

- The **Specially sensitive data** property can be documented in the data type object.
- **Other document type** has been added to the contract/document object.
- The **Reason field** in the data protection incident is multi-line.
- Measures (modules) can no longer be added to scope, process or asset objects in order to keep the handling of mitigating measures in the risk dialog consistent.
- In the GDPR domain, the **Risks** tab is only available for the **Scope objects**, for the **VT** subtype and for the **DSFA** subtype.

### Detailed improvements and bug fixes

- Preparation for user-defined settings in the backend (settings can be saved in future).
- Potential target objects are displayed correctly in custom links.
- New objects created in custom links are displayed immediately (without reload).
- Fixed various typos and layout errors (light/dark mode, documentation, tool tip language switching, description of data transfer)
- Fixed an error that prevented data from being saved when entered extremely quickly (borderline case - only reproducible in machine tests).
- Obsolete URL pattern removed (refactoring).
- Fixed a bug in the object schema editor that prevents saving if translations are missing.
- Expired date in the security policy corrected.
- Addition of individual parameters in the navigation.
- Fixed an error message when switching versions in the history.
- Fixed an error when switching between versions when the current version is selected.
- Action implementation included in Unit Export.
- Improved the performance of the report service by using a unit export.
- Code formatter introduced in the frontend.
- Product maintenance: Updates Nuxt, Hibernate, 3rd party license generation.
- Vulnerability management: Necessary updates to libraries.
- Quality assurance: Further expansion of frontend tests / end-2-end tests.
- Release management: Process improvement, maintenance page for downtime.

## Preview

The verinice.TEAM is working on further functions that will be released in the future. The following content is currently **NOT** productively available to all users.

### Improved unit management

- Based on a prototype, the unit administration as a central point will be improved to make the interaction between units, domains and profiles more intuitive.

### Multi-domain operation

- Synchronization of the existing domains **DS-GVO**, **IT-Grundschutz** and **NIS-2** for multi-domain operation.
- Inspections are domain-specific.
- When switching domains, the dashboard of the selected domain in the active unit is always switched to in order to avoid inconsistencies in the data display.
- The history displays versions on a domain-specific basis.
- Fixed a bug (version gap) when assigning an object to a new domain.
- Objects can only be assigned to another domain once a subtype has been selected (validation corrected).
- The report overview page now only shows reports of the selected domain.

### Domain NIS2

- Prototype with organizational aspects of NIS2 for the domain pulse 2024.
- Subtypes Supplier and Scope (general) refined.
- Mapping of security incidents in the NIS2 domain.
- Measures tab in NIS2 domain hidden.
- Protection requirement levels for authenticity added.

### Domain IT-Grundschutz

#### Building block modeling from catalog

- Building blocks and the requirements they contain are only created once in a unit.
- Scope objects can be applied from catalogs.
- When creating a catalog from a unit, objects are updated instead of newly created.
- Obsolete catalog endpoints removed (refactoring).
- Remove obsolete catalogs overview page (refactoring).

#### Module modeling from profile

- Storage of risk values in profiles for later use.
- Front end converted to new domain-specific profile endpoints.
- IT-Grundschutz profile Basic protection local administration version 3 available as a profile.

#### Inheritance of protection requirements

- Design draft for automatic protection requirement inheritance.
- The object model has been expanded to include the database fields and links for inheritance and calculation of protection requirements.
- In process and target objects, required objects can be linked to which the protection requirement can be automatically inherited (in preparation).

#### Risks in IT baseline protection

- Risks can be added to all asset, process and scope objects.
- Improved layout in the risk dialog.
- Correction of minor inconsistencies in the risk dialog (risk owner, subtype for mitigating measures).

#### Reference documents

- A.1 Structural analysis
- A.2 Determination of protection requirements
- A.3 Modeling of the information network
