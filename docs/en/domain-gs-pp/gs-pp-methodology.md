<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Overview of the Grundschutz++ Methodology

## Security Process According to Grundschutz++

The Grundschutz++ methodology describes how to establish and further develop an information security management system (ISMS) in five process steps. The steps build on each other, are run through cyclically, and can also be worked on in parallel after the first cycle. Each process step corresponds to an ISMS *Praktik* (practice) of the requirements catalog:

| Process step | PDCA phase | ISMS practice | Result |
|---|---|---|---|
| 1 – *Erhebung und Planung* (survey and planning) | Plan | Governance und Compliance (GC) | Context, *Anwendungsbereich* (scope of application), business processes, *Schutzbedarf* (protection need), policy, security organization |
| 2 – *Anforderungsanalyse* (requirements analysis) | Plan | Strukturmodellierung (STM) | *Informationsverbund* (information domain), assets, *Anforderungspaket* (requirements package) |
| 3 – *Realisierung* (realization) | Do | Umsetzung (UMS) | Implementation status, implementation plan |
| 4 – *Überwachung* (monitoring) | Check | Monitoring-Evaluation (PERF) | Performance evaluation, audits, management review |
| 5 – *kontinuierliche Verbesserung* (continuous improvement) | Act | Verbesserung (VRB) | Corrective and improvement plan |

As a cross-cutting activity, a ***Risikobetrachtung*** (risk consideration) is carried out where required (practice Risikomanagement, RISK).

::: tip Start with one business process
When introducing the ISMS for the first time, the methodology recommends running through the PDCA cycle with **one** business process first – according to the *Pilotierungsfassung* (pilot version), with the most important business process of the highest *Schutzbedarf* category. Top management makes the selection. Further business processes are added in the following cycles or in parallel.
:::

## Differences from IT-Grundschutz

| Topic | IT-Grundschutz (BSI 200-x) | Grundschutz++ |
|---|---|---|
| Source of requirements | IT-Grundschutz Compendium with modules | Machine-readable requirements catalog (OSCAL) of the state-of-the-art library |
| Structure | Module layers and modules | 20 *Praktiken* (areas of activity with responsible roles) and one topic per requirement |
| Assignment to target objects | Modeling of modules on target objects | Assignment of assets to ***Zielobjektkategorien*** (target object categories); the requirements of the category and of its parent categories apply to the asset – in the catalog, each category already contains the requirements of its parent categories |
| Approaches | Basic, standard and core protection | One approach; each requirement carries a ***Sicherheitsniveau*** (security level) (**Normal-SdT** or **Increased**) |
| Obligation | Basic, standard and requirements for elevated protection needs | Modal verb **MUSS**, **SOLLTE** or **KANN** per requirement |
| Protection need categories | normal, high, very high | ***normal*** and ***hoch*** (normal / high); own categories are permitted if they are mapped to these |
| Protection need determined for | Business processes and all target objects (inheritance) | **Business processes** (and the information processed in them) |
| IT-Grundschutz Check | Implementation status yes, partially, no, not required | Determination of the implementation status: ***erfüllt***, ***nicht erfüllt***, ***nicht anwendbar*** (fulfilled, not fulfilled, not applicable) |
| Risk analysis | BSI Standard 200-3 with elementary threats and cross-reference tables | *Risikobetrachtung* with the GS++ methodology or a freely chosen method that meets defined minimum criteria; each requirement directly names the associated elementary threats (G 0.x) |
| Result | Security concept per information network | *Anforderungspaket* per *Informationsverbund* and implementation plan |

## Changes Resulting from the Pilot Phase

The *Pilotierungsfassung* (version 0.2, July 2026) deviates from the *Leitfaden* (guide) (March 2026) in some points. The most important differences for working in verinice:

| Topic | *Leitfaden* (March 2026) | *Pilotierungsfassung* 0.2 (July 2026) |
|---|---|---|
| Protection need | „Informationssicherheitseinstufung“ (information security classification): *Schutzbedarf* of the information, transferred to the business processes | „Schutzbedarfsfeststellung“ (protection need assessment) per business process with the categories normal and hoch; guidance via damage scenarios for „hoch“ |
| Asset documentation | Uniform minimum information per asset | Scope depends on the *Schutzbedarf*: for a ***hoch*** *Schutzbedarf*, document essential dependencies; for a ***normal*** *Schutzbedarf*, document at least the dependencies between applications and IT systems |
| Requirements without *Zielobjektkategorie* | Relevance decision per business process; irrelevant requirements are removed with justification | Are **mandatorily** included in the *Anforderungspaket* |
| Implementation status | Only „umgesetzt“ (implemented, yes) or „nicht umgesetzt“ (not implemented, no) | „erfüllt“ (yes), „nicht erfüllt“ (no) or „nicht anwendbar“ (with justification) |
| Prioritization | By risk, effort, dependencies, quick wins | Additionally: fulfill the requirements of the ***Elternknoten*** (parent nodes) first |
| Risk methodology | Reference to a separate document on risk consideration | Minimum criteria for a self-chosen risk methodology (Annex 3) |
| *Blaupausen* (blueprints) | – | Selection of *Blaupausen* planned as a separate step (content still open) |
| Aids | – | Definitions of the *Zielobjektkategorien* (Annex 1) and simplified business process analysis (Annex 2) |

## Basic Terms

