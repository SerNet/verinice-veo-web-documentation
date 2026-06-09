<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# Business Impact Analyse (BIA)

Ein Hauptziel des Business Continuity Management Systems (BCMS) ist die angemessene Absicherung geschäftskritischer Prozesse. Die Business Impact Analyse (BIA) dient dazu, systematisch folgende Kernfragen zu beantworten:

* Zeitkritikalität: Ist der Geschäftsprozess zeitkritisch?
* Ausfalltoleranz: Wie lange darf der Prozess maximal ausfallen, bevor nicht tolerierbare Schäden für die Institution entstehen?
* Ressourcenbedarf: Welche Ressourcen sind zwingend erforderlich, um den Prozess im Notbetrieb aufrechtzuerhalten?

Damit bildet die BIA das Fundament für die Priorisierung von Prozessen, die Definition von Wiederanlaufzielen (RTO, RPO) sowie die anschließende Planung von Notfall- und Wiederherstellungsmaßnahmen.

## BIA-Vorbereitung

### Anlegen der Geschäftsprozesse

Um mit der BIA zu starten, müssen die relevanten Prozesse im BCMS-Geltungsbereich als Objekte erfasst sein. Nutzen Sie hierfür vorhandene Synergien: Existiert in Ihrer Institution bereits ein Informationssicherheitsmanagementsystem (ISMS) oder ein Verzeichnis der Verarbeitungstätigkeiten (VVT) nach DS-GVO, können diese Daten als ideale Ausgangsbasis dienen.

* Neue Prozesse anlegen: Falls noch keine Prozesse erfasst sind, erstellen Sie diese neu über den Objekttyp Geschäftsprozess.

* Vorhandene Prozesse nutzen: Bereits existierende Prozesse aus der Datenschutz- oder ISMS-Domäne können Sie ganz einfach der BCMS-Domäne zuordnen.

![Geschäftsprozess einer Domäne in eine andere Domäne zuordnen](../assets/domain-bcm/verinice-46-assignObjectToDomain.gif)

### Dokumentation von Prozess-Details
Im Formular des jeweiligen Geschäftsprozesses können Sie spezifische Zusatzinformationen zur BIA hinterlegen. Dazu gehören:

* Art der Prozesskontinuität: z. B. kontinuierlich, ergebnisorientiert, zyklisch oder quasi-zyklisch
* Kritischste Zeiträume: Phasen, in denen ein Ausfall besonders schwerwiegende Folgen hätte
* Zuständigkeiten: Der/die BIA-Verantwortliche sowie die zuständige Organisationseinheit
* Datenerhebung: Die gewählte Methodik (z. B. Selbstauskunft, Einzelinterview, Workshop)

![Angaben zur BIA im Geschäftsprozess](../assets/domain-bcm/bia.png)

### Festlegung der Ressourcenkategorien und -cluster

Für einen strukturierten Überblick werden benötigte Ressourcen unter dem Objekttyp Ressource erfasst und über sogenannte Composites (Obergruppen) in Ressourcenkategorien und -cluster (z. B. Personal, IT-Systeme, Gebäude, Dienstleister, Informationen) unterteilt.

* Strukturierung: Einzelne Ressourcen ordnen Sie über den Reiter (Tab) Teile dem jeweils passenden Composite zu.
* Verantwortlichkeiten: Verknüpfen Sie direkt in der Ressource die zuständigen internen Personen oder externen Dienstleister.

![Verantwortliche Personen einer Ressource](../assets/domain-bcm/resource-1.png)

## Durchführung der BIA

### Ermittlung des Schadenspotenzials und der MTPD

Zur Identifikation zeitkritischer Prozesse muss das Schadenspotenzial jedes Geschäftsprozesses für die zuvor definierten Zeithorizonte bewertet werden. Diese Bewertung führen Sie vorerst außerhalb von verinice durch (als Hilfsmittel kann hierfür beispielsweise der Auswertungsbogen des BSI genutzt werden). Das Ergebnis können Sie im Formular des Geschäftsprozesses anhand eines Links zum separaten Dokument hinterlegen.

Aus dieser externen Bewertung ergibt sich eine erste maximale tolerierbare Ausfallzeit (MTPD), die Sie in verinice dokumentieren. Anschließend begründen Sie, wie die MTPD ermittelt wurde, welche Schadensszenarien ausschlaggebend für die Bewertung waren und ob es sich letztlich um einen zeitkritischen Geschäftsprozess handelt.

### Festlegung des Notbetriebsniveaus

Über das Feld Notbetriebsniveau definieren Sie, in welchem minimalen Leistungsumfang der Geschäftsprozess im Krisenfall betrieben werden muss, um nicht tolerierbare Schäden abzuwenden (z. B. Aufrechterhaltung von 60 % der regulären Kapazität, Nutzung vereinfachter manueller Verfahren).

