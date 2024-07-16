# verinice 27

Die folgenden Neuerungen stehen Anwenderinnen und Anwendern mit Release von verinice 27 zur Verfügung!

::: details Warum sehe ich nicht alle Neuerungen?

Neue Funktionen und insbesondere ganze Domänen durchlaufen verschiedene Release-Phasen:

**Prototyp:** Diese Funktionen befinden sich in Entwicklung und sind nur intern verfügbar.

**Private Beta:** Diese Funktionen stehen einer geschlossenen Gruppe von Testenden zur Verfügung.

**Public Beta:** Diese Funktionen stehen allen Anwenderinnen und Anwendern für Tests zur Verfügung.

**Produktiv:** Diese Funktionen stehen allen Anwenderinnen und Anwendern zur produktiven Nutzung zur Verfügung, sofern die jeweilige Domäne im gewählten Plan enthalten ist!
:::

## Allgemeine Funktionen
**Status: Produktiv**

### Performance lang laufender Prozesse

???

#2856 Reports
#2854 Units
#2855 Profiles


### Umstellung der Dokumentation

Die Dokumentation verwendet als neues Framework [Vitepress](https://vitepress.dev/) und erhält die neuen Abschnitte:
- Release Notes
- Known Issues
- Glossar
- Roadmap

Das Benutzerhandbuch wurde in weiten Teilen strukturell und inhaltlich überarbeitet und aktualisiert.

::: info In Bearbeitung
Nicht alle Abschnitte sind auf dem aktuellsten Stand! Das verinice.Team arbeitet kontinuierlich an der Komplettierung und Optimierung.
:::

Die Tutorials wurden aktualisiert und das neue Tutorial Unitverwaltung ergänzt.

### Suchfunktion für Objekte

In der Objektübersicht können Objekte nach Name, Abkürzung und Anzeigename gesucht werden. Es wurde eine erster Prototyp implementiert, der später mit weiteren Funktion ausgebaut wird.

### Prototyp für Hintergrundtasks

Um (Fehlermeldungen) Timeouts bei lang laufenden Prozessen zu vermeiden, wurde ein Prototyp für Ausführung und Darstellung von Aufgaben im Hintergund implementiert.

### Detailverbesserungen und Fehlerbehebungen

- Behebung eines Anzeigefehlers in der neuen Unitverwaltung, das die Anwendung einzelner Profile verhindert.
- Behebung eines Fehlers, der die Änderung und Löschung von Potential Impact Werten (Schutzbedarf) bei Prozessen und Assets in den Domänen IT-Grundschutz und NIS2 verhindert.
- Upgrade auf Nuxt v3.12.3.
- Bereitstellung des SBOM im SPDX Format auf Github.

## Domäne Datenschutz
**Status: Produktiv**

Behebung eines Fehlers bei Ausführung der Reports Datenschutz-Risikoanalyse, wenn noch keine Risikodefinition ausgewählt wurde.

## Domäne IT-Grundschutz
**Status: Private Beta**


### Verbesserung der Modellierung

Zur Verbesserung der Vorgehensweise bei der Modellierung von Bausteinen wurde:
- der Reiter Maßnahmen umbenannt in Bausteine.
- das Hinzufügen von Maßnahmen umbenannt in Modelliere Bausteine.
- ein Link zum Katalog hinzugefügt, wenn noch keine Bausteine für die Unit ausgewählt (angewendet) wurden.

### Verbesserung des IT-Grundschutz-Check

Der Dialog zur Dokumentation der Umsetzung für die Durchführung des IT-Grundschutz-Check wurde verbessert:
- Der Dialog wurde konsistenter strukturiert.
- Der Anforderungstext wird angezeigt.
- Das Datum **Umsetzung bis** wurde ergänzt.
- Das Umsetzungsdatum wird in den Referenzdokumenten ausgegeben (A.6 Realisierungsplan).
- Aus dem Dialog kann direkt zum Zielobjekt und zum Baustein navigiert werden.

### Erstellen der Gefährdungsübersicht

Vor Durchführung einer Risikoanalyse werden durch das Erstellen der Gefährdungsübersicht für Scope-, Prozess und Assetobjekte:
- alle Elementaren Gefährdungen der modellierten Bausteine entsprechend der Kreuzreferentabellen nachgeladen.
- Risiken für diese Elementaren Gefährdungen angelegt.

### ???

A.5 Risikoanalyse - Mitigierende Maßnahmen #2923

## Domäne NIS2
**Status: Prototyp**

- Anwendung der Felder für den Schutzbedarf im Formschema-Editor korrigiert.

## Domäne ISO
**Status: Prototyp**

- Weiterentwicklung des Objektschema für die Domäne ISO.

## Domäne TISAX
**Status: Prototyp**

- Weiterentwicklung des Objektschema für die Domäne TISAX.
