<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Profile in der Domäne Grundschutz++

Ein Profil enthält vorbereitete Objekte, die Sie in eine Unit übernehmen und an Ihre Institution anpassen können. Für die Domäne Grundschutz++ steht das Profil **Grundschutz++-Profil** zur Verfügung. Es zeigt an einem vollständig modellierten Beispiel, wie die Anforderungen des Katalogs auf einen Informationsverbund und seine Zielobjekte modelliert werden.

## Grundschutz++-Profil

Das Profil enthält folgende Objekte:

| Objekt | Subtyp | Anzahl |
|---|---|---|
| Anforderungen des Katalogs | Anforderung | 1.000 |
| Zielobjektkategorien und Sammelkategorien des Katalogs | Zielobjektkategorie | 52 |
| Informationsverbund | Informationsverbund | 1 |
| Beispiel-Zielobjekte | Zielobjekt | 39 |

Die Anforderungen und Kategorien entsprechen dem [Anforderungskatalog](./catalog) der Domäne. Die elementaren Gefährdungen sind nicht enthalten.

## Informationsverbund

Auf dem **Informationsverbund** sind alle Anforderungen ohne Zielobjektbezug modelliert (siehe [Verbundweite Anforderungen](./modelling#verbundweite-anforderungen)):

- die Kategorie **Verbundweite Anforderungen** mit den Anforderungen der Methodik-Praktiken GC, STM, UMS, PERF, VRB und RISK
- die zwölf **Führungsprozesse** (Architektur, Berechtigungsmanagement, Beschaffung, Detektion, Entwicklung, Informations- und Asset-Management, Konfigurationsmanagement, Notfallmanagement, Personal, Sensibilisierung und Schulung, Sicherheitsvorfallsbehandlung, Änderungen und Tests)

Im Objektumfeld des Informationsverbunds finden Sie damit 377 Einträge: 364 Anforderungen und je einen Eintrag für die 13 modellierten Kategorien. Alle 39 Beispiel-Zielobjekte sind Mitglieder des Informationsverbunds.

::: info Beschreibung des Informationsverbunds
Die Beschreibung des Informationsverbunds im Profil nennt nur die Methodik-Praktiken. Modelliert sind darüber hinaus die zwölf Führungsprozesse mit den Anforderungen der organisatorischen und technischen Praktiken ohne Zielobjektkategorie.
:::

<!-- SCREENSHOT: ![Informationsverbund des Profils](../assets/domain-gs-pp/verinice-gspp-profile-information-domain.png) – Objektumfeld des Informationsverbunds aus dem Profil mit den modellierten Kategorien Verbundweite Anforderungen und den zwölf Führungsprozessen -->

## Beispiel-Zielobjekte

Für jede der 39 Zielobjektkategorien enthält das Profil ein gleichnamiges Beispiel-Zielobjekt. Jedes Zielobjekt ist nur mit **seiner eigenen** Zielobjektkategorie modelliert und trägt damit alle Anforderungen der Kategorie einschließlich der Anforderungen aus den übergeordneten Kategorien (siehe [Vererbung](./target-object-categories#vererbung)). Neben den Anforderungen enthält die Liste je einen Eintrag für die modellierte Kategorie selbst.

Die Zielobjekte sind entlang der Hierarchie der Zielobjektkategorien als **Teile** ineinander gegliedert: Unter den sieben Wurzelobjekten Anwendungen, Einkäufe, Informationen, IT-Systeme, Netze, Nutzende und Standorte liegen die Zielobjekte der untergeordneten Kategorien.

| Zielobjekt | Teil von | Einträge |
|---|---|---|
| Anwendungen | – | 82 |
| › Dateiserver | Anwendungen | 85 |
| › DNS-Server | Anwendungen | 87 |
| › Faxe | Anwendungen | 85 |
| › Interpersonelle Kommunikation | Anwendungen | 92 |
| › › E-Mail | Interpersonelle Kommunikation | 106 |
| › Office-Anwendungen | Anwendungen | 84 |
| › TK-Anwendungen | Anwendungen | 91 |
| › › VK-Anwendungen | TK-Anwendungen | 96 |
| › Verzeichnisdienste | Anwendungen | 85 |
| › Virtualisierungslösungen | Anwendungen | 86 |
| › Webbrowser | Anwendungen | 96 |
| › Webserver | Anwendungen | 88 |
| › › Webanwendungen | Webserver | 92 |
| Einkäufe | – | 40 |
| › Dienstleistungen | Einkäufe | 71 |
| › › Outsourcing | Dienstleistungen | 100 |
| › › › Cloud-Dienste | Outsourcing | 109 |
| › IT-Produkte | Einkäufe | 54 |
| Informationen | – | 6 |
| › Daten | Informationen | 37 |
| IT-Systeme | – | 94 |
| › Endgeräte | IT-Systeme | 109 |
| › Hostsysteme | IT-Systeme | 103 |
| Netze | – | 35 |
| › Externe Netzanschlüsse | Netze | 51 |
| › Interne Netzsegmente | Netze | 38 |
| › › WLANs | Interne Netzsegmente | 42 |
| Nutzende | – | 82 |
| › Mitarbeitende | Nutzende | 93 |
| › › Administrierende | Mitarbeitende | 102 |
| › › Führungskräfte | Mitarbeitende | 95 |
| › › › Institutionsleitung | Führungskräfte | 96 |
| Standorte | – | 60 |
| › Gebäude | Standorte | 62 |
| › Räume | Standorte | 66 |
| › › Datenträgerarchiv | Räume | 68 |
| › › Räume für technische Infrastruktur | Räume | 69 |
| › › › Serverräume | Räume für technische Infrastruktur | 73 |

Die Spalte **Einträge** nennt die Anzahl der Einträge im Objektumfeld des Zielobjekts: die Anforderungen der Kategorie und den Eintrag für die Kategorie selbst. Das Zielobjekt „Webanwendungen“ enthält z.B. 92 Einträge – die 91 Anforderungen der Kategorie „Webanwendungen“ und die Kategorie selbst.

<!-- SCREENSHOT: ![Beispiel-Zielobjekte des Profils](../assets/domain-gs-pp/verinice-gspp-profile-target-objects.png) – Liste der Zielobjekte aus dem Profil mit der Gliederung über Teile, z.B. Anwendungen mit Webserver und Webanwendungen -->

## Profil anwenden

Sie können das Profil aus der Unitverwaltung heraus beim Erstellen einer neuen Unit anwenden oder auf eine bereits bestehende Unit anwenden (siehe [Anforderungspaket aus Profil](./modelling#anforderungspaket-aus-profil)).

::: warning Das Anwenden eines Profiles fügt einer bestehenden Unit eine Vielzahl zusätzlicher Objekte hinzu! Wir empfehlen die Anwendung in einer neuen Unit zu prüfen.
:::

## Profil anpassen

Gehen Sie nach dem Anwenden entlang der Prozessschritte vor, um das Beispiel an Ihre Institution anzupassen:

1. **Erhebung und Planung:** Legen Sie Institution, Anwendungsbereich und Geschäftsprozesse an ([Erhebung und Planung](./planning)) und stellen Sie den [Schutzbedarf](./protection-needs) der Geschäftsprozesse fest.
2. **Informationsverbund und Assets:** Passen Sie Name und Beschreibung des Informationsverbunds an. Benennen Sie die Beispiel-Zielobjekte nach Ihren Assets um, kopieren Sie sie für weitere gleichartige Assets und löschen Sie Zielobjekte, für die es in Ihrer Institution kein Asset gibt ([Informationsverbund und Assets](./structure-analysis)). Prüfen Sie dabei die Zuordnung zu den [Zielobjektkategorien](./target-object-categories) und verknüpfen Sie die Zielobjekte mit den Geschäftsprozessen.
3. **Anforderungspaket:** Ergänzen Sie bei Bedarf eigene Anforderungen und treffen Sie die Gestaltungsentscheidungen ([Anforderungspaket erstellen](./modelling)).
4. **Realisierung:** Ermitteln Sie den [Umsetzungsstatus](./implementation#umsetzungsstatus) aller Anforderungen, die im Profil auf **unbekannt** stehen.
5. **Risikobetrachtung:** Wenden Sie die elementaren Gefährdungen aus dem Katalog an und führen Sie die [Risikobetrachtung](./risk-analysis) durch, wo sie gefordert ist.
