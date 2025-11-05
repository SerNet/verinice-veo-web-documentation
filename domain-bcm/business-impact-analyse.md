<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# Business Impact Analyse (BIA)

Ein wesentliches Ziel des BCMS ist die Sicherstellung einer angemessenen Absicherung der **geschäftskritischen Prozesse**. Die BIA dient dazu, systematisch zu ermitteln:

- ob ein Geschäftsprozess **zeitkritisch** ist,  
- wie lange dieser ausfallen darf, bevor nicht tolerierbare Schäden entstehen, und  
- welche Ressourcen erforderlich sind, um den Prozess im Notbetrieb fortzuführen.  

Die BIA bildet somit die Grundlage für:

- die **Priorisierung von Prozessen**,  
- die **Definition von Wiederanlaufzielen (RTO, RPO)**, sowie  
- die **Planung von Notfallvorsorge- und Wiederherstellungsmaßnahmen**.

## BIA-Vorbereitung

### Anlegen der Geschäftsprozesse

Im **BCMS-Geltungsbereich** können die zu betrachtenden **Geschäftsprozesse** als Objekte hinzugefügt werden. Liegt in der Institution ein ISMS vor, können die dort identifizierten Geschäftsprozesse als Ausgangsbasis genutzt werden. Auch das **Verzeichnis der Verarbeitungstätigkeiten** gemäß DS-GVO kann unterstützend herangezogen werden, da Verfahrenstätigkeiten häufig direkt Geschäftsprozessen entsprechen oder daraus abgeleitet werden können.

Falls noch keine Geschäftsprozesse in verinice angelegt sind, können diese über den Objekt-Typ **Geschäftsprozess** neu erstellt werden, oder bereits vorhandene Prozesse aus der **Datenschutz- oder ISMS-Domäne** der **BCMS-Domäne** zugeordnet werden.  

![Geschäftsprozess einer Domäne in eine andere Domäne zuordnen](/assets/domain-bcm/verinice-46-assignObjectToDomain.gif)

Bevor die Ergebnisse der Schadensbewertung festgehalten werden, können zusätzliche Informationen zum Geschäftsprozess oder allgemein zur Business Impact Analyse (BIA) dokumentiert werden. Dazu zählen unter anderem:

- Art der Prozesskontinuität (kontinuierlich, ergebnisorientiert, zyklisch oder quasi-zyklisch),
- kritischste Zeiträume,
- der oder die BIA-Zuständige,
- die verantwortliche Organisationseinheit,
- die Art der Datenerhebung (z. B. Selbstauskunft, Einzelinterview, Workshop),
- sowie der Standort des Prozesses.

![Angaben zur BIA im Geschäftsprozess](/assets/domain-bcm/verinice-46-bia1.png)

### Festlegung der Ressourcenkategorien und -cluster

Unter dem Objekt-Typ **Ressource** können die **Ressourcenkategorien** und **-cluster** als Composites definiert werden (z. B. Personal, IT-Systeme, Gebäude, Dienstleister, Informationen).

Einzelne Ressourcen können wiederum unter Teile diesem Composite / dieser Obergruppe zugeordnet werden. 

### Festlegung der BIA-Parameter und Zeithorizonte

In der BIA wird analysiert, welche Schäden über den Zeitverlauf durch den Ausfall eines Geschäftsprozesses entstehen können. Hierzu werden **Zeithorizonte** definiert, anhand derer die Schadensentwicklung bewertet wird. In verinice erfolgt die Konfiguration unter der BCMRA (Risikodefinition). Dort können Sie:

- die **Zeithorizonte verwalten**,  
- **Schadenskategorien** definieren,  
- **Schadensszenarien** beschreiben, um das Schadenspotenzial zu konkretisieren.  

![Zeithorizonte, Schadenskategorien und Schadensszenarien verwalten in der BCMRA](/assets/domain-bcm/verinice-46-bcmra.png)

Nach dem Speichern stehen die konfigurierten Zeithorizonte unter jedem Geschäftsprozess zur Verfügung. Dort kann das **Schadenspotenzial nach Zeithorizont bewertet und dokumentiert** werden.

## Durchführung der BIA

### Ermittlung des Schadenspotenzials und der MTA

Zur Identifikation zeitkritischer Prozesse wird das **Schadenspotenzial** jedes Geschäftsprozesses für die zuvor definierten Zeithorizonte bewertet. In verinice erfolgt diese Bewertung im Geschäftsprozess-Objekt nach dem **Worst-Case-Prinzip**, bei dem das höchste mögliche Schadensausmaß berücksichtigt wird. 

Anschließend kann eine Begründung dokumentiert und bewertet werden, welche **Schadensszenarien** ausschlaggebend für die Bewertung sind und ob es sich um einen zeitkritischen Geschäftsprozess handelt.  

Aus dieser Bewertung ergibt sich die **MTA**, diese kann (noch) manuell erfasst werden.  

![Incident](/assets/domain-bcm/verinice-46-bia2.gif)

### Abbildung von notfallrelevanten Prozessabhängigkeiten

