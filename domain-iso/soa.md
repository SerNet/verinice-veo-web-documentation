<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# Erklärung zur Anwendbarkeit (Statement of Applicability – SoA)

## Ziel der Funktion

Die Erklärung zur Anwendbarkeit (Statement of Applicability – SoA) dient als zentrales Element des ISMS nach ISO/IEC 27001. In dieser Funktion von verinice.veo dokumentieren Sie, **welche Sicherheitsmaßnahmen aus Anhang A der ISO/IEC 27001 auf den definierten ISMS-Anwendungsbereich zutreffen**, aus welchem Grund sie anwendbar oder ausgeschlossen sind und **wie der aktuelle Umsetzungsstatus dieser Maßnahmen ist**.

## Grundlagen: Scope-Objekte

In verinice.veo unterhalb von **Scopes** steht für diesen Zweck der Subtyp **ISMS-Geltungsbereiche** zur Verfügung:

![Subtyp ISMS-Geltungsbereiche](/assets/domain-iso/subtype_scope.png)

Für diesen Subtyp können beliebig viele Geltungsbereiche angelegt werden. Dabei kann es sich z.B. um folgende handeln:

- **ISMS-Anwendungsbereich**: Beschreibt den organisatorischen und systemtechnischen Geltungsbereich des ISMS. Dieses Objekt kann die Grundlage für die Bewertung und die Anwendbarkeit von Sicherheitsmaßnahmen bilden.
- **Zertifizierungsgegenstand**: Beschreibt den konkreten Teil des Unternehmens, der zertifiziert werden soll. 

![ISMS-Geltungsbereiche und Zertifizierungsgegenstand](/assets/domain-iso/two_scopes.png)


## Sicherheitsmaßnahmen prüfen und Anwendbarkeit dokumentieren

### Auswahl des ISMS-Anwendungsbereichs

Navigieren Sie im linken Menü unter **Objekte** zu **Scopes** und dann zu **ISMS-Geltungsbereiche**. Im rechten unteren Rand des Bilschirms können Sie über das Plus-Button ein ISMS-Geltungsbereich-Objekt anlegen und es im Formschema beschreiben.

Alternativ: Wählen Sie im Dashboard den Subtyp **ISMS-Geltungsbereiche* und erstelle sich in der Objektübersicht ein entsprechendes Objekt.

### Zugriff auf die SoA-Funktion

Nach dem Speichern, kann das angelegte Objekt in der Objektübersicht ausgewählt werden und unter **Objektdetails** der Tab-Reiter **Sicherheitsmaßnahmen** ausgewählt werden. In den **Objektdetails** über das den Plus-Button die anwendbaren Sicherheitsmaßnahmen für die Erklärung zur Anwendbarkeit ausgewählt und gespeichert werden.Wenn der verinice.veo-Katalog zu ISO/IEC 27001 auf eine Unit bereits angewendet wurde, wird die Liste der Sicherheitsmaßnahmen aus Anhang A der ISO/IEC 27001 automatisch geladen.

In der Liste müssen alle Sicherheitsmaßnahmen ausgewählt werden, die im Sinne einer Erklärung zur Anwendbarkeit angewendet werden müssen. Das können sowohl Sicherheitsmaßnahmen aus dem Anhang A sein als auch organisationsspezifische sein.

### Anwendbarkeit, Umsetzungsstatus und Begründung dokumentieren

Wenn die Sicherheitsmaßnahmen ausgewählt wurden, sind sie Bestandteil der Eklärung zur Anwendbarkeit und werden für den Report als **anwendbar** markiert. 

Um die Auswahl für eine Sicherheitsmaßnahme zu begründen, klicken Sie in den **Objektdetails** auf die entsprechende Maßnahme

![Auswahl von Sicherheitsmaßnahmen](/assets/domain-iso/select_control.png)

und geben Sie im Beschreibungsfeld Ihren Auswahlgrund ein:

![Auswahlgrund](/assets/domain-iso/select_reason.png)

Um den Umsetzungssstatus einer Sicherheitsmaßnahme zu verändern, muss unter **Objektdetails** der **Umsetzung anzeigen**-Button geklickt werden

![Umsetzung anzeigen](/assets/domain-iso/show_implementation.png)

und anschließend die entsprechende Maßnahmen ausgewählt werden.

Im Dialog für die Sicherheitmaßnahme finden Sie im unteren Bereich den aktuellen Umsetzungsstatus einer Sicherheitsmaßnahme, den Sie verändern können:

![Umsetzung anzeigen](/assets/domain-iso/implementation_status.png)

Sicherheitmaßnahmen, muss den Umsetzungsstatus **Ja**, **Nein**, **Teilweise** oder **Unbearbeitet** werden als awenbar im Report Erklärung zur Anwendbarkeit markiert.

Wenn Sicherheitsmaßnahmen Bestandteil der Erklärung der Anwendabrkeit sein aber explizit ausgeschlossen werden sollen, dann wählen Sie die Sicherheitßmaßnahmen in den **Objektdatails** aus:

![Auswahl von Sicherheitsmaßnahmen](/assets/domain-iso/document_explusion.png)

Und geben Sie Beschreibungsfeld die Begründung für den Ausschluss ein:

![Begrünund für den Ausschluss](/assets/domain-iso/decription_exlclusion.png)

Damit die die Sicherheitsmaßnahmen als nicht anwendbar im Report ausgegeben werden kann, muss der Umsetzungsstatus in den Umsetzungsdetails auf **Entbehrlich** gesetzt werden.


## Report

Ein vollständig ausgefüllter Report für die Erklärung zur Anwendbarkeit kann zur weiteren Verwendung im PDF-Format exportiert werden. Klicken Sie dazu im linken Menü auf **Reports** und wählen Sie die Reportvolage für die Erklärung für Anwedbarkeit aus:

![Reprot für Erklärung zur Anwendbarkeit](/assets/domain-iso/report_soa.png)

Anschließend wählen müssen einen ISMS-Geltungsbereich mit den zugeordnet Sicherheitsmaßnahmen der ISO/IEC 27001, Anhang A aus und klicken unten rechts auf **Report generieren**.
