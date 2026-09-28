<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Erhebung und Planung

Die Erhebung und Planung (Prozessschritt 1) schafft die organisatorischen und rechtlichen Rahmenbedingungen für das ISMS. Die Institutionsleitung legt fest, welche Bereiche der Institution das ISMS abdeckt. Die zugehörigen Anforderungen finden Sie in der Praktik **Governance und Compliance (GC)**; sie gelten als [verbundweite Anforderungen](./modelling#verbundweite-anforderungen) für den gesamten Informationsverbund.

## Institution

Erfassen Sie Ihre Institution, indem Sie über das Dashboard oder das Menü zum Objekttyp **Scope** mit dem Subtyp **Institutionen** navigieren. Legen Sie eine neue Institution über die rote Plus-Schaltfläche **Institution erstellen** unten rechts an:

::: info Über die Plus-Schaltfläche legen Sie Objekte kontextsensitiv immer mit dem Objekt- und Subtyp an, der gerade aktiv ist!
:::

**Speichern** Sie die Institution, wenn Sie alle Daten wie gewünscht erfasst haben. Beachten Sie dabei, dass die Felder **Name** und **Status** (in allen Objekten) zwingend erforderlich sind! Ihre Institution wird anschließend in der Objektübersicht aufgelistet.

<!-- SCREENSHOT: ![Institution erstellen](../assets/domain-gs-pp/verinice-gspp-institution-create.png) – Formular „Institution erstellen“ in der Domäne Grundschutz++ -->


## Kontext der Institution

Erfassen und dokumentieren Sie die Faktoren, die von außen und innen auf die Institution wirken, und prüfen Sie, welche davon Einfluss auf Gestaltung und Aufbau des ISMS haben, z.B.:

- **Externe Faktoren:** geopolitische Rahmenbedingungen, rechtliche und regulatorische Vorgaben (z.B. NIS-2, DORA), technologische Entwicklungen (z.B. KI), wirtschaftliche Abhängigkeiten wie Lieferketten, gesellschaftliche Erwartungen, Umweltbedingungen am Standort
- **Interne Faktoren:** Strategie und Ziele, Aufbauorganisation, etablierte Prozesse, vorhandene IT-Infrastruktur (ohne Detailinventarisierung), Sicherheitskultur, Personalsituation

Dokumentieren Sie das Ergebnis z.B. in der Beschreibung der Institution oder als **Dokument** mit Verweis auf die Institution.

## Compliance-Management

Erfassen Sie mindestens die Verpflichtungen, die die Informationssicherheit und das ISMS betreffen:

- Rechtskataster, Gesetze und Anforderungskataloge analysieren
- zuständige Compliance-Stellen anhören
- gesetzliche Verpflichtungen zur Verarbeitung von Informationen dokumentieren
- vertragliche Verpflichtungen zusammenstellen (z.B. Dienstleistungsverträge, Lizenzvereinbarungen, SLAs, Vertraulichkeitsvereinbarungen)

Die sich daraus ergebenden Anforderungen ergänzen später das Anforderungspaket (siehe [Ergänzung von Anforderungen](./modelling#erganzung-von-anforderungen)).

## Anwendungsbereich

Der Anwendungsbereich (Geltungsbereich, Scope) grenzt ab, für welche Bereiche das ISMS gilt. Er wird von der Institutionsleitung festgelegt und kann die gesamte Institution oder Teilbereiche umfassen. Eine Zertifizierung kann nur für den gesamten Anwendungsbereich erreicht werden.

Bilden Sie den Anwendungsbereich in verinice als **Scope** ab, z.B. mit dem Subtyp **Scopes** unterhalb Ihrer Institution. Klären und dokumentieren Sie insbesondere:

- **Formale und organisatorische Abgrenzung:** Welche Institutionsbereiche, Geschäftsprozesse und Tätigkeiten gehören dazu?
- **Infrastrukturelle Abgrenzung:** Welche Standorte und Systeme liegen innerhalb des Anwendungsbereichs? Welche externen Partner oder Dienstleister sind einzubeziehen? Welche Bereiche sind bewusst ausgeschlossen?

Die betrachteten Geschäftsprozesse müssen vollständig im Anwendungsbereich enthalten sein. Externe Dienstleister erfassen Sie unter **Scope** mit dem Subtyp **Externe Dienstleister**.

<!-- SCREENSHOT: ![Anwendungsbereich als Scope](../assets/domain-gs-pp/verinice-gspp-scope-scope.png) – Scope „Anwendungsbereich ISMS“ mit Beschreibung der Abgrenzung und zugeordneten Informationsverbünden -->


## Interessierte Parteien

Identifizieren Sie die internen und externen interessierten Parteien (z.B. Kunden, Dienstleister, Aufsichtsbehörden, Institutionsleitung, Mitarbeitende, Personalvertretung) und ihre Erwartungen an das ISMS. Legen Sie mit der Institutionsleitung fest, welche Erwartungen als verbindliche Anforderungen in das ISMS aufgenommen werden.

## Geschäftsprozesse

Die Geschäftsprozesse bilden die Grundlage für die Schutzbedarfsfeststellung, die Erfassung der Assets und die Risikobetrachtung. Unter Geschäftsprozessen können auch Abläufe, Verwaltungsverfahren oder IT-Fachverfahren verstanden werden.

Navigieren Sie zum Objekttyp **Prozesse** mit dem Subtyp **Geschäftsprozesse** (bzw. **Fachverfahren**) und legen Sie für jeden Geschäftsprozess ein Objekt an. Dokumentieren Sie mindestens:

- **Abkürzung** (Kennung) und **Name**
- **Verantwortliche Person** – die fachlich verantwortliche Person, Rolle oder Organisationseinheit
- **Beschreibung** – Zweck, wesentliches Ergebnis und Beitrag zu den Institutionszielen
- **Prozess-Art** – Kerngeschäft oder unterstützender Prozess
- wesentliche Anwendungen (als Verknüpfung **Erforderliches Zielobjekt**, sobald die Assets erfasst sind)

<!-- SCREENSHOT: ![Geschäftsprozess erfassen](../assets/domain-gs-pp/verinice-gspp-business-process-form.png) – Formular eines Geschäftsprozesses mit Abkürzung, Name, Beschreibung, Prozess-Art und verantwortlicher Person -->

::: tip Vereinfachte Geschäftsprozessanalyse
Liegt keine Prozesslandkarte vor, hilft die vereinfachte Geschäftsprozessanalyse der Pilotierungsfassung: Ein Ablauf ist ein Geschäftsprozess, wenn er wiederkehrend durchgeführt wird, für den Auftrag der Institution wesentlich ist, zu einem nachvollziehbaren Ergebnis führt und aus mehreren zusammenhängenden Tätigkeiten besteht. Quellen sind u.a. Organigramme und Geschäftsverteilungspläne, gesetzliche Aufgaben, das Verzeichnis von Verarbeitungstätigkeiten, CMDB und Vertragsübersichten. Wählen Sie eine sinnvolle, nicht zu feine Granularität.
:::

Anschließend legen Sie den [Schutzbedarf der Geschäftsprozesse](./protection-needs) fest.

## Informationssicherheitsleitlinie

Die Leitlinie beschreibt die Informationssicherheitsziele (möglichst SMART), die Sicherheitsstrategie, die Verpflichtung der Institutionsleitung und die Grundzüge der Sicherheitsorganisation. Sie wird von der Institutionsleitung freigegeben und allen Mitarbeitenden kommuniziert.

Legen Sie die Leitlinie unter **Dokumente** mit dem Subtyp **Dokumente** an und pflegen Sie Version, Klassifikation, Freigabedatum, Freigabe durch und Prüfintervall im Formular.

<!-- SCREENSHOT: ![Leitlinie als Dokument](../assets/domain-gs-pp/verinice-gspp-document-policy.png) – Dokument „Informationssicherheitsleitlinie“ mit Abschnitt Dokumentenlenkung (Version, Klassifikation, Freigabedatum, Prüfintervall) -->


## Sicherheitsorganisation und Rollen

Legen Sie Rollen und Zuständigkeiten mit den notwendigen Qualifikationen fest – insbesondere den Informationssicherheitsbeauftragten (ISB) –, vermeiden Sie Interessenskonflikte (z.B. IT-Leitung und ISB, DSB und ISB) und regeln Sie Stellvertretungen. Erfassen Sie die Rollen und Personen unter **Personen**. Die Verantwortung für die Informationssicherheit verbleibt bei der Institutionsleitung und kann nicht delegiert werden.

## Dokumentation und Kommunikation

Verankern Sie Verfahren zur internen und externen Kommunikation (Wer, Was, Wann, Wo, Warum), zur Einbindung des ISB in sicherheitsrelevante Projekte und zur Dokumentenlenkung. Die Felder zur Dokumentenlenkung, Aufbewahrung und Vernichtung in den **Dokumenten** unterstützen Sie dabei. Grundschutz++ setzt auf maschinenlesbare Dokumentation: Pflegen Sie Anforderungen, Umsetzungen und Bewertungen möglichst strukturiert in verinice statt in statischen Textdokumenten.

## Freigaben der Institutionsleitung

Der Institutionsleitung sind die ISMS-relevanten Entscheidungen als Entscheidungsvorlage vorzulegen, insbesondere:

- Festlegung des Anwendungsbereichs
- Freigabe des Schutzbedarfs der Geschäftsprozesse
- Festlegung der Reihenfolge, in der die Geschäftsprozesse bearbeitet werden
- Freigabe der Ressourcen
- Freigabe der Leitlinie

Dokumentieren Sie die Freigaben nachvollziehbar, z.B. als **Dokument** mit Freigabedatum und freigebender Person.

## Risikomanagement initiieren

Legen Sie fest, ob Sie die Risikomethodik des Grundschutz++ oder eine eigene Methode verwenden, die die Mindestkriterien erfüllt, und bestimmen Sie Risikokriterien und Risikoeigentümer. Einzelheiten beschreibt der Abschnitt [Risikobetrachtung](./risk-analysis).
