<!-- © 2024 The Project Contributors - see AUTHORS.txt -->
# verinice 1.18

## Neuerungen

Die folgenden Neuerungen stehen allen Anwenderinnen und Anwendern mit Release von verinice 1.18 zur Verfügung!

### Domäne Datenschutz

Die Domäne DS-GVO wurde weiter verbessert:

* Kleinere Verbesserungen in Objekt und Formular **Datenschutzvorfall**.
* Neue Reportvorlage **Meldeformular Datenschutzvorfall**.
* Neue Reportvorlagen **Betroffenenanfrage** und **Übersicht Betroffenenanfragen**.
* Die **Beispieldaten** enthalten exemplarische Betroffenenanfragen.
* Die **DSFA-Auswahl** ist korrekt auf den Subtyp **DSFA** beschränkt.
* Englischsprachige Version **Record of processing activities (processor) according to Art. 30 II GDPR** der Reportvorlage **Auftragsverarbeitungen gemäß Art. 30 II DS-GVO**.

### Multi-User

verinice.DSMS kann ab sofort für mehrere Benutzer gekauft und genutzt werden. Den einzelnen Benutzer kann in verinice wahlweise Schreib- und/oder Leseberechtigung erteilt werden.

### Multi-Unit

Zur besseren Strukturierung großer Organisationen können über die beiden Standardunits (Unit 1 und Demo) hinaus weitere Units gekauft und genutzt werden.

### Unithandling bei erstem Login

Das Handling von Units wurde für neue Anwender optimiert:

* Beim Anlegen eines neuen Clients werden initial die beiden Units **Unit 1** und **Demo** angelegt.
* Die Seite **Erste Schritte** wird standardmäßig nach dem ersten Login aufgerufen.
* **Beispieldaten** können über den Link **Profile** zum Testen in die Unit **Demo** oder als Ausgangspunkt zum Aufbau der eigenen Organisation in die **Unit 1** geladen werden.

### Detailverbesserungen und Fehlerbehebungen

* Der Fehler beim Aufruf der **Benutzerverwaltung** wurde behoben. Staging und prod verwenden jetzt eine identische KeyCloak-Version.
* Die **Select All** Funktion (Checkbox) in Tabellen wurde aus Gründen der Inkonsistenz vorerst deaktiviert.
* Das **Icon für Composite-Objekte** wird wieder korrekt angezeigt.
* In Tabellen wird standardmäßig nach **Name aufsteigend** sortiert.
* Als Vorbereitung für die **Domänenspezifische Anzeige von Reports** werden nur noch Reports angezeigt, deren Zielobjekttypen in der aktiven Domäne definiert sind.
* Die Navigation überdeckt nicht mehr die Online-Dokumentation.
* Die Navigation zu Scopes, Teile, In Scopes, Teil von und Links öffnet korrekt das jeweilige Objekt.
* Verschiedene Sicherheitsrelevante Updates.
* Fehler "Missing keys"" beim  Dialog **Verlassen** behoben.
* Die automatischen Frontend-Tests wurden ergänzt um den Test **Überprüfung der  DSFA-Erfordernis**.

## Preview

Das verinice.TEAM arbeitet an weiteren Funktionen, die in Zukunft veröffentlicht werden.
Die folgenden Inhalte stehen aktuell **NICHT** allen Anwenderinnen und Anwendern produktiv zur Verfügung.

### Domäne IT-Grundschutz

Die Domäne IT-Grundschutz zur Abbildung eines ISMS nach den BSI-Standards der 200er-Reihe:

* Enthält alle erforderliche Objekte und Fomulare in **deutscher** und **englischer** Sprache.
* Unterstützt die **Schutzbedarfszuordnung** in allen relevanten Objekten.
* Stellt eine **Risikodefinition** zur späteren Risikoanalyse bereit.
* Stellt das **IT-Grundschutz-Kompendium der Edition 2023** inklusive aller Bausteine, Anforderungen und Elementaren Gefährdungen des BSI als **Katalog zur Anwendung** (Modellierung) bereit.
* Unterstützt die **Modellierung von Bausteinen** (ControlImplementation).
* Unterstützt die **Umsetzung/Bearbeitung der Baustein-Anforderungen** (RequirementImplementation).
* Stellt das **IT-Grundschutz-Profil Basisabsicherung Kommunalverwaltung** zur späteren Anwendung als Profil als Unit zur Verfügung.

### Domäne NIS2

Zum Nachweis der Einhaltung der Anforderungen der NIS2 erstellen wir die neue Domäne **NIS2**:

* Es existieren alle erforderlichen Objekte und grundsätzliche Formulare.
* Unterstützt werden die Use Cases **Betroffenheitsanalyse** und **Meldepflichten**.
