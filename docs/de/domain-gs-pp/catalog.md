<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Anforderungskatalog

Der Katalog der Domäne Grundschutz++ enthält 1.000 Anforderungen, 52 Zielobjektkategorien und 47 elementare Gefährdungen. Er wird aus dem OSCAL-Katalog der Stand-der-Technik-Bibliothek des BSI erzeugt und über den [Katalog](../manual/catalogs.md) in Ihre Unit übernommen.

## Praktiken

Praktiken bündeln Anforderungen nach Tätigkeitsbereichen, deren Zuständigkeit bestimmten Rollen zugeordnet werden kann. Jede Anforderung gehört zu genau einer Praktik. Das Kürzel der Praktik ist der Anfang der Abkürzung jeder Anforderung (z.B. `BER.4.1`).

| Kürzel | Praktik | Schwerpunkt | Anforderungen |
|---|---|---|---|
| GC | Governance und Compliance | Methodik | 35 |
| STM | Strukturmodellierung | Methodik | 15 |
| UMS | Umsetzung | Methodik | 11 |
| PERF | Monitoring-Evaluation | Methodik | 24 |
| VRB | Verbesserung | Methodik | 10 |
| RISK | Risikomanagement | Methodik | 4 |
| ASST | Informationen und Assets | Organisatorisch | 58 |
| PERS | Personal | Organisatorisch | 30 |
| BES | Beschaffungsmanagement | Organisatorisch | 109 |
| DLS | Dienstleistersteuerung | Organisatorisch | 18 |
| TEST | Änderungen und Tests | Organisatorisch | 36 |
| GEB | Gebäudemanagement | Organisatorisch | 75 |
| SENS | Sensibilisierung | Organisatorisch | 87 |
| NOT | Notfallplanung | Organisatorisch | 37 |
| ARCH | Architektur | Technisch | 63 |
| BER | Berechtigung | Technisch | 92 |
| DET | Detektion | Technisch | 82 |
| REA | Sicherheitsvorfallsbehandlung | Technisch | 23 |
| KONF | Konfiguration | Technisch | 157 |
| DEV | Entwicklung | Technisch | 34 |

Die sechs Praktiken mit dem Schwerpunkt **Methodik** bilden das Managementsystem ab (PDCA-Zyklus und Risikomanagement). Die übrigen organisatorischen und technischen Praktiken enthalten die fachlichen Sicherheitsanforderungen.

