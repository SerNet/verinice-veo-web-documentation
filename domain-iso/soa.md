<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# Erklärung zur Anwendbarkeit (SoA)

## Ziel der Funktion

Die Erklärung zur Anwendbarkeit (Statement of Applicability – SoA) dient als zentrales Element des ISMS nach ISO/IEC 27001. In dieser Funktion von verinice.veo dokumentieren Sie:

1. welche **Sicherheitsmaßnahmen aus Anhang A der ISO/IEC 27001** auf den definierten ISMS-Anwendungsbereich zutreffen,
1. aus welchem Grund sie anwendbar sind oder ausgeschlossen sind und
1. wie der aktuelle Umsetzungsstatus dieser Maßnahmen ist.

## Grundlagen: Scope-Objekte

In verinice steht für diesen Zweck der Scope-Subtyp **ISMS-Geltungsbereiche** zur Verfügung:

![Subtyp ISMS-Geltungsbereiche](/assets/domain-iso/verinice-39-subtype-scope.de.png)

Es können beliebig viele Geltungsbereiche angelegt werden, wie z.B.:

- **ISMS-Anwendungsbereich**: Beschreibt den organisatorischen und systemtechnischen Geltungsbereich des ISMS. Dieses Objekt kann die Grundlage für die Bewertung und die Anwendbarkeit von Sicherheitsmaßnahmen bilden.
- **Zertifizierungsgegenstand**: Beschreibt den konkreten Teil des Unternehmens, der zertifiziert werden soll. 

![ISMS-Geltungsbereiche und Zertifizierungsgegenstand](/assets/domain-iso/verinice-39-two-scopes.de.png)

## Sicherheitsmaßnahmen prüfen und Anwendbarkeit dokumentieren

### Auswahl des ISMS-Anwendungsbereichs

Navigieren Sie im Menü unter **Objekte** zu **Scopes** und dann zu **ISMS-Geltungsbereiche**. Im rechten unteren Rand des Bildschirms können Sie über den Plus-Button einen ISMS-Geltungsbereich anlegen und es im Formular beschreiben.

Alternativ wählen Sie im Dashboard den Subtyp **ISMS-Geltungsbereiche** und erstellen in der Objektübersicht ein entsprechendes Objekt.

### Zugriff auf die SoA-Funktion

Öffnen Sie den angelegten **ISMS-Geltungsbereich** und wählen Sie den Tab-Reiter **Sicherheitsmaßnahmen**. Über die Plus-Schaltfläche **Sicherheitsmaßnahmen auswählen** können Sie die anwendbaren Sicherheitsmaßnahmen für die Erklärung zur Anwendbarkeit auswählen und speichern. Wenn der *Katalog ISO/IEC 27001** bereits auf Ihre Unit angewendet wurde, wird die Liste der Sicherheitsmaßnahmen aus Anhang A der ISO/IEC 27001 automatisch geladen.

In der Liste müssen alle Sicherheitsmaßnahmen ausgewählt werden, die im Sinne einer Erklärung zur Anwendbarkeit angewendet werden müssen. Das können sowohl Sicherheitsmaßnahmen aus dem Anhang A als auch organisationsspezifische sein.

### Anwendbarkeit, Umsetzungsstatus und Begründung dokumentieren

Wenn die Sicherheitsmaßnahmen ausgewählt wurden, sind sie Bestandteil der Erklärung zur Anwendbarkeit und werden für den Report als **anwendbar** markiert. 

Um die Auswahl für eine Sicherheitsmaßnahme zu begründen, klicken Sie im Tab-Reiter **Sicherheitsmaßnahmen** auf die entsprechende Maßnahme

![Auswahl von Sicherheitsmaßnahmen](/assets/domain-iso/verinice-39-select-control.de.png)

und geben im Beschreibungsfeld Ihren Auswahlgrund ein:

![Auswahlgrund](/assets/domain-iso/verinice-39-select-reason.de.png)

Um den Umsetzungsstatus einer Sicherheitsmaßnahme zu dokumentieren, öffnen Sie den Umsetzungs-Dialog durch Mausklick auf das Icon **Umsetzung anzeigen**:

![Umsetzung anzeigen](/assets/domain-iso/verinice-39-show-implementation.de.png)

Öffnen Sie die entsprechende Maßnahmen und dokumentieren Sie im unteren Bereich den aktuellen Umsetzungsstatus:

![Umsetzung anzeigen](/assets/domain-iso/verinice-39-implementation-status.de.png)

Sicherheitsmaßnahmen mit den Umsetzungsstatus **Ja**, **Nein**, **Teilweise** oder **Unbearbeitet** werden als **anwendbar** im Report **Erklärung zur Anwendbarkeit** markiert.

Wenn eine Sicherheitsmaßnahme Bestandteil der Erklärung der Anwendbarkeit sein soll aber explizit **ausgeschlossen** werden soll, wählen Sie die Sicherheitsmaßnahme im Tab-Reiter **Sicherheitsmaßnahmen** aus:

![Auswahl von Sicherheitsmaßnahmen](/assets/domain-iso/verinice-39-document-exclusion.de.png)

Und geben Sie Beschreibungsfeld die Begründung für den Ausschluss ein:

![Begründung für den Ausschluss](/assets/domain-iso/verinice-39-description-exclusion.de.png)

Damit die Sicherheitsmaßnahmen als nicht anwendbar im Report ausgegeben werden kann, muss der Umsetzungsstatus in den Umsetzungsdetails auf **Entbehrlich** gesetzt werden.

## SoA-Report

Ein vollständig ausgefüllter Report für die Erklärung zur Anwendbarkeit kann zur weiteren Verwendung im PDF-Format exportiert werden. Klicken Sie dazu im linken Menü auf **Reports** und wählen Sie die **Erklärung zur Anwendbarkeit** aus:

![Report Erklärung zur Anwendbarkeit](/assets/domain-iso/verinice-39-report-soa.de.png)

Wählen Sie einen ISMS-Geltungsbereich mit den zugeordnet Sicherheitsmaßnahmen der ISO/IEC 27001, Anhang A aus und klicken Sie auf **Report generieren**.
