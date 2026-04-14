<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# Business Continuity and Recovery Planning

## Objective

The objective of business continuity and recovery planning is to ensure that **time-critical business processes and resources** can be resumed or restored within the required time after a damaging event. This is based on the results of the **business impact analysis (BIA)** and the **defined business continuity strategies**. The planning is divided into two sub-areas:
- **Recovery and restoration planning** for time-critical resources  
- **Business continuity planning** for time-critical business processes at the organizational unit level.
 
Structured plans must be drawn up for both areas, containing all necessary technical, organizational, and personnel measures.

The **GFPs, WAPs, and WHPs** form the central operational instrument of business continuity management and ensure a coordinated, traceable, and effective response to emergencies and crises.

## Business continuity planning

The **business continuity plans** describe all necessary measures and procedures for continuing time-critical business processes within the specified time in an emergency.
The time-critical processes identified in the BIA form the basis for planning.
In accordance with the BSI recommendation, business continuity can be planned and documented for each organizational unit. Central subtypes for creating a business continuity plan – based on the BSI template – are the scope **organizational unit**, to which the time-critical business processes are assigned, and the control subtype **BC solution**.

To ensure that a business continuity plan can be generated directly from verinice via report in the future, we recommend the following procedure:
- **Create or assign organizational unit:** Switch to the **Organizational Unit** scope. If the organizational unit has already been assigned to a business process as part of the BIA, it is automatically linked there. Otherwise, create a new object for the corresponding organizational unit.
- **Enter general information:** Document basic information about business continuity, such as:
 - Scope and objectives of the BCP,
- Activation of the BCP,
- Responsible manager for alerting,
- Responsible persons/emergency teams

![Information on business continuity for an organizational unit](/assets/domain-bcm/verinice-46-organizationalUnit.gif)

- **Link time-critical business processes:** The time-critical business processes are visible in the **Links** tab, provided that the organizational unit has already been assigned to a process. If not, navigate to the business processes and link the responsible organizational unit there.
- **Define emergency operations and personnel structure:** Add information about the emergency staffing of the organizational unit – including roles, functions, and workplaces. Document:
 - Special duties, rights, and responsibilities in emergency operations,
- Subject-specific reporting and notification obligations,   
- relevant internal and external contacts. The contact details and representatives should be stored in the person object so that they are automatically output in the report.
- **Assign BC solutions to the organizational unit**: If no BC solution has been created yet, switch to the control subtype **BC solution** and enter suitable solutions for emergencies there. Describe the solution with reference to:
   - the underlying failure scenario,
   - the affected resource,
   - the BC strategy applied,
   - the affected business processes, and
   - the planned emergency measures.
- **Link emergency measures to the BC solution**: Create and/or link emergency measures under **Measures to achieve emergency operation (restart in emergency operation)**, **Measures for business continuity**, **Measures for returning to normal operation** either as individual objects or as a composite to which you assign sub-activities. This allows you to document the organizational and technical requirements for each measure as well as the person responsible.

![Create BC solution and assign it to an organizational unit](/assets/domain-bcm/verinice-46-bc-solution.gif)

Existing GFPs can be referenced in the **Documents** area.

## Creation of recovery and restoration plans for critical resources

**Recovery and restoration planning** encompasses all organizational, technical, and personnel measures to make failed resources such as IT systems, buildings, workstations, or services operational again as quickly as possible. Ideally, this planning is carried out by those responsible for the resources. In verinice, the structure of the recovery and restoration plan is based on the **BSI template for recovery plans**. Planning takes place directly in the respective **resource object**.

#### Contents of the recovery plan

- **General information:** Objectives, activation process, and framework conditions.
- **Prerequisites for recovery:** Organizational and technical requirements.
- **Implementation of the recovery:** Specific steps, responsibilities, and implementation details. Create and/or link **emergency measures** that describe the implementation of the recovery – either as **individual objects** or as **composites** to which sub-activities are assigned. Organizational and technical requirements as well as the responsible person can be documented for each measure. In addition, the following can be recorded for each emergency measure:
-  Test steps,
- Expected duration and required documentation,
- Executing system and responsible person,
- Downstream activities and dependencies,
- Corrective and improvement measures for identified weaknesses.

![Documenting emergency measures](/assets/domain-bcm/verinice-46-emergencyMeasure.gif)

![Restart planning for a resource](/assets/domain-bcm/verinice-46-wap.gif)

- **Functional tests and handover to emergency operation:**
  
Description of test activities and their results (successful/unsuccessful) as well as any necessary corrective measures.
- **Emergency operation:**
Documentation of expected restrictions, supplementary measures, and relevant information.

![WAP](/assets/domain-bcm/verinice-46-testactivities.gif)

#### Contents of the recovery plan

The second section describes the **prerequisites for recovery** of the resource. The **recovery plans (WHP)** supplement the **restart plans (WAP)** and describe all necessary measures to fully restore failed resources and ensure **normal operation**.
The following points can be documented for recovery:
* Organizational and technical requirements,
* Measures for performing the recovery,
* Measures for returning to normal operation,
* Corrective and improvement measures for follow-up, evaluation, and documentation of the results.
![WAP](/assets/domain-bcm/verinice-46-whp.gif)
