<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Requirements Catalog

The catalog of the Grundschutz++ domain contains 1,000 requirements, 52 *Zielobjektkategorien* (target object categories) and 47 elementary threats. It is generated from the OSCAL catalog of the BSI state-of-the-art library and imported into your unit via the [catalog](../manual/catalogs.md).

## Practices

*Praktiken* (practices) bundle requirements by areas of activity whose responsibility can be assigned to specific roles. Each requirement belongs to exactly one *Praktik*. The abbreviation of the *Praktik* is the beginning of the abbreviation of every requirement (e.g. `BER.4.1`).

| Abbreviation | Practice | Focus | Requirements |
|---|---|---|---|
| GC | Governance und Compliance | Methodology | 35 |
| STM | Strukturmodellierung | Methodology | 15 |
| UMS | Umsetzung | Methodology | 11 |
| PERF | Monitoring-Evaluation | Methodology | 24 |
| VRB | Verbesserung | Methodology | 10 |
| RISK | Risikomanagement | Methodology | 4 |
| ASST | Informationen und Assets | Organizational | 58 |
| PERS | Personal | Organizational | 30 |
| BES | Beschaffungsmanagement | Organizational | 109 |
| DLS | Dienstleistersteuerung | Organizational | 18 |
| TEST | Änderungen und Tests | Organizational | 36 |
| GEB | Gebäudemanagement | Organizational | 75 |
| SENS | Sensibilisierung | Organizational | 87 |
| NOT | Notfallplanung | Organizational | 37 |
| ARCH | Architektur | Technical | 63 |
| BER | Berechtigung | Technical | 92 |
| DET | Detektion | Technical | 82 |
| REA | Sicherheitsvorfallsbehandlung | Technical | 23 |
| KONF | Konfiguration | Technical | 157 |
| DEV | Entwicklung | Technical | 34 |

The six *Praktiken* with the focus “Methodology” represent the management system (PDCA cycle and risk management). The remaining organizational and technical *Praktiken* contain the subject-specific security requirements.

::: info Practice names in the English user interface
The English verinice user interface shows translated labels for the values of the **Practice** field (e.g. “Authorization” for BER). This manual uses the German practice names of the catalog.
:::

