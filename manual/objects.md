<!-- © 2024 The Project Contributors - see AUTHORS.txt -->
# Objekte

Im Abschnitt Objekte können Objekte angelegt, bearbeitet oder gelöscht werden.

## Objektübersicht {#objektuebersicht}

Die Navigation über das Menü oder das Dashboard öffnet die Objektübersicht, die immer eine gefilterte Liste von Objekten angezeigt.

### Filter

Die aktiven Filterkriterien werden über der Objektliste dargestellt:

![Filterkriterien](/assets/manual/filter-chips.de.png)

1. Als Mindestkriterium ist immer der **Objekttyp** erforderlich!
1. Durch Löschen **optionaler Filterkriterien** erweitern Sie die Objektübersicht direkt.
1. Für die Filterung nach weiteren Kriterien öffnen Sie den **Filterdialog**:

![Filter](/assets/manual/filter.de.png)

### Suche

Um über die Filterung hinaus gezielt bestimmte Objekte zu finden, steht die **Suche** zur Verfügung.

Per Vorgabe wird jeder eingegebene Text in Abkürzung und Name (und Designator) gesucht. Optional können Sie die Suche auf die Abkürzung oder den Namen beschränken:

![Suche](/assets/manual/suche.de.gif)

### Liste

Die Objektübersicht dient der schnellen Orientierung und Navigation innerhalb der Liste:

![Objektübersicht](/assets/manual/object-list.de.png)

1. Sie **öffnen** ein Objekt zur Bearbeitung durch Mausklick auf die jeweilige Zeile.
1. **Sortieren** Sie die Objektliste nach den wichtigsten Spalten auf- oder absteigend.
1. Je nach Anzahl der Objekte in der Liste **navigieren** Sie durch zusätzliche Seiten oder erweitern die Anzahl der je Seite dargestellten Objekte.
1. **Duplizieren** Sie ein Objekt um eine Kopie zur weiteren Bearbeitung zu erstellen.
1. Nicht mehr benötigte Objekte **löschen** Sie nach Bestätigung einer Sicherheitsabfrage.
1. Stehen **weitere Funktionen** zur Verfügung können Sie diese hier auswählen.
1. **Erstellen** Sie ein neues Objekt mit Objekttyp und Subtyp entsprechend der aktuellen Filterkriterien.

## Objektansicht

Nach Öffnen eines Objektes werden weitere Informationen zum Objekt in zwei Spalten dargestellt:

![Objektansicht](/assets/manual/object.de.png)

**Links:**

