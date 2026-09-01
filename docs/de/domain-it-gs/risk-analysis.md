<!-- © 2024 The Project Contributors - see AUTHORS.txt -->
# Risikoanalyse nach 200-3

## Definitionen

Im BSI IT-Grundschutz nach 200-x können je Unit unterschiedliche Parameter für die Risikoberechnung definiert werden. Die organisationsweite und für alle Zielobjekte gültige Risikomatrix wird unter [Risikodefinitionen](../manual/risk-definition.md) definiert. Navigieren Sie dazu im Menü zu **Risikodefinitionen** und anschließend **GSRA**. Hier können Sie mit einem **Klick auf das Stift-Symbol** die Kategorien bearbeiten. Dabei können Sie folgende Parameter an Ihre Anforderungen anpassen:

- Eintrittswahrscheinlichkeit
  - Name und Definition der Kategorien
- Schadenshöhe
  - Name und Definition der Kategorien
- Risikokategorien
  - Name, Definition und Farbe der Kategorien

![Risikomatrix](../assets/domain-it-gs/verinice-32-risk-matrix.png)

## Gefährdungsübersicht erstellen

Sofern eine Risikoanalyse erforderlich ist, müssen Sie im Zielobjekt bei den Objektdetails eine **Gefährdungsübersicht erstellen**. Dies kann z.B. erforderlich sein, wenn das Zielobjekt in einem der drei Schutzziele einen hohen oder sehr hohen Schutzbedarf aufweist.

![Gefährdungsübersicht erstellen](../assets/domain-it-gs/verinice-59-threat-overview-DE.png)

Durch diese Aktion werden die elementaren Gefährdungen entsprechend der Kreuzreferenztabellen des BSI in Ihre Unit kopiert und im Objektumfeld des Zielobjekts Risikoobjekte für jede elementare Gefährdung angelegt:

![Risiken](../assets/domain-it-gs/verinice-59-risks-DE.png)

## Risikobewertung

Um die einzelnen Elementaren Gefährdungen weiter bearbeiten zu können, klicken Sie auf die entsprechende Gefährdung und es öffnet sich ein Dialog. Hier kann als erstes die Risikobewertung vorgenommen werden. Bewerten Sie hierzu folgende Parameter:

- **Eintrittswahrscheinlichkeit** (und gegebenenfalls eine Erklärung)
- **Auswirkung hinsichtlich der Schadenshöhe** (und gegebenenfalls eine Erklärung)

Aus diesen beiden Werten wird nachdem Sie Ihre Eingaben gespeichert haben automatisch das **Bruttorisiko** anhand der Risikomatrix berechnet.

![Risikobewertung](../assets/domain-it-gs/verinice-32-risk-assessment.png)

## Risikobehandlung

Je nach Höhe des Risikos kann bzw. muss eine Risikobehandlung vorgenommen und gegebenenfalls eine Erklärung dokumentiert werden. Sie können mehrere **Behandlungsoptionen** auswählen, es stehen folgende Optionen zur Auswahl:

- Risikoakzeptanz
- Risikovermeidung
- Risikoreduktion
- Risikotransfer

![Risikobehandlung](../assets/domain-it-gs/verinice-32-risk-treatment.png)

### Risikoreduktion

Bei gewählter Risikobehandlungsoption **Risikoreduktion** kann das Risiko durch Hinzufügen ergänzender Sicherheitsmaßnahmen reduziert werden. Dabei haben Sie zwei Möglichkeiten mitigierende Maßnahmen zu hinterlegen:

1. Um eine **neue Maßnahme** zu erstellen klicken Sie **Mitigierende Maßnahmen hinzufügen** und anschließend **Mitigierende Maßnahme erstellen**. Es öffnet sich ein Dialog, um die neue Maßnahme zu erstellen. Nachdem Sie Ihre Daten zur Maßnahme gespeichert haben, wird die neue Maßnahme im vorherigen Risikodialog im Bereich **Maßnahmen zur Risikoreduktion** angezeigt. 

1. Um bereits **vorhandene Maßnahmen** zu verknüpfen klicken Sie **Mitigierende Maßnahmen hinzufügen** und anschließend **Mitigierende Maßnahme verknüpfen**. Es öffnet sich ein Dialog, in dem Sie aus allen bereits vorhandenen Maßnahmen die benötigten mitigierenden Maßnahmen auswählen können. Nachdem Sie den Dialog mithilfe von **Speichern** schließen, werden die ausgewählten Maßnahmen im Bereich **Maßnahmen zur Risikoreduktion** angezeigt:

![Vorhandene Maßnahmen verknüpfen](../assets/domain-it-gs/verinice-32-risk-reduction-1.png)

![Maßnahmen zur Risikoreduktion (Mitigierende Maßnahmen)](../assets/domain-it-gs/verinice-32-risk-reduction-2.png)

Abschließend muss das **Nettorisiko** (und gegebenenfalls eine Erklärung) manuell gesetzt werden. **Speichern** und **Schließen** Sie den Risikodialog.

### Mitigierende Maßnahmen bearbeiten

Um Ihre mitigierenden Maßnahmen bearbeiten zu können, klicken Sie **Umsetzung anzeigen** bei der entsprechenden elementaren Gefährdung im Tab **Risiken** im Objektumfeld des Zielobjektes.

![Mitigierende Maßnahmen: Umsetzung anzeigen](../assets/domain-it-gs/verinice-59-risks-DE.png)

Sie gelangen zur Übersicht aller mitigierenden Maßnahmen für die ausgewählte Elementare Gefährdung.

![Mitigierende Maßnahmen: Umsetzung anzeigen](../assets/domain-it-gs/verinice-59-safeguards-DE.png)

Hier können Sie die einzelnen Maßnahmen bearbeiten. Durch Klick auf eine Maßnahme öffnet sich der Umsetzungsdialog, in dem Sie folgenden Informationen in drei Abschnitten einsehen bzw. einpflegen können:

1. Informationen zum Zielobjekt (informativ/schreibgeschützt)

![RI-Zielobjekt](../assets/domain-it-gs/verinice-59-ri-dialog-target-object-DE.png)

2. Maßnahmenbeschreibung, z.B. aus dem IT-Grundschutz-Kompendium (informativ/schreibgeschützt)

![RI-Anforderung](../assets/domain-it-gs/verinice-59-ri-dialog-requirement-DE.png)

3. Informationen zur Umsetzung dokumentieren Sie in drei Abschnitten:

![RI-Umsetzung](../assets/domain-it-gs/verinice-59-ri-dialog-implementation-DE.png)

**Umsetzung**

- Umsetzungsstatus (Unbearbeitet, Ja, Teilweise, Nein, Entbehrlich)
- Verantwortliche Person
- Umsetzung bis (Datum)
- Kosten für die Umsetzung

**Dokumentation**

- Umgesetzt am
- Umgesetzt durch
- Umsetzungsbeschreibung
- Link zu einem Dokument oder einer Aufzeichnung

**Revision**

- Letzte Revision am
- Letzte Revision durch
- Nächste Revision am
- Nächste Revision durch

Nachdem Sie die Daten eingetragen haben, schließen Sie den Dialog mit **Speichern**.
