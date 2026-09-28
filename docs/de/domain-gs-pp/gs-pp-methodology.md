<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Methodik Grundschutz++ im Überblick

## Sicherheitsprozess nach Grundschutz++

Die Methodik Grundschutz++ beschreibt den Aufbau und die Weiterentwicklung eines Informationssicherheitsmanagementsystems (ISMS) in fünf Prozessschritten. Die Schritte bauen aufeinander auf, werden zyklisch durchlaufen und können nach dem ersten Durchlauf auch parallel bearbeitet werden. Jeder Prozessschritt entspricht einer ISMS-Praktik des Anforderungskatalogs:

| Prozessschritt | PDCA-Phase | ISMS-Praktik | Ergebnis |
|---|---|---|---|
| 1 – Erhebung und Planung | Plan | Governance und Compliance (GC) | Kontext, Anwendungsbereich, Geschäftsprozesse, Schutzbedarf, Leitlinie, Sicherheitsorganisation |
| 2 – Anforderungsanalyse | Plan | Strukturmodellierung (STM) | Informationsverbund, Assets, Anforderungspaket |
| 3 – Realisierung | Do | Umsetzung (UMS) | Umsetzungsstatus, Umsetzungsplan |
| 4 – Überwachung | Check | Monitoring-Evaluation (PERF) | Leistungsbewertung, Audits, Managementbewertung |
| 5 – kontinuierliche Verbesserung | Act | Verbesserung (VRB) | Korrektur- und Verbesserungsplan |

Querschnittlich wird an den geforderten Stellen eine **Risikobetrachtung** durchgeführt (Praktik Risikomanagement, RISK).

::: tip Mit einem Geschäftsprozess beginnen
Bei der erstmaligen Einführung empfiehlt die Methodik, den PDCA-Zyklus zunächst mit **einem** Geschäftsprozess zu durchlaufen – nach der Pilotierungsfassung mit dem wichtigsten Geschäftsprozess aus der höchsten Schutzbedarfskategorie. Die Auswahl trifft die Institutionsleitung. Weitere Geschäftsprozesse werden in den folgenden Zyklen oder parallel ergänzt.
:::

## Unterschiede zum IT-Grundschutz

| Thema | IT-Grundschutz (BSI 200-x) | Grundschutz++ |
|---|---|---|
| Anforderungsquelle | IT-Grundschutz-Kompendium mit Bausteinen | Maschinenlesbarer Anforderungskatalog (OSCAL) der Stand-der-Technik-Bibliothek |
| Gliederung | Bausteinschichten und Bausteine | 20 Praktiken (Tätigkeitsbereiche mit zuständigen Rollen) und ein Themenfeld je Anforderung |
| Zuordnung zu Zielobjekten | Modellierung von Bausteinen auf Zielobjekte | Zuordnung von Assets zu **Zielobjektkategorien**; Anforderungen der Kategorie und ihrer übergeordneten Kategorien gelten für das Asset |
| Vorgehensweisen | Basis-, Standard- und Kern-Absicherung | Ein Vorgehen; jede Anforderung trägt ein **Sicherheitsniveau** (normal-SdT oder erhöht) |
| Verbindlichkeit | Basis-, Standard- und Anforderungen bei erhöhtem Schutzbedarf | Modalverb **MUSS**, **SOLLTE** oder **KANN** je Anforderung |
| Schutzbedarfskategorien | normal, hoch, sehr hoch | **normal** und **hoch**; eigene Kategorien sind zulässig, wenn sie darauf abgebildet werden |
| Schutzbedarf festgestellt für | Geschäftsprozesse und alle Zielobjekte (Vererbung) | **Geschäftsprozesse** (und die darin verarbeiteten Informationen) |
| IT-Grundschutz-Check | Umsetzungsstatus ja, teilweise, nein, entbehrlich | Ermittlung des Umsetzungsstatus: **erfüllt**, **nicht erfüllt**, **nicht anwendbar** |
| Risikoanalyse | BSI-Standard 200-3 mit elementaren Gefährdungen und Kreuzreferenztabellen | Risikobetrachtung mit der GS++-Methodik oder einer frei gewählten Methode, die festgelegte Mindestkriterien erfüllt; jede Anforderung nennt die zugehörigen elementaren Gefährdungen (G 0.x) direkt |
| Ergebnis | Sicherheitskonzept je Informationsverbund | Anforderungspaket je Informationsverbund und Umsetzungsplan |

