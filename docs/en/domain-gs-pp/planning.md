<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Survey and Planning

*Erhebung und Planung* (survey and planning), process step 1, creates the organizational and legal framework for the ISMS. The top management of the institution specifies which areas of the institution the ISMS covers. The associated requirements can be found in the practice **Governance und Compliance (GC)**; they apply as [*verbundweite Anforderungen* (domain-wide requirements)](./modelling#domain-wide-requirements) to the entire *Informationsverbund* (information domain).

## Institution

Record your institution by navigating via the dashboard or menu to the object type **Scope** with the subtype **Institutions**. Create a new institution using the red plus button **Create Institution** in the bottom right:

::: info You can always create objects contextually using the plus button with the currently active object and subtype!
:::

Click **Save** once you have entered all the desired data for the institution. Please note that the fields **Name** and **Status** (in all objects) are mandatory! Your institution will then be listed in the object overview.

<!-- SCREENSHOT: ![Create Institution](../assets/domain-gs-pp/verinice-gspp-institution-create.png) – “Create Institution” form in the Grundschutz++ domain -->


## Context of the Institution

Record and document the factors that act on the institution from outside and inside, and check which of them influence the design and structure of the ISMS, e.g.:

- **External factors:** geopolitical conditions, legal and regulatory requirements (e.g. NIS-2, DORA), technological developments (e.g. AI), economic dependencies such as supply chains, societal expectations, environmental conditions at the site
- **Internal factors:** strategy and objectives, organizational structure, established processes, existing IT infrastructure (without a detailed inventory), security culture, staffing situation

Document the result, e.g. in the description of the institution or as a **Document** with a reference to the institution.

## Compliance Management

Record at least the obligations that concern information security and the ISMS:

- analyze legal registers, laws and requirements catalogs
- consult the responsible compliance functions
- document legal obligations regarding the processing of information
- compile contractual obligations (e.g. service contracts, license agreements, SLAs, non-disclosure agreements)

The resulting requirements later supplement the *Anforderungspaket* (requirements package), see [Supplementing Requirements](./modelling#supplementing-requirements).

## Scope of Application

The *Anwendungsbereich* (scope of application; also called area of applicability or scope) defines the areas to which the ISMS applies. It is specified by the top management of the institution and can cover the entire institution or parts of it. A certification can only be achieved for the entire *Anwendungsbereich*.

Map the *Anwendungsbereich* in verinice as a **Scope**, e.g. with the subtype **Scopes** below your institution. In particular, clarify and document:

- **Formal and organizational delimitation:** Which areas of the institution, business processes and activities are included?
- **Infrastructural delimitation:** Which sites and systems lie within the *Anwendungsbereich*? Which external partners or service providers must be included? Which areas are deliberately excluded?

The business processes under consideration must be entirely contained in the *Anwendungsbereich*. Record external service providers under **Scope** with the subtype **External service provider**.

<!-- SCREENSHOT: ![Scope of application as scope](../assets/domain-gs-pp/verinice-gspp-scope-scope.png) – Scope „Anwendungsbereich ISMS“ with a description of the delimitation and assigned information domains -->


## Interested Parties

Identify the internal and external interested parties (e.g. customers, service providers, supervisory authorities, top management, employees, staff representatives) and their expectations of the ISMS. Together with the top management, specify which expectations are adopted into the ISMS as binding requirements.

## Business Processes

The business processes form the basis for the *Schutzbedarfsfeststellung* (protection need assessment), the recording of assets and the *Risikobetrachtung* (risk consideration). Business processes can also include workflows, administrative procedures or IT-based specialized procedures.

Navigate to the object type **Processes** with the subtype **Business processes** (or **Specialised tasks**) and create an object for each business process. Document at least:

- **Abbreviation** (identifier) and **Name**
- **Responsible person** – the person, role or organizational unit responsible for the subject matter
- **Description** – purpose, essential result and contribution to the institution's objectives
- **Process type** – core business or supporting process
- essential applications (as the link **Required target object**, as soon as the assets have been recorded)

<!-- SCREENSHOT: ![Recording a business process](../assets/domain-gs-pp/verinice-gspp-business-process-form.png) – Form of a business process with abbreviation, name, description, process type and responsible person -->

::: tip Simplified business process analysis
If no process map is available, the simplified business process analysis of the *Pilotierungsfassung* (pilot version) helps: a workflow is a business process if it is performed repeatedly, is essential to the mission of the institution, leads to a traceable result and consists of several connected activities. Sources include organization charts and schedules of responsibilities, statutory tasks, the record of processing activities, CMDB and contract overviews. Choose a reasonable granularity that is not too fine.
:::

Then specify the [*Schutzbedarf* (protection need) of the business processes](./protection-needs).

## Information Security Policy

The policy describes the information security objectives (SMART where possible), the security strategy, the commitment of the top management and the main features of the security organization. It is approved by the top management and communicated to all employees.

Create the policy under **Documents** with the subtype **Documents** and maintain the version, classification, approval date, approved by and review interval in the form.

<!-- SCREENSHOT: ![Policy as document](../assets/domain-gs-pp/verinice-gspp-document-policy.png) – Document „Informationssicherheitsleitlinie“ with the document control section (version, classification, approval date, review interval) -->


## Security Organization and Roles

Specify roles and responsibilities with the necessary qualifications – in particular the information security officer (ISO) –, avoid conflicts of interest (e.g. head of IT and ISO, data protection officer and ISO) and arrange for deputies. Record the roles and persons under **Persons**. The responsibility for information security remains with the top management and cannot be delegated.

## Documentation and Communication

Establish procedures for internal and external communication (who, what, when, where, why), for involving the ISO in security-relevant projects and for document control. The fields for document control, retention and destruction in the **Documents** support you in this. Grundschutz++ relies on machine-readable documentation: maintain requirements, implementations and assessments in verinice in as structured a way as possible instead of in static text documents.

## Approvals by Top Management

The ISMS-relevant decisions must be submitted to the top management as decision proposals, in particular:

- Definition of the *Anwendungsbereich*
- Approval of the *Schutzbedarf* of the business processes
- Definition of the order in which the business processes are processed
- Approval of the resources
- Approval of the policy

Document the approvals in a traceable way, e.g. as a **Document** with the approval date and the approving person.

## Initiating Risk Management

Specify whether you use the risk methodology of Grundschutz++ or your own method that meets the minimum criteria, and determine the risk criteria and risk owners. Details are described in the section [*Risikobetrachtung*](./risk-analysis).
