<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Create the Requirements Package

Once the *Informationsverbund* (information domain) has been delimited and the assets have been recorded and assigned to the *Zielobjektkategorien* (target object categories), you compile the ***Anforderungspaket*** (requirements package). It contains all requirements that are relevant to the *Informationsverbund* with its business processes and assets, and it is the starting point for the [*Realisierung*](./implementation) (realization).

## Components of the Requirements Package

The *Anforderungspaket* is made up of three types of requirements:

| | Type | Marking in the catalog | Modeled on |
|---|---|---|---|
| (1) | ***Verbundweite Anforderungen*** (domain-wide requirements) of the methodology *Praktiken* (practices) | `[Methodik]`, category „Verbundweite Anforderungen“ | *Informationsverbund* |
| (1) | Requirements **without a _Zielobjektkategorie_** from organizational and technical *Praktiken* | `[Prozess:<Kürzel>]`, *Führungsprozess* (management process) categories | *Informationsverbund* (or *Führungsprozess*) |
| (2) | Requirements **with a _Zielobjektkategorie_** | `[<Zielobjektkategorie>]` | Target objects of the category |
| (3) | ***Ergänzende Anforderungen*** (supplementary requirements)—your own requirements, e.g., from compliance management or *Risikobetrachtung* (risk consideration) | – | Depending on the reference |

According to the *Pilotierungsfassung* (pilot version), the requirements (1) are **mandatory**. The requirements (2) result from the assignment of the assets to the *Zielobjektkategorien*. You include the *ergänzende Anforderungen* (3) as needed.

## Apply Catalog Elements

Before you can model requirements in your *Informationsverbund*, apply them from the [catalog](../manual/catalogs.md), which you can access via the menu. Navigate to **Requirements** and **Target object categories**, select the elements you need, and then click **Apply**.

<!-- SCREENSHOT: ![Apply catalog elements](../assets/domain-gs-pp/verinice-gspp-apply-catalog.png) – Catalog with selected requirements and target object categories and the Apply button -->


::: tip Applying categories with their requirements
The requirements of a *Zielobjektkategorie* are represented as its **Parts**. When you apply a category from the catalog, its parts are applied as well—that is, all requirements the category contains, including those from the higher-level categories. The easiest way is to apply all requirements and all *Zielobjektkategorien* of the catalog in one step. To select specifically the requirements that are assigned to a category itself, filter by the title suffix, e.g., `[Webbrowser]` or `[Methodik]`.
:::

## Domain-Wide Requirements

The requirements of the methodology *Praktiken* Governance und Compliance, Strukturmodellierung, Umsetzung, Monitoring-Evaluation, Verbesserung, and Risikomanagement define the governance, steering, control, and improvement processes of the ISMS. They are modeled once for the entire *Informationsverbund* without any further selection. An individual approach is not intended.

To do so, model the *Zielobjektkategorie* **Verbundweite Anforderungen** (99 requirements) on your **Information domain**:

- Open the *Informationsverbund*.
- In the object view, select the **Modules** or **Requirements** tab, click **+**, and then click **Model**.
- In the dialog, select the category **Verbundweite Anforderungen** and save.

<!-- SCREENSHOT: ![Model domain-wide requirements](../assets/domain-gs-pp/verinice-gspp-model-information-domain.png) – Modeling dialog on the information domain with the selected category Verbundweite Anforderungen -->

## Requirements Without a Target Object Category