## Änderungen durch die Pilotierung

Die Pilotierungsfassung (Version 0.2, Juli 2026) weicht in einigen Punkten vom Leitfaden (März 2026) ab. Die für die Arbeit in verinice wichtigsten Unterschiede:

| Thema | Leitfaden (März 2026) | Pilotierungsfassung 0.2 (Juli 2026) |
|---|---|---|
| Schutzbedarf | „Informationssicherheitseinstufung“: Schutzbedarf der Informationen, übertragen auf die Geschäftsprozesse | „Schutzbedarfsfeststellung“ je Geschäftsprozess mit den Kategorien normal und hoch; Hilfestellung über Schadensszenarien für „hoch“ |
| Asset-Dokumentation | Einheitliche Mindestangaben je Asset | Umfang abhängig vom Schutzbedarf: bei **hohem** Schutzbedarf wesentliche Abhängigkeiten dokumentieren, bei **normalem** Schutzbedarf mindestens die Abhängigkeiten zwischen Anwendungen und IT-Systemen |
| Anforderungen ohne Zielobjektkategorie | Relevanzentscheidung je Geschäftsprozess; nicht relevante Anforderungen werden mit Begründung gestrichen | Werden **verpflichtend** in das Anforderungspaket aufgenommen |
| Umsetzungsstatus | Nur „umgesetzt“ (ja) oder „nicht umgesetzt“ (nein) | „erfüllt“ (ja), „nicht erfüllt“ (nein) oder „nicht anwendbar“ (mit Begründung) |
| Priorisierung | Nach Risiko, Aufwand, Abhängigkeiten, Quick Wins | Zusätzlich: Anforderungen der **Elternknoten** zuerst erfüllen |
| Risikomethodik | Verweis auf ein separates Dokument zur Risikobetrachtung | Mindestkriterien für eine selbst gewählte Risikomethodik (Anhang 3) |
| Blaupausen | – | Auswahl von Blaupausen als eigener Schritt vorgesehen (Inhalt noch offen) |
| Hilfsmittel | – | Definitionen der Zielobjektkategorien (Anhang 1) und vereinfachte Geschäftsprozessanalyse (Anhang 2) |

## Grundlegende Begriffe

- **Anforderung:** Beschreibt, *was* getan werden muss, um ein bestimmtes Niveau der Informationssicherheit zu erreichen. Das Modalverb gibt den Pflichtcharakter an (MUSS, SOLLTE, KANN).
- **Anforderungspaket:** Die für einen Informationsverbund relevanten Anforderungen aus dem Katalog, ergänzt um eigene Anforderungen.
- **Asset:** Alle Werte, Ressourcen oder Komponenten, die für die Institution einen Wert besitzen und für die betrachteten Geschäftsprozesse benötigt werden.
- **Anwendungsbereich (Geltungsbereich, Scope):** Formaler und organisatorischer Umfang, in dem das ISMS gilt. Er kann einen oder mehrere Informationsverbünde enthalten.
- **Informationsverbund:** Inhaltlich-technische Abbildung des Anwendungsbereichs; Gesamtheit der infrastrukturellen, organisatorischen, personellen und technischen Assets.
- **Maßnahme:** Beschreibt, *wie* eine Anforderung erfüllt wird.
- **Praktik:** Bündelt Anforderungen nach Tätigkeiten, deren Zuständigkeit bestimmten Rollen zugeordnet werden kann. Jede Anforderung gehört zu genau einer Praktik.
- **Schutzbedarf:** Wie stark ein Geschäftsprozess hinsichtlich Vertraulichkeit, Integrität und Verfügbarkeit geschützt werden muss (normal oder hoch).
- **Sicherheitsniveau:** Erfüllungsgrad von Sicherheitszielen; im Katalog ist für jede Anforderung „normal (Stand der Technik)“ oder „erhöht“ festgelegt.
- **Zielobjektkategorie:** Standardisierte, hierarchisch geordnete Klasse von Assets, der im Katalog Anforderungen zugeordnet sind.
