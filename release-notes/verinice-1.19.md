<!-- © 2024 The Project Contributors - see AUTHORS.txt -->
# verinice 1.19

## Neuerungen

Die folgenden Neuerungen stehen allen Anwenderinnen und Anwendern mit Release von verinice 1.19 zur Verfügung!

### Domäne Datenschutz

- Die fehlerhafte **Darstellung der Begründung für die DSFA-Erfordernis** wurde korrigiert.
- Im **AV-Report** werden Auftraggeber im Abschnitt Controllers ausgeben.

### Detailverbesserungen und Fehlerbehebungen

- Zur Absicherung der **Mandantentrennung** werden Beziehungen zwischen Objekten aus unterschiedlichen Units unterbunden.
- Objekte können mit zirkulären Teil-von Beziehungen gespeichert werden.
- Fehlerbehandlung bei Eingabe falscher Werte in **Zahlenfeldern** (Integer), z.B. Feld Löschfrist.
- Falsche Erfolgsmeldung beim Abbruch eines Löschvorgangs behoben.
- Die Darstellung/Priorität von Feldern in Tabellen wurde verbessert.
- KeyCloak-Update auf V.22 und Aktualisierung des UI-Themes.
- Der Dialog **Über verinice** wurde verbessert.
- Frontend-Tests / End-2-End Tests verwenden separate Units.
- Beheben der fehlerhaften Show/Hide-Funktion bei Radio-Buttons im Formschema-Editor.
- Updates zur Schwachstellenbehebung eingespielt.

## Preview

Das verinice.TEAM arbeitet an weiteren Funktionen, die in Zukunft veröffentlicht werden.
Die folgenden Inhalte stehen aktuell **NICHT** allen Anwenderinnen und Anwendern produktiv zur Verfügung.

### Domäne IT-Grundschutz

- Das **IT-Grundschutz-Kompendium Edition 2023** steht als Katalog mit Bausteinen, Anforderungen sowie Teilanforderungen und Gefährdungen zur Verfügung. Alle Inhalte können in Units **angewendet** werden, wobei die Objekte inklusive referenzierter Objekte und der Referenzen (Verknüpfungen) in die Unit kopiert werden.
- Angewendete Bausteine können an alle Scope-, Prozess- und Assetobjekte modelliert werden.

### Domäne NIS2

Schärfung und Weiterentwicklung von Organisationsaspekten der NIS2.

### Multi-Domain Betrieb

Der **Multi-Domain-Betrieb** ermöglicht das gleichzeitige Arbeiten in mehreren Fachgebieten/Standards auf einem Datenstamm:
- Objekte, die in mehreren Domänen existieren, können in allen Domänen geöffnet, gelesen und gespeichert werden.
- Objekte können einer anderen Domänen zugewiesen werden. 
