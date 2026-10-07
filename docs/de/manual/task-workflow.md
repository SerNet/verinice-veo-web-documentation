<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Aufgaben und Workflow

Auf der Aufgabenseite sehen Sie auf einen Blick, welche Umsetzungen noch offen sind und welche Revisionen anstehen – und wer dafür zuständig ist. Diese Anleitung zeigt Ihnen, wie Sie Ihr Benutzerkonto mit einer Person verknüpfen, wie Aufgaben entstehen und wie Sie sie bearbeiten.

## Überblick {#ueberblick}

### Was sind Aufgaben? {#was-sind-aufgaben}

Die Aufgabenseite listet zwei Arten von Aufgaben auf:

- **Umsetzungsaufgaben** – für Anforderungen, die noch nicht (vollständig) umgesetzt sind.
- **Revisionsaufgaben** – für bereits umgesetzte Anforderungen, deren nächste Überprüfung geplant ist.

Sie erreichen die Aufgabenseite über den Eintrag **Aufgaben** im Menü. Die Zahl neben dem Menüeintrag zeigt Ihnen, wie viele Aufgaben auf Sie warten.

::: info Aufgaben gelten pro Unit und Domäne
Die Aufgabenseite zeigt immer die Aufgaben der Unit und der Domäne, in der Sie gerade arbeiten. Aufgaben aus anderen Units oder Domänen sehen Sie erst, wenn Sie dorthin wechseln.
:::

### Begriffe {#begriffe}

| Begriff | Bedeutung |
| --- | --- |
| **Account** | Ihr Benutzerkonto, mit dem Sie sich bei verinice anmelden. |
| **Personenobjekt** | Eine Person, die als Objekt in einer Unit erfasst ist (z. B. „PM Petra Müllerin“). Personenobjekte werden u. a. als Verantwortliche bei Umsetzungen eingetragen. |
| **Umsetzung** | Der Stand, in dem eine Anforderung (z. B. aus einem Baustein) für ein Objekt umgesetzt ist – mit Status, Verantwortlichen und Terminen. |
| **Revision** | Die regelmäßige Überprüfung einer bereits umgesetzten Anforderung. |
| **Unit / Domäne** | Die Unit ist Ihr Arbeitsbereich (z. B. eine Organisation), die Domäne das Regelwerk, in dem Sie arbeiten (z. B. IT-Grundschutz). |

### In drei Schritten zu Ihren Aufgaben {#in-drei-schritten}

