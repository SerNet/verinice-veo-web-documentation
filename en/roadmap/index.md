<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# Roadmap

The features listed in the roadmap are in various stages of development:
- <Badge type="info">Test</Badge> Release imminent (subject to successful testing).
- <Badge type="danger">Development</Badge> Release foreseeable (depending on complexity).
- <Badge type="warning">Discussion</Badge> Release planned (postponements possible).
- <Badge type="tip">Planning</Badge> Release undetermined (postponements likely).

## Q1 2026

<!-- verinice 49 Start -->

### Improve change to risk definition<Badge type="info">Test</Badge>

<!--301-->
**Deleting** *medium levels* of impact, probability of occurrence, or risk values in a risk definition leads to shifts in risk values in existing risks and requires manual rework. To avoid unintentional deletion, only the highest level can be deleted. It is still possible to rename all levels.

![Deleting levels in the risk definition](/assets/en/roadmap/verinice-49-risikodefinition.de.png)

::: danger Any adjustment to a risk definition requires changes to existing risks. It is recommended to adapt the risk definition to the respective organization **before**  the risk assessment!
:::

In addition, the following errors have been fixed:
- The front end takes into account that a risk definition must contain at least one criterion (protection goal).
- A risk definition can now be saved when a risk level is deleted, provided that it is no longer used in any matrix.

### Reports as cards <Badge type="info">Test</Badge>
<!--&240-->

Reports are displayed in separate cards for each language variant to simplify selection:

![Reports as cards](/assets/en/roadmap/verinice-49-report-cards.de.png)

### Detail improvements and bug fixes <Badge type="info">Test</Badge>
<!--&264, &186-->

- The documentation for authorization management has been updated.
- The report **A.3 Modeling** in the IT-Grundschutz (DE) domain reads the new property ```complianceControlSubTypes``` .
- The obsolete property ```complianceControlSubType``` has been removed (previously replaced by ```complianceControlSubTypes```).
- Fixed the 404 error (object not found) under **My recently edited objects** if the object was created in another domain.
- The content of the IT-Grundschutz Compendium and other controls in the implementation dialog is now also readable in dark mode.
- Display of missing translations for profiles in the **Create Unit** wizard.
- The standard user and standard password of the logged-in user are transferred to the report service.
- Upgrade to VueQuery version 5.
- Update to Cypress 15
- Update vue-tsc to v3.1.8

<!-- verinice 49 End ???-->

### Visual representation of links <Badge type="info">Test</Badge>
<!--&225-->

The first iteration of the visual representation of links enables navigation to direct *neighbors* :

![Graph Navigation](/assets/en/roadmap/verinice-49-graph-1.de.gif)

![Graph Zoom](/assets/en/roadmap/verinice-49-graph-2.de.gif)

### Extension of the search function <Badge type="info">Test</Badge>
<!--&290-->

The second iteration of the **search function** integrates the criteria of the filter dialog:

![Search function](/assets/en/roadmap/verinice-49-search.de.gif)

### OnPrem operation <Badge type="info">Test</Badge>
<!--&294-->

Beta projects and rollout of OnPrem operation in two installation variants:
- Helm chart for native Kubernetes clusters.
- Virtual appliance with Talos Linux for Kubernetes.

### Migration from verinice to verinice.veo. <Badge type="info">Test</Badge>
<!---->

Migration of data from verinice to verinice.veo in the following iterations:
- IT baseline protection and data protection domains
- ISO 27001 and data protection domains
- BCM domain
- TISAX / VDA ISA domain

### Better mapping of scopes and parts <Badge type="danger">Development</Badge>
<!--&298-->

To improve orientation, the following changes have been made to the object view:
- The **Scopes** and **Parts** tabs have been combined.
- The **In Scope** and **Part of** tabs will be combined.
- A combined dialog for selecting and creating objects will be introduced.

### Conflict-free domain updates <Badge type="danger">Development</Badge>
<!-- &59, &257, &302-->

In order to be able to manually resolve any conflicts (breaking changes) when updating domains, these must be identified and corrected.

### Expand implementation documentation <Badge type="danger">Development</Badge>
<!--&261-->

The documentation of the implementation of controls will be expanded to include:
- Links to the responsible persons.
- Links to supporting documents.

![Expand implementation documentation](/assets/en/roadmap/verinice-49-ri-dialog.de.png)

### Service for background tasks <Badge type="danger">Development</Badge>
<!--&103-->

In order to be able to execute long-running processes such as the application of profiles in the background, these are outsourced to a service.

### Applicability of controls (SoA) <Badge type="danger">Development</Badge>
<!--&208-->

In order to be able to map the **applicability of controls (SoA)** specifically in all domains, the associated dialog is implemented as a configurable form.

### Adapt domain NIS2 (DE) to implementation law<Badge type="danger">Development</Badge>
<!--110-->

Organization-relevant aspects according to the German implementation law (NIS2UmsuCG) are taken into account.

### Take German ISO 27005 into account <Badge type="danger">Development</Badge>
<!--&300-->

In the ISO 27001 (DE) domain, the now available **German-language version of ISO 27005** must be taken into account. The current English-language threats and vulnerabilities must be translated.

### Additional domains <Badge type="danger">Development</Badge>

Creation of new domains:
- Business Continuity Management domain (BSI Standard 200-4 and ISO 22301)
- Basic Protection++ domain
- TISAX / VDA ISA domain

Creation of international versions of the following domains:
- Domain ISO 27001 (INT) <!--&248-->
- New domain NIS2 (INT) <!--&249-->
- New domain GDPR (INT) <!--&250-->

## Q2 2026

### ISO catalog with control texts <Badge type="tip">Planning</Badge>
<!--&293-->

Provision of the risk catalog for the ISO 27001 domain with the control texts encrypted under license law.

## Second half of 2026

### Authorization management <Badge type="tip">Planning</Badge>
<!--&178-->

Extension of the rights and roles concept to scopes (e.g., information networks). <!-- &178 -->
