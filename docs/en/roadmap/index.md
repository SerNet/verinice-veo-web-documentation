<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Roadmap

As of September 2, 2026 - Subject to change!

## Q3 2026

### IT-Grundschutz Profiles <Badge type="danger">Development</Badge>
<!-- epics/380 -->

Provision of the **IT-Grundschutz Profiles** based on the IT-Grundschutz Compendium in the **2023-1 Edition**:
- IT-GS Profile for traffic control and management systems on the federal highway network
- IT-GS Profile for top-level federal authorities
- IT-GS Profile for the operation of UAS
- IT-GS Profile for federal courts
- IT-GS Profile for departmental research institutions
- IT-GS Profile for securing 5G campus networks
- IT-GS Profile for control centers V 2.0 Edition 2023
- IT-GS Profile for the Use of the Federal E-File

::: warning The IT-GS Profile for Basic Security in Local Government, Version 4, is already available for use in verinice.
:::

::: info IT-GS profiles based on an older edition of the IT-Grundschutz Compendium may be provided upon request.
:::

### B3S Medical Care <Badge type="danger">Development</Badge>
<!-- epics/379 -->

Provision of the **Industry-Specific Security Standard (B3S) for Medical Care** in Version 1.3.1 as a profile for verinice.

### Workflow <Badge type="danger">Development</Badge>
<!-- epics/374 -->

In the first iteration, tasks related to the **implementation** of control objects and their **revision** are mapped as a workflow. A new page, **Tasks**, displays all **controls to be implemented** or **controls to be reviewed**, filterable by responsibility. The basis for the new **Workflow** functionality is the assignment of newly introduced **accounts**, which are linked to person objects.

### Report Formats <Badge type="warning">Planning</Badge>

Provision of additional output formats for reports (CSV, XLSX/ODS, and DOCX/ODT, HTML):
- Output of reports in the **DOCX** and **ODT** formats for editorial editing before they are finalized. <!-- epics/373 -->
- Creation of additional report templates in tabular form in the **CSV/XLSX/ODS** formats for quantitative further processing, filtering, and sorting of data.<!-- epics/372 -->
- Export of all report templates in **HTML** format for internal distribution (e.g., on the intranet) or for quick browser-based viewing without additional software.<!-- epics/371 -->

## Q4 2026

### Access Management - Scopes <Badge type="warning">Planning</Badge>
<!-- epics/178 -->

Read and write permissions can be assigned to groups on scope objects, ensuring that content in other scopes cannot be accessed. This feature enables granular access permissions for, e.g., information networks, scopes, or external service providers.

### Basic Protection++ Domain <Badge type="warning">Planning</Badge>
<!-- epics/262 -->

Deployment of an initial functional Basic Protection++ (DE) domain with updates to methodology and risk management.

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

Read and write permissions can be assigned to groups for composite objects, ensuring that other objects and their content cannot be accessed. This feature enables granular access permissions for individual objects and object groups, such as business processes, applications, or IT systems.