::: tip Zuständigkeit über die Praktik
Jede Praktik enthält im Thema „Grundlagen“ eine Anforderung zur Zuweisung der Aufgaben an Rollen. Legen Sie dort fest, welche Rolle die führende Zuständigkeit für die Praktik übernimmt – im Anforderungspaket ist die Zuständigkeit für jede Anforderung dann an ihrer Praktik erkennbar (siehe [Gestaltungsentscheidungen](./modelling#gestaltungsentscheidungen)).
:::

## Aufbau einer Anforderung

Anforderungen folgen einer festen **Satzschablone**: *Praktik* – *Modalverb* – *Ergebnis* – *Handlungswort*, z.B. „Berechtigung SOLLTE die Vergabe von Berechtigungen nach dem Prinzip der geringsten Berechtigungen einschränken.“ Im Formular einer Anforderung finden Sie folgende Felder:

| Feld | Bedeutung |
|---|---|
| **Anforderung** | Anforderungstext nach der Satzschablone. Variable Stellen sind als Parameter gekennzeichnet (siehe [Gestaltungsentscheidungen](./modelling#gestaltungsentscheidungen)). |
| **Modalverb** | Muss, Sollte oder Kann – der Pflichtcharakter der Anforderung. |
| **Sicherheitsniveau** | Normal-SdT (773 Anforderungen) oder Erhöht (227 Anforderungen). |
| **Praktik** | Die Praktik, zu der die Anforderung gehört. |
| **Thema** | Untergliederung innerhalb der Praktik, z.B. „Grundlagen“, „Datensicherung“ oder „Zugangskonten“. |
| **Handlungswort** | Das Verb der Satzschablone, z.B. verankern, dokumentieren, einschränken. Über das Handlungswort lassen sich zusammengehörige Anforderungen finden. |
| **Stufe** | Aufwand der Umsetzung von 0 bis 5: 0 = nicht bewertet, da in jedem Fall zwingend; 1 = Quick Win, am selben Tag umsetzbar; 2 = innerhalb einer Woche mit eigenen Mitteln; 3 = mehrere Wochen bis Monate; 4 = längerfristig, Expertenwissen erforderlich; 5 = aufwändige, komplexe Maßnahmen. |
| **Zielobjektkategorie** | Die Zielobjektkategorie(n), für die die Anforderung gilt. Leer bei Anforderungen ohne Zielobjektbezug. |
| **Vertraulichkeit, Integrität, Verfügbarkeit, Authentizität** | Wirkung auf das Schutzziel: 0 = keine oder vernachlässigbare Wirkung, 1 = wirkt auf das Schutzziel hin, 2 = das Schutzziel steht im Zentrum der Anforderung. |
| **BSI G0-Gefährdungen** | Die elementaren Gefährdungen, denen die Anforderung entgegenwirkt, z.B. „G 0.36, G 0.30, G 0.32“. |
| **Dokumentation** | Empfohlenes Dokument als Nachweis, z.B. „ISMS-Regelwerk“ oder „Inventar Berechtigungen“. |
| **Hinweis** | Erläuterungen und Umsetzungshinweise zur Anforderung. |
| **Tags** | Schlagwörter, z.B. „Lieferketten“, „Cryptography“ oder „Insider Threat“. |
| **Quellkatalog** | Herkunft der Anforderung: BSI-Stand-der-Technik-Kernel-G0, BSI-Methodik-Grundschutz-plus-plus oder BSI-Anforderungen-zum-Risikomanagement. |

<!-- SCREENSHOT: ![Formular einer Anforderung](../assets/domain-gs-pp/verinice-gspp-requirement-form.png) – Formular einer Katalog-Anforderung (z.B. BER.4.1) mit Anforderungstext, Modalverb, Sicherheitsniveau, Praktik, Schutzzielen und G0-Gefährdungen -->


### Kennzeichnung im Titel

Damit Sie Anforderungen im Katalog und in Listen nach ihrer Zuordnung filtern können, trägt jeder Anforderungstitel ein Suffix in eckigen Klammern:

| Suffix | Bedeutung | Beispiel |
|---|---|---|
| `[<Zielobjektkategorie>]` | Anforderung gilt für diese Zielobjektkategorie. Bei mehreren Kategorien folgt je Kategorie ein eigenes Klammerpaar in der Reihenfolge des Katalogs. | `… [Anwendungen]`, `… [Nutzende] [Endgeräte]` |
| `[Methodik]` | Verbundweite Anforderung einer Methodik-Praktik ohne Zielobjektkategorie | `Errichtung und Aufrechterhaltung eines ISMS [Methodik]` |
| `[Prozess:<Kürzel>]` | Anforderung einer organisatorischen oder technischen Praktik ohne Zielobjektkategorie; sie gehört zum Führungsprozess dieser Praktik | `Prinzip der geringsten Berechtigungen [Prozess:BER]` |

Geben Sie z.B. `[Webbrowser]` oder `[Prozess:DET]` in die Suche ein, um alle Anforderungen einer Kategorie bzw. eines Führungsprozesses zu finden.

<!-- SCREENSHOT: ![Filtern nach Titel-Suffix](../assets/domain-gs-pp/verinice-gspp-catalog-filter-suffix.png) – Katalogliste der Anforderungen, gefiltert nach „[Webbrowser]“ -->


## Beziehungen zwischen Anforderungen

- **Teile (Unteranforderungen):** Übergeordnete Anforderungen können konkretisierende Unteranforderungen enthalten, z.B. `BER.4.1` „Prinzip der geringsten Berechtigungen“ mit `BER.4.1.1` „Rollenbasierte Berechtigung“ und `BER.4.1.2` „JIT‑/JEA‑Berechtigungen“. Die Unteranforderungen finden Sie im Objektumfeld unter **Teile**.

  <!-- SCREENSHOT: ![Unteranforderungen und Links](../assets/domain-gs-pp/verinice-gspp-requirement-parts-links.png) – Objektumfeld einer Anforderung mit Teilen (Unteranforderungen) und Links (Abhängigkeit, Verwandt) -->
- **Abhängigkeit:** Die Anforderung setzt eine andere Anforderung voraus (59 Anforderungen mit insgesamt 67 Abhängigkeiten). Nach dem Leitfaden gilt eine Anforderung erst dann als umgesetzt, wenn auch alle Anforderungen umgesetzt sind, von denen sie abhängt.
- **Verwandt:** Thematisch verwandte Anforderungen (171 Anforderungen mit insgesamt 210 Verweisen).

## Zielobjektkategorien und Sammelkategorien

Der Katalog enthält drei Arten von Zielobjektkategorien, die Sie an der **Abkürzung** unterscheiden:

| Abkürzung | Art | Anzahl | Enthaltene Anforderungen |
|---|---|---|---|
| `Zielobjektkategorie` | Zielobjektkategorien des Katalogs, hierarchisch geordnet | 39 | 636 Anforderungen mit Zielobjektbezug (39 davon gehören zu zwei Kategorien) |
| `Methodik` | Sammelkategorie „Verbundweite Anforderungen“ | 1 | 99 Anforderungen der Methodik-Praktiken |
| `Prozess` | Führungsprozesse | 12 | 265 Anforderungen organisatorischer und technischer Praktiken ohne Zielobjektbezug |

Die Zielobjektkategorien mit Hierarchie und Definitionen beschreibt der Abschnitt [Zielobjektkategorien](./target-object-categories). Die Sammelkategorien sind nicht Teil der BSI-Methodik, sondern bündeln Anforderungen ohne Zielobjektbezug, damit Sie sie gesammelt anwenden können:

- **Verbundweite Anforderungen:** Alle Anforderungen der Methodik-Praktiken GC, STM, UMS, PERF, VRB und RISK. Sie gelten einmalig für den gesamten Informationsverbund.
- **Führungsprozesse:** Je Praktik ein Prozess, der deren Anforderungen ohne Zielobjektbezug bündelt:

| Führungsprozess | Praktik | Anforderungen |
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

<!-- SCREENSHOT: ![Führungsprozess mit Teilen](../assets/domain-gs-pp/verinice-gspp-process-category-parts.png) – Objektumfeld der Kategorie „Berechtigungsmanagement“ (Abkürzung Prozess) mit den enthaltenen [Prozess:BER]-Anforderungen unter Teile -->

Die Praktiken GEB (Gebäudemanagement) und DLS (Dienstleistersteuerung) haben keinen Führungsprozess, da alle ihre Anforderungen einer Zielobjektkategorie zugeordnet sind.

::: warning Einschränkungen der aktuellen Katalogversion
- Die Zuordnung einer Anforderung zu ihrer Kategorie ist über die **Teile** der Kategorie abgebildet, nicht über eine Verknüpfung. Ebenso ist die übergeordnete Kategorie als Teil hinterlegt.
- Beim Anwenden einer Kategorie aus dem Katalog werden deren Teile – also die enthaltenen Anforderungen und die übergeordnete Kategorie – **nicht automatisch** mit übernommen. Wählen Sie die Anforderungen über das Titel-Suffix aus (siehe [Anforderungspaket erstellen](./modelling)).
- Die elementaren Gefährdungen sind nicht mit den Anforderungen verknüpft. Welche Gefährdungen eine Anforderung adressiert, entnehmen Sie dem Feld **BSI G0-Gefährdungen**.
:::
