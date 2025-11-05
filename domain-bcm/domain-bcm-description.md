<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# Aufbau der Domäne BCM

In diesem Abschnitt wird der Aufbau der BCM-Domäne beschrieben. Die Domäne enthält verschiedene **Objekt- und Subtypen**, mit denen sich die Bestandteile eines **Business Continuity Management Systems (BCMS)** strukturiert abbilden lassen.

## Objekt- und Subtypen

### Scopeobjekte

Zentrale Elemente sind die **Scopeobjekte**, über die die verschiedenen organisatorischen Einheiten und Betrachtungsgegenstände modelliert werden.

- **Institutionen**: Dient zur Abbildung einer eigenständigen Organisation mit ihren zentralen Stammdaten. Eine Institution stellt in der Regel eine rechtlich selbstständige Einheit mit eigener Zielsetzung dar, die aus mehreren Abteilungen oder Bereichen besteht und übergreifende Entscheidungen trifft.

- **Scopes (allgemein)**: Repräsentiert sonstige Betrachtungsgegenstände wie z. B. Projekte.

- **BCMS-Geltungsbereich**: Definiert den Anwendungsbereich des Business Continuity Management Systems.

- **Organisationseinheit**: Beschreibt eine Einheit innerhalb einer Institution, z. B. einen Standort, eine Abteilung oder einen Fachbereich. Organisationseinheiten dienen der Arbeitsteilung und Steuerung, besitzen jedoch in der Regel keine eigene Rechtspersönlichkeit. In der BCM-Domäne ist die Erfassung einer Organisationseinheit vorteilhaft, wenn Geschäftsfortführungspläne pro Organisationseinheit erstellt werden sollen.

- **Interessengruppen**: Erfassen Sie hier interne und externe Interessengruppen, die für das BCM von Bedeutung sind – z. B. Führungskräfte, Behörden, Kunden oder Partnerorganisationen.

- **Externe Dienstleister**: Erfassen Sie externe Organisationen oder Institutionen, die getrennt betrachtet werden, um spezifische Anforderungen im Zusammenhang mit Outsourcing und der Lieferkette abzubilden.

### Prozessobjekte

- **Geschäftsprozesse**: Dienen zur Dokumentation und Analyse der Geschäftsprozesse, insbesondere zur Identifizierung zeitkritischer Geschäftsprozesse im Rahmen der BIA.

### Assetobjekte

- **Ressourcen**: Umfassen alle physischen und digitalen Werte, die erforderlich sind, um Geschäftsprozesse durchführen zu können. Beispiele: Personal, IT-Systeme, Gebäude, Dienstleistungsunternehmen, Maschinen oder Betriebsmittel.

### Personenobjekte

- **Personen**: Über Personenobjekte können Sie relevante BCM-Rollen (z. B. BCM-Manager, Krisenstab, Fachverantwortliche) als Composites abbilden und diesen konkrete Personen zuordnen. Zudem besteht die Möglichkeit, Vertretungen und Verantwortlichkeiten innerhalb der Rollenstruktur zu dokumentieren.

### Incidentobjekte

- **Ereignisse**: Dienen der Erfassung und Dokumentation von Notfällen oder Schadensereignissen. Auf Basis dieser Ereignisse können Sie die Schadensbewältigung analysieren und die Rückführung in den Normalbetrieb nachvollziehbar dokumentieren.

### Dokumentenobjekte

- **Dokumente**: Unter diesem Objekttyp können Sie die Dokumentenstruktur Ihres BCMS abbilden. Dies ermöglicht eine nachvollziehbare Organisation und Versionierung aller BCM-relevanten Dokumente, wie Richtlinien, Pläne oder Berichte.

### Controlobjekte

- **Anforderungskataloge**: Über diesen Subtyp können Sie Anforderungen gruppieren, verwalten und anwenden – z. B. für Compliance-Checks.

- **Anforderungen**: Dienen zur Aufnahme und Verwaltung beliebiger Anforderungen.

- **Sofortmaßnahmen**: Hier werden allgemeine oder szenariospezifische Maßnahmen erfasst, die unmittelbar nach Eintritt eines Notfalls umzusetzen sind, um Schäden zu begrenzen und die Handlungsfähigkeit sicherzustellen.

- **Vorsorgemaßnahmen**: Präventive Maßnahmen, die entwickelt und umgesetzt werden, um die Wahrscheinlichkeit eines Ressourcenausfalls zu reduzieren.

- **Notfallmaßnahmen**: Maßnahmen, die bei Eintritt eines Notfalls umgesetzt werden, um Schäden zu begrenzen und die Geschäftsfortführung zu ermöglichen.

- **BC-Strategien**: Beschreiben strukturierte, strategische Ansätze zur allgemeinen Gestaltung und Umsetzung der Business-Continuity-Planung.

- **BC-Lösungen**: Stellen konkrete, erarbeitete Maßnahmen dar, die eine Geschäftsfortführung im Notfall ermöglichen.

- **Korrektur- und Verbesserungsmaßnahmen**: Korrekturmaßnahmen dienen der Beseitigung von Abweichungen zwischen dem Managementsystem bzw. der BC-Planung und den Anforderungen an das BCMS. Verbesserungsmaßnahmen dienen der kontinuierlichen Optimierung des BCMS sowie baulicher, technischer oder organisatorischer Maßnahmen.

### Szenarien

Erfassen Sie hier Ihre Ausfall- und Notfallszenarien, für die Sie entsprechende Notfallkonzepte entwickeln.  

## Katalog

Der Katalog der BCM-Domäne stellt den aktuellen Anforderungskatalog des BSI bereit. Er umfasst sämtliche Anforderungen aus dem BSI-Standard 200-4, strukturiert nach den Kategorien *MUSS-* und *SOLLTE*-Anforderungen. Die Anwendung des Katalogs ist optional, bietet jedoch die Möglichkeit, das BCMS systematisch zu bewerten und die Erfüllung der BSI-Anforderungen nachvollziehbar zu dokumentieren.

## Profile

In Erstellung.

## Decisions

Keine.

## Reports

Folgende Reports sind in Erstellung:

- Wiederanlaufplan / Wiederherstellungsplan für Ressourcen  
- Geschäftsfortführungspläne für Organisationseinheiten  
- Notfallhandbuch  

Die oben genannten Reports werden in Anlehnung an die BSI-Hilfsmittel erstellt.  

## Risikodefinition

Im BCM finden Sie unter **Risikodefinition** die Möglichkeit, die Zeithorizonte, Schadenskategorien sowie Schadensszenarien zu konfigurieren. Diese dienen der Bewertung des Schadenspotenzials im Rahmen der Business Impact Analyse (BIA) innerhalb der Geschäftsprozesse.

![BCMRA](/assets/domain-bcm/verinice-46-bcmra.png)