The manual uses the German terms of the Grundschutz++ methodology, because there is no official English version of the methodology and the catalog yet. The terms are set in italics; on first use on a page, a literal English gloss follows in parentheses. Where the English verinice user interface uses its own label for the same concept, it is listed as well.

- **Anforderung (requirement):** Describes *what* must be done to achieve a certain level of information security. The modal verb states the degree of obligation (MUSS, SOLLTE, KANN). UI label: **Requirement**. This manual uses the English term.
- **Anforderungsanalyse (requirements analysis):** Process step 2 – the *Informationsverbund* is delimited, assets are recorded and assigned to *Zielobjektkategorien*, and the *Anforderungspaket* is compiled.
- **Anforderungspaket (requirements package):** The requirements from the catalog relevant for an *Informationsverbund*, supplemented by own requirements.
- **Anwendungsbereich (scope of application):** Formal and organizational scope in which the ISMS applies. It can contain one or more *Informationsverbünde*. UI label: **Scope**.
- **Asset:** All values, resources or components that have value for the institution and are required for the business processes under consideration.
- **Blaupause (blueprint):** Pre-modeled template package; the methodology plans the selection of *Blaupausen* as a separate step but does not describe it yet.
- **Elternknoten (parent node):** The parent categories of a *Zielobjektkategorie* and the higher-level requirements of a sub-requirement.
- **Erhebung und Planung (survey and planning):** Process step 1 – context, *Anwendungsbereich*, business processes, *Schutzbedarf*, policy and security organization.
- **erfüllt / nicht erfüllt / nicht anwendbar (fulfilled / not fulfilled / not applicable):** Implementation states of a requirement according to Grundschutz++. UI labels: **yes** / **no** / **not applicable**.
- **ergänzende Anforderungen (supplementary requirements):** Own requirements added to the *Anforderungspaket*, e.g. from compliance management or a *Risikobetrachtung*.
- **Führungsprozess (management process):** In the catalog, a collective category per *Praktik* that bundles its requirements without *Zielobjektkategorie* (e.g. „Berechtigungsmanagement“). Not to be confused with management processes in the sense of ISO standards.
- **Geschäftsprozess (business process):** Recurring sequence of activities that is essential for the institution's mission and leads to a traceable result. UI label: **Business process**. This manual uses the English term.
- **Gestaltungsentscheidungen (design decisions):** Decisions on parameter values and leading responsibilities, made after compiling the *Anforderungspaket*.
- **Informationsverbund (information domain):** Content-related and technical representation of the *Anwendungsbereich*; the entirety of infrastructural, organizational, personnel and technical assets. UI label: **Information domain**.
- **kontinuierliche Verbesserung (continuous improvement):** Process step 5 – corrective actions and improvements of the ISMS.
- **Leitfaden (guide):** The methodology guide Grundschutz++ (March 2026).
- **Maßnahme (safeguard):** Describes *how* a requirement is fulfilled. UI label: **Safeguard**. This manual uses the English term.
- **Modalverb / Ergebnis / Handlungswort (modal verb / result / action word):** Elements of the *Satzschablone*. The modal verb (MUSS, SOLLTE, KANN) states the degree of obligation, the result describes what is to be achieved, the action word is the verb of the requirement. UI labels: **Modal verb**, **Action word**.
- **normal / hoch (normal / high):** The protection need categories of Grundschutz++.
- **Pilotierungsfassung (pilot version):** The pilot version 0.2 of the methodology (July 2026), which incorporates the feedback from the pilot phase.
- **Praktik (practice):** Groups requirements by activities whose responsibility can be assigned to certain roles. Each requirement belongs to exactly one *Praktik*. UI label: **Practice**.
- **Realisierung (realization):** Process step 3 – determining the implementation status and planning the implementation.
- **Risikobetrachtung (risk consideration):** The risk analysis according to Grundschutz++, carried out where required by the methodology.
- **Sammelkategorie (collective category):** A category of the catalog that bundles requirements without *Zielobjektkategorie* („Verbundweite Anforderungen“ and the *Führungsprozesse*); not part of the BSI methodology.
- **Satzschablone (sentence template):** Fixed structure of a requirement: *Praktik* – *Modalverb* – *Ergebnis* – *Handlungswort*.
- **Schutzbedarf (protection need):** How strongly a business process must be protected with regard to confidentiality, integrity and availability (*normal* or *hoch*).
- **Schutzbedarfsfeststellung (protection need assessment):** Determination of the *Schutzbedarf* per business process.
- **Sicherheitsniveau (security level):** Degree of fulfillment of security objectives; for each requirement, the catalog specifies „normal (Stand der Technik)“ or „erhöht“. UI label: **Security level** (values **Normal-SdT** / **Increased**).
- **Überwachung (monitoring):** Process step 4 – performance evaluation, audits and management review.
- **verbundweite Anforderungen (domain-wide requirements):** The requirements of the methodology *Praktiken*, which apply once to the entire *Informationsverbund*. In the catalog, they are bundled in the category „Verbundweite Anforderungen“.
- **Zielobjekt (target object):** An asset that is modeled in verinice. UI label: **Target object**. This manual uses the English term.
- **Zielobjektkategorie (target object category):** Standardized, hierarchically ordered class of assets to which requirements are assigned in the catalog. In the catalog, each *Zielobjektkategorie* also contains the requirements of its parent categories. UI label: **Target object category**.
- **Zielobjektmapping (target object mapping):** Assigning assets to *Zielobjektkategorien*.
