<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Roadmap

As of July 16, 2026 - Subject to change!

## Q3 2026

### VNA Import

Implementation of the VNA import from verinice.PRO to verinice.onprem or verinice.cloud for data migration: 
- to the **ISO** and **GDPRn** domains. <Badge type="danger">Development</Badge>
<!-- epics/364 -->
- to the **BCM** domains. <Badge type="warning">Planning</Badge>
<!-- epics/365 -->

::: tip The [VNA Importer](../new-in-verinice/vna-importer.md) is already available for migrating data from the **Modernized IT-Grundschutz** perspective to the **IT-Grundschutz** and **Data Protection** domains.
:::

### IT-Grundschutz Profiles <Badge type="danger">Development</Badge>

Provision of the **IT-Grundschutz Profiles** based on the IT-Grundschutz Compendium, **Edition 2023-1** (in German only):

- IT-GS Profil für die Verkehrssteuerungs- und Leitsysteme der Bundesautobahn
- IT-GS-Profil Profil für oberste Bundesbehoerden
- IT-GS-Profil Profil für den Betrieb von UAS
- IT-GS-Profil Profil für Bundesgerichte
- IT-GS-Profil Profil für Ressort-Forschungseinrichtungen
- IT-GS-Profil zur Absicherung von 5G-Campusnetzen
- IT-GS-Profil für Leitstellen V 2.0 Edition 2023 
- IT-GS-Profil für die Nutzung der E-Akte Bund

::: warning The IT-GS Profile Basis-Absicherung Kommunalverwaltung Version 4 is already available for use in verinice.
:::

::: info IT-Grundschutz profiles based on an older edition of the IT-Grundschutz Compendium may be provided upon request.
:::

### B3S Healthcare <Badge type="danger">Development</Badge>

Release of the **Branchenspezifischen Sicherheitsstandard (B3S) für die medizinische Versorgung**, Version 1.3.1, as a profile for verinice (in German only).

### Business Continuity Management Sample Data <Badge type="danger">Development</Badge>
<!-- epics/253 -->

Sample units and profiles for the BCM domains, e.g., the BCM profile for universities.

### Workflow <Badge type="warning">Planning</Badge>
<!-- epics/374 -->

Creation of tasks for any objects, e.g., as questionnaire objects that can be delegated and re-delegated between users.

### Expansion of authorization management <Badge type="warning">Planning</Badge>
<!-- epics/178 -->

Permissions management supports references across units to map access to units in a manner analogous to the information networks in verinice.PRO. In future phases, permissions (rights and roles) will be extended to include, for example, scope objects.

### Report Formats <Badge type="warning">Planning</Badge>

Provision of additional output formats for reports (CSV, XLSX/ODS, and DOCX/ODT, HTML):
- Exporting reports in the **DOCX** and **ODT** formats for editorial editing before they are finalized.<!-- epics/373 -->
- Creating additional report templates in tabular form in the **CSV/XLSX/ODS** formats for quantitative further processing, filtering, and sorting of data. <!-- epics/372 -->
- Export all report templates in **HTML** format for internal distribution (e.g., on the intranet) or for quick browser-based viewing without additional software.<!-- epics/371 -->

### Audit Management <Badge type="warning">Planning</Badge>

Mapping of internal and external audits in verinice with task delegation and monitoring as part of the workflow. The planning and execution of internal and external audits are mapped via a new scope object.

## Q4 2026

### Dashboard <Badge type="warning">Planning</Badge>
<!-- epics/315 -->

Expanded dashboard functions to visually present data.

The expansion of the dashboard is planned in several iterations:
- Graphical representation of the implementation status of controls and risks.
- Calendar view of tasks and due dates.
- Display of key metrics in tiles.
- Option to export the displayed data.

### Grundschutz++ Domain <Badge type="warning">Planning</Badge>
<!-- epics/262 -->

Deployment of an initial functional Grundschutz++ (DE) domain with updates to methodology and risk management.
