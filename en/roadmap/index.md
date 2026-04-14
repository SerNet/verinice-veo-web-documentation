<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Roadmap

As of April 7, 2026 - Subject to change!

The features listed in the roadmap are in various stages of development:

- <Badge type="info">Test</Badge> Release imminent (subject to successful testing).
- <Badge type="danger">Development</Badge> Release foreseeable (depending on complexity).
- <Badge type="warning">Planning</Badge> Release planned.
- <Badge type="tip">Idea</Badge> Release undetermined.

## Q2 2026

### VNA Importer for IT-Grundschutz and Data Protection <Badge type="danger">Development</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/305 -->

Release of the VNA Importer for migrating data to the IT-Grundschutz and Data Protection domains.

### Search Replaces Filter <Badge type="danger">Development</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/290 -->

The expanded search function replaces the previous filter function.

### Better statement of applicability (SoA) <Badge type="danger">Development</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/208 -->

The statement of applicability (SoA) should be better documented in the scope object within the Control Implementation (CI) for individual controls.

### Support for registry mirroring for on-premises operations <Badge type="danger">Development</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/326 -->

For customers with an air-gapped environment, Kubernetes environments have no access to the internet and use cloned images from a company-owned registry (instead of a publicly accessible one). It should be possible to easily configure a custom registry in the values file.

### Automate OnPrem Initial Setup <Badge type="danger">Development</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/317 -->

Manual steps in the initial setup should be reduced so that, ideally, everything can be controlled via values.yaml and similar mechanisms.

### Make Helm Charts OpenShift-compatible <Badge type="danger">Development</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/316 -->

OpenShift has many unique characteristics, which means that using Helm Charts in OpenShift Kubernetes environments requires additional steps. The verinice chart is intended to be functional in OpenShift environments.

### Optimize business continuity forms <Badge type="danger">Development</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/306 -->

In the BCM domain, the creation of recovery plans, restart plans, and business continuity plans is simplified through improved collection of the necessary information.

### Align NIS2 (INT) with NIS2 (DE) <Badge type="danger">Development</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/303 -->

The NIS2 (DE) domain is the domain that maps the German national NIS2UmsuCG. It evolved from NIS2 (INT), which has been available since the end of 2024. Adjustments to the NIS2UmsuCG must be implemented in the NIS2 (INT) domain as applicable.

### Clean up domains (content deployment) <Badge type="danger">Development</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/302 -->
To clean up the domains, the various content deployments must be carried out.

### Incorporate German ISO 27005 into the ISO 27001 (DE) domain <Badge type="danger">Development</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/300 -->

The German-language version of ISO 27005 must be taken into account in the ISO 27001 (DE) domain.

### Expand implementation across domains <Badge type="danger">Development</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/261 -->

The documentation of the implementation of requirements is to be expanded across domains.

### New Domain GDPR (INT) <Badge type="danger">Development</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/250 -->

Creation of the English-language GDPR (INT) domain for the internationally applicable version of the GDPR.
Expansion to include international data protection users.

### New NIS2 (INT) Domain <Badge type="danger">Development</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/249 -->

Creation of the English-language domain NIS2 (INT) for the internationally applicable version of NIS2.
Expansion to include international NIS2 users.

### New ISO 27001 (INT) domain <Badge type="danger">Development</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/248 -->
Creation of the English-language ISO 27001 (INT) domain for internationally valid ISO EN standards.

### Standardize OS/FS document across domains <Badge type="danger">Development</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/233 -->

The generally applicable “Document” subtype is to be standardized across domains to simplify cross-domain work for all users.

### Conflict-Free Domain Updates <Badge type="danger">Development</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/59 -->

Changes to domains may require the migration of existing data. Any conflicts that may arise should be detected and displayed so that users can resolve them.

### Migration to SysEleven (C5) <Badge type="danger">Development</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/246 -->

Migration of hosting to SysEleven to ensure a more performant and better operating environment (C5) for verinice.cloud.

### Adapt NIS2 (DE) domain to the Implementation Act <Badge type="danger">Development</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/110 -->

Incorporation of organization-relevant aspects in accordance with the German Implementation Act (NIS2UmsuCG) into the NIS2 (DE) domain.

## Q3 2026

### Visual Dashboard <Badge type="warning">Planning</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/315 -->

The dashboard is intended to display data visually/graphically.

### Expand Graph View <Badge type="warning">Planning</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/311 -->

Expansion of the visual representation of connections (Graph View).

## Q4 2026

### Better structure information <Badge type="warning">Planning</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/329 -->

For all objects and subtypes, primary (and secondary) important information should be presented in a way that is recognizable both textually and visually. The information should be displayed as consistently as possible in tables (v-data-table) and cards (v-card), to the extent that the different display formats allow.

### Improvements to OnPrem Operations <Badge type="danger">Development</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/318 -->

Further improvements for OnPrem operations: Helm chart and Talos VM.
