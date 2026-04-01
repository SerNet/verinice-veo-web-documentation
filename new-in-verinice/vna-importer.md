<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Der VNA-Importer

Für die Datenübernahme aus **verinice.PRO** oder **verinice.EPV** (Einzelplatzversion) in die neue verinice-Generation (**verinice.cloud** bzw. **verinice.onprem**) steht der **VNA-Importer** als separater Java-Client zur Verfügung.

## Funktionsumfang

Der VNA-Importer ist aktuell verfügbar für die Übernahme von Daten aus den Perspektiven **IT-Grundschutz** inklusive **Datenschutz**. Die Übernahme von Daten aus weiteren Perspektiven (ISO 27001 inklusive Datenschutz, IT-Grundschutz inklusive BCM, ISO 27001 inklusive BCM) befindet sich in Entwicklung und wird sukzessive bereitgestellt.

Alle Daten werden in den jeweiligen Client in der **verinice.cloud** übernommen, der Import in andere Umgebungen wie z.B. verinice.onprem wird zeitnah konfigurierbar sein.

Es können mehrerer Informationsverbünde in eine Unit übernommen werden. Die Daten werden dabei aus einer zuvor exportierten **VNA-Datei** neu in der Zielumgebung angelegt (Kopie) - die originalen Daten bleiben unverändert erhalten!

Im Detail werden folgende Daten übernommen:

- Alle (Ziel)objekte:
  - Verknüpfungen zwischen (Ziel)objekten.
  - Bausteine, Anforderungen, Elementare Gefährdungen.
  - Schutzbedarfswerte für Vertraulichkeit, Integrität, Verfügbarkeit.
  - Risikobewertung.

## Vorarbeiten in verinice

Um alle Verbesserungen in der neuen verinice-Generation bestmöglich nutzen zu können, sind die Daten in verinice vor dem VNA-Export zu prüfen und sofern erforderlich zu bereinigen:

### Modellierung prüfen

In der neuen verinice-Generation wird die Umsetzung von Anforderungen nicht mehr in der Anforderung, sondern in der Verknüpfung zum jeweiligen Zielobjekt dokumentiert. Es wird eine einzige Instanz jedes Bausteins und jeder Anforderung beibehalten und mit mehreren Zielobjekten verknüpft. Diese Deduplizierung von Bausteinen reduziert den Aufwand bei der Arbeit in verinice erheblich, bedarf dazu aber auch einer sorgfältigen Vorbereitung der Ausgangsdaten.

Nur Bausteine der aktuellen **Edition 2023-1** des IT-Grundschutz-Kompendiums werden dabei mit den Bausteinen im Katalog in verinice verknüpft. Ältere Editionen werden **ohne Katalog-Verweis** importiert und verhalten sich im Wesentlichen wie benutzerdefinierte Bausteine. Es ist dringend empfohlen die Modellierung entsprechend zu aktualisieren, um bei Veröffentlichung zukünftiger Editionen automatische Aktualisierungen nutzen zu können!

Die Bausteine müssen **korrekt modelliert bzw. referenziert** sein, dies betrifft insbesondere auch die Verknüpfungen zwischen Zielobjekten und Anforderungen.

Bausteine mit offizieller Benennung aus dem Kompendium müssen **vollständig** und **exakt** sein (alle Anforderungen umfassen, originale Beschreibung enthalten, originale Vorgehensweise eingestellt, ...). Andernfalls werden diese Bausteine ohne Verweis zum Katalog als benutzerdefinierte Bausteine interpretiert.

Pro Baustein darf nur eine Person als **Bausteinverantwortlicher** referenziert sein.

### Risikodefinition prüfen

Die Risikodefinition muss **identisch zur Risikomatrix** in verinice sein. Da in beiden Generationen als Standard die Risikodefinition aus dem BSI-Standard 200-3 verwendet wird, ist keine Aktion erforderlich, sofern die Risikodefinition in verinice nicht angepasst wurde.

Falls eine Anpassung der Risikodefinition erforderlich ist, kann dies einfach über das Menü im Abschnitt **Risikodefinition** erfolgen.

Beachten Sie, dass Risiken in verinice.cloud nur angelegt werden, wenn für ein Zielobjekt in verinice die Option **Risikoanalyse erforderlich** gesetzt ist.

### Neue Zielobjekte definieren

Dir Prozessobjekte wurden erweitert um **Fachverfahren**. Sie können vor dem VNA-Export durch Vergabe eines **Tags** in verinice definieren, ob ein Geschäftsprozess als Fachverfahren übernommen werden soll:

- Tag für die Übernahme als Fachverfahren:
- **veoimport:IT-Grundschutz:PRO_SpecialisedTask**
- (Allgemeine Syntax: veoimport:*domain-name*:*subtyp-id*)

## Installation

Für den **VNA-Importer** ist Java (mindestens Java 17) erforderlich. Da der VNA-Importer kontinuierlich weiter entwickelt wird, verwenden Sie die jeweils aktuellste Version. Das Programm ist nur in Englischer Sprache verfügbar.

Sie starten den VNA-Importer:

- unter **Windows** durch Ausführen der Datei **veo-vna-importer.exe**.
- unter **macos** und **Linux** durch Aufruf von **java -jar veo-vna-importer.jar** im Terminal, nach vorherigem Wechsel in das entsprechende Verzeichnis.

![VNA-Importer](/assets/new-in-verinice/vna-importer-start.en.png)

## VNA-Import ausführen

Nach Eingabe von Benutzername und Passwort für die Zielumgebung (Grundeinstellung: https://veo-web.verinice.com/) prüft das Programm diese unmittelbar auf Richtigkeit (Valid credentials). Bei Meldung **Invalid credentials** prüfen Sie bitte Benutzername und Passwort für die Zielumgebung.

![VNA-Importer](/assets/new-in-verinice/vna-importer-select.en.png)

Nach Auswahl einer zuvor aus verinice exportierten VNA-Datei, können Sie den Import mit zwei Optionen starten:

- **Dry Run:** In diesem Fall wird der Import **ohne** Übernahme von Daten durchgeführt (Testlauf), um eventuelle Fehler vor dem eigentlichen Import identifizieren zu können.
- **Strict Run:** Der Import wird mit strengeren Prüfungen durchgeführt, um Fehler besser identifizieren zu können.

Ein erfolgreicher Import wird durch entsprechende Meldung quittiert. Sofern der Import nicht als **Dry Run** durchgeführt wurde, finden Sie in Ihrer Zielumgebung eine Unit mit allen zuvor exportierten Inhalten vor. Nach einem **Dry Run** stehen die Inhalte dann nach wiederholtem realen Import zur Verfügung.

War der Import aufgrund von Fehlern mit entsprechender Fehlermeldung nicht erfolgreich, finden Sie weitere Hinweise über **Show logs**. Im Regelfall wurden dann noch nicht alle [Vorarbeiten in verinice](#vorarbeiten-in-verinice) vollständig umgesetzt.

Sollte der Export trotz Umsetzung der Vorarbeiten fehlschlagen, unterstützt das verinice.Team gerne bei Erkennung und Behebung der Fehler.

## Einschränkungen

Beim VNA-Import sind die folgenden Einschränkungen zu beachten:

- Einige wenige ältere Felder aus verinice sind in der neuen Generation nicht mehr vorhanden und werden bewusst nicht übertragen (z.B. Tags).
- Der Import von anwenderspezifischen Feldern/Daten (nach Customizing) kann in Abstimmung mit dem verinice.Team ergänzt werden.