Nach der ersten Bewertung sollten die notfallrelevanten Prozessabhängigkeiten analysiert werden, um festzustellen, ob sich die MTA aufgrund dieser Abhängigkeiten verändert.
Dazu können Custom-Links zwischen Prozessen erstellt werden, um vorgelagerte, parallele oder nachgelagerte Abläufe darzustellen. Zu der Verknüpfung kann ebenfalls eine MTA des benötigten Geschäftsprozesses aufgrund der Abhängigkeit zu diesem Geschäftsprozess mit Begründung dokumentiert werden. 

Ändert sich durch die Abhängigkeiten die MTA, ist der neue Wert im Feld **MTA (nach Prozessabhängigkeiten)** zu dokumentieren. Anschließend kann die MTPD unter **MTA(MIN)** entsprechend angepasst und final festgelegt werden.

![Abbildung von Prozessabhängigkeiten](/assets/domain-bcm/verinice-46-bia3.png)

### Festlegung der geforderten Wiederanlaufzeit (RTO)

Nach Bestimmung der MTPD ist die **Recovery Time Objective (RTO)** festzulegen – die Zeitspanne, innerhalb derer der Geschäftsprozess nach einem Ausfall wieder funktionsfähig sein muss. Die RTO muss kleiner als die MTA sein.

Der **Prozesseigentümer** kann die RTO im Feld **RTO für notwendige Ressourcen** des Geschäftsprozesses dokumentieren.

Tragen Sie die RTO im Feld unter dem jeweiligen Geschäftsprozess ein.

### Festlegung des Notbetriebsniveaus

Zusätzlich zur RTO und MTA kann unter dem Feld **Notbetriebsniveau** definiert werden, in welchem Leistungsumfang der Geschäftsprozess im Notbetrieb betrieben werden soll (z. B. 60 % Kapazität, vereinfachte Verfahren).

### Festlegung des maximal tolerierbarer Datenverlust (RPO)

Für **informationsbasierte Ressourcenkategorien** (z. B. Daten, IT-Systeme, Informationsspeicher) ist zusätzlich die **Recovery Point Objective (RPO)** zu bestimmen.  
Diese beschreibt, bis zu welchem Zeitpunkt die Daten im Notbetrieb zurückliegen dürfen, ohne dass der Prozessablauf beeinträchtigt wird. Die RPO ist unabhängig von MTPD und RTO, sollte jedoch nach dem Minimalprinzip konsolidiert werden, wenn mehrere Prozesse dieselbe Ressource nutzen.

Der **Prozesseigentümer** kann die RPO im Feld **Maximal zulässiger Datenverlust (RPO)** des Geschäftsprozesses festlegen.  

![Dokumentation der RPO und RTO im Geschäftsprozess](/assets/domain-bcm/verinice-46-biaRtoRpo.png)

### RTO und RPO konsolidieren

Die Ressourcenverantwortlichen leiten aus den Ergebnissen der Prozesseigentümer den maximal zulässigen Datenverlust (RPO) bzw. die geforderte Wiederanlaufzeit (RTO) einer Ressource ab und dokumentieren diese in der jeweiligen Ressource. Nutzen mehrere Prozesse dieselbe Ressource, gilt das Minimalprinzip: Die kleinste RTO oder PRO bestimmt die Anforderung für die Ressource.


Tragen Sie die Werte derzeit manuell im Ressourcen-Objekt unter **Geforderte Wiederanlaufzeit (RTO)** und **Maximal zulässiger Datenverlust (RPO)** ein.

![Konsolidierung der RPO und RTO auf die Ressourcen](/assets/domain-bcm/verinice-46-rtoRpoResource.png)

## Abbildung von Ressourcenabhängigkeiten

### Ressourcenabhängigkeiten

Für alle zeitkritischen Geschäftsprozesse müssen die erforderlichen **Ressourcen** identifiziert und den Prozessen zugeordnet werden. Diese Verknüpfung bildet die Basis für die Planung der **Geschäftsfortführung** im Not- und Krisenfall.

### Identifizierung von Single Points of Failure

Ressourcen, die von mehreren zeitkritischen Prozessen gemeinsam genutzt werden, sind als **Single Points of Failure (SPoF)** zu kennzeichnen. In verinice kann dies über das Feld  
**Single-Point-of-Failure/of-Knowledge/of-Contact (SPoF/SPoK/SPoC)** in dem Ressourcen-Objekt erfolgen. Zuvor können die SPoFs als Bekannte Schwachpunkte in einem Geschäftsprozess verknüpft werden. 

Unterschieden wird zwischen:

- **SPoF:** Technische oder dienstleistungsbezogene Engpässe  
- **SPoK:** Wissensabhängigkeiten einzelner Personen  
- **SPoC:** Kommunikationsabhängigkeiten einzelner Kontakte  

![Abbildung von Ressourcenabhängigkeiten](/assets/domain-bcm/verinice-46-bia4.gif)

## Ausblick – Ressourcenbedarf im Notbetrieb

Das **verinice.TEAM** arbeitet an Funktionen zur **automatisierten Berechnung und Konsolidierung** von **MTPD-, RTO- und RPO-Werten** sowie zur Ermittlung des Ressourcenbedarfs, z. B. Personal, Arbeitsplätze, Maschinen, IT-Arbeitsmittel, über die Dauer des Notbetriebs, um die Kontinuität im Notbetrieb zu gewährleisten.
