<!-- © 2024 The Project Contributors - see AUTHORS.txt -->

# Benutzerverwaltung

## Benutzerkonto bearbeiten

Über den Account Button gelangen Sie zum Bearbeiten Ihres Benutzerkontos:

![Benutzerkonto bearbeiten](/assets/manual/account.de.png)

verinice verwendet für das Identitäts- und Zugriffsmanagement eine [Keycloak](https://www.keycloak.org/)-Instanz, die in einem neuen Browsertab geöffnet wird:

![Benutzerkonto bearbeiten](/assets/manual/account_management.de.png)

### Persönliche Informationen

Im Abschnitt Persönliche Informationen können Sie Ihren Namen oder die E-Mail ändern. Nach Änderung der E-Mail erhalten Sie zum Verifizieren der E-Mail-Adresse eine Nachricht mit der Aufforderung ein neues Passwort zu vergeben.

![Persönliche Daten](/assets/manual/account_profile.de.png)

### Authentifizierungsmethode

Im Abschnitt Kontosicherheit > Anmeldung wählen Sie zwischen der Standardauthentifizierung per Passwort oder der Zwei-Faktor Authentifizierung und richten diese ein:

![Persönliche Daten](/assets/manual/account_authentification.de.png)

### Geräteaktivität

Unter Kontosicherheit > Geräteaktivität erkennen Sie angemeldete Geräte und können unbekannte Geräte ggfs. abmelden:

![Benutzerkonto bearbeiten](/assets/manual/account_activity.de.png)

### Anwendungen verwalten

Im Abschnitt Applikationen sehen Sie, mit welchen Clients/Anwendungen Sie auf verinice zugreifen. Da die Anzahl der zugreifenden Anwendungen begrenzt ist, werden Sie unter Umständen automatisch abgemeldet, z.B. wenn Sie verinice in verschiedenen Browsern gleichzeitig öffnen.

![Benutzerkonto bearbeiten](/assets/manual/account_applications.de.png)

### Ressourcen

::: info Zusätzlich Funktionen wie z.B. das Teilen von Ressourcen werden aktuell nicht unterstützt!
:::

## Benutzerverwaltung

::: details Warum steht mir die Benutzerverwaltung nicht zur Verfügung?

Um zusätzliche Benutzer anzulegen oder bestehende zu verwalten, müssen:

- in Ihrem Plan zusätzliche Benutzer enthalten sein.
- Sie die Rolle des **Hauptnutzers** innehaben, die im Einkaufsprozess festgelegt wird.
:::

Die Benutzerverwaltung rufen Sie über den Account Button auf:

![Benutzerverwaltung](/assets/manual/accounts.de.png)

In der folgenden Übersicht werden alle Benutzer in Ihrem Client mit zusätzlichen Informationen dargestellt:

![Benutzerverwaltung](/assets/manual/accounts_list.de.png)

1. Alle Benutzer haben Zugriff auf alle Units Ihres Clients!
1. Anzeige der aktiven und der verfügbaren Benutzer. Beachten Sie, dass der Hauptnutzer die Anzahl der verfügbaren Benutzern bereits um eins reduziert!
1. Sie können neue Benutzer anlegen,
1. bestehende Benutzer bearbeiten oder
1. bestehende Benutzer löschen

Beim Erstellen eines Benutzers geben Sie die erforderlichen Daten ein:

![Benutzer erstellen](/assets/manual/accounts_create.de.png)

1. Benutzername, E-Mail, Vorname, Nachname
1. Aktivieren oder deaktivieren Sie den Benutzer.
1. Standardmäßig haben alle Benutzer Schreibzugriff. Um den Zugriff auf das Lesen zu beschränken deaktivieren Sie diesen.
1. Nach Erstellen wird eine E-Mail an den Benutzer versandt, um die E-Mail Adresse zu verifizieren. Der Benutzer vergibt nach Aufruf des Links ein sicheres Passwort, mit dem er sich anschließend in verinice anmelden kann:

![E-Mail](/assets/manual/accounts_email.de.png)

::: info Wir empfehlen neue Benutzer vorab über die Anlage ihres verinice Accounts zu informieren!
:::

## Lizenzkontrolle

Anwender von *verinice.onprem* hinterlegen in Ihrer lokalen Instanz eine Lizenzdatei. Diese Datei legt die maximale Anzahl von Accounts, Units, Clients sowie die Nutzung lizenzpflichtiger Inhalte wie z.B. offizieller Texte von Standards fest.

Falls die tatsächliche Nutzung die Schranken der Lizenzdatei übersteigt, werden allen Nutzenden die Schreibrechte entzogen, bis die Lizenzbedingungen wieder eingehalten werden. Dies kann durch Ergänzen der Lizenz oder durch Reduktion der Nutzung geschehen.

Der Zustand der Lizenzüberschreitung wird in der Nutzeroberfläche als Warnung angezeigt. Nutzende müssen Ihren **Hauptnutzer**, Administrator oder Einkäufer informieren, um diese Situation zu beheben.

![Lizenzwarnung](/assets/manual/license-warnings.png)