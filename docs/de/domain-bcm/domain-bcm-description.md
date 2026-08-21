<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# Aufbau der Domäne BSI 200-4 (DE)

In diesem Abschnitt wird der Aufbau der BCM-Domäne beschrieben. Die Domäne enthält verschiedene **Objekt- und Subtypen**, mit denen sich die Bestandteile eines **Business Continuity Management Systems (BCMS)** strukturiert abbilden lassen.

## Objekt- und Subtypen

### Scopeobjekte

Zentrale Elemente sind die **Scopeobjekte**, über die die verschiedenen organisatorischen Einheiten und Betrachtungsgegenstände modelliert werden.

- **Institutionen**: Dient zur Abbildung einer eigenständigen Organisation mit ihren zentralen Stammdaten. Eine Institution stellt in der Regel eine rechtlich selbstständige Einheit mit eigener Zielsetzung dar, die aus mehreren Abteilungen oder Bereichen besteht und übergreifende Entscheidungen trifft.

- **BCMS-Geltungsbereich**: Definiert den Anwendungsbereich des Business Continuity Management Systems.

- **Organisationseinheit**: Beschreibt eine Einheit innerhalb einer Institution, z. B. einen Standort, eine Abteilung oder einen Fachbereich. Organisationseinheiten dienen der Arbeitsteilung und Steuerung, besitzen jedoch in der Regel keine eigene Rechtspersönlichkeit.

- **Interessengruppen**: Erfassen Sie hier interne und externe Interessengruppen, die für das BCM von Bedeutung sind – z. B. Führungskräfte, Behörden, Kunden oder Partnerorganisationen.

- **Externe Dienstleister**: Erfassen Sie externe Organisationen oder Institutionen, die getrennt betrachtet werden, um spezifische Anforderungen im Zusammenhang mit Outsourcing und der Lieferkette abzubilden.

- **Scopes (allgemein)**: Repräsentiert sonstige Betrachtungsgegenstände.

### Prozessobjekte

- **Geschäftsprozesse**: Dienen zur Dokumentation und Analyse der Geschäftsprozesse, insbesondere zur Identifizierung zeitkritischer Geschäftsprozesse im Rahmen der BIA.

### Assetobjekte

- **Ressourcen**: Umfassen alle physischen und digitalen Werte, die erforderlich sind, um Geschäftsprozesse im Notfall durchführen zu können. Beispiele: Personal, IT-Systeme, Gebäude, Dienstleistungsunternehmen, Maschinen oder Betriebsmittel.

### Personenobjekte

- **Personen**: Über Personenobjekte können Sie relevante BCM-Rollen (z. B. BCM-Manager, Krisenstab, Fachverantwortliche) als Composites abbilden und diesen konkrete Personen zuordnen. Zudem besteht die Möglichkeit, Vertretungen und Verantwortlichkeiten innerhalb der Rollenstruktur zu dokumentieren.

### Incidentobjekte

- **Ereignisse**: Dienen der Erfassung und Dokumentation von Notfällen oder Schadensereignissen. Auf Basis dieser Ereignisse können Sie die Schadensbewältigung analysieren und die Rückführung in den Normalbetrieb nachvollziehbar dokumentieren.

### Dokumentenobjekte

- **Dokumente**:  Das Dokumenten-Objekt „Dokumente“ dient in verinice dazu, die gesamte Dokumentenstruktur Ihres Business Continuity Management Systems (BCMS) abzubilden. Zusätzlich wird dieses Objekt genutzt, um für jeden operativen Wiederanlaufplan (WAP) und Wiederherstellungsplan (WHP) einer Ressource, die formalen Anforderungen an die Dokumentenlenkung (Versionierung, Freigabe) für den WAP/WHP zu dokumentieren. Während die inhaltlichen technischen Schritte direkt in der verknüpften BC-Lösung gepflegt werden.

