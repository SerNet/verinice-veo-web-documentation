<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# verinice 59

Release Date: September 4, 2026 (tentative)

The following new features will be available to users with the release of **verinice 59**.

## VNA Import

With the import of data into the following domains:
- **IT-Grundschutz** and **Data Protection**
- **ISO** and **Data Protection**.<!-- epics/364 -->
- **Business Continuity (BCM)**<!-- epics/365 -->
the [VNA Importer](../new-in-verinice/vna-importer.md) now allows all data to be transferred from verinice.PRO or verinice.EPV to verinice.onprem or verinice.cloud.

## Business Continuity Management Sample Data
<!-- epics/253 -->

### BCM Sample Data

For the domains **BSI 200-4 (DE)**, **ISO 22301 (DE)**, and **ISO 22301 (INT)**, a profile is available that contains an organization with sample objects for mapping a BCMS. The profile includes a sample BCMS scope, including interested parties and their expectations, as well as linked organizational units, persons, documents, failure scenarios, and BIA results.

Using time-critical sample processes, the profile demonstrates how MTPD, RTO, and RPO are determined and serve as the basis for business continuity plans (BCP) and recovery plans (RP). To this end, exemplary BC strategies, BC solutions derived from emergency measures, and improvement measures have been documented.

In addition, a catalog of basic requirements illustrates the compliance review of external service providers using the example of an IT hardware recovery provider. Furthermore, the official BSI requirements catalog can be directly applied to the scope to conduct a structured assessment of the BCMS’s maturity level. Predefined object links and sample plans (GFP for the “Transactions” process, WAP/WHP for the “Hardware Server”) allow you to test the verinice functions and reports for the emergency manual, GFP, and WAP/WHP directly in practice.

### BCM Profile for Universities

This profile serves as a customizable template for the rapid establishment of a reactive BCMS at universities based on the BSI Standard 200-4. It maps typical core tasks in research, teaching, and administration and provides ready-made structures in verinice: from the BAO to BIA results (117 processes, 35 resources) to concrete emergency quick wins and document templates. It facilitates the step-by-step expansion toward a complete or standard BCMS.

## Improving Unit Management
<!-- work_items/5023 -->

The layout of Unit Management has been adapted to match the object overview:
- The **Import Unit** and **Create Unit** buttons are located above the unit cards.
- In the new search field, units can be searched for by their **name** or **description**.
![Unit Management] (../assets/release-notes/verinice-59-unit-management.png)

## Improvements to CSV Import
<!-- epics/382 -->

The CSV import wizard has been further optimized:
- Selecting the encoding no longer opens an additional dialog.
- You can navigate between the individual steps of the import.
- The selected import file is displayed.

## Detail Improvements and Bug Fixes
<!-- epics/275 -->

- A warning is displayed when deleting objects used across multiple domains. <!-- work_items/4592 -->
- Missing translations for object types in the shortcuts have been added. <!-- work_items/5045 -->
- Updated to Nuxt 4.5.1 to address critical security vulnerabilities. <!-- work_items/5043 -->
- Fixed a false-positive conflict warning in the migration. <!-- work_items/5027 -->
- Fixed the layout of the domain update badge. <!-- work_items/5021 -->
- New API endpoints for client changes. <!-- work_items/4904 -->
- The accounts API no longer reads from the API key `Authorization` header, but only from the `X-API-KEY` header. <!-- work_items/4645 -->
- Added missing indicator to the scope icon for existing members. <!-- work_items/4617 -->
- When viewing a module, links to target objects (modeling) can be deleted. <!-- work_items/4484 -->
- In the object overview, the subtype chip was removed from the search and the heading was updated. <!-- work_items/5042 -->
