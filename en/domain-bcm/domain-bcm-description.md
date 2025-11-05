<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# Structure of the BCM domain

This section describes the structure of the BCM domain. The domain contains various **object and subtypes** that can be used to map the components of a **Business Continuity Management System (BCMS)** in a structured manner.

## Object and Subtypes

### Scope Objects

The central elements are the **scope objects**, which are used to model the various organizational units and objects of consideration.
- **Institutions**: Used to map an independent organization with its central master data. An institution is usually a legally independent entity with its own objectives, consisting of several departments or divisions and making overarching decisions.
- **Scopes (general)**: Represents other subjects of consideration, such as projects.
- **BCMS scope**: Defines the scope of application of the Business Continuity Management System.
- **Organizational unit**: Describes a unit within an institution, e.g., a location, department, or division. Organizational units serve the purpose of division of labor and control, but generally do not have their own legal personality. In the BCM domain, it is advantageous to record an organizational unit if business continuity plans are to be created for each organizational unit.
- **Stakeholders**: Record internal and external stakeholders that are relevant to BCM here, e.g., executives, authorities, customers, or partner organizations.
- **External service providers**: Record external organizations or institutions that are considered separately in order to map specific requirements related to outsourcing and the supply chain.

### Process objects

- **Business processes**: Used to document and analyze business processes, in particular to identify time-critical business processes within the framework of BIA.

### Asset objects

- **Resources**: Include all physical and digital assets required to carry out business processes. Examples: Personnel, IT systems, buildings, service providers, machinery, or operating resources.

### Person objects

- **People**: Person objects allow you to map relevant BCM roles (e.g., BCM manager, crisis team, specialist managers) as composites and assign specific people to them. It is also possible to document substitutes and responsibilities within the role structure.

### Incident objects

- **Events**: Used to record and document emergencies or damaging events. Based on these events, you can analyze damage control and document the return to normal operations in a traceable manner.

### Document objects

- **Documents**: You can use this object type to map the document structure of your BCMS. This enables the traceable organization and versioning of all BCM-relevant documents, such as guidelines, plans, or reports.

### Control objects

- **Requirement catalogs**: This subtype allows you to group, manage, and apply requirements—e.g., for compliance checks.
- **Requirements**: Used to record and manage any requirements.
- **Immediate measures**: General or scenario-specific measures that must be implemented immediately after an emergency occurs in order to limit damage and ensure the ability to act.
- **Preventive measures**: Preventive measures that are developed and implemented to reduce the likelihood of a resource failure.
- **Emergency measures**: Measures that are implemented when an emergency occurs in order to limit damage and enable business continuity.
- **BC strategies**: Describe structured, strategic approaches to the general design and implementation of business continuity planning.
- **BC solutions**: Represent concrete, developed measures that enable business continuity in an emergency.
- **Corrective and improvement measures**: Corrective measures serve to eliminate deviations between the management system or BC planning and the requirements of the BCMS. Improvement measures serve to continuously optimize the BCMS as well as structural, technical, or organizational measures.

### Scenarios

Record your failure and emergency scenarios here, for which you develop appropriate emergency concepts.

## Catalog

The BCM domain catalog provides the current BSI requirements catalog. It includes all requirements from the BSI standard 200-4, structured according to *MUST* and *SHOULD* requirements. Use of the catalog is optional, but it offers the opportunity to systematically evaluate the BCMS and document compliance with BSI requirements in a traceable manner.

## Profiles

In preparation.

## Decisions

None.

## Reports

The following reports are in preparation:
- Restart plan / recovery plan for resources
- Business continuity plans for organizational units
- Emergency manual
The above reports are created based on the BSI tools.

## Risk definition

In BCM, under **Risk Definition**, you can configure time horizons, damage categories, and damage scenarios. These are used to assess the potential damage within the framework of the Business Impact Analysis (BIA) within the business processes.
![BCMRA](/assets/domain-bcm/verinice-46-bcmra.png)
