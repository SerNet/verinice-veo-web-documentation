<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Roadmap

As of September 23, 2026 - Subject to change!

## Q3 2026

## VNA Import <Badge type="danger">Development</Badge>

The [VNA Importer](../new-in-verinice/vna-importer.md) is being expanded to include imports into the following domains:

- **ISO** and **Data Protection**.
<!-- epics/364 -->
- **Business Continuity (BCM)**
<!-- epics/365 -->

### IT-Grundschutz Profiles <Badge type="danger">Development</Badge>
<!-- epics/380 -->

Provision of the **IT-Grundschutz Profiles** based on the IT-Grundschutz Compendium in the **2023-1 Edition**:

- IT-GS Profil für die Verkehrssteuerungs- und Leitsysteme der Bundesautobahn
- IT-GS-Profil Profil für oberste Bundesbehoerden
- IT-GS-Profil Profil für den Betrieb von UAS
- IT-GS-Profil Profil für Bundesgerichte
- IT-GS-Profil Profil für Ressort-Forschungseinrichtungen
- IT-GS-Profil zur Absicherung von 5G-Campusnetzen
- IT-GS-Profil für Leitstellen V 2.0 Edition 2023 
- IT-GS-Profil für die Nutzung der E-Akte Bund

::: warning The IT-GS Profile Basis-Absicherung Kommunalverwaltung Version 4, is already available for use in verinice.
:::

::: info IT-GS profiles based on an older edition of the IT-Grundschutz Compendium may be provided upon request.
:::

### B3S Medical Care <Badge type="danger">Development</Badge>
<!-- epics/379 -->

Provision of the **Industry-Specific Security Standard (B3S) for Medical Care** in Version 1.3.1 as a profile for verinice.

### Workflow <Badge type="danger">Development</Badge>
<!-- epics/374 -->

In the first iteration, tasks related to the **implementation** of control objects and their **revision** are mapped as a workflow. A new page, **Tasks** displays all **controls to be implemented** or **controls to be revise**, filterable by responsibility. The basis for the new **Workflow** functionality is the newly introduced **assignment of accounts to person objects**.

### Report Formats <Badge type="warning">Planning</Badge>

Provision of additional output formats for reports (CSV, XLSX/ODS, and DOCX/ODT, HTML):
- Output of reports in the **DOCX** and **ODT** formats for editorial editing before they are finalized. <!-- epics/373 -->
- Creation of additional report templates in tabular form in the **CSV/XLSX/ODS** formats for quantitative further processing, filtering, and sorting of data.<!-- epics/372 -->
- Export of all report templates in **HTML** format for internal distribution (e.g., on the intranet) or for quick browser-based viewing without additional software.<!-- epics/371 -->

## Q4 2026

### Access Management - Scopes <Badge type="warning">Planning</Badge>
<!-- epics/178 -->

User groups can be granted read and write permissions for scope objects, ensuring that content in other scopes cannot be accessed. This feature enables granular access permissions for, e.g., information domains, scopes, or external service providers.

### Grundschutz++ Domain <Badge type="warning">Planning</Badge>
<!-- epics/262 -->

Deployment of an initial functional Grundschutz++ (DE) domain with updates to methodology and risk management.

### Dashboard <Badge type="warning">Planning</Badge>
<!-- epics/315 -->

Expanded dashboard functions to visually present data.
The expansion of the dashboard is planned in several iterations:
- Graphical representation of the implementation status of controls and risks.
- Calendar view of tasks and due dates.
- Display of key metrics in tiles.
- Option to export the displayed data.

### Audit Management <Badge type="warning">Planning</Badge>
<!-- epics/375 -->

Mapping of internal and external audits in verinice with task delegation and monitoring as part of the workflow. The planning and execution of internal and external audits will be mapped via a new scope object.

## Q1 2027

### Access Management - Objects <Badge type="warning">Planning</Badge>
<!-- epics/395 -->

Users groups can be granted read and write permissions for any desired objects, ensuring that other objects and their content cannot be accessed. This feature enables granular access permissions for individual objects and object groups, such as business processes, applications, or IT systems.
