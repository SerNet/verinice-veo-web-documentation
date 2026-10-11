<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Profiles in the Grundschutz++ Domain

A profile contains prepared objects that you can apply to a unit and adapt to your institution. For the Grundschutz++ domain, the profile **Grundschutz++-Profil V2** is available. Using a fully modeled example, it shows how the requirements of the catalog are modeled on an *Informationsverbund* (information domain) and its target objects.

The description of the profile reads (in German; in English: the profile contains an information domain with target objects that are modeled with the requirements for implementing the Grundschutz methodology as well as specific technical-organizational requirements for protection):

> Das Grundschutz++-Profil enthält einen Informationsverbund mit Zielobjekten, die modelliert sind mit den Anforderungen zur Umsetzung der Grundschutz-Methodik sowie konkreten technisch-organisatorischen Anforderungen zur Absicherung.

::: warning Example, not a blueprint
The profile is an example of how the methodology is mapped in verinice. It is not a *Blaupause* (blueprint) in the sense of the methodology – their selection is planned as a separate step but not yet described (see [Profiles](./domain-gs-pp-description#profiles)). The profile does not replace compiling the *Anforderungspaket* (requirements package) according to the methodology.
:::

## Grundschutz++-Profil V2

The profile contains the following objects:

| Object | Subtype | Number |
|---|---|---|
| Requirements of the catalog | Requirement | 1,000 |
| Target object categories and collective categories of the catalog | Target object category | 52 |
| Information domain | Information domain | 1 |
| Example target objects | Target object | 39 |

The requirements and categories correspond to the [requirements catalog](./catalog) of the domain. The elementary threats are not included.

## Information Domain

All requirements without a target object reference are modeled on the **Information domain** (see [Domain-Wide Requirements](./modelling#domain-wide-requirements)):

- the category **Verbundweite Anforderungen** with the requirements of the methodology *Praktiken* (practices) GC, STM, UMS, PERF, VRB and RISK
- the twelve ***Führungsprozesse*** (management processes) (Architektur, Berechtigungsmanagement, Beschaffung, Detektion, Entwicklung, Informations- und Asset-Management, Konfigurationsmanagement, Notfallmanagement, Personal, Sensibilisierung und Schulung, Sicherheitsvorfallsbehandlung, Änderungen und Tests)

In the object view of the *Informationsverbund*, you will therefore find 377 entries: 364 requirements and one entry each for the 13 modeled categories. All 39 example target objects are members of the *Informationsverbund*.

::: info Description of the information domain
The description of the *Informationsverbund* in the profile names only the methodology *Praktiken*. In addition, the twelve *Führungsprozesse* with the requirements of the organizational and technical *Praktiken* without *Zielobjektkategorie* (target object category) are modeled.
:::

<!-- SCREENSHOT: ![Information domain of the profile](../assets/domain-gs-pp/verinice-gspp-profile-information-domain.png) – Object view of the information domain from the profile with the modeled categories Verbundweite Anforderungen and the twelve Führungsprozesse -->

## Example Target Objects

For each of the 39 *Zielobjektkategorien*, the profile contains an example target object of the same name. Each target object is modeled only with **its own** *Zielobjektkategorie* and thus carries all requirements of the category, including the requirements of the parent categories (see [Inheritance](./target-object-categories#inheritance)). In addition to the requirements, the list contains one entry for the modeled category itself.

The target objects are nested as **Parts** along the hierarchy of the *Zielobjektkategorien*: below the seven root objects Anwendungen, Einkäufe, Informationen, IT-Systeme, Netze, Nutzende and Standorte are the target objects of the subordinate categories.

| Target object | Part of | Entries |
|---|---|---|
| Anwendungen | – | 82 |
| › Dateiserver | Anwendungen | 85 |
| › DNS-Server | Anwendungen | 87 |
| › Faxe | Anwendungen | 85 |
| › Interpersonelle Kommunikation | Anwendungen | 92 |
| › › E-Mail | Interpersonelle Kommunikation | 106 |
| › Office-Anwendungen | Anwendungen | 84 |
| › TK-Anwendungen | Anwendungen | 91 |
| › › VK-Anwendungen | TK-Anwendungen | 96 |
| › Verzeichnisdienste | Anwendungen | 85 |
| › Virtualisierungslösungen | Anwendungen | 86 |
| › Webbrowser | Anwendungen | 96 |
| › Webserver | Anwendungen | 88 |
| › › Webanwendungen | Webserver | 92 |
| Einkäufe | – | 40 |
| › Dienstleistungen | Einkäufe | 71 |
| › › Outsourcing | Dienstleistungen | 100 |
| › › › Cloud-Dienste | Outsourcing | 109 |
| › IT-Produkte | Einkäufe | 54 |
| Informationen | – | 6 |
| › Daten | Informationen | 37 |
| IT-Systeme | – | 94 |
| › Endgeräte | IT-Systeme | 109 |
| › Hostsysteme | IT-Systeme | 103 |
| Netze | – | 35 |
| › Externe Netzanschlüsse | Netze | 51 |
| › Interne Netzsegmente | Netze | 38 |
| › › WLANs | Interne Netzsegmente | 42 |
| Nutzende | – | 82 |
| › Mitarbeitende | Nutzende | 93 |
| › › Administrierende | Mitarbeitende | 102 |
| › › Führungskräfte | Mitarbeitende | 95 |
| › › › Institutionsleitung | Führungskräfte | 96 |
| Standorte | – | 60 |
| › Gebäude | Standorte | 62 |
| › Räume | Standorte | 66 |
| › › Datenträgerarchiv | Räume | 68 |
| › › Räume für technische Infrastruktur | Räume | 69 |
| › › › Serverräume | Räume für technische Infrastruktur | 73 |

The **Entries** column states the number of entries in the object view of the target object: the requirements of the category and the entry for the category itself. For example, the target object „Webanwendungen“ contains 92 entries – the 91 requirements of the category „Webanwendungen“ and the category itself.

<!-- SCREENSHOT: ![Example target objects of the profile](../assets/domain-gs-pp/verinice-gspp-profile-target-objects.png) – List of the target objects from the profile with the nesting via Parts, e.g. Anwendungen with Webserver and Webanwendungen -->

## Content Not Included

The profile represents the *Anforderungspaket* only. It does not contain:

- **Business processes** and specialised tasks as well as their links to the target objects
- ***Schutzbedarf*** (protection need) – no *Schutzbedarf* has been determined in the profile
- **Risks** and **elementary threats**
- **Implementation status** – the status of all requirements is **unknown**
- **Responsible persons**, implementation deadlines and implementation descriptions

## Applying the Profile

You can apply the profile from the unit management when creating a new unit, or apply it to an existing unit (see [Requirements Package from Profile](./modelling#requirements-package-from-profile)).

::: warning Applying a profile will add a large number of additional objects to an existing unit! We recommend testing the application in a new unit.
:::

## Adapting the Profile

After applying the profile, proceed along the process steps to adapt the example to your institution:

1. ***Erhebung und Planung*** (survey and planning): Create the institution, the *Anwendungsbereich* (scope of application) and the business processes ([Survey and Planning](./planning)) and determine the [*Schutzbedarf*](./protection-needs) of the business processes.
2. **Information domain and assets:** Adapt the name and description of the *Informationsverbund*. Rename the example target objects after your assets, copy them for further assets of the same kind, and delete target objects for which there is no asset in your institution ([Information Domain and Assets](./structure-analysis)). While doing so, check the assignment to the [*Zielobjektkategorien*](./target-object-categories) and link the target objects to the business processes.
3. ***Anforderungspaket***: If necessary, add your own requirements and make the *Gestaltungsentscheidungen* (design decisions) ([Create the Requirements Package](./modelling)).
4. ***Realisierung*** (realization): Determine the [implementation status](./implementation#implementation-status) of all requirements that are set to **unknown** in the profile.
5. ***Risikobetrachtung*** (risk consideration): Apply the elementary threats from the catalog and carry out the [*Risikobetrachtung*](./risk-analysis) where it is required.
