<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Realization

In the *Realisierung* (realization) (process step 3), you put the requirements of the *Anforderungspaket* (requirements package) into practice. You determine the implementation status of each requirement, assess missing implementations, and create a prioritized **implementation plan** with safeguards, responsibilities, and deadlines. You can find the associated requirements in the *Praktik* (practice) **Umsetzung (UMS)**.

## Show Implementation

To edit requirements, click **Show Implementation** for the respective *Zielobjektkategorie* (target object category) in the object view of the *Informationsverbund* (information domain) or of the target object. You will be taken to the overview of all requirements of the selected category.

<!-- SCREENSHOT: ![Show implementation](../assets/domain-gs-pp/verinice-gspp-view-implementation.png) – Object view of a target object with “Show Implementation” for a target object category -->

<!-- SCREENSHOT: ![Requirements list](../assets/domain-gs-pp/verinice-gspp-ri-list.png) – Overview of the requirements of a category with implementation status -->


Clicking on a requirement opens the implementation dialog, where you can view or enter the following information:

1. Information about the target object (informative/read-only)
2. Requirement description from the Grundschutz++ catalog, e.g., requirement text, modal verb, security level, and note (informative/read-only)
3. Information about the implementation, which you document in three sections:

<!-- SCREENSHOT: ![Implementation dialog](../assets/domain-gs-pp/verinice-gspp-ri-dialog.png) – Implementation dialog with target object, requirement description, and the sections Implementation, Documentation, Revision -->

**Implementation**

- Implementation status (see below)
- Responsible person
- Implementation deadline (date)
- Cost of implementation

**Documentation**

- Implemented on
- Implemented by
- Implementation description—here you also document the defined parameters and the justification for “not applicable”
- Link to a document or record—e.g., to the evidence recommended in the requirement's **Dokumentation** field

**Revision**

- Last revision on
- Last revision by
- Next revision on
- Next revision by

Once you have entered the data, close the dialog with **Save**.

## Implementation Status

The current implementation status of each requirement in the *Anforderungspaket* must be checked completely. According to the *Pilotierungsfassung* (pilot version), Grundschutz++ knows three statuses:

| Status according to Grundschutz++ | Status in verinice | Consequence |
|---|---|---|
| ***erfüllt*** (fulfilled) | **yes** | – |
| ***nicht erfüllt*** (not fulfilled) | **no** | [*Risikobetrachtung*](./risk-analysis) (risk consideration) required |
| ***nicht anwendbar*** (not applicable) | **not applicable** | Document the justification |

A requirement is ***nicht anwendbar*** if it cannot be fulfilled functionally or if the underlying component does not exist in the *Informationsverbund*.

<!-- SCREENSHOT: ![Implementation status](../assets/domain-gs-pp/verinice-gspp-ri-status.png) – Selection of the implementation status (yes, no, partial, not applicable) with the justification in the implementation description -->

::: warning Status “partial”
The risk definition of the domain additionally offers the status **partial**. Grundschutz++ does not provide for partial fulfillment: a partially implemented requirement is ***nicht erfüllt*** and must be treated like “no”, that is, included in the *Risikobetrachtung* and in the implementation plan. You can use “partial” as an interim status during the implementation.
:::

::: info Dependent requirements
According to the *Leitfaden* (guide), a requirement is only considered *erfüllt* if the requirement itself and all requirements on which it depends are *erfüllt*. You can find the dependencies in the object view of the requirement under **Links** (dependency). Also check the associated sub-requirements—you can find them via the abbreviation, e.g., `BER.4.1.1` and `BER.4.1.2` for `BER.4.1` (see [Relationships between requirements](./catalog#relationships-between-requirements)).
:::

The check should follow a structured procedure, e.g., interviews, document reviews, automated configuration checks, or technical scans.

## Assessment of Missing Implementations

For requirements that are *nicht erfüllt*, carry out a [*Risikobetrachtung*](./risk-analysis). The residual risks determined in the process are the basis for prioritizing the safeguards.

::: warning SOLLTE requirements
If a SOLLTE requirement is *nicht erfüllt*, this should be justified as part of a *Risikobetrachtung*, or at least in detail.
:::

## Implementation Planning and Prioritization

Define concrete **safeguards** for each open requirement and prioritize them, e.g.:

- by the most serious risks from the *Risikobetrachtung*
- by effort—the **Level** field of the requirement indicates the effort from 0 (mandatory, not rated) through 1 (quick win) to 5 (laborious, complex)
- by synergies between safeguards that address several requirements at the same time
- by strategic importance and quick wins with high effectiveness
- by the ***Sicherheitsniveau*** (security level)—requirements with the *Sicherheitsniveau* **Increased** influence the order of implementation

::: tip Parent nodes first
Grundschutz++ recommends fulfilling the requirements of the ***Elternknoten*** (parent nodes) first—that is, the requirements of the higher-level *Zielobjektkategorien* (e.g., „Anwendungen“ before „Webbrowser“) as well as higher-level requirements before their sub-requirements. On a target object, you can recognize the requirements of higher-level categories by the title suffix (e.g., `[Anwendungen]` on a target object modeled with „Webbrowser“) and sub-requirements by their abbreviation (e.g., `BER.4.1.1` for `BER.4.1`).
:::

In verinice, you can create safeguards under **Controls > Safeguards** and link them to the requirements or risks. The procedure for implementation planning should suit the size and circumstances of your organization.

<!-- SCREENSHOT: ![Create safeguard](../assets/domain-gs-pp/verinice-gspp-safeguard.png) – Form of a safeguard with a link to the requirement -->


## Responsibilities and Implementation Deadlines

The implementation plan defines responsibilities and realistic deadlines for each safeguard. Enter them in the implementation dialog under **Responsible person** and **Implementation deadline**. Pay attention to:

- clear responsibilities, coordinated with the affected departments
- required resources and competencies of the responsible persons
- realistic deadlines that take scope, resources, and dependencies into account

For complex safeguards, it can be useful to define a technical and an operational responsibility and to create subtasks with their own deadlines. The procedure must be approved by the top management of the organization, as it provides the required resources.

## Approval and Exceptions

Exception approvals—e.g., in the case of conflicting objectives between obligations—must be authorized by a responsible role and documented with a comprehensible justification. To do so, use the implementation description and link the approval as a document.

## Progress Tracking

Track the progress of the implementation plan continuously in order to detect deviations early:

- document the current implementation status and deviations
- identify obstacles and delays early, use escalation paths
- report regularly to those responsible and to management, e.g., in the management report
- update the implementation plan as a living document

::: warning Avoid conflicts of interest
The person responsible for the implementation and the person responsible for progress tracking should not be identical.
:::

Once all requirements have been processed, the *Anforderungspaket* with its documented implementation status is the basis for the [*Überwachung*](./monitoring-improvement) (monitoring).
