<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Roadmap

As of March 16, 2026 - Subject to change!

The features listed in the roadmap are in various stages of development:
- <Badge type="info">Test</Badge> Release imminent (subject to successful testing).
- <Badge type="danger">Development</Badge> Release foreseeable (depending on complexity).
- <Badge type="warning">Planning</Badge> Release planned.
- <Badge type="tip">Idea</Badge> Release undetermined.

## Q1 2026

### OnPrem operation <Badge type="info">Test</Badge>
<!-- &294 -->
Beta projects and rollout of OnPrem operation in two installation variants:
- Helm chart for native Kubernetes clusters.
- Virtual appliance with Talos Linux for Kubernetes.

### Migration of IT baseline protection and data protection <Badge type="info">Test</Badge>
<!-- &305 -->
Migration of IT baseline protection and data protection from verinice to verinice.veo.

### Conflict-free domain updates <Badge type="danger">Development</Badge>
<!-- &59, &302, &299, &233 -->
In order to be able to manually resolve any conflicts (breaking changes) when updating domains, these must be identified and displayed.

### Control implementation <Badge type="danger">Development</Badge>
<!-- &261 -->
The documentation of the implementation of controls is expanded to include:
- the link to the responsible persons.
- links to supporting documents.

![Expand implementation documentation](/assets/en/roadmap/verinice-49-ri-dialog.de.png)

### Applicability of controls (SoA) <Badge type="danger">Development</Badge>
<!-- &208 -->
In order to be able to specifically map the applicability of controls (SoA) in all domains, the associated dialog is implemented as a configurable form.

### Extension of the search function <Badge type="info">Test</Badge>
<!-- &290 -->
The second iteration of the search function integrates the criteria of the filter dialog:

![Search function](/assets/en/roadmap/verinice-49-search.de.gif)

### German ISO 27005 <Badge type="danger">Development</Badge>
<!-- &300 -->
In the ISO 27001 (DE) domain, the German-language version of ISO 27005, which is now available, must be taken into account.

### ISO 27001 (INT) domain <Badge type="danger">Development</Badge>
<!-- &248 -->
Creation of the international version of the ISO domain.

### Domain NIS2 (DE) and NIS2UmsuCG <Badge type="danger">Development</Badge>
<!-- &110, &303 -->
Extension of the NIS2 (DE) domain to include the requirements of the German implementation law (NIS2UmsuCG).

### IT baseline protection profile UAS <Badge type="danger">Development</Badge>
<!-- &307-->
Provision of the IT baseline protection profile UAS in vernice.

### Service for background tasks <Badge type="danger">Development</Badge>
<!-- &103 -->
In order to be able to execute long-running processes such as applying profiles in the background, these are outsourced to a service.

### Switch to VueQuery version 5 <Badge type="danger">Development</Badge>
<!-- 309 -->
Functional improvement through upgrade to VueQuery version 5.

## Q2 2026

### C5 hosting for verinice.cloud <Badge type="danger">Development</Badge>
<!--&246-->
Hosting of verinice.cloud under the requirements of the C5 catalog (Criteria Catalog C5 – Cloud Computing Compliance Criteria Catalog – Type 2 Attestation).

### Business Continuity Management domain <Badge type="danger">Development</Badge>
<!-- &306, &285, &258, &255-->
(BSI Standard 200-4 and ISO 22301)
- WHP, WAP, and GFP in verinice
- Automatic calculation of MTPD and RTO
- Reports on the results of emergency planning

### Migration ISO, BCM, TISAX / VDA ISA <Badge type="danger">Development</Badge>
<!-- &216 split -->
Migration of data from verinice to verinice.veo in the following iterations:
- Domains ISO 27001 and data protection
- Domain BCM
- Domain TISAX / VDA ISA

### Domain NIS2 (INT) <Badge type="danger">Development</Badge>
<!-- &249 -->
International version of the NIS2 domain.

### Domain GDPR (INT) <Badge type="danger">Development</Badge>
<!-- &250 -->
International version of the domain Data Protection/GDPR.

### ISO catalog with control texts <Badge type="warning">Planning</Badge>
<!-- &293 -->
Provision of the risk catalog for the ISO 27001 domain with the control texts encrypted in accordance with licensing rights.

### Extension of CSV import <Badge type="warning">Planning</Badge>
<!-- &313, &217 -->
Next iteration of CSV import for free text fields.

### Extension of the graph view <Badge type="warning">Planning</Badge>
<!-- &311 -->
Extension of the navigation and display options for the graph view.

### Import of units <Badge type="warning">Planning</Badge>
<!-- &304 -->
Import of units based on the same domain template.

### Inheritance of controls <Badge type="warning">Planning</Badge>
<!-- &67 -->
Control/building block modeling - inheritance of implementation to parts.

### User Light <Badge type="warning">Planning</Badge>
<!-- new -->
Users with restricted permissions to perform specific tasks in verinice.

## Second half of 2026

### Domain Basic Protection++ <Badge type="warning">Planning</Badge>
<!-- &262 -->
Next version of the new Basic Protection++ using the Basic Protection++ methodology and the risk management methodology (subject to availability).

### Scope permissions <Badge type="warning">Planning</Badge>
<!-- &178 -->
Extension of the rights and roles concept to scopes (e.g., information networks).

### Workflows <Badge type="warning">Planning</Badge>
<!-- new -->
Mapping of workflows in verinice.

### Dashboard <Badge type="warning">Planning</Badge>
<!-- new -->
Visualization of aggregated data in verinice.

### TISAX / VDA ISA domain <Badge type="warning">Planning</Badge>
<!-- &153, &151, &190  -->
Mapping of the TISAX / VDA ISA domain with implementation status as a maturity model.

### Organization-wide controls <Badge type="warning">Planning</Badge>
<!-- &66 -->
Control/module modeling - Organization-wide implementation of controls.