1. Die [Objektdetails](#objektdetails).
1. Eine Tabelle mit allen Objekten im [Objektumfeld](#objektumfeld).

**Rechts:**

3. Das [Formular](#formular) mit allen Detailangaben.
1. Die optional einblendbare Seitenleiste mit der [Ansicht](#ansicht), dem [Inhalt](#inhalt), dem [Verlauf](#verlauf) und den [Meldungen](#meldungen)

::: info 5. Um die Arbeitsfläche je nach Aufgabenstellung optimal auszunutzen, können Sie die beiden Spalten mittels Button oder Tastatur ausblenden:
 - PC: linke Spalte **Alt+1** / rechte Spalte **Alt+2**
 - Mac: linke Spalte **Control+1** / rechte Spalte **Control+2**
:::

### Objektdetails

Die Objektdetails geben einen ersten schnellen Überblick über das aktuelle Objekt:

![Objektbeschreibung](/assets/manual/object-details.de.png)

1. Über das **Objektmenü** wählen Sie sofern verfügbar spezifische Aktionen für das aktuelle Objekt aus.

### Objektumfeld

Das Objektumfeld kann je nach Objekttyp und Domäne aus **Scopes**, **Teilen**, **Links**, **Risiken** oder **Anforderungen/Zielobjekten** bestehen. Wichtig ist dabei die Unterscheidung von **Scope**-Objekten und **Composite**-Objekten im neuen [Objektmodell](/object-model/objects):
* **Scopes** können beliebige **Composite**-Objekte UND **Scope**-Objekte enthalten. Jedes **Scope**-Objekt und jedes **Composite**-Objekt kann dabei in verschiedenen **Scopes** enthalten sein!
* **Composite**-Objekte können hingegen nur Objekte des SELBEN **Objekttyps** enthalten (Teile/Parts). Anders als eine Gruppe hat das **Composite**-Objekt dabei die gleichen Eigenschaften wie ein einzelnes Objekt des jeweiligen Objekttyps.

::: info Stehen Elemente für ein Objekt nicht zur Verfügung, sind die Reiter ausgegraut, z.B.:
- **Scopes** können NICHT **Teil von** einem Composite sein, der Reiter **Teil von** wird dort nicht angezeigt!
- Ein **Composite** kann KEINE **Scopes** enthalten, der Reiter **Scopes** wird dort nicht angezeigt!
:::

Das Objektumfeldes zeigt dabei:

![Objektumfeld](/assets/manual/object-environment.de.png)

1. Mit **Scopes** und/oder **Teile** den Blick *nach innen* und mit **In Scope** und/oder **Teil von** den Blick *nach außen*.
1. Mit **Links** verknüpfte Objekte als eingehende oder ausgehende Links.
1. Mit **Bausteinen/Anforderung** bzw. **Zielobjekte** die Beziehung zwischen angewendeten Controls und den jeweiligen Objekten.
1. Mit **Risiken** wo vorhanden die betrachteten Gefährdungen und deren Behandlung.
1. Je nach aktivem **Tabellenreiter** können kontextsensitiv Elemente hinzugefügt werden.

### Formular

Formulare ermöglichen die strukturierte Erfassung von (fachlichen) Inhalten, es wird unterschieden zwischen:

- **Aspekten**, einer Gruppierung zusammengehöriger Daten und
- **Links**, der Verknüpfung zu anderen Objekten inklusive spezifischer Daten für die jeweilige Verknüpfung.

Die strukturierte Erfassung wird unterstützt durch die intelligente Auswertung eingegebener Daten:

- In Abhängigkeit von einzelnen Werten können unterschiedliche Aspekte oder Links ein- oder ausgeblendet werden.
- Komplexe Entscheidungen auf Grundlage mehrerer Werte können in Entscheidungsbäumen ausgewertet werden, siehe z.B. die Entscheidung zur Notwendigkeit einer Datenschutz-Folgenabschätzung in der Domäne DS-GVO.

Jeder Subtyp eines Objekttyps muss durch mindestens ein spezifisches Formular dargestellt werden. Anders herum kann jeder Subtyp aber auch in verschiedenen Formularen abgebildet werden. Dadurch könnte z.B. der Subtyp **Verarbeitungstätigkeit** in einem **einfachen** Formular für den Prozessverantwortlichen erfasst werden, während etwa der Rolle Datenschutzbeauftragte ein **ausführliches** Formular mit tiefergehenden Angaben zur Verfügung stehen könnte.

In der **Seitenleiste** der Formulare können durch Mausklick auf eines der Symbole weitere Informationen zu einem Formular eingeblendet werden.

### Ansicht

In der Seitenleiste **Ansicht** können Objekte je nach Subtyp in einem anderen Formular angezeigt werden.

![Ansicht](/assets/manual/form_view.png)

### Inhalt

Formularinhalte werden in der Seitenleiste **Inhalt** strukturiert dargestellt. Durch Mausklick kann zu den einzelnen Abschnitten navigiert werden.

![Inhalt](/assets/manual/form_content.png)

### Verlauf

verinice speichert jede Änderung an Objekten auf Feldebene als Version und stellt damit einen kompletten **Audit-Trail** bereit.

In der Seitenleiste **Verlauf** werden alle früheren Versionen aufgelistet, durch Anklicken einer Version wird diese angezeigt. Über die Schaltfläche **Wiederherstellen** kann zu jeder früheren Version zurückgekehrt werden (**Undo-Funktion**).

![Verlauf](/assets/manual/form_history.png)

### Meldungen

Fehler, Warnungen oder Informationen zu aktuellen Formulareingaben werden in der Seitenleiste **Meldungen** dargestellt.

![Meldungen](/assets/manual/form_decision.png)
