<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# Business Impact Analysis (BIA)

A key objective of the BCMS is to ensure adequate protection of **business-critical processes**. The BIA serves to systematically determine:
- whether a business process is **time-critical**, 
- how long it can be down before intolerable damage occurs, and
- what resources are required to continue the process in emergency mode.

The BIA thus forms the basis for:
- the **prioritization of processes**, 
- the **definition of recovery objectives (RTO, RPO)**, and
- the **planning of emergency preparedness and recovery measures**.

## BIA preparation

### Creating business processes

In the **BCMS scope**, the **business processes** to be considered can be added as objects. If 
the institution has an ISMS, the business processes identified there can be used as a starting point. The **directory of processing activities** in accordance with the GDPR can also be used as a support, as procedural activities often correspond directly to business processes or can be derived from them.
If no business processes have been created in verinice yet, they can be created using the object type ****Business Process**, or existing processes can be assigned from the ****Data Protection or ISMS Domain** to the ****BCMS Domain**.
  
![Assigning a business process from one domain to another domain](/assets/domain-bcm/verinice-46-assignObjectToDomain.gif)

Before the results of the damage assessment are recorded, additional information about the business process or the Business Impact Analysis (BIA) in general can be documented. This includes, among other things:
- Type of process continuity (continuous, results-oriented, cyclical, or quasi-cyclical)
- Most critical periods,
- The person or persons responsible for the BIA,
- The responsible organizational unit,
- The type of data collection (e.g., self-reporting, individual interviews, workshops),
- And the location of the process.

![Information on the BIA in the business process](/assets/domain-bcm/verinice-46-bia1.png)

### Defining resource categories and clusters

Under the object type **Resource**, the **resource categories** and **clusters** can be defined as composites (e.g., personnel, IT systems, buildings, service providers, information).
Individual resources can in turn be assigned to parts of this composite/supergroup.

### Defining BIA parameters and time horizons

The BIA analyzes the damage that can occur over time as a result of a business process failure. For this purpose, **time horizons** are defined, which are used to assess the development of damage. In verinice, configuration takes place under BCMRA (risk definition). There you can:
- **manage time horizons**, 
- define **damage categories**,
- describe **damage scenarios** to specify the potential damage.
  
![Manage time horizons, damage categories, and damage scenarios in the BCMRA](/assets/domain-bcm/verinice-46-bcmra.png)

After saving, the configured time horizons are available under each business process. There, the **damage potential can be assessed and documented according to time horizon**.

## Performing the BIA

### Determining the damage potential and the MTA

To identify time-critical processes, the **damage potential** of each business process is assessed for the previously defined time horizons. In verinice, this assessment is performed in the business process object according to the **worst-case principle**, which takes into account the highest possible extent of damage.
 
Subsequently, a justification can be documented and evaluated as to which **damage scenarios** are decisive for the assessment and whether it is a time-critical business process.  
This assessment results in the **MTA**, which can (still) be entered manually.
  
![Incident](/assets/domain-bcm/verinice-46-bia2.gif)

### Mapping of emergency-relevant process dependencies

After the initial assessment, the emergency-relevant process dependencies should be analyzed to determine whether the MTA changes as a result of these dependencies.
To do this, custom links can be created between processes to represent upstream, parallel, or downstream processes. An MTA for the required business process can also be documented for the link, based on the dependency on this business process, with justification.
 
If the MTA changes as a result of the dependencies, the new value must be documented in the **MTA (according to process dependencies)** field. The MTPD can then be adjusted accordingly under **MTA(MIN)** and finally defined.

![Illustration of process dependencies](/assets/domain-bcm/verinice-46-bia3.png)

### Determining the required recovery time (RTO)

After determining the MTPD, the **Recovery Time Objective (RTO)** must be defined – the time span within which the business process must be functional again after a failure. The RTO must be less than the MTA.
The **process owner** can document the RTO in the **RTO for necessary resources** field of the business process.
Enter the RTO in the field under the respective business process.

### Defining the emergency operation level

In addition to the RTO and MTA, the **Emergency Operation Level** field can be used to define the scope of services for which the business process is to be operated in emergency mode (e.g., 60% capacity, simplified procedures).

### Determining the maximum tolerable data loss (RPO)

For **information-based resource categories** (e.g., data, IT systems, information storage), the **Recovery Point Objective (RPO)** must also be determined.
This describes the maximum amount of time that data in emergency operation may be delayed without impairing the process flow. The RPO is independent of MTPD and RTO, but should be consolidated according to the minimum principle if several processes use the same resource.
The **process owner** can specify the RPO in the **Maximum permissible data loss (RPO)** field of the business process.

![Documentation of RPO and RTO in the business process](/assets/domain-bcm/verinice-46-biaRtoRpo.png)

### Consolidating RTO and RPO

The resource managers derive the maximum permissible data loss (RPO) or the required recovery time (RTO) of a resource from the results of the process owners and document these in the respective resource. If several processes use the same resource, the minimum principle applies: The smallest RTO or PRO determines the requirement for the resource.

Currently, enter the values manually in the resource object under **Required Recovery Time (RTO)** and **Maximum Permissible Data Loss (RPO)**.

![Consolidation of RPO and RTO on resources](/assets/domain-bcm/verinice-46-rtoRpoResource.png)

## Mapping resource dependencies

### Resource dependencies

For all time-critical business processes, the required **resources** must be identified and assigned to the processes. This link forms the basis for planning **business continuity** in the event of an emergency or crisis.

### Identification of single points of failure

Resources that are shared by several time-critical processes must be marked as **single points of failure (SPoF)**. In verinice, this can be done using the
  
**Single Point of Failure/of Knowledge/of Contact (SPoF/SPoK/SPoC)** field in the resource object. Beforehand, the SPoFs can be linked as known weak points in a business process.
A distinction is made between:
- **SPoF:** Technical or service-related bottlenecks  
- **SPoK:** Knowledge dependencies of individual persons
- **SPoC:** Communication dependencies of individual contacts

![Illustration of resource dependencies](/assets/domain-bcm/verinice-46-bia4.gif)

## Outlook – Resource requirements in emergency operation

The **verinice.TEAM** is working on functions for the **automated calculation and consolidation** of **MTPD, RTO, and RPO values** as well as for determining resource requirements, e.g., personnel, workstations, machines, IT equipment, over the duration of emergency operation in order to ensure continuity in emergency operation.
