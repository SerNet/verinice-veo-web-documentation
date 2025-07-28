<!-- © 2024 The Project Contributors - see AUTHORS.txt -->
# verinice 31
The following new features are available to users with the release of verinice 31:

## General functions
**Status: Productive**

### Status messages

In future, users will be informed about upcoming maintenance tasks and updates in verinice by means of messages (warning banners) so that they can complete tasks they have started or plan upcoming tasks.

### Shop connection

Communication between the verinice.store and Keycloak has been optimized:
- The product configuration transferred to verinice now includes the available domains and profiles of the respective client in addition to units and users.
- Communication security has been improved.

### Quality improvements
To increase the general quality, the test coverage has been considerably improved by a large number of additional automated tests.

### Detailed improvements and bug fixes

- **Description** added for all available domains.
- The display of the **Blocks** and **Target objects** tabs is read from the domain and is no longer based on the name.
- Removal of the problematic option **All** in the pagination of tables/lists.
- Fixed incorrect display in **Pagination in catalogs**.
- Updated **Keycloak** to version 26.0.4.
- Patched used packages and libraries to the latest versions.
- Various minor bug fixes.

## Domain Privacy
**Status: Productive**
### Schema optimization
To ensure compatibility with new functions and new domains, the object schema and form schema have been optimized. The changes are automatically migrated in an automatic data migration with release/deployment of verinice 31. Existing customers will be informed personally about upcoming changes where necessary.
### Protection requirements
The **protection requirement** (potential impact) can now also be documented in the scope, process and asset objects of the GDPR domain for the protection goals of confidentiality, integrity, availability and resilience:
![protection needs]( /assets/en/release-notes/verinice-31_potential_impact.de.png)
## Domain IT-Grundschutz
**Status: Productive**
### Procedure for protection

The **procedure for validation** of requirements is now displayed where necessary in order to better support the work according to IT-Grundschutz:
![Safeguarding procedure]( /assets/en/release-notes/verinice-31_proceeding.de.png)

### Risk mitigating measures
For risk-mitigating measures in the IT-Grundschutz domain, the mechanism of **assignment** and **implementation** (control implementation and requirement implementation) is now used, which is also used for *compliance*:
![Risk mitigating measures]( /assets/en/release-notes/verinice-31_CI-RI_risikomitigation.de.png)

#### IT-Grundschutz-Profile Basic Protection Local Government V.4

In addition to the **Standard or core protection profile  according to IT-Grundschutz Compendium Edition 2023**, the **Basis-Absicherung Kommunalverwaltung Version 4.0** is now available as the first IT-Grundschutz profile:
![Basis-Absicherung Kommunalverwaltung Version 4.0]( /assets/en/release-notes/verinice-31_profile.de.png)
