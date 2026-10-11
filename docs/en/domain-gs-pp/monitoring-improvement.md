<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Monitoring and Improvement

Process step 4, *Überwachung* (monitoring), and process step 5, *kontinuierliche Verbesserung* (continuous improvement), close the PDCA cycle. You can find the associated requirements in the *Praktiken* (practices) **Monitoring-Evaluation (PERF)** and **Verbesserung (VRB)**. They are part of the [*verbundweite Anforderungen* (domain-wide requirements)](./modelling#domain-wide-requirements) and, like all requirements, are processed via **Show Implementation** on the *Informationsverbund* (information domain).

## Monitoring

*Überwachung* ensures, both regularly and on an event-driven basis, that the implemented requirements are effective and that the security objectives are achieved.

### Performance Evaluation of the ISMS

Evaluate the effectiveness of the ISMS and the progress of implementation, e.g. based on:

- changes in the threat situation
- the implementation plan – progress, adherence to deadlines and correctness of content
- the handling of audit results and improvement measures
- the follow-up of security incidents

The basis in verinice is the documented implementation statuses, the deadlines in the **Implementation deadline** field and the recorded **Information security incidents**. Since uniform specifications for performance evaluation in Grundschutz++ are still pending, you are free to design it as you see fit. Present the performance evaluation to top management in a traceable manner.

### Internal Audit Program

Establish a risk-oriented audit program with documented audit plans (objectives, scope, criteria, locations, methods, roles and responsibilities). The effectiveness and efficiency of all applied *Praktiken* should be audited at least once. Auditors should be professionally qualified and independent of the audited areas.

Document audit results in structured reports with a uniform evaluation scheme – covering weaknesses as well as positive findings. You can store audit reports as **Documents**; you document reviews of individual requirements in the **Revision** section of the implementation dialog.

<!-- SCREENSHOT: ![Revision in the implementation dialog](../assets/domain-gs-pp/verinice-gspp-ri-revision.png) – Revision section with last and next revision -->


### Management Review

Top management regularly reviews whether the ISMS is suitable, adequate and effective. The basis is the management report, which includes, among other things:

- results of audits and of the performance evaluation
- security incidents
- status of risk treatment
- changes in the institution or in the threat situation
- status of previous management decisions

Store the management report and the decisions of top management as a **Document**.

### Monitoring Methods and Tools

Establish procedures for detecting security incidents, handling vulnerabilities and responding to new threats – each taken into account in the *Risikobetrachtung* (risk consideration). You can find the technical requirements for this in particular in the *Führungsprozess* (management process) **Detektion** (`[Prozess:DET]`). Document detected incidents as **Information security incidents** and link them to the affected business processes, assets and requirements.

<!-- SCREENSHOT: ![Information security incident](../assets/domain-gs-pp/verinice-gspp-incident.png) – Form of an information security incident with links to business process, asset and implemented or planned requirements -->


### Validation of the Requirements

Review the *Anforderungspaket* (requirements package) regularly – usually annually – to ensure it is up to date and appropriate. Take the following into account:

- changed business processes, new assets and organizational changes
- new regulatory requirements and changed threat situations
- new versions of the Grundschutz++ catalog and changes to the target object hierarchy

Coordinate the review with the responsible departments. If significant changes arise, adjust the modeling and extend the [*Anforderungspaket*](./modelling). Use the fields **Next revision on** and **Next revision by** to plan the review.

## Continuous Improvement

In *kontinuierliche Verbesserung*, the findings from *Überwachung* are turned into concrete improvements. Vulnerabilities and changed threat situations feed into the *Risikobetrachtung* and trigger a new cycle.

### Handling Nonconformities

If requirements are not fulfilled to the intended extent, there is a nonconformity. For each nonconformity:

- record and document it systematically – regardless of whether it stems from audits, reviews, incidents or operations
- analyze the causes (root cause analysis)
- assess the probability and impact of a recurrence
- check whether similar nonconformities exist in other areas
- check whether it indicates systemic weaknesses of the ISMS
- derive corrective proposals

In verinice, set the implementation status of the affected requirement to **no** and document the finding in the implementation description.

### Improvement Potential

Identify improvement potential even without preceding problems, e.g. from the assessment of the threat situation, the evaluation of the implementation plan, audit results, security incidents and suggestions from employees. Evaluate each potential in terms of risk reduction, resource effort, strategic importance, synergies and sustainability.

### Corrective and Improvement Plan

Incorporate the corrective and improvement proposals into a corrective and improvement plan and prioritize them according to available resources, quick wins and greatest improvement potential. The plan is included in the [implementation plan](./implementation#implementation-planning-and-prioritization) – in verinice, this means as safeguards with a responsible person and a deadline on the affected requirements.

### Evaluation

Check the implemented safeguards for their effectiveness:

- define clear, measurable effectiveness criteria for each safeguard
- specifically test, audit or review them after completion
- assess whether the nonconformity has been eliminated or the improvement has been achieved
- document the results, e.g. in the **Revision** section of the implementation dialog

### Handling Compliance Violations

Establish a procedure for handling compliance violations that covers the definition and categorization of violations, reporting and escalation channels, investigation and documentation, proportionate responses and follow-up. Analyze the causes and derive preventive measures. Involve legal expertise in the case of serious violations.

With the results of the improvement, the next run of the PDCA cycle begins – if applicable, with further business processes and assets.
