<!-- © 2024 The Project Contributors - see AUTHORS.txt -->
# Objects

## Organizational objects

Organizational objects help with the assignment of objects to users. Organizational objects separate the data into different clients. Further subgroups can be created within a client, e.g. for subsidiaries or specialist departments.
![organization-objects](  /assets/en/object-model/organisationsobjekte.png)

### Client

The client in the object model represents a customer or a client. A client can be an organization or an individual person. The data belonging to a client is separate from the data of other clients and cannot be mixed or linked in any way. It is not possible to transfer data from one client to another. Each object in verinice belongs to exactly one client.
Several users (accounts) can be created in one client. An account can never access data that belongs to a client to which it is not assigned.

### Unit

A client is divided into one or more units (sub-units). A unit is an organizational object without a technical function and represents either an organization (e.g. a company) or a department within an organization.
When working with verinice, a unit must always be selected first. Every specialist object and every group created is assigned to the selected unit, so that a unit represents the hierarchical root for the objects it contains. When a unit is deleted, all objects in the unit are also deleted.

## Specialist objects

For the operation of management systems for information security and data protection, the verinice object model contains the specialized objects [Process](#process), [Asset](#asset), [Scenario](#scenario), [Risk](#risk), [Control](#control), [Incident](#incident), [Document](#document) and [Person](#person). These objects can be further specified using so-called [subtypes](domains#subtypes).
![subject-objects](  /assets/en/object-model/fachobjekte.png
)

### Process

A business process is a sequence of activities that uses resources to convert inputs into results:

* BSI IT-Grundschutz: “business process”
* DS-GVO: “processing activity”

Processes can contain other processes (see [Composites](#composite)).

### Asset

An object that has a recognizable value for a company (asset). There are many types of assets: Information, software, servers, people and their qualifications, skills and experience, also intangible assets such as reputation and image.
Assets can contain other assets (see [Composites](#composite)). System components often have a recursive structure:
> NIST SP 800-160 Vol. 1 under system element from ISO/IEC/IEEE 15288
> Component: Member of a set of elements that constitute a system.
> Note 1: A system element can be a discrete component, product, service, subsystem, system, infrastructure, or enterprise.
> Note 2: Each element of the system is implemented to fulfill specified requirements.
> Note 3: The recursive nature of the term allows the term system to apply equally when referring to a discrete component or to a large, complex, geographically distributed system-of-systems.
> Note 4: System elements are implemented by: hardware, software, and firmware that perform operations on data/information; physical structures, devices, and components in the environment of operation; and the people, processes, and procedures for operating, sustaining, and supporting the system elements.
The object type “Asset” is suitable, for example, for mapping the following types from the standards mentioned:

* BSI IT-Grundschutz: Target objects
* ISO 2700x: Assets
* NIST SP 800-61: Component, System, System-of-Interest, Capability

### Scenario

A situation that can occur and jeopardizes information security. Describes a single damaging event or a set of damaging events that can be assigned to a specific threat source.
The “Scenario” object type is suitable for mapping the following types from the aforementioned standards, for example:

* BSI IT-Grundschutz: both “threat” and “hazard” (via subtypes)
* NIST SP 800-30: both “Threat Event” and “Threat Scenario” (via subtypes)
* ISO 27005: “Incident Scenario”, “Threat” (via subtypes)

Scenarios can contain other scenarios (see [Composites](#composite)).

### Risk

Risk is a measure of the extent to which an event or circumstance influences a target to be achieved. The effect can also be positive (opportunity). A risk expresses an uncertainty/imponderability (ISO 27000: “Uncertainty”) and is always defined in the application by assigning risk carriers to scenarios. Risk carriers can be: [Assets](#asset), [Processes](#process) & [Scopes](#scope).
The risk can optionally be assigned to a risk owner (ISO/IEC 27000: “a person or entity with the accountability and authority to manage a risk”). In the terminology of NIST 800-30, this corresponds to the “Information Owner” (not the “Risk Assessor”).
A risk can optionally be mitigated by a control.
The assessment of the impact and probability of a scenario can be included in the risk assessment. Risks in information security can be associated with a vulnerability being exploited by a threat and thus causing damage to the organization.
The Risk object type is suitable for mapping the following terms from the standards mentioned, for example:

* BSI IT-Grundschutz: “Risk”
* NIST SP 800-30: “Risk”

### Control

A control is a measure that changes a risk. A control can be a policy, a procedure, a guideline or a procedure of an administrative, technical, management-related or legal nature.
The Control object type is suitable for mapping the following terms from the standards mentioned, for example:

* BSI IT-Grundschutz: “building block”, ‘requirement’ and “measure” (via subtypes)
* NIST SP 1800-15B: “Control”
* GDPR: “Technical and organizational measures”

The Control object type can also map a group of controls (see [Composite](#composite)). This can be used to map a chapter from a standard with measures, or a “building block” from the BSI IT-Grundschutz.

### Incident

An incident is an event that has occurred and may have jeopardized information security. An incident can be triggered by a threat.
The Incident object type is suitable for mapping the following terms from the aforementioned standards, for example:

* BSI IT-Grundschutz: “Security incident”
* NIST CSF/FIPS 200: “Incident”
* GDPR: “breach of the protection of personal data”

Incidents may contain other incidents (see [Composites](#composite)).

### Person

A person, group of persons or a role that is related to the other objects. Any person that is considered an asset.
For example, the Person object type is suitable for mapping the following terms from the aforementioned standards:
* NISTIR 7693: “Person”

### Document

A document that describes another object or provides additional information. Used to represent guidelines, directives, policy documents, incident documentation, etc. and is independent of format, medium or source.
The document can relate to: the management system and its processes, procedural documentation (ISO 27001: “Documentation”) and records for verification purposes (ISO 27001: “Records”).
The Document object type is suitable for mapping the following terms from the standards mentioned, for example:

* ISO 27001: “Documented information”, ‘Documentation’ and “Records” (via subtypes)
  
Documents can contain other documents (see [Composites](#composite)).

### Composite

Most subject object types in verinice (all except risks and scopes) allow sub-objects of the same object type (“parts”) to be added to an object at any time. Objects that have parts represent an object group and are referred to as “composites”. Examples of composites are Teams consisting of individual persons, a server rack containing individual servers, or a building block (control) from IT-Grundschutz that contains many individual measures.
In all use cases in verinice, a composite can be used in the same way as an individual object. For each case, it can be decided individually whether it makes more sense to consider the individual sub-objects or the composite object as a whole. For example, an asset in a risk analysis can either be a single server or a composite “data center” that includes the individual servers.
A specialist object can be contained in several composites at the same time. For example, the person “Ms. Müller” can be a sub-object in the person composite “Sales department” and “Project team” at the same time.
![scenario-RZ-server](  /assets/en/object-model/szenario-RZ-server.png)

### Scope

Scopes provide a further grouping mechanism. Unlike composites, specialist objects of different types can be merged into a group here.

* A scope (like any other specialized object) is always assigned to exactly one unit and therefore also to one client.
* Scopes can contain any specialist objects, including other scopes.
* A specialist object can be contained in several scopes.
* If a scope is deleted, the specialist objects it contains are not deleted.
Differentiation from composites: Unlike composites, not all operations that operate on the specialist objects are available on these groups. For example, an asset composite can be used as the target object of a risk analysis in the same way as an individual asset. This is not possible with a scope that contains assets.
Scopes play a central role in the organization of data in verinice. In contrast to the units, scopes belong to the functional objects, i.e. they are carriers of functional properties and can be used in the use cases for data protection and information security. As scopes contain other functional objects, they can be used to map many different organizational units:
* Organizations, sub-organizations, subsidiaries
* A sub-organization can contain other scopes, which then map specialist areas, departments and teams, for example.
* Projects [PMBOK](https://de.wikipedia.org/wiki/A_Guide_to_the_Project_Management_Body_of_Knowledge), ISO 21500 etc.)
* Information networks (IT baseline protection)
* Certification scopes (ISO 27001 / ISO 14001 / ISO 9001 ...)
* System-of-interests (ISO 21839 / ISO 15288)
* System-of-Systems / one system (see above)
* Services (ISO 20000 / ITIL etc.)
![composite-subsidiaries](  /assets/en/object-model/composite-tochtergesellschaften.png)
An information network for the BSI's IT-Grundschutz is modeled as a scope that contains a process group, several asset groups and a person group. The groups with specialized objects can contain any number of subgroups of the same type. The IT-Grundschutz subject objects application, IT system, ICS system, IOT system, communication link and room are modeled as assets in verinice.
![composite-informationsverbund](  /assets/en/object-model/composite-informationsverbund.png)