- **Notfallhandbücher**: Das Dokumenten-Objekt „Notfallhandbuch“ dient in verinice als zentrale, übergeordnete Sammlung aller relevanten Informationen, Pläne und Anweisungen, die zur Bewältigung von Krisen und schweren Notfällen erforderlich sind. Es fungiert als fachübergreifendes Nachschlagewerk für den Krisenstab und die Notfallbewältigungsorganisation. Während ein Geschäftsfortführungsplan (GFP) fachbereichsspezifisch ist, bündelt das Notfallhandbuch die Gesamtstrategie und alle notwendigen Teilpläne der Institution.

- **Geschäftsfortführungspläne**: Das Dokumenten-Objekt „Geschäftsfortführungsplan“ dient in verinice als formaler Rahmen für die Notfallplanung einer Organisationseinheit oder eines Geschäftsprozesses. In diesem Formular werden nicht die operativen technischen Schritte gepflegt, sondern die organisatorischen Führungs- und Weisungsstrukturen für den Ernstfall definiert. Es bildet die Grundlage für das automatisierte Reporting und generiert das Deckblatt, die Einleitung und die Governance-Kapitel des finalen GFP-Dokuments.

### Controlobjekte

- **Anforderungskataloge**: Über diesen Subtyp können Sie Anforderungen gruppieren, verwalten und anwenden – z. B. für Compliance-Checks.

- **Anforderungen**: Dienen zur Aufnahme und Verwaltung beliebiger Anforderungen.

- **Sofortmaßnahmen**: Hier werden allgemeine oder szenariospezifische Maßnahmen erfasst, die unmittelbar nach Eintritt eines Notfalls umzusetzen sind, um Schäden zu begrenzen und die Handlungsfähigkeit sicherzustellen.

- **Vorsorgemaßnahmen**: Präventive Maßnahmen, die entwickelt und umgesetzt werden, um die Wahrscheinlichkeit eines Ressourcenausfalls zu reduzieren.

- **BC-Strategien**: Beschreiben strukturierte, strategische Ansätze zur allgemeinen Gestaltung und Umsetzung der Business-Continuity-Planung.

- **BC-Lösungen**: Stellen konkrete Notfall-Lösungen dar, die alle geplanten Notfallmaßnahmen vereinen, um den Notfall bestmöglich zu bewältigen.

- **Notfallmaßnahmen**: Maßnahmen, die bei Eintritt eines Notfalls umgesetzt werden, um Schäden zu begrenzen und die Geschäftsfortführung zu ermöglichen.

- **Korrektur- und Verbesserungsmaßnahmen**: Korrekturmaßnahmen dienen der Beseitigung von Abweichungen zwischen dem Managementsystem bzw. der BC-Planung und den Anforderungen an das BCMS. Verbesserungsmaßnahmen dienen der kontinuierlichen Optimierung des BCMS sowie baulicher, technischer oder organisatorischer Maßnahmen.

### Szenarien

- **Notfallszenarien**: Erfassen Sie hier Ihre Ausfall- und Notfallszenarien, für die Sie entsprechende BC-Lösungen entwickeln.

- **Gefährdungen**: Die elementaren Gefährdungen aus dem ISMS können ebenfalls in die BCM-Domäne übernommen werden.

## Katalog

Der Katalog der BCM-Domäne BSI 200-4 (DE) stellt den aktuellen Anforderungskatalog des BSI bereit. Er umfasst sämtliche Anforderungen aus dem BSI-Standard 200-4, strukturiert nach den Kategorien **MUSS-** und **SOLLTE**-Anforderungen. Die Anwendung des Katalogs ist optional, bietet jedoch die Möglichkeit, das BCMS systematisch zu bewerten und die Erfüllung der BSI-Anforderungen nachvollziehbar zu dokumentieren.

## Profile

