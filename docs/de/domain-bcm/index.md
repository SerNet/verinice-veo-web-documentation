<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# Arbeiten in der BCM-Domäne BSI 200-4 (DE)

Die BCM-Domäne in verinice bildet die organisatorische und methodische Grundlage für den Aufbau, die Umsetzung und die kontinuierliche Pflege eines Business Continuity Management Systems (BCMS) gemäß dem BSI-Standard 200-4. Das Modul führt alle strategischen und operativen Fäden zusammen – von der Definition des Geltungsbereichs über die Business Impact Analyse (BIA) bis hin zu ausgereiften Notfall-, Wiederanlauf- und Wiederherstellungsplänen sowie dem Notfallhandbuch. Durch die enge Integration mit dem **Informationssicherheits-Managementsystem (ISMS)** in verinice lassen sich Synergien nutzen und redundante Dokumentationen vermeiden.

- Lernen Sie den Aufbau der [Domäne BSI 200-4 (DE)](./domain-bcm-description) kennen. 
- Wenden Sie [BCM-Profile](./profilesBCM) an.

## Planung und Konzeption des BCMS/der Krisenbewältigung

- Definieren Sie den [Kontext der Organisation](./context-bcm): 
  - Festlegung des BCMS-Geltungsbereichs, Auswahl der BCMS-Stufe, Verknüpfung der Leitlinie, Benennung des BC-Beauftragten (BCB) sowie Abbildung von Organisationsstrukturen und Zuständigkeiten.
  - Interessengruppen & Notfallkommunikation: Identifikation interner und externer Interessengruppen inklusive Einflussbewertung und detaillierter Kommunikationsplanung (Rollen, Wege, Intervalle).
  - Besondere Aufbauorganisation (BAO): Abbildung von Krisenstäben und operativen Notfallteams samt Stellvertretungen, Erreichbarkeiten und Aufgabenbeschreibungen.
- Zentrales Notfallhandbuch: Planen Sie die [Notfall- und Krisenbewältigung](./crisis-management), um auch ohne detaillierte Notfallpläne handlungsfähig zu bleiben, und fassen Sie die Ergebnisse in einem Notfallhandbuch (Bündelung der BAO-Vorgaben sowie Referenzierung operativer Pläne, Richtlinien, Meldeketten und Checklisten) zusammen. 

## Business-Impact-Analyse, Soll-Ist Vergleich und Risikoanalyse
- Führen Sie eine [Business-Impact-Analyse (BIA)](./business-impact-analyse) durch, um zeitkritische Geschäftsprozesse zu identifizieren, und bestimmen Sie die Notbetriebsniveaus und Prozess- und Ressourcenabhängigkeiten.

  - Kennzahlenermittlung (MTPD, RTO, RPO): Ermittlung der maximal tolerierbaren Ausfallzeit (MTPD) nach dem Worst-Case- und Minimalprinzip sowie Ableitung und Konsolidierung der Wiederanlaufzeiten (RTO) und des maximal tolerierbaren Datenverlusts (RPO).

  - Engpass- & Single-Point-Analyse: Erfassung kritischer Abhängigkeiten bezüglich Technik/Dienstleistung (SPoF), Wissen (SPoK) und Kommunikation (SPoC).

- [Soll-Ist-Vergleiche](./targetActualComparison): Abgleich von Soll- und Ist-Wiederanlaufzeiten(RTO) sowie RPO-Werten.

- Nutzen Sie die ISMS-Domäne zur Durchführung der Risikoanalyse, um Risiken für die Geschäftskontinuität frühzeitig zu ermitteln und zu bewerten. Auf Basis dieser
[ISMS-Risikobewertung werden in der BCM-Domäne die passenden Notfallpläne/BC-Lösungen](./riskmanagement) erarbeitet.

## BC-Strategie, Geschäftsfortführung- und Wiederherstellungsplanung

- BC-Strategien & BC-Lösungen: Bewerten Sie Ihre [Business-Continuity-Strategien](./bcStrategy) nach einem einheitlichen Bewertungsschema zur Vorbereitung auf die Überführung in konkrete BC-Lösungen.
- Planen Sie [Wiederanlauf, Wiederherstellung und Geschäftsfortführung](./create-Plans-for-Emergency) Ihrer zeitkritischen Ressourcen sowie zeitkritischen Geschäftsprozesse unter Berücksichtigung der definierten BC-Strategien. 
 
## Leistungsüberprüfung und kontinuierliche Verbesserung

- Compliance- & [Leistungsüberprüfungen](./compliance-check): Überprüfung des Umsetzungsstands anhand des BSI-Anforderungskatalogs (BSI 200-4) oder eigener Kataloge
- Lieferketten- & Dienstleisterüberwachung: Einsatz von Grundanforderungskatalogen zur Überprüfung kritischer Dienstleister, Outsourcing-Partner und Notfall-SLAs.
- Schadensbewältigung & KVP: Dokumentation von Incidents/Schadensereignissen inklusive Checklisten zur Schadensbewältigung, Ursachenanalyse, Lessons Learned und Verfolgung von [Korrekturbedarfen und Verbesserungspotenzialen](./improvement-measure).