Requirements of organizational and technical *Praktiken* that are not assigned a *Zielobjektkategorie* apply once in the *Informationsverbund*, just like the methodology requirements. The catalog bundles them per *Praktik* in a category with the abbreviation `Prozess`—the ***Führungsprozesse*** (e.g., „Berechtigungsmanagement“ with all `[Prozess:BER]` requirements, see [Requirements catalog](./catalog#target-object-categories-and-collective-categories)).

Model all twelve *Führungsprozess* categories on your *Informationsverbund*—just like the *verbundweite Anforderungen*.

<!-- SCREENSHOT: ![Modeled information domain](../assets/domain-gs-pp/verinice-gspp-information-domain-modelled.png) – Object view of the information domain with Verbundweite Anforderungen and the twelve Führungsprozess categories -->


::: tip Management processes with process owners
In larger organizations, it can be useful to create each *Führungsprozess* as a separate **Business process** (Process type: Supporting process), to store the role with lead responsibility as **Responsible person** (process owner), and to model the *Führungsprozess* category on this process. This way, the responsibility for each requirement is immediately apparent.
:::

::: info Status before the pilot phase
According to the *Leitfaden* (guide) (March 2026), it was decided for each requirement without a *Zielobjektkategorie* whether it is relevant for the business process under consideration; requirements that were not relevant were removed with a justification. According to the *Pilotierungsfassung*, these requirements must be included. If a requirement cannot be fulfilled functionally in the *Informationsverbund*, set the status **not applicable** during the *Realisierung* and document the justification.
:::

## Model Target Object Categories

Now the requirements with a target object reference are modeled on the assets. You can proceed in two different ways:

### From the Target Object's Perspective

Assign the associated *Zielobjektkategorien* to a target object:

- Open a target object.
- In the object view, select the **Modules** or **Requirements** tab, click **+**, and then click **Model**.
- A dialog opens showing all categories and requirements available in your unit. Use the search function to search specifically by name and/or abbreviation, e.g., for `Zielobjektkategorie`, to display only the categories of the catalog.
- Select **only the directly assigned category**, e.g., „Webanwendungen“, and save the dialog. The requirements of the higher-level categories are already included in it (see [Inheritance](./target-object-categories#inheritance)).

<!-- SCREENSHOT: ![Select target object categories](../assets/domain-gs-pp/verinice-gspp-select-categories.png) – Modeling dialog on the target object with search „Zielobjektkategorie“ and the selected category Webanwendungen -->

::: info Do not additionally model higher-level categories
Do not additionally model the higher-level categories (e.g., „Webserver“ and „Anwendungen“). Their requirements are already included in the directly assigned category; the target object does not receive any additional requirements this way, since a requirement is modeled only once per target object.
:::

### From the Target Object Category's Perspective

Assign the matching target objects to a *Zielobjektkategorie*:

- Open the *Zielobjektkategorie* to which one or more target objects should be assigned.
- In the object view, select the **Target Objects** tab, click **+**, and choose the target object type **Asset**.
- In the dialog, select the target objects that should be modeled with the category, and save.

<!-- SCREENSHOT: ![Assign target objects](../assets/domain-gs-pp/verinice-gspp-assign-target-objects.png) – Target Objects tab of a target object category with the selection of target objects -->

After you have saved the dialog, the modeled category and its requirements are displayed in the target object. In addition to the requirements, the list contains an entry for the modeled category itself: a target object modeled with „Webanwendungen“ shows 92 entries—the 91 requirements of the category and the category „Webanwendungen“.

<!-- SCREENSHOT: ![Modeled target object categories](../assets/domain-gs-pp/verinice-gspp-modelled-categories.png) – Object view of a target object modeled with Webanwendungen with 92 entries: 91 requirements (suffixes [Webanwendungen], [Webserver], [Anwendungen]) and the category Webanwendungen -->


### Requirements with Two Target Object Categories

Some requirements are assigned two *Zielobjektkategorien* (e.g., `[Nutzende] [Endgeräte]`). According to the *Leitfaden*, such a requirement is modeled on the category **named first** if the asset in question depends on an asset of the category named second.

Since in verinice the requirement is a part of both categories and of all their subcategories, it appears on the assets of all these categories—e.g., `SENS.7.12` „Öffentliche WLANs“ `[Nutzende] [Endgeräte]` also on assets of the category „Administrierende“. Process it on the asset of the category named first (or of one of its subcategories); on assets of the category named second and its subcategories, you can set the status **not applicable** as part of the consolidation, with a reference to the asset on which the requirement is implemented.

## Consolidation and Redundancy Check

If requirements from several categories affect an asset identically, they are listed only once—but with a reference to each affected asset. Different asset-specific implementations of a requirement are retained. In verinice, a requirement is always modeled only once per target object, even if it was assigned via several categories. You document the implementation per target object.

## Supplementing Requirements

If an asset cannot be represented adequately with the existing requirements, or if obligations arise from compliance management or from the analysis of interested parties, add your own requirements:

1. Develop your own requirement, e.g., as part of a *Risikobetrachtung*. Justify comprehensibly why the requirements of the catalog are not sufficient.
2. Put the requirement into the ***Satzschablone*** (sentence template) of Grundschutz++: *Praktik* – *Modalverb* – *Ergebnis* – *Handlungswort* (practice – modal verb – result – action word), e.g., „Konfiguration MUSS … aktivieren.“
3. Extend the *Anforderungspaket* with the new requirement.

To do so, navigate in the menu to **Controls > Requirements** and use **+** to create a new requirement. Fill in the fields in the same way as for the catalog requirements (Requirement, Modal verb, Security level, Practice, security objectives). Then model the requirement on the affected target object or add it via the object view as a **Part** of a custom category.

<!-- SCREENSHOT: ![Custom requirement](../assets/domain-gs-pp/verinice-gspp-user-defined-requirement.png) – Form of a custom requirement following the sentence template -->


::: warning Supplementary requirements and risk
Newly added requirements must also address a risk. If the requirement addresses a damage scenario, a risk analysis must be performed. If it depends on a BSI requirement, this dependency must be considered in the *Risikobetrachtung*. If it does not address any damage scenario, this must be explained briefly.
:::

## Security Level

The *Sicherheitsniveau* (security level) is defined for each requirement in the catalog: **Normal-SdT** (state of the art) or **Increased**. The *Anforderungsanalyse* (requirements analysis) for business processes with a *normal* (normal) *Schutzbedarf* (protection need) results in an *Anforderungspaket* with the predefined *Sicherheitsniveau*.

You can check the initial setting and change it if necessary—also for individual assets:

- An **increase** from **Normal-SdT** to **Increased** only affects the order of implementation.
- A **reduction** from **Increased** to **Normal-SdT** must be justified with a [*Risikobetrachtung*](./risk-analysis).

## Design Decisions

Before you start the implementation, make the central *Gestaltungsentscheidungen* (design decisions).

**Parameters** are variable parts within a requirement, e.g., „regelmäßig“ or the specification of a standard. In the **Requirement** field, they are marked as placeholders, e.g., <code v-pre>{{ insert: param, gc.1.1-prm1 }}</code>. Define the values after the *Anforderungspaket* has been created and document them—e.g., in the implementation description of the requirement. If different specifications require different values, choose the most secure setting or consider the requirement separately for each asset.

**Lead responsibilities:** In the topic „Grundlagen“, each *Praktik* contains a requirement for assigning the tasks (e.g., `BER.1.1.2` „Zuweisung der Aufgaben“). With these parameters, you define which role receives the lead responsibility for the *Praktik*. Store the role as **Responsible person** when implementing the requirements.

## Requirements Package from Profile

The profile **Grundschutz++-Profil V2** contains a fully modeled sample *Anforderungspaket*:

- **Information domain** with the category **Verbundweite Anforderungen** and the twelve ***Führungsprozesse***—that is, all requirements without a target object reference (1).
- **39 sample target objects**, one per *Zielobjektkategorie*, each named like the category (e.g., „Webanwendungen“). Each target object is modeled only with its own category and thus carries all requirements of the category, including those of the higher-level categories (2). The target objects are members of the *Informationsverbund* and are nested as **Parts** along the hierarchy of the *Zielobjektkategorien*, e.g., „Webanwendungen“ as a part of „Webserver“ and the latter as a part of „Anwendungen“.

The implementation status of all requirements is **unknown**. The profile does not contain any business processes, risks, or elementary threats; if needed, you apply the elementary threats from the catalog (see [*Risikobetrachtung*](./risk-analysis)).

You can modify, copy, or delete the sample target objects, including the modeled requirements, to represent your organization. You can apply the profile from the unit management when creating a new unit, or apply it to an existing unit. The content and structure of the profile are described on the page [Profiles in the Grundschutz++ Domain](./gs-pp-profiles).

<!-- SCREENSHOT: ![Apply profile](../assets/domain-gs-pp/verinice-gspp-apply-profile.png) – Unit management with the selection of the profile Grundschutz++-Profil V2 -->

::: warning Applying a profile will add a large number of additional objects to an existing unit! We recommend testing the application in a new unit.
:::

## Result

The *Anforderungspaket* now consists of the *verbundweite Anforderungen* and the requirements of the *Führungsprozesse* on the *Informationsverbund* (1), the requirements from the *Zielobjektkategorien* on the target objects (2), and your *ergänzende Anforderungen* (3). In the next step, you determine the [implementation status](./implementation).
