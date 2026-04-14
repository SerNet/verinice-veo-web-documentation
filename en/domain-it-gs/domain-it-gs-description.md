<!-- © 2024 The Project Contributors - see AUTHORS.txt -->
# Structure of the IT-Grundschutz Domain

## Object and Subtypes

### Scope Objects

- **Institutions:** For mapping the institution with the most important master data.
- **Information Networks:** Used to create security concepts.
- **External Service Providers:** Considered separately as external institutions or organizations to reflect the specific requirements of outsourcing.
- **Scopes (general):** For mapping other subjects of consideration, such as projects.

### Process Objects

- **Business Processes:** For documenting core and supporting processes.
- **Specialized Procedures:** For documenting specific specialized procedures.

### Asset Objects

- **Information:** Information processed in business processes, specialized procedures, or applications.
- **Applications::** Target object (software) applications according to IT-Grundschutz.
- **IT Systems:** Target objects such as servers, clients, etc., according to IT-Grundschutz.
- **ICS Systems:** Target object industrial control systems according to IT-Grundschutz.
- **IoT Systems:** Target object Internet-of-Things according to IT-Grundschutz.
- **Communication Links:** Target object communication and network links according to IT-Grundschutz.
- **Rooms:** Target object site, buildings, or rooms according to IT-Grundschutz.

### Person Objects

- **Persons:** Individuals (or groups) or roles.

### Incident Objects

- **Information Security Incidents:** For documenting incidents/events.

### Document Objects

- **Network Plans:** Document object for storing (partial) network plans.
- **Reference Documents:** For storing created [reference documents](#reports).
- **Documents (general):** For storing any other documentation.

### Control Objects

- **Module Families:** All system and process modules.
- **Module Layers:** All layers of the IT-Grundschutz Compendium (ISMS, ORP, CON, OPS, DER, APP, SYS, IND, NET, INF).
- **Modules:** All modules of the IT-Grundschutz Compendium.
- **Requirements:** All requirements for all modules in the IT-Grundschutz Compendium.

### Scenarios

- **Elementary Threats:** Can be loaded via the threat overview if a risk analysis is required for a target object.

## Catalog

The catalog of the IT-Grundschutz domain provides the currently valid IT-Grundschutz Compendium of the 2023 edition. It contains all modules with requirements and elementary threats.

## Profiles

Two profiles are available for application:

### Standard or Core Protection According to IT-Grundschutz Compendium Edition 2023

By applying this profile, modeling according to the standard or core protection approach based on the entire IT-Grundschutz Compendium Edition 2023 is carried out. Example target objects for all modules will be created in your active Unit, which can be easily adapted to your institution.

### Basic Protection Municipal Administration Version 4.0

By applying this profile, modeling according to the IT-GS profile Basic Protection Municipal Administration V.4 based on the IT-Grundschutz Compendium Edition 2023 is carried out.

## Decisions

None

## Reports

The IT-Grundschutz domain provides the reference documents as reports:

- **A.1 Structural Analysis:** An overview of business processes and various assets.
- **A.2 Determination of Protection Needs:** An overview of the determination of protection needs.
- **A.3 Modeling:** An overview of the target objects and modeled modules.
- **A.4 Result of the IT-Grundschutz Check:** An overview of the implementation status of the requirements.
- **A.5 Risk Analysis:** An overview of the risks and their mitigating measures.
- **A.6 Implementation Plan:** An overview of existing deficiencies in implementing security measures.

## Risk Definition

The standard risk definition **Grundschutz Risk Analysis** (GSRA) is based on the parameters recommended in BSI Standard 200-3:

![GSRA]( /assets/en/domain-it-gs/verinice-31_gsra.de.png)
