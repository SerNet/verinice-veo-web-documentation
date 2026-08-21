<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# Durchführung des Soll-Ist-Vergleichs

Nach Abschluss der **Business Impact Analyse (BIA)** liegen für alle betrachteten zeitkritischen Ressourcen die **Recovery Time Objectives (RTO)** sowie – sofern relevant – die **Recovery Point Objectives (RPO)** vor.  
Diese Werte stellen die **Soll-Anforderungen** an die Wiederherstellungsfähigkeit dar.  
Im Rahmen des Soll-Ist-Vergleichs wird überprüft, ob die bestehenden technischen und organisatorischen Maßnahmen ausreichen, um diese Zielwerte tatsächlich zu erreichen.

## Durchführung des Soll-Ist-Vergleichs

### Vergleich von RTO und RTA

Die Ressourcenzuständigen prüfen für jede zeitkritische Ressource, ob die geforderte **RTO** mit den vorhandenen Maßnahmen eingehalten werden kann.  
Hierzu wird die **tatsächliche Wiederanlaufzeit (RTA – Recovery Time Actual)** ermittelt und der RTO gegenübergestellt.

Die RTA beschreibt den real erreichbaren Zeitraum ab dem **Ausruf des Notfalls** bis zum Zeitpunkt, an dem die **BC-Lösung produktiv** bereitsteht.  
In verinice erfolgt die Erfassung im Bereich **Soll-Ist-Vergleich** in der jeweiligen Ressource.  
Dort sind folgende Schritte vorzunehmen:

1. **Erfassen Sie die RTA.**  
1. **Dokumentieren Sie den Nachweis**, auf dessen Grundlage die Zeit ermittelt wurde.  
3. Über eine integrierte Inspection wird der Soll-Wert (RTO) kontinuierlich mit dem Ist-Wert (RTA) verglichen. Überschreitet die tatsächliche Wiederanlaufzeit die RTO wird die Abweichung von verinice ausgewertet und eine entsprechende Warnmeldung ausgegeben.

### Vergleich von RPO und RPA

Für informationsbasierte Ressourcen wird analog die **RPO** mit dem **Recovery Point Actual (RPA)** verglichen, der den tatsächlich zu erwartenden Datenverlust beschreibt.  
In verinice steht ein Feld zur Verfügung, um den **Datensicherungszyklus** zu erfassen. 

Über eine integrierte Inspection wird der Soll-Wert (RPO) kontinuierlich mit dem Ist-Wert (RPA) verglichen. Überschreitet die RPA die RPO wird die Abweichung von verinice ausgewertet und eine entsprechende Warnmeldung ausgegeben.

## Auswertung und Freigabe der Ergebnisse 

Nach Abschluss des Soll-Ist-Vergleichs sollte eine **Gesamtübersicht aller zeitkritischen Ressourcen** erstellt werden, insbesondere jener, bei denen die Soll-Werte nicht erreicht werden. Diese Übersicht wird der **Institutionsleitung** vorgelegt und mit ihr abgestimmt.
Die Institutionsleitung sollte folgende Informationen erhalten und bestätigen:

- Übersicht der **zeitkritischen Geschäftsprozesse** gemäß BIA  
- Übersicht der **zeitkritischen Ressourcen** gemäß BIA  
- Übersicht der **unzureichend abgesicherten Ressourcen** gemäß Soll-Ist-Vergleich  
- Einschätzung der **Risiken** aus identifizierten Lücken  

Auf Basis dieser Ergebnisse werden **BC-Strategien** zur Schließung bestehender Lücken entwickelt und bewertet.
