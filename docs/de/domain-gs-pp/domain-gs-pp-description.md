<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Aufbau der Domäne Grundschutz++

## Objekt- und Subtypen

### Scopeobjekte

- **Institutionen:** Zur Abbildung der Institution mit den wichtigsten Stammdaten.
- **Informationsverbünde:** Informationsverbünde, für die ein Anforderungspaket erstellt wird.
- **Externe Dienstleister:** Werden getrennt als externe Institutionen bzw. Organisationen betrachtet, z.B. für Outsourcing und Cloud-Dienste.
- **Scopes (allgemein):** Zur Abbildung sonstiger Betrachtungsgegenstände, z.B. des Anwendungsbereichs des ISMS oder von Projekten.

### Prozessobjekte

- **Geschäftsprozesse:** Zur Dokumentation der Kernprozesse und unterstützenden Prozesse. Die **Prozess-Art** unterscheidet Kerngeschäft und unterstützenden Prozess.
- **Fachverfahren:** Zur Dokumentation spezifischer Fachverfahren oder Verwaltungsverfahren.

### Assetobjekte

- **Zielobjekte:** Alle Assets des Informationsverbunds – z.B. Informationen, Anwendungen, IT-Systeme, Netze, Räume, Dienstleistungen oder Personengruppen. Anders als in der Domäne IT-Grundschutz gibt es nur einen Asset-Subtyp; die fachliche Einordnung erfolgt über die [Zielobjektkategorien](./target-object-categories).

### Personenobjekte

- **Personen:** Personen(gruppen) oder Rollen, z.B. Informationssicherheitsbeauftragte oder Asset-Owner.

### Incidentobjekte

- **Informationssicherheitsvorfälle:** Zur Dokumentation von Vorfällen.

### Dokumentenobjekte

- **Netzpläne:** Zur Speicherung von (Teil-)Netzplänen.
- **Referenzdokumente:** Zur Speicherung erstellter Referenzdokumente.
- **Dokumente (allgemein):** Zur Speicherung sonstiger Dokumentation, z.B. Leitlinie, Rollenbeschreibungen oder Nachweise, mit Angaben zur Dokumentenlenkung (Version, Klassifikation, Freigabe, Prüfintervall).

### Controlobjekte

- **Anforderungen:** Alle Anforderungen des Grundschutz++-Katalogs sowie eigene Anforderungen. Den Aufbau einer Anforderung beschreibt der Abschnitt [Anforderungskatalog](./catalog).
- **Zielobjektkategorien:** Die Zielobjektkategorien des Katalogs sowie die Sammelkategorien „Verbundweite Anforderungen“ und Führungsprozesse, die jeweils die zugehörigen Anforderungen bündeln.
- **Maßnahmen:** Konkrete Maßnahmen, mit denen Anforderungen erfüllt oder Risiken behandelt werden.

### Szenarien

- **Elementare Gefährdungen:** Die elementaren Gefährdungen G 0.x, auf die sich die Anforderungen des Katalogs beziehen. Sie werden für die [Risikobetrachtung](./risk-analysis) verwendet.

## Katalog

Der Katalog der Domäne Grundschutz++ stellt den Anforderungskatalog Grundschutz++ zur Verfügung. Er wird aus dem OSCAL-Katalog der Stand-der-Technik-Bibliothek des BSI erzeugt und enthält:

| Inhalt | Anzahl |
|---|---|
| Anforderungen | 1.000 |
| Zielobjektkategorien (gesamt) | 52 |
| davon Zielobjektkategorien des Katalogs | 39 |
| davon Sammelkategorie „Verbundweite Anforderungen“ | 1 |
| davon Führungsprozesse | 12 |
| Elementare Gefährdungen | 47 |

Die Anforderungen stammen aus drei Quellen: dem BSI-Stand-der-Technik-Kernel (901), der Methodik Grundschutz++ (95) und den BSI-Anforderungen zum Risikomanagement (4). Einzelheiten zu Praktiken, Feldern und Kategorien finden Sie unter [Anforderungskatalog](./catalog).

## Profile

Es steht ein Profil zur Anwendung bereit:

### Grundschutz++-Profil V2

Das Profil enthält einen Informationsverbund, der mit den Anforderungen zur Umsetzung der Methodik und den Führungsprozessen modelliert ist, sowie 39 Beispiel-Zielobjekte – je Zielobjektkategorie eines, modelliert mit den technisch-organisatorischen Anforderungen der Kategorie. Sie können die Beispiel-Zielobjekte an Ihre Institution anpassen (siehe [Anforderungspaket aus Profil](./modelling#anforderungspaket-aus-profil)).

::: warning Blaupausen
Die Methodik sieht die Auswahl von Blaupausen als eigenen Schritt vor, beschreibt diesen aber noch nicht. Das Profil ist als Beispiel zu verstehen und ersetzt nicht die Erstellung des Anforderungspakets nach der Methodik.
:::

## Decisions

Keine

## Risikodefinition

Die Risikodefinition **GSRD** stellt die Parameter für Schutzbedarf und Risikobetrachtung bereit:

- **Schutzbedarf** für die Schutzziele Vertraulichkeit, Integrität und Verfügbarkeit mit den Kategorien Unkritisch, Normal, Hoch und Sehr hoch
- **Schadenshöhe** mit den Kategorien Vernachlässigbar, Begrenzt, Beträchtlich und Existenzbedrohend
- **Eintrittswahrscheinlichkeit** mit den Kategorien Selten, Mittel, Häufig und Sehr häufig
- **Risikokategorien** Gering, Mittel, Hoch und Sehr hoch
- **Umsetzungsstatus** ja, nein, teilweise und nicht anwendbar

<!-- SCREENSHOT: ![Risikodefinition GSRD](../assets/domain-gs-pp/verinice-gspp-gsrd.png) – Übersicht der Risikodefinition GSRD mit Schutzbedarf, Schadenshöhe, Eintrittswahrscheinlichkeit und Risikomatrix -->

Der Schutzbedarf wird nach dem Maximumprinzip über die Verknüpfungen **Erforderlicher Geschäftsprozess**, **Erforderliches Fachverfahren** und **Erforderliches Zielobjekt** vererbt.

::: info Schutzbedarfskategorien und Umsetzungsstatus
Grundschutz++ kennt nur die Schutzbedarfskategorien *normal* und *hoch* sowie die Umsetzungsstatus *erfüllt*, *nicht erfüllt* und *nicht anwendbar*. Wie Sie die Werte der Risikodefinition darauf abbilden, beschreiben die Abschnitte [Schutzbedarfsfeststellung](./protection-needs#schutzbedarfskategorien) und [Realisierung](./implementation#umsetzungsstatus).
:::
