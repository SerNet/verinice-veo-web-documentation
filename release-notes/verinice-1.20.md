# verinice 1.20

Die folgenden Neuerungen stehen allen Anwenderinnen und Anwendern mit Release von verinice 1.20 zur Verfügung!

## Neuerungen

### Erste Schritte

- Die ersten Schritte nach Login wurden konsistenter und intuitiver gestaltet:

![[2024-02-20_16-11-47.png]]

- Der Zustand nach erstem Login wird im Local Storage des verwendeten Browsers gespeichert.
- Bei wiederholtem Login wird immer das Dashboard der zuletzt besuchten Unit mit der zuletzt verwendeten Domäne aufgerufen.
- Die Unit-Verwaltung ist über eine feste URL (/units) erreichbar.
- Anpassung des Tutorials an diese Umstellung.
- In der Navigation kann direkt über zwei Auswahlboxen die Unit und die Domäne gewechselt werden oder die Unit- bzw. Domänenverwaltung aufgerufen werden:

![[2024-02-20_16-18-49.png]]

### Domäne Datenschutz

- Im Objekt Datenart kann die Eigenschaft **Besonders sensible Daten** dokumentiert werden.
- Im Objekt Vertrag/Dokument wurde **Sonstiger Dokumententyp** ergänzt.
- Das **Begründungsfeld** im Datenschutzvorfall ist mehrzeilig.
- An Scope-, Prozess- oder Assetobjekte können keine Maßnahmen (Bausteine) mehr hinzugefügt werden, um den Umgang mit mitigierenden Maßnahmen im Risikodialog konsistent zu halten.
- In der Domäne DS-GVO steht der Reiter **Risiken** lediglich für die **Scopeobjekte**, für den Subtypen **VT** und für den Subtyp **DSFA** zur Verfügung.

### Detailverbesserungen und Fehlerbehebungen

- Vorbereitung für benutzerdefinierte Einstellungen im Backend (Einstellungen können in Zukunft gespeichert werden).
- Potentielle Zielobjekte werden in Custom Links korrekt angezeigt. 
- Neu in Custom Links angelegte Objekte werden sofort (ohne Reload) angezeigt.
- Behebung verschiedener Typos und Layoutfehler (Hell/Dunkel Modus, Dokumentation, Tool-Tip Sprachumschaltung, Beschreibung des Datentransfers)
- Behebung eines Fehlers, der bei extrem schneller Eingabe die Speicherung der Daten verhindert (Grenzfall - nur in maschinellen Tests reproduzierbar).
- Obsolete URL-Pattern entfernt (Refactoring).
- Behebung eines Fehlers im Objektschema-Editor, der das Speichern bei fehlenden Übersetzungen verhindert.
- Abgelaufenes Datum in der Sicherheitsrichtlinie korrigiert.
- Ergänzung einzelner Parameter in der Navigation.
- Fehlerhafte Meldung beim Wechseln von Versionen in der History behoben.
- Fehler beim Umschalten zwischen Versionen behoben, wenn die aktuelle Version ausgewählt wird.
- Maßnahmenumsetzung in Unit Export aufgenommen.
- Verbesserung der Perfomance des Report-Service durch Nutzung eines Unit-Exports.
- Code Formatter im Frontend eingeführt.
- Produktpflege: Updates Nuxt, Hibernate, 3rd party license generation.
- Schwachstellen-Management: Erforderliche Updates zu Libraries.
- Qualitätssicherung: Weiterer Ausbau der Frontend-Tests / End-2-End Tests.
- Release-Management: Prozessverbesserung, Maintenance Page für Downtime.

## Preview

Das verinice.TEAM arbeitet an weiteren Funktionen, die in Zukunft veröffentlicht werden. Die folgenden Inhalte stehen aktuell **NICHT** allen Anwenderinnen und Anwendern produktiv zur Verfügung.

### Verbesserte Unitverwaltung

- Basierend auf einem Prototypen wird die Unitverwaltung als zentrale Stelle verbessert, um das Zusammenspiel zwischen Units, Domänen und Profilen intuitiver zu gestalten.

### Multi-Domain Betrieb

- Abgleich der existierenden Domänen **DS-GVO**, **IT-Grundschutz** und **NIS-2** für den Multi-Domain Betrieb.
- Inspections sind domänenspezifisch.
- Beim Umschalten der Domäne wird immer auf das Dashboard der gewählten Domäne in der aktiven Unit gewechselt, um Inkonsistenzen in der Datendarstellung zu vermeiden.
- Die History zeigt Versionen domänenspezifisch an.
- Fehler (Versionslücke) beim Zuordnen eines Objekts zu einer neuen Domäne behoben.
- Objekte können erst dann einer anderen Domäne zugeordnet werden, wenn ein Subtyp ausgewählt wurde (Validierung korrigiert).
- Die Report-Übersichtsseite zeigt nur noch Reports der ausgewählten Domäne an.

### Domäne NIS2

- Prototyp mit Organisationsaspekten der NIS2 zur Domain pulse 2024.
- Subtypen Lieferant und Scope (allgemein) verfeinert.
- Abbildung von Sicherheitsvorfällen in der Domäne NIS2.
- Tab Maßnahmen in Domäne NIS2 ausgeblendet.
- Schutzbedarfsstufen für Authentizität ergänzt.

### Domäne IT-Grundschutz

#### Bausteinmodellierung aus Katalog

- Bausteine und die enthaltenen Anforderungen werden nur einmal in einer Unit angelegt.
- Scope-Objekte können aus Katalogen heraus angewendet werden.
- Beim Erstellen eines Kataloges aus einer Unit werden Objekte aktualisiert statt neu angelegt.
- Obsolete Katalog-Endpunkte entfernt (Refactoring).
- Obsolete Kataloge-Übersichtsseite entfernen (Refactoring).

#### Bausteinmodellierung aus Profil

- Speicherung der Risikowerte in Profilen zur späteren Anwendung.
- Frontend auf neue Domain-spezifische Profil-Endpunkte umgestellt.
- IT-Grundschutz-Profil Basisabsicherung Kommunalverwaltung Version 3 als Profil verfügbar.

#### Schutzbedarfsvererbung

- Designentwurf für die automatische Schutzbedarfsvererbung.
- Das Objektmodell wurde um die Datenbankfelder und Verknüpfungen zur Vererbung und Berechnung des Schutzbedarfs erweitert.
- In Prozess- und Zielobjekten können erforderliche Objekte verknüpft werden, auf die der Schutzbedarf automatisch vererbt werden kann (in Erstellung).

#### Risiken im IT-Grundschutz

- Risiken können zu allen Asset-, Prozess- und Scopeobjekte hinzugefügt werden.
- Verbessertes Layout im Risikodialog.
- Behebung kleinerer Inkonsistenzen im Risikodialog (Riskowner, Subtyp für mitigierende Maßnahmen).

#### Referenzdokumente

- A.1 Strukturanalyse
- A.2 Schutzbedarfsfeststellung
- A.3 Modellierung des Informationsverbund
