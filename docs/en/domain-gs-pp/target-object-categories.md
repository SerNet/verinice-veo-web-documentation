<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Target Object Categories

*Zielobjektkategorien* (target object categories) are standardized classes for the requirements described in Grundschutz++. By assigning your assets to *Zielobjektkategorien* – the *Zielobjektmapping* (target object mapping) – the assets are transferred into the Grundschutz++ system: in the catalog, each category is assigned requirements that thereby apply to the asset.

## Hierarchy of Target Object Categories

The 39 *Zielobjektkategorien* of the catalog are arranged hierarchically under seven root categories. Requirements are defined once for the appropriate category and apply to all subordinate categories. Two numbers are given in parentheses:

- **direct:** number of requirements assigned to the category itself (recognizable by the title suffix, e.g. `[Webanwendungen]`)
- **total:** number of requirements that the category contains in the catalog – those assigned directly and those of all parent categories up to the root (see [Inheritance](#inheritance))

For root categories, both numbers are the same.

- **Anwendungen** (81 / 81)
  - Dateiserver (3 / 84)
  - DNS-Server (5 / 86)
  - Faxe (3 / 84)
  - Interpersonelle Kommunikation (10 / 91)
    - E-Mail (14 / 105)
  - Office-Anwendungen (2 / 83)
  - TK-Anwendungen (9 / 90)
    - VK-Anwendungen (5 / 95)
  - Verzeichnisdienste (3 / 84)
  - Virtualisierungslösungen (4 / 85)
  - Webbrowser (14 / 95)
  - Webserver (6 / 87)
    - Webanwendungen (4 / 91)
- **Einkäufe** (39 / 39)
  - Dienstleistungen (31 / 70)
    - Outsourcing (29 / 99)
      - Cloud-Dienste (9 / 108)
  - IT-Produkte (14 / 53)
- **Informationen** (5 / 5)
  - Daten (31 / 36)
- **IT-Systeme** (93 / 93)
  - Endgeräte (15 / 108)
  - Hostsysteme (9 / 102)
- **Netze** (34 / 34)
  - Externe Netzanschlüsse (16 / 50)
  - Interne Netzsegmente (3 / 37)
    - WLANs (4 / 41)
- **Nutzende** (81 / 81)
  - Mitarbeitende (11 / 92)
    - Administrierende (9 / 101)
    - Führungskräfte (2 / 94)
      - Institutionsleitung (1 / 95)
- **Standorte** (59 / 59)
  - Gebäude (2 / 61)
  - Räume (6 / 65)
    - Datenträgerarchiv (2 / 67)
    - Räume für technische Infrastruktur (3 / 68)
      - Serverräume (4 / 72)

<!-- GRAFIK: ![Hierarchy of target object categories](../assets/domain-gs-pp/gspp-target-object-category-tree.png) – optional: graphical representation of the hierarchy (cf. Figure 6 of the methodology) -->

You can find the definition, the synonyms and the classification as an organizational or technical category in the form of each *Zielobjektkategorie* under **Definition**, **Synonyms** and **Category**. To do this, navigate in the menu to **Controls > Target object categories** or open the category in the [catalog](../manual/catalogs.md).

<!-- SCREENSHOT: ![Form of a target object category](../assets/domain-gs-pp/verinice-gspp-category-form.png) – Target object category (e.g. Webanwendungen) with definition, synonyms and category -->


::: info Names in the pilot version
In its Annex 1, the *Pilotierungsfassung* (pilot version) names some categories differently, e.g. „Mobile Endgeräte“ instead of „Endgeräte“ or „Fax(-anwendungen)“ instead of „Faxe“. The names in the catalog are authoritative for working in verinice.
:::

## Assigning Assets to Target Object Categories

Assign each asset to one or more *Zielobjektkategorien*. The assignment is based on the definitions of the categories. The following principles apply:

- An asset can be assigned to **multiple** *Zielobjektkategorien* if it fulfills several functions – e.g. a server that is operated as a host system and runs a web server and a web application, either as separate target objects or as one target object with several categories.
- The assignment is **function-oriented**: what matters is how the asset acts in the business process, not just its technical characteristics.
- Every asset can be assigned to at least one category. Assets that are **difficult to assign** are analyzed in the [*Risikobetrachtung* (risk consideration)](./risk-analysis); if necessary, add [your own requirements](./modelling#supplementing-requirements).
- For a manual assignment, document the decision in a traceable way, e.g. with a short justification in the **Description** of the target object.

In verinice, you document the assignment by modeling the *Zielobjektkategorie* on the target object using **Model** (see [Creating the Requirements Package](./modelling#model-target-object-categories)).

## Inheritance

An asset is subject not only to the requirements of the directly assigned category (“leaf category”), but also to those of all parent categories up to the root. Inheritance is deterministic because the hierarchy is fixed.

In the catalog, inheritance is already resolved: each *Zielobjektkategorie* contains the requirements of all its parent categories. You therefore model **only the directly assigned category** on an asset and thereby receive all applicable requirements.

**Example:** An asset „Bürgerportal“ is assigned to the category **Webanwendungen**. The category contains its 4 own requirements as well as the 6 requirements of **Webserver** and the 81 requirements of **Anwendungen**. If you model only „Webanwendungen“ on the asset, it thereby receives 4 + 6 + 81 = 91 requirements from the *Zielobjektkategorien*.

| Directly assigned | Included parent categories | Total requirements |
|---|---|---|
| Webanwendungen | Webserver, Anwendungen | 91 |
| E-Mail | Interpersonelle Kommunikation, Anwendungen | 105 |
| WLANs | Interne Netzsegmente, Netze | 41 |
| Cloud-Dienste | Outsourcing, Dienstleistungen, Einkäufe | 108 |
| Serverräume | Räume für technische Infrastruktur, Räume, Standorte | 72 |
| Institutionsleitung | Führungskräfte, Mitarbeitende, Nutzende | 95 |

In the object view of a *Zielobjektkategorie*, under **Parts** you see all requirements that the category contains – its own and those of the parent categories. The parent categories themselves are not listed there; you can tell from the title suffix which category a requirement was originally assigned to.

<!-- SCREENSHOT: ![Parts of a target object category](../assets/domain-gs-pp/verinice-gspp-category-parts.png) – Object view of the category Webanwendungen with the 91 contained requirements under Parts (suffixes [Webanwendungen], [Webserver] and [Anwendungen]) -->


::: tip Target object category of requirements
You can see which categories a requirement is assigned to in the **Target object category** field of the requirement and by the suffix in its title, e.g. `[Webbrowser]`. Requirements with two categories carry two suffixes, e.g. `[Nutzende] [Endgeräte]`.
:::
