<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# Roadmap

The features listed in the roadmap are in various stages of development:
- <Badge type="info">Test</Badge> Release imminent (subject to successful testing).
- <Badge type="danger">Development</Badge> Release foreseeable (depending on complexity).
- <Badge type="warning">Planning</Badge> Release planned (postponements possible).
- <Badge type="tip">Idea</Badge> Release undetermined (postponements likely).

## Q1 2026

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

### ISO catalog with control texts <Badge type="warning">Planning</Badge>
<!--&293-->

Provision of the risk catalog for the ISO 27001 domain with the control texts encrypted under license law.

## Second half of 2026

### Authorization management <Badge type="warning">Planning</Badge>
<!--&178-->

Extension of the rights and roles concept to scopes (e.g., information networks). <!-- &178 -->