::: tip Responsibility via the practice
Each *Praktik* contains a requirement in the theme „Grundlagen“ for assigning the tasks to roles. Specify there which role takes on the leading responsibility for the *Praktik* – in the *Anforderungspaket* (requirements package), the responsibility for each requirement can then be identified by its *Praktik* (see [*Gestaltungsentscheidungen* (design decisions)](./modelling#design-decisions)).
:::

## Structure of a Requirement

Requirements follow a fixed ***Satzschablone*** (sentence template): *Praktik* – *Modalverb* – *Ergebnis* – *Handlungswort* (practice – modal verb – result – action word), e.g. „Berechtigung SOLLTE die Vergabe von Berechtigungen nach dem Prinzip der geringsten Berechtigungen einschränken.“ The form of a requirement contains the following fields:

| Field | Meaning |
|---|---|
| **Requirement** | Requirement text following the ***Satzschablone***. Variable parts are marked as parameters (see [*Gestaltungsentscheidungen*](./modelling#design-decisions)). |
| **Modal verb** | must, should or could – the binding nature of the requirement. |
| **Security level** | Normal-SdT (773 requirements) or Increased (227 requirements). |
| **Practice** | The *Praktik* to which the requirement belongs. |
| **Theme** | Subdivision within the *Praktik*, e.g. „Grundlagen“, „Datensicherung“ or „Zugangskonten“. |
| **Action word** | The verb of the ***Satzschablone***, e.g. verankern, dokumentieren, einschränken. The action word lets you find related requirements. |
| **Level** | Implementation effort from 0 to 5: 0 = not rated, as mandatory in any case; 1 = quick win, can be implemented on the same day; 2 = within one week using your own resources; 3 = several weeks to months; 4 = longer term, expert knowledge required; 5 = elaborate, complex measures. |
| **Target object category** | The *Zielobjektkategorie(n)* to which the requirement applies. Empty for requirements without a target object reference. |
| **Confidentiality, Integrity, Availability, Authenticity** | Effect on the protection goal: 0 = no or negligible effect, 1 = contributes to the protection goal, 2 = the protection goal is at the center of the requirement. |
| **BSI G0-Threats** | The elementary threats the requirement counteracts, e.g. „G 0.36, G 0.30, G 0.32“. |
| **Dokumentation** | Recommended document as evidence, e.g. „ISMS-Regelwerk“ or „Inventar Berechtigungen“. |
| **Note** | Explanations and implementation notes on the requirement. |
| **Tags** | Keywords, e.g. „Lieferketten“, „Cryptography“ or „Insider Threat“. |
| **Source catalog** | Origin of the requirement: BSI-Stand-der-Technik-Kernel-G0, BSI-Methodik-Grundschutz-plus-plus or BSI-Anforderungen-zum-Risikomanagement. |

<!-- SCREENSHOT: ![Form of a requirement](../assets/domain-gs-pp/verinice-gspp-requirement-form.png) – Form of a catalog requirement (e.g. BER.4.1) with requirement text, modal verb, security level, practice, protection goals and G0 threats -->


### Labeling in the Title

So that you can filter requirements in the catalog and in lists by their assignment, every requirement title carries a suffix in square brackets:

| Suffix | Meaning | Example |
|---|---|---|
| `[<Zielobjektkategorie>]` | The requirement is assigned to this *Zielobjektkategorie*. If there are several categories, a separate pair of brackets follows for each category in the order of the catalog. | `… [Anwendungen]`, `… [Nutzende] [Endgeräte]` |
| `[Methodik]` | *Verbundweite Anforderung* (domain-wide requirement) of a methodology *Praktik* without a *Zielobjektkategorie* | `Errichtung und Aufrechterhaltung eines ISMS [Methodik]` |
| `[Prozess:<Kürzel>]` | Requirement of an organizational or technical *Praktik* without a *Zielobjektkategorie*; it belongs to the *Führungsprozess* (management process) of this *Praktik* | `Prinzip der geringsten Berechtigungen [Prozess:BER]` |

For example, enter `[Webbrowser]` or `[Prozess:DET]` in the search to find all requirements that are assigned to a category itself or to a *Führungsprozess*, respectively.

::: info Title suffix and parts of a target object category
The suffix only names the categories to which the requirement itself is assigned. Under **Parts**, a *Zielobjektkategorie* additionally contains the requirements of all higher-level categories (see [Inheritance](./target-object-categories#inheritance)). The search for `[Webbrowser]` therefore returns 14 requirements, whereas the category „Webbrowser“ contains 95 – including the 81 requirements with the suffix `[Anwendungen]`.
:::

<!-- SCREENSHOT: ![Filtering by title suffix](../assets/domain-gs-pp/verinice-gspp-catalog-filter-suffix.png) – Catalog list of requirements, filtered by „[Webbrowser]“ -->


## Relationships Between Requirements

- **Sub-requirements:** Higher-level requirements are specified in more detail by sub-requirements, e.g. `BER.4.1` „Prinzip der geringsten Berechtigungen“ by `BER.4.1.1` „Rollenbasierte Berechtigung“ and `BER.4.1.2` „JIT‑/JEA‑Berechtigungen“. You can recognize that they belong together by the **Abbreviation**: the abbreviation of the sub-requirement begins with the abbreviation of the higher-level requirement. In the catalog, each sub-requirement is an independent requirement with its own assignment; no sub-requirements are listed under **Parts** of a requirement. A sub-requirement can therefore belong to a different *Zielobjektkategorie* than the higher-level requirement, e.g. `BES.2.1` „Erfassung des Bedarfes“ `[Einkäufe]` and `BES.2.1.5` „Lizenzierung“ `[IT-Produkte]`. It then applies only to the target objects of its own category.
- **Dependency:** The requirement presupposes another requirement (59 requirements with a total of 67 dependencies). According to the *Leitfaden* (guide), a requirement is only considered implemented when all requirements on which it depends are also implemented.
- **Related:** Thematically related requirements (171 requirements with a total of 210 references).

You can find dependencies and related requirements in the object view of the requirement under **Links**.

<!-- SCREENSHOT: ![Links of a requirement](../assets/domain-gs-pp/verinice-gspp-requirement-links.png) – Object view of a requirement (e.g. VRB.5.1) with the links Dependency and Related -->

## Target Object Categories and Collective Categories

The catalog contains three kinds of target object categories, which you can distinguish by the **Abbreviation**:

| Abbreviation | Kind | Number | Contained requirements |
|---|---|---|---|
| `Zielobjektkategorie` | *Zielobjektkategorien* of the catalog; each also contains the requirements of the higher-level categories | 39 | 636 requirements with a target object reference (39 of them belong to two categories) |
| `Methodik` | *Sammelkategorie* (collective category) „Verbundweite Anforderungen“ | 1 | 99 requirements of the methodology *Praktiken* |
| `Prozess` | *Führungsprozesse* | 12 | 265 requirements of organizational and technical *Praktiken* without a target object reference |

The target object categories with their hierarchy and definitions are described in the section [Target Object Categories](./target-object-categories). The *Sammelkategorien* are not part of the BSI methodology; they bundle requirements without a target object reference so that you can apply them collectively:

- **Verbundweite Anforderungen:** All requirements of the methodology *Praktiken* GC, STM, UMS, PERF, VRB and RISK. They apply once to the entire *Informationsverbund* (information domain).
- **Führungsprozesse:** One process per *Praktik* that bundles its requirements without a target object reference:

| Management process | Practice | Requirements |
|---|---|---|
| Berechtigungsmanagement | BER | 68 |
| Detektion | DET | 43 |
| Änderungen und Tests | TEST | 35 |
| Notfallmanagement | NOT | 25 |
| Sicherheitsvorfallsbehandlung | REA | 23 |
| Personal | PERS | 20 |
| Informations- und Asset-Management | ASST | 17 |
| Entwicklung | DEV | 9 |
| Konfigurationsmanagement | KONF | 8 |
| Architektur | ARCH | 7 |
| Beschaffung | BES | 5 |
| Sensibilisierung und Schulung | SENS | 5 |

<!-- SCREENSHOT: ![Management process with parts](../assets/domain-gs-pp/verinice-gspp-process-category-parts.png) – Object view of the category „Berechtigungsmanagement“ (abbreviation Prozess) with the contained [Prozess:BER] requirements under Parts -->

The *Praktiken* GEB (Gebäudemanagement) and DLS (Dienstleistersteuerung) have no *Führungsprozess*, as all of their requirements are assigned to a *Zielobjektkategorie*.

::: warning Limitations of the current catalog version
- The assignment of a requirement to its category is mapped via the **Parts** of the category, not via a link. Only requirements are listed under **Parts** – the category's own requirements and those of the higher-level categories.
- The hierarchy of the target object categories is not visible in verinice as a relationship between the categories. It is already resolved in the parts of each category (see [Target Object Categories](./target-object-categories#hierarchy-of-target-object-categories)).
- Sub-requirements are not mapped as **Parts** of the higher-level requirement; that they belong together can only be recognized by the abbreviation (see [Relationships Between Requirements](#relationships-between-requirements)).
- The elementary threats are not linked to the requirements. Which threats a requirement addresses can be found in the field **BSI G0-Threats**.
:::
