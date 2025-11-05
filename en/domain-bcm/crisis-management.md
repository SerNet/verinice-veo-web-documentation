<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# Planning for emergency and crisis management

The aim of emergency and crisis management is to ensure that the institution remains capable of acting in the event of a serious incident, minimizes damage, and guarantees the continuity of critical business processes. To this end, organizational, personnel, and communication measures are defined that enable a structured response and recovery, even without immediate recourse to detailed emergency plans.

## Establishment of a Special Organizational Structure (BAO)

For the effective management of emergencies and crises, a **Special Organizational Structure (BAO)** must be established and kept operational.
The BAO comprises all the necessary organizational units, roles, and communication structures to enable rapid and coordinated action in the event of an emergency or crisis. The organizational measures for establishing the BAO should be documented and summarized in an **emergency manual**. This serves as an operational basis for those responsible to ensure orderly emergency operations and a return to normal operations. Regulations concerning emergency operations in the individual organizational units are stored in the corresponding documents on business continuity, restart, and recovery.

## Definition and implementation of immediate measures

Immediate measures must be implemented immediately after a damaging event occurs and serve to protect life and health and to contain consequential damage. In verinice, both general immediate measures and scenario-specific immediate measures can be recorded and linked to responsibilities.
Create a new measure under the subtype Immediate Measure and add the associated activities via the tab **Parts**.

![Create immediate measure](/assets/domain-bcm/verinice-46-immediateMeasureExample.png)

The immediate action can then be linked either in the BCMS scope (as a general action) or in the respective emergency scenario.

![Link general immediate action in scope](/assets/domain-bcm/verinice-46-immediateMeasureScope.png)

![Link scenario-specific immediate measure in the emergency scenario](/assets/domain-bcm/verinice-46-immediateMeasureScenario.png)

The goal is to document all immediate measures centrally in verinice and to be able to output them clearly in a report in the emergency manual in the future.

## Setting up and managing emergency and crisis communication (NuK communication)

The **emergency and crisis communication team (NuK team)** is part of the BAO and is responsible for structured, controlled, and timely communication in the event of an emergency or crisis. The organization is obligated to plan, establish, and maintain processes for internal and external communication.
Based on the analysis of the interest groups, the communication requirements for each interest group can be documented in verinice. In particular, the following fields must be filled in:
- Communication in emergency mode
- Time interval
- Communication channel  
- In addition, roles or specific individuals can be linked to transparently display communication responsibilities. This makes it possible to track who provides, receives, or releases information and ensures that information is shared in a coordinated and controlled manner in the event of an incident.

![Planning communication with stakeholders](/assets/domain-bcm/verinice-46-PlanningCommunication.png)

## Follow-up and de-escalation of a damaging event

After successfully managing an event, the crisis management team officially declares the emergency to be over (de-escalation). This decision must be communicated within the institution, preferably via the same communication channels that were used to raise the alarm. Checklists can be used to ensure a structured return to normal operations.
 
The event is documented in verinice as an incident object. **Key questions for returning to normal operations** and for **analyzing the response** can be stored in this object.

![Incident](/assets/domain-bcm/verinice-46-incident.png)

## Future developments

The verinice.TEAM plans to expand verinice with functions for digitizing emergency and crisis management or interfaces to other suitable tools.
The focus is on the management of reporting channels, alerting the BAO, supporting staff work, and the automatic creation of an emergency manual.