Für die Domäne BCM gibt es zwei Profile zum einen das BCM-Beispieldaten Profil, zum anderen steht Ihnen das BCM-Profil für Hochschulen vom [ZKI](https://ak-itsm-share.zki.de/s/mSJQakxzB7jzqYe?dir=/&editing=false&openfile=true) zur Verfügung.

**BCM-Profil für Hochschulen**

Dieses Profil dient als anpassbare Schablone für den zügigen Aufbau eines Reaktiv-BCMS an Hochschulen auf Basis des BSI-Standards 200-4. Es bildet typische Kernaufgaben in Forschung, Lehre und Verwaltung ab und liefert vorgefertigte Strukturen in verinice: von der BAO über BIA-Ergebnisse (117 Prozesse, 35 Ressourcen) bis hin zu konkreten Notfall-Quickwins und Dokumentenvorlagen. Es erleichtert den schrittweisen Ausbau hin zu einem vollständigen Aufbau- bzw. Standard-BCMS.

**Beispieldaten für die Domäne BSI 200-4 (DE)**

Das Profil stellt eine Organisation mit Beispielobjekten zur Abbildung eines BCMS nach BSI-Standard 200-4 dar. Sie erhalten einen Beispiel-BCMS-Geltungsbereich inklusive identifizierter Interessengruppen und deren Erwartungen sowie verknüpften Organisationseinheiten, Personen, Dokumenten, Ausfallszenarien und BIA-Ergebnissen.

Anhand zeitkritischer Musterprozesse erfahren Sie, wie MTPD, RTO und RPO ermittelt werden und als Basis für Geschäftsfortführungs- (GFP) sowie Wiederanlaufpläne (WAP) dienen. Dazu wurden beispielhafte BC-Strategien, BC-Lösungen aus Notfallmaßnahmen sowie Verbesserungsmaßnahmen erfasst.

Ergänzend illustriert ein Grundanforderungskatalog die Compliance-Überprüfung externer Dienstleister (am Beispiel eines IT-Hardware-Recovery-Anbieters). Zudem kann der offizielle BSI-Anforderungskatalog direkt auf den Geltungsbereich angewendet werden, um den Reifegrad des BCMS strukturiert zu überprüfen. Vordefinierte Objektverknüpfungen sowie beispielhafte Pläne (GFP für den Prozess „Transaktionen“, WAP/WHP für den „Hardwareserver“) ermöglichen es Ihnen, die verinice-Funktionen und Reports für Notfallhandbuch, GFP und WAP/WHP direkt in der Praxis zu testen.

## Decisions und Inspections

- Die Bewertung als zeitkritischer Geschäftsprozess erfolgt im Objekt Prozess zum einen über eine manuelle Eingabe der MTPD (Maximum Tolerable Period of Disruption) und zum anderen über eine regelbasierte Herleitung (Decision). Nach einer durchgeführten Schadensbewertung lässt sich die MTPD manuell festlegen. Ergänzend wird über einen automatischen Abgleich der Prozessabhängigkeiten die minimale MTPD ermittelt.
- Im Objekt Ressource werden die RTO (Recovery Time Objective) und die RPO (Recovery Point Objective) mittels Decision automatisch bestimmt. Die Ableitung erfolgt nach dem Minimum-Prinzip aus den jeweiligen Prozess- und Ressourcenabhängigkeiten. 
- Über zwei integrierte Inspections werden die Soll-Werte (RTO und RPO) kontinuierlich mit den Ist-Werten (RPA / tatsächliche Wiederanlaufzeiten) verglichen: Überschreitet die tatsächliche Wiederanlaufzeit die RTO oder liegt die RPA über der RPO, wird die Abweichung von verinice ausgewertet und eine entsprechende Warnmeldung ausgegeben.

## Reports

Die Domäne BSI 200-4 (DE) stellt die folgenden Reports bereit: 
- Wiederanlaufplan / Wiederherstellungsplan für Ressourcen: Eine Übersicht aller Informationen zum Wiederanlauf oder zur Wiederherstellung zeitkritischer Ressourcen, um eine geordnete Rückführung von IT und Systemen in den Normalbetrieb sicherzustellen.
- Geschäftsfortführungspläne für Prozesse: Eine Übersicht der geplanten Notfall- (BC-) Lösungen zur Absicherung zeitkritischer Geschäftsprozesse im Ernstfall
- Notfallhandbuch: Eine umfassende Übersicht aller Aspekte der Notfall- und Krisenbewältigung zur schnellen Schadensabwehr.

## Risikodefinition

Keine.