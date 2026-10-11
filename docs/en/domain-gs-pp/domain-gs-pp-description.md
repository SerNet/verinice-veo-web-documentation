<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Structure of the Grundschutz++ Domain

## Object and Subtypes

### Scope Objects

- **Institutions:** For mapping the institution with the most important master data.
- **Information domains:** *Informationsverbünde* (information domains) for which an *Anforderungspaket* (requirements package) is created.
- **External service provider:** Considered separately as external institutions or organizations, e.g. for outsourcing and cloud services.
- **Scopes (general):** For mapping other subjects of consideration, e.g. the *Anwendungsbereich* (scope of application) of the ISMS or projects.

### Process Objects

- **Business processes:** For documenting core and supporting processes. The **Process type** distinguishes between core business and supporting process.
- **Specialised tasks:** For documenting specific specialized or administrative procedures.

### Asset Objects

- **Target objects:** All assets of the *Informationsverbund* – e.g. information, applications, IT systems, networks, rooms, services or groups of persons. Unlike in the IT-Grundschutz domain, there is only one asset subtype; the subject-matter classification is done via the [*Zielobjektkategorien* (target object categories)](./target-object-categories).

### Person Objects

- **Persons:** Persons (or groups of persons) or roles, e.g. information security officers or asset owners.

### Incident Objects

- **Information security incidents:** For documenting incidents.

### Document Objects

- **Network plans:** For storing (partial) network plans.
- **Reference documents:** For storing created reference documents.
- **Documents (general):** For storing other documentation, e.g. policy, role descriptions or evidence, with information on document control (version, classification, approval, review interval).

### Control Objects

- **Requirements:** All requirements of the Grundschutz++ catalog as well as your own requirements. The structure of a requirement is described in the section [Requirements Catalog](./catalog).
- **Target object categories:** The *Zielobjektkategorien* of the catalog as well as the *Sammelkategorien* (collective categories) „Verbundweite Anforderungen“ and *Führungsprozesse* (management processes), each of which bundles the associated requirements.
- **Safeguards:** Concrete safeguards used to fulfill requirements or treat risks.

### Scenarios

- **Elementary threats:** The elementary threats G 0.x to which the requirements of the catalog refer. They are used for the [*Risikobetrachtung* (risk consideration)](./risk-analysis).

## Catalog

The catalog of the Grundschutz++ domain provides the Grundschutz++ requirements catalog. It is generated from the OSCAL catalog of the BSI state-of-the-art library and contains:

| Content | Number |
|---|---|
| Requirements | 1,000 |
| Target object categories (total) | 52 |
| of which target object categories of the catalog | 39 |
| of which collective category „Verbundweite Anforderungen“ | 1 |
| of which management processes | 12 |
| Elementary threats | 47 |

The requirements come from three sources: the BSI state-of-the-art kernel (901), the Grundschutz++ methodology (95) and the BSI requirements for risk management (4). For details on *Praktiken* (practices), fields and categories, see [Requirements Catalog](./catalog).

## Profiles

The **Grundschutz++-Profil** contains an *Informationsverbund* modeled with the requirements for implementing the methodology and the *Führungsprozesse*, as well as 39 example target objects – one per *Zielobjektkategorie*, modeled with the technical-organizational requirements of the category. You can adapt the example target objects to your institution (see [Requirements Package From Profile](./modelling#requirements-package-from-profile)). The content and structure of the profile are described on the page [Profiles in the Grundschutz++ Domain](./gs-pp-profiles).

## Decisions

None

## Risk Definition

The risk definition **GSRD** provides the parameters for *Schutzbedarf* (protection need) and *Risikobetrachtung*:

- ***Schutzbedarf*** for the protection goals Confidentiality, Integrity and Availability with the categories Negligible, Limited, Considerable and Existential
- **Extent of damage** with the categories Negligible, Limited, Considerable and Existential
- **Probability of occurrence** with the categories Rare, Medium, Frequent and Very frequent
- **Risk categories** Low, Medium, High and Very high
- **Implementation status** yes, no, partial and not applicable

<!-- SCREENSHOT: ![Risk definition GSRD](../assets/domain-gs-pp/verinice-gspp-gsrd.png) – Overview of the risk definition GSRD with protection need, extent of damage, probability of occurrence and risk matrix -->

The *Schutzbedarf* is inherited according to the maximum principle via the links **Required business process**, **Required specialised task** and **Required target object**.

::: info Protection need categories and implementation status
Grundschutz++ only knows the *Schutzbedarf* categories *normal* (normal) and *hoch* (high) and the implementation states *erfüllt* (fulfilled), *nicht erfüllt* (not fulfilled) and *nicht anwendbar* (not applicable). How to map the values of the risk definition to them is described in the sections [*Schutzbedarfsfeststellung* (protection need assessment)](./protection-needs#protection-need-categories) and [*Realisierung* (realization)](./implementation#implementation-status).
:::