### Abbildung von notfallrelevanten Prozessabhängigkeiten

Nach der ersten Bewertung werden die notfallrelevanten Abhängigkeiten zwischen den Prozessen analysiert. Dies ist notwendig, um festzustellen, ob sich die MTPD eines Prozesses durch die Abhängigkeit von einem anderen Prozess verringert. Ändert sich die Ausfalltoleranz durch diese Verknüpfungen, schlägt eine automatisierte Prüfung (Inspection) in verinice an:

* Unter Hinweise erscheint die Meldung, dass die MTPD aufgrund der Prozessabhängigkeiten abweicht.
* Das System schlägt daraufhin automatisch eine angepasste MTPD (MIN) vor.

### Festlegung der geforderten Wiederanlaufzeit (RTO) und der RPO und Abbildung der Ressourcenabhängigkeiten

Nach der finalen Bestimmung der MTPD wird ein Richtwert für die Recovery Time Objective (RTO) vorgegeben. Die RTO definiert die Zeitspanne, innerhalb derer die benötigten Ressourcen für den Notbetrieb des Geschäftsprozesses wieder einsatzbereit sein müssen.

Die RTO eines Prozesses muss zwingend kleiner als dessen MTPD sein.

Der Prozesseigentümer identifiziert und dokumentiert nach den Prozessabhängigkeiten auch die Ressourcenabhängigkeiten:

* Die für den Notbetrieb benötigten Ressourcen werden über den Custom-Link verknüpft.
* Direkt in diesem Custom-Link werden die spezifische RTO und RPO der Ressource für diesen konkreten Geschäftsprozess definiert.

### Besonderheit bei daten- und IT-basierten Ressourcen

Für informationsbasierte Ressourcenkategorien (z. B. Daten, IT-Systeme, Informationsspeicher) muss zusätzlich die Recovery Point Objective (RPO) bestimmt werden. Diese beschreibt den maximal tolerierbaren Datenverlust – also bis zu welchem Zeitpunkt Daten im Notbetrieb zurückliegen dürfen, ohne den Prozessablauf unzulässig zu beeinträchtigen.

Die RPO ist konzeptionell unabhängig von MTPD und RTO, wird jedoch im nächsten Schritt konsolidiert, wenn mehrere Prozesse auf dieselbe Ressource zugreifen.

### RTO und RPO konsolidieren

Nachdem alle Prozesseigentümer ihre Bedarfe dokumentiert haben, werden die RTO- und RPO-Anforderungen der verschiedenen Prozesse auf Ebene der jeweiligen Ressourcen konsolidiert. Die finalen Ergebnisse werden direkt in das Ressourcen-Objekt übernommen. Nutzen mehrere Prozesse dieselbe Ressource, gilt das Minimalprinzip: Die schärfste (kleinste) RTO oder RPO aller verknüpften Prozesse bestimmt die globale Anforderung für diese Ressource.

### Identifizierung von Single Points of Failure

Ressourcen, die von mehreren zeitkritischen Prozessen gemeinsam genutzt werden und bei deren Ausfall eine Kettenreaktion droht, sind als kritische Engpässe zu kennzeichnen. In verinice können diese Schwachstellen im Ressourcen-Objekt über das Feld Single-Point-of-Failure/of-Knowledge/of-Contact (SPoF/SPoK/SPoC) dokumentiert werden. Bevor Sie dies tun, können die SPoFs als bekannte Schwachpunkte direkt im übergeordneten Geschäftsprozess verknüpft werden.

verinice unterscheidet dabei drei Kategorien:

* SPoF (Single Point of Failure): Technische oder dienstleistungsbezogene Engpässe (z. B. eine zentrale Firewall, ein einziger externer Dienstleister).
* SPoK (Single Point of Knowledge): Wissensabhängigkeiten, bei denen geschäftskritisches Know-how nur bei einer einzelnen Person liegt.

* SPoC (Single Point of Contact): Kommunikationsabhängigkeiten, bei denen der Informationsfluss an einer einzigen Kontaktperson hängt.

## Entwickeln von Notfall- und BC-Lösungen zur Geschäftsfortführungsplanung

Sobald die Defizite und Anforderungen aus der BIA feststehen, müssen für die kritischen Ressourcen entsprechende Notfallkonzepte und -lösungen erarbeitet werden.

* Verknüpfung in verinice: Unter dem Abschnitt **Notfallplanung** können Sie die entsprechenden BC-Lösungen direkt mit den Ressourcen verknüpfen.

* Detaillierung: Die eigentliche Ausarbeitung der Geschäftsfortführungspläne erfolgt anschließend im spezifischen Subtyp **BC-Lösung** (Details hierzu finden Sie im Kapitel [Geschäftsfortführungs- und Wiederanlaufplanung](./create-Plans-for-Emergency)).