1. **Person verknüpfen:** Ihr Account wird mit Ihrem Personenobjekt in der Unit verknüpft – siehe [Accounts mit Personenobjekten verknüpfen](#personen-verknuepfen).
2. **Aufgabe zuweisen:** Bei einer Umsetzung wird Ihre Person als verantwortlich eingetragen – siehe [Aufgaben erstellen](#aufgaben-erstellen).
3. **Aufgabe bearbeiten:** Sie öffnen die Aufgabe auf der Aufgabenseite und pflegen die Umsetzung – siehe [Aufgaben bearbeiten](#aufgaben-bearbeiten).

## Accounts mit Personenobjekten verknüpfen {#personen-verknuepfen}

Bei Umsetzungen tragen Sie Personenobjekte als Verantwortliche ein – keine Accounts. Damit verinice weiß, welche Aufgaben zu *Ihnen* gehören, muss Ihr Account mit Ihrem Personenobjekt verknüpft sein. Erst dann zeigt Ihnen die Aufgabenseite automatisch Ihre eigenen Aufgaben an.

Es gibt zwei Wege, eine Verknüpfung herzustellen:

- Hauptbenutzer:innen verknüpfen beliebige Personen mit Accounts in der Objektansicht.
- Alle Benutzer:innen können ihre eigene Person direkt auf der Aufgabenseite verknüpfen.

### Als Hauptbenutzer:in in der Objektansicht {#verknuepfen-objektansicht}

Jedes Personenobjekt hat in der Objektansicht einen Abschnitt **Benutzerzuordnung**. Er erscheint an zweiter Stelle, direkt nach dem ersten Abschnitt mit den Grunddaten.

<!-- Screenshot: Objektansicht einer Person mit dem Abschnitt „Benutzerzuordnung“ -->

**Account verknüpfen**

1. Öffnen Sie das Personenobjekt in der Objektansicht.
2. Klicken Sie im Abschnitt **Benutzerzuordnung** in das Auswahlfeld.
3. Wählen Sie den Account aus der Liste. Vorgeschlagen werden alle Accounts Ihres Mandanten mit Vor- und Nachname; Sie können auch nach dem Namen suchen.
4. Speichern Sie das Objekt.

**Verknüpfung ändern oder entfernen**

1. Öffnen Sie das Personenobjekt in der Objektansicht.
2. Im Abschnitt **Benutzerzuordnung**
   - wählen Sie einen anderen Account aus, um die Verknüpfung zu **ersetzen**, oder
   - leeren Sie das Auswahlfeld, um die Verknüpfung zu **trennen**.
3. Speichern Sie das Objekt.

::: warning Nur Hauptbenutzer:innen können Verknüpfungen ändern
Als Nebenbenutzer:in sehen Sie im Abschnitt **Benutzerzuordnung** nur den Benutzernamen eines bereits verknüpften Accounts. Hinzufügen, ändern oder entfernen können Sie die Verknüpfung dort nicht. Ihre eigene Person können Sie aber selbst [über die Aufgabenseite](#verknuepfen-aufgabenseite) verknüpfen.
:::

### Selbst über die Aufgabenseite {#verknuepfen-aufgabenseite}

Ist Ihrem Account in der aktuellen Unit noch keine Person zugeordnet, zeigt die Aufgabenseite den Hinweis:

> Um Aufgaben in der Unit zu übernehmen, verknüpfen Sie ein Personenobjekt mit Ihrem Benutzerkonto.

<!-- Screenshot: Aufgabenseite mit Hinweis und Schaltfläche „Meine Person verknüpfen“ -->

1. Klicken Sie auf **Meine Person verknüpfen**.
2. Wählen Sie Ihre Person aus der Liste der Personen in der Unit. Angeboten werden nur Personen, die noch mit keinem Account verknüpft sind.
3. Gibt es noch kein passendes Personenobjekt, legen Sie im selben Dialog eine neue Person an. Sie wird automatisch mit Ihrem Account verknüpft.

Danach bleiben Sie auf der Aufgabenseite. Der Filter ist nun auf Ihre Person eingestellt, sodass Sie nur noch Ihre eigenen Aufgaben sehen (siehe [Nach Zuständigkeit filtern](#filter)). Hinweis und Schaltfläche werden nicht mehr angezeigt.

::: info Gut zu wissen
- Die Verknüpfung gilt **domänenübergreifend**: Ist eine Person mit Ihrem Account verknüpft, gilt das in allen Domänen der Unit.
- Wird ein Account gelöscht, entfernt verinice die Verknüpfung automatisch aus allen Personenobjekten.
:::

### Eine Person, mehrere Personen? {#mehrere-personen}

- **Eine Person** kann mit **höchstens einem Account** verknüpft sein.
- **Ein Account** kann mit **mehreren Personen** verknüpft sein.

**Der Regelfall: eine Person pro Unit.** Personenobjekte gehören immer zu einer Unit. Arbeiten Sie in mehreren Units, braucht es deshalb in jeder Unit ein eigenes Personenobjekt, das mit Ihrem Account verknüpft ist. Nur dann sehen Sie dort Ihre Aufgaben.

**Der Sonderfall: mehrere Personen in derselben Unit.** Manchmal ist es sinnvoll, einem Account in einer Unit mehrere Personenobjekte zuzuordnen – etwa Ihre Person „PM Petra Müllerin“ und eine Rolle wie „AL Abteilungsleiterin“. Die Aufgabenseite zeigt Ihnen dann die Aufgaben aller Ihrer Personen; bei jeder Aufgabe erkennen Sie, zu welcher Person sie gehört (siehe [Nach Zuständigkeit filtern](#filter)).

## Aufgaben erstellen (Umsetzung/Revision) {#aufgaben-erstellen}

Aufgaben legen Sie nicht separat an: Sie entstehen automatisch aus den Angaben einer Umsetzung. Ob und für wen eine Aufgabe erscheint, hängt vom **Status der Umsetzung**, von der **zuständigen Person** und vom **Termin** ab.

### Umsetzungsaufgabe zuweisen {#umsetzungsaufgabe-zuweisen}

Für jede Umsetzung, die noch nicht abgeschlossen ist, entsteht eine Umsetzungsaufgabe.

1. Öffnen Sie die Umsetzungsseite des Objekts (z. B. eines Assets, Prozesses oder Scopes).
2. Klicken Sie auf die Umsetzung der gewünschten Anforderung. Der Umsetzungsdialog öffnet sich.
3. Tragen Sie unter **Verantwortlich** die zuständige Person ein.
4. Tragen Sie optional unter **Umsetzung bis** das Datum ein, bis zu dem die Anforderung umgesetzt sein soll – z. B. 31.12.2026. Dieses Datum erscheint auf der Aufgabenseite als Fälligkeit.
5. Speichern Sie.

Die Aufgabe erscheint nun auf der Aufgabenseite bei der eingetragenen Person.

### Revisionsaufgabe zuweisen {#revisionsaufgabe-zuweisen}

Ist eine Anforderung umgesetzt, planen Sie ihre nächste Überprüfung als Revisionsaufgabe.

1. Öffnen Sie die Umsetzungsseite des Objekts und klicken Sie auf die Umsetzung. Der Umsetzungsdialog öffnet sich.
2. Setzen Sie den Status auf **ja** oder **entbehrlich**.
3. Tragen Sie unter **Nächste Revision durch** die Person ein, die die Revision durchführen soll.
4. Tragen Sie unter **Nächste Revision am** das Datum der nächsten Revision ein – z. B. 30.06.2027. Dieses Datum erscheint auf der Aufgabenseite als Fälligkeit.
5. Speichern Sie.

::: warning Ohne Datum keine Revisionsaufgabe
Eine Revisionsaufgabe entsteht nur, wenn **Nächste Revision am** ausgefüllt ist. Ist das Feld leer, erscheint für die umgesetzte Anforderung keine Aufgabe – auch dann nicht, wenn eine Person unter **Nächste Revision durch** eingetragen ist.
:::

### Wann entsteht welche Aufgabe? {#statustabelle}

| Status der Umsetzung | „Nächste Revision am“ gesetzt? | Aufgabe | Zuständig | Fällig |
| --- | --- | --- | --- | --- |
| unbearbeitet | – | Umsetzungsaufgabe | Verantwortlich | Umsetzung bis |
| teilweise | – | Umsetzungsaufgabe | Verantwortlich | Umsetzung bis |
| nein | – | Umsetzungsaufgabe | Verantwortlich | Umsetzung bis |
| ja | ja | Revisionsaufgabe | Nächste Revision durch | Nächste Revision am |
| entbehrlich | ja | Revisionsaufgabe | Nächste Revision durch | Nächste Revision am |
| ja / entbehrlich | nein | keine Aufgabe | – | – |

::: tip Nicht zugewiesene Aufgaben
Tragen Sie keine Person ein, entsteht die Aufgabe trotzdem – sie ist dann **niemandem zugewiesen**. Solche Aufgaben finden Sie über den Filter auf der Aufgabenseite (siehe [Nach Zuständigkeit filtern](#filter)).
:::

::: info Nur Aufgaben der aktuellen Domäne
Es werden nur Umsetzungen berücksichtigt, bei denen sowohl das Objekt als auch die Anforderung der aktuellen Domäne zugeordnet sind.
:::

## Die Aufgabenseite: Übersicht und Filter {#aufgabenseite}

### Aufbau der Aufgabenseite {#aufbau}

Die Aufgabenseite zeigt jede offene Aufgabe als Karte. Auf jeder Karte sehen Sie:

- die **Aufgabenart** – Umsetzung oder Revision,
- das **Objekt**, für das die Anforderung gilt (z. B. ein Asset, ein Prozess oder ein Scope),
- die **Anforderung** (z. B. „APP.2.1.A6 Sicherer Betrieb von Verzeichnisdiensten“),
- die **Fälligkeit**,
- die **zuständige Person**.

<!-- Screenshot: Aufgabenseite mit mehreren Karten (Umsetzung und Revision) -->

Gibt es viele Aufgaben, verteilt die Seite sie auf mehrere Seiten; mit der Seitennavigation am Ende der Liste blättern Sie weiter.

### Nach Zuständigkeit filtern {#filter}

Oberhalb der Karten befindet sich eine Suchleiste, mit der Sie die Aufgaben nach zuständigen Personen filtern.

**Voreinstellung**

- **Ist Ihrem Account eine Person in der Unit zugeordnet**, ist der Filter auf diese Person voreingestellt, z. B. „Zuständig = PM Petra Müllerin“. Sie sehen also nur Ihre eigenen Aufgaben.
- **Sind Ihrem Account mehrere Personen in der Unit zugeordnet**, enthält der Filter alle diese Personen, z. B. „Zuständig = PM Petra Müllerin, AL Abteilungsleiterin“. Sie sehen die Aufgaben aller Ihrer Personen; an der zuständigen Person auf der Karte erkennen Sie, zu welcher Ihrer Personen eine Aufgabe gehört.
- **Ist Ihrem Account keine Person in der Unit zugeordnet**, ist die Suchleiste leer. Sie sehen alle Aufgaben der Unit.

**Filter anpassen**

Sie können den Filter jederzeit ändern. Die Suchleiste schlägt Ihnen dabei die Personen der Unit vor, und Sie können mehrere Personen kombinieren:

- **Aufgaben anderer Personen anzeigen:** Wählen Sie eine oder mehrere Personen aus.
- **Nicht zugewiesene Aufgaben anzeigen:** Filtern Sie nach Aufgaben, für die niemand zuständig ist.
- **Alle Aufgaben anzeigen:** Entfernen Sie den Filter vollständig.

<!-- Screenshot: Suchleiste mit Personenfilter „Zuständig = …“ -->

::: info Zahl im Menü
Die Zahl neben dem Menüeintrag **Aufgaben** richtet sich immer nach dem voreingestellten Filter, also nach Ihren eigenen Aufgaben. Ändern Sie den Filter auf der Aufgabenseite, kann die Anzahl der angezeigten Karten deshalb von der Zahl im Menü abweichen.
:::

::: tip Für Teamleitungen
Möchten Sie sehen, wer woran arbeitet, entfernen Sie den Filter oder wählen Sie die Personen Ihres Teams aus. Filtern Sie zusätzlich nach nicht zugewiesenen Aufgaben, um Arbeit zu finden, die noch niemand übernommen hat.
:::

## Aufgaben bearbeiten {#aufgaben-bearbeiten}

### Aufgabe öffnen {#aufgabe-oeffnen}

Bewegen Sie den Mauszeiger über eine Karte, wird sie hervorgehoben. Klicken Sie auf die Karte, öffnet sich der **Umsetzungsdialog** als Popup – derselbe Dialog wie auf der Umsetzungsseite. Das gilt für Umsetzungs- und Revisionsaufgaben gleichermaßen.

Im Umsetzungsdialog pflegen Sie unter anderem:

- den **Status** der Umsetzung (unbearbeitet, teilweise, nein, ja, entbehrlich),
- die verantwortliche Person (**Verantwortlich**) und den Termin **Umsetzung bis**,
- die Revisionsangaben **Nächste Revision durch** und **Nächste Revision am**.

<!-- Screenshot: Umsetzungsdialog als Popup über der Aufgabenseite -->

### Was passiert nach dem Speichern? {#nach-dem-speichern}

Nach dem Speichern aktualisiert sich die Aufgabenseite automatisch – ebenso die Zahl im Menü. Was mit der Aufgabe geschieht, hängt von Ihren Änderungen ab:

| Ihre Änderung | Ergebnis auf der Aufgabenseite |
| --- | --- |
| Status bleibt unbearbeitet, teilweise oder nein | Die Umsetzungsaufgabe bleibt bestehen (ggf. mit neuer Person oder neuem Termin). |
| Status auf ja oder entbehrlich, **Nächste Revision am** gesetzt | Die Umsetzungsaufgabe verschwindet, eine Revisionsaufgabe erscheint. |
| Status auf ja oder entbehrlich, **Nächste Revision am** leer | Die Aufgabe verschwindet, es entsteht keine neue Aufgabe. |
| Andere Person eingetragen | Die Aufgabe erscheint bei der neuen Person; bei Ihrem voreingestellten Filter sehen Sie sie nicht mehr. |

### Umsetzung abschließen {#umsetzung-abschliessen}

1. Klicken Sie auf die Umsetzungsaufgabe.
2. Setzen Sie den Status auf **ja** (oder **entbehrlich**, wenn die Anforderung nicht umgesetzt werden muss).
3. Planen Sie die erste Revision: Tragen Sie **Nächste Revision durch** und **Nächste Revision am** ein.
4. Speichern Sie. Die Umsetzungsaufgabe verschwindet; zum geplanten Termin steht die Revisionsaufgabe bereit.

### Revision durchführen und nächste Revision planen {#revision-durchfuehren}

1. Klicken Sie auf die Revisionsaufgabe.
2. Prüfen Sie, ob die Anforderung weiterhin umgesetzt ist, und passen Sie gegebenenfalls den Status an.
3. Tragen Sie unter **Nächste Revision am** den Termin der folgenden Revision ein und ändern Sie bei Bedarf **Nächste Revision durch**.
4. Speichern Sie. Die Revisionsaufgabe erscheint nun mit dem neuen Fälligkeitsdatum.

::: tip
Setzen Sie bei einer Revision den Status zurück auf **teilweise** oder **nein**, wird aus der Revisionsaufgabe wieder eine Umsetzungsaufgabe für die unter **Verantwortlich** eingetragene Person.
:::

### Aufgabe weitergeben {#aufgabe-weitergeben}

1. Klicken Sie auf die Aufgabe.
2. Tragen Sie die neue Person ein: bei einer Umsetzungsaufgabe unter **Verantwortlich**, bei einer Revisionsaufgabe unter **Nächste Revision durch**.
3. Speichern Sie. Die Aufgabe erscheint nun bei der neuen Person.

## Häufige Fragen {#haeufige-fragen}

### Ich sehe keine Aufgaben. Woran liegt das? {#faq-keine-aufgaben}

Prüfen Sie Folgendes:

- **Ist Ihr Account mit einer Person verknüpft?** Ohne Verknüpfung kann verinice Ihnen keine eigenen Aufgaben zuordnen – siehe [Accounts mit Personenobjekten verknüpfen](#personen-verknuepfen).
- **Sind Sie in der richtigen Unit und Domäne?** Die Aufgabenseite zeigt nur Aufgaben der aktuellen Unit und Domäne – siehe [Was sind Aufgaben?](#was-sind-aufgaben).
- **Welcher Filter ist gesetzt?** Vielleicht sind die Aufgaben einer anderen Person zugeordnet oder noch niemandem – siehe [Nach Zuständigkeit filtern](#filter).
- **Ist bei den Umsetzungen Ihre Person eingetragen?** Bei Umsetzungsaufgaben unter **Verantwortlich**, bei Revisionsaufgaben unter **Nächste Revision durch** – siehe [Aufgaben erstellen](#aufgaben-erstellen).

### Eine erwartete Aufgabe fehlt. {#faq-aufgabe-fehlt}

- Bei einer umgesetzten Anforderung (Status **ja** oder **entbehrlich**) entsteht nur dann eine Revisionsaufgabe, wenn **Nächste Revision am** ausgefüllt ist – siehe [Wann entsteht welche Aufgabe?](#statustabelle).
- Objekt und Anforderung müssen der aktuellen Domäne zugeordnet sein.
- Prüfen Sie, ob die Aufgabe einer anderen Person zugewiesen ist, und passen Sie den [Filter](#filter) an.

### Ich kann die Benutzerzuordnung einer Person nicht ändern. {#faq-zuordnung-aendern}

Accounts mit Personen verknüpfen, Verknüpfungen ändern oder entfernen können in der Objektansicht nur Hauptbenutzer:innen. Ihre eigene Person können Sie aber selbst über die Aufgabenseite verknüpfen – siehe [Selbst über die Aufgabenseite](#verknuepfen-aufgabenseite).

### Meine Person wird mir zur Auswahl nicht angeboten. {#faq-person-nicht-auswaehlbar}

Eine Person kann nur mit einem Account verknüpft sein. Ist sie bereits mit einem anderen Account verknüpft, wird sie bei **Meine Person verknüpfen** nicht angeboten. Wenden Sie sich in diesem Fall an eine Hauptbenutzerin oder einen Hauptbenutzer, um die Verknüpfung zu korrigieren – siehe [Als Hauptbenutzer:in in der Objektansicht](#verknuepfen-objektansicht).

### Ich bin mehreren Personen zugeordnet. Ist das richtig? {#faq-mehrere-personen}

Ja, das ist möglich:

- **In verschiedenen Units** ist das der Regelfall: Sie brauchen in jeder Unit, in der Sie Aufgaben übernehmen, ein eigenes verknüpftes Personenobjekt.
- **In derselben Unit** ist es ein Sonderfall, z. B. wenn Sie zusätzlich eine Rolle übernehmen. Die Aufgabenseite zeigt dann die Aufgaben aller Ihrer Personen.

Mehr dazu unter [Eine Person, mehrere Personen?](#mehrere-personen).

### Der Menüpunkt „Aufgaben“ fehlt. {#faq-menuepunkt-fehlt}

Die Aufgabenseite ist in Ihrer Installation möglicherweise nicht freigeschaltet. Wenden Sie sich an Ihre Administration.
