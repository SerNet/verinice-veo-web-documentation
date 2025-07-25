<!-- © 2024 The Project Contributors - see AUTHORS.txt -->
# verinice 27

Die folgenden Neuerungen stehen Anwenderinnen und Anwendern mit Release von verinice 27 zur Verfügung:

## Allgemeine Funktionen
**Status: Produktiv**

### Verbesserung der Dokumentation

Die Dokumentation verwendet als neues Framework [Vitepress](https://vitepress.dev/) und erhält die neuen Abschnitte:
- Release Notes
- Known Issues
- Glossar
- Roadmap

Das Benutzerhandbuch wurde in weiten Teilen strukturell und inhaltlich überarbeitet und aktualisiert.

Die Tutorials wurden aktualisiert und das neue Tutorial Unitverwaltung ergänzt.

### Performanceverbesserung

Bei lang laufenden Aktionen wurde die Performance deutlich verbessert:
- Alle verfügbaren Profile können ohne Fehlermeldung angewendet werden.
- Das Löschen von Units wurde soweit beschleunigt, dass jede Unit gelöscht wird. In einzelnen Fällen kann es nach wie vor zu einem Timeout kommen, die Units sind nach kurzer Wartezeit aber restlos gelöscht.
- Um Fehlermeldungen (Timeouts) bei lang laufenden Aktionen grundsätzlich zu vermeiden, wurde ein Prototyp für Ausführung und Darstellung von Aktionen im Hintergund implementiert.

### Suchfunktion für Objekte

In der Objektübersicht können Objekte nach Name, Abkürzung oder Anzeigename (zusammengesetzt aus Designator, Abkürzung und Name) durchsucht werden. Als Default ist eine Freitextsuche im Anzeigenamen ohne Spezifkation des Suchkriteriums implementiert.
Die Suche wird in zukünftigen Iterationen um zusätzliche Suchkriterien, Operatoren und Funktionen erweitert.

### Detailverbesserungen und Fehlerbehebungen

- Bereitstellung des SBOM im SPDX Format auf Github.
- Behebung eines Anzeigefehlers in der neuen Unitverwaltung, der die Anwendung einzelner Profile verhindert.
- Behebung eines Fehlers, der die Änderung und Löschung von Potential Impact Werten (Schutzbedarf) bei Prozessen und Assets in den Domänen IT-Grundschutz und NIS2 verhindert.
- Upgrade auf Nuxt v3.12.3.

## Domäne Datenschutz
**Status: Produktiv**

- Behebung eines Fehlers bei Ausführung der Reports Datenschutz-Risikoanalyse, wenn noch keine Risikodefinition ausgewählt wurde.

## Domäne IT-Grundschutz
**Status: Private Beta**

### Verbesserung der Modellierung

Zur Verbesserung der Vorgehensweise bei der Modellierung von Bausteinen wurde:
- der Reiter Maßnahmen umbenannt in Bausteine.
- das Hinzufügen von Maßnahmen umbenannt in Modelliere Bausteine.
- ein Link zum Katalog hinzugefügt, wenn noch keine Bausteine für die Unit ausgewählt (angewendet) wurden.

### Verbesserung des IT-Grundschutz-Check

Der Dialog zur Dokumentation der Umsetzung beim IT-Grundschutz-Check wurde verbessert:
- Der Dialog wurde übersichtlicher strukturiert.
- Der Anforderungstext wird angezeigt.
- Das Umsetzungsdatum wurde ergänzt.
- Das Umsetzungsdatum wird in den Referenzdokumenten A.5 Risikoanalyse und A.6 Realisierungsplan ausgegeben.
- Aus dem Dialog kann direkt zum Zielobjekt und zum Baustein navigiert werden.

### Erstellen der Gefährdungsübersicht

Zur Vorbereitung einer Risikoanalyse werden durch das Erstellen der Gefährdungsübersicht für Scope-, Prozess- und Assetobjekte:
- alle Elementaren Gefährdungen der modellierten Bausteine entsprechend der Kreuzreferentabellen nachgeladen.
- Risiken für diese Elementaren Gefährdungen angelegt.

## Domäne NIS2
**Status: Prototyp**

- Anwendung der Felder für den Schutzbedarf im Formschema-Editor korrigiert.

## Domäne ISO
**Status: Prototyp**

- Weiterentwicklung des Objektschema für die Domäne ISO.

## Domäne TISAX
**Status: Prototyp**

- Weiterentwicklung des Objektschema für die Domäne TISAX.
