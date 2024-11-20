# Arbeiten in der Domäne IT-Grundschutz

BSI IT-Grundschutz nach 200-2

Dieses Handbuch beschreibt die Umsetzung des BSI IT-Grundschutz nach der 200er-Reihe in verinice.veo.
Bitte beachten Sie für grundlegende Funktionen in verinice immer auch das [Benutzerhandbuch]()!
Die ausführliche Beschreibung des [modernisierten Grundschutz](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/IT-Grundschutz/it-grundschutz_node.html) und des [IT-Grundschutz-Kompendiums](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/IT-Grundschutz/IT-Grundschutz-Kompendium/it-grundschutz-kompendium_node.html) finden Sie auf den Webseiten des [BSI](https://www.bsi.bund.de/DE/Home/home_node.html).

Der BSI-Standard 200-2 IT-Grundschutz-Methodik sieht verschiedene Vorgehensweisen der Absicherung vor. Die detailierte Beschreibung der Vorgehensweisen Basis-, Standard- oder Kernabsicherung entnehmen Sie bitte den Webseiten des BSI und insbesondere dem [BSI-Standard 200-2 IT-Grundschutz-Methodik](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/IT-Grundschutz/BSI-Standards/BSI-Standard-200-2-IT-Grundschutz-Methodik/bsi-standard-200-2-it-grundschutz-methodik_node.html) .
In verinice.veo lassen sich alle Vorgehensweisen in der Domäne IT-Grundschutz abbilden:

## Strukturanalyse
Die [Domäne](LINK) IT-Grundschutz dient der Abbildung der Infrastruktur Ihrer Organisation als Grundlage zur Erstellung eines IT-Sicherheitskonzeptes nach der Basis-, Standard- oder Kernabsicherung.

### Informationsverbund
Über das [Dashboard](LINK) oder [Menü](LINK) gelangen Sie zu den **Scopes**, wo Sie Ihren **Informationsverbund** erstellen können. Klicken Sie dazu rechts unten *Informationsverbund erstellen*. Nun geben Sie im Dialog alle Daten (z.B. Abkürzung, Name, Beschreibung, Vorgehensweise der Absicherung) zum Objekt ein und speichern Sie abschließend. Je nach Erfordernis können Sie beliebig viele (Teil-)Verbünde anlegen. 

--> Bild 1
![Zielobjekt ertsellen](LINK "Zielobjekt erstellen")

### Zielobjekte
Für die Erstellung eines IT-Sicherheitskonzeptes ist es notwendig, die vorliegende Infrastruktur zu analysieren und zu dokumentieren. Alle zur Abbildung der Infrastruktur erforderlichen Zielobjekttypen werden unter **Prozesse** und **Asstes** dokumentiert. Legen Sie neue Zielobjekte, z.B. Geschäftsprozess oder IT-System, nach dem selben Prinzip wie beim Informationsverbund an.
Das Ergebnis der Strukturanalyse ist die vollständige Abbildung der Infrastruktur.

--> Bild 2
![Dashboard: Strukturanalyse](LINK "Dashboard: Strukturanalyse")

### Abhängigkeiten zwischen Zielobjekten
Verknüpfungen (Abhängigkeiten/Relationen) zwischen Objekten sind ein grundlegendes Element, das die Umsetzung verschiedenster Aufgaben in einem ISMS effektiv unterstützt. Prinzipiell können beliebige Objekte miteinander verknüpft werden. Standardmäßig sind verschiedene Verknüpfungsarten vordefiniert, von denen einige für spezifische Funktionen zwingend erforderlich sind.


Um eine Verknüpfung zwischen zwei Zielobjekten zu erstellen, müssen Sie im [Formular](LINK) eines Objektes das erforderliche andere Objekt hinzufügen. Scrollen Sie dazu im Formular weiter nach unten, wo die erforderlichen Objekte aufgelistet werden und suchen Sie das benötigte Objekt aus. 
Sollte bisher das gewünschte Objekt noch nicht vorhanden sein, so haben Sie die Möglichkeit ein neues Objekt (direkt aus dem Formular heraus) zu erzeugen. Klicken Sie dazu einfach *+"gewünschtes Objekt" erstellen*.   
Im [Objektsumfeld](LINK) werden unter **Links** alle ein- und ausgehenden Verknüpfungen aufgelistet. Natürlich gelangen Sie von hier aus auch (durch einen *klick*) in das entsprechende Zielobjekt, z.B. zur weiteren Bearbeitung.

--> Bild 3
![Verknüpfungen](LINK "Verknüpfungen")

## Schutzbedarfsfeststellung
### Definitionen
Die organisationsweiten und für alle Zielobjekte gültigen Schutzbedarfskategorien (unkritisch, normal, hoch und sehr hoch) für die Schutzziele Vertraulichkeit, Integrität und Verfügbarkeit werden unter [Risikodefinitionen]() definiert. Navigieren Sie dazu im Menü zu *Risikodefinitionen* und anschließend *GSRA*. Hier können Sie mit einem *Klick auf den Stift* die Kategorien der Schutzziele bearbeiten.

--> Bild 4
![Schutzbedarfsdefinitionen](LINK "Schutzbedarfsdefinitionen")

### Vorgehen bei der Schutzbedarfsfeststellung 
Innerhalb eines Informationsverbundes lässt sich der Schutzbedarf für alle relevanten Zielobjekte festlegen. Im BSI IT-Grundschutz sind dies Geschäftsprozesse/Fachverfahren, Informationen, Anwendungen, IT-Systeme, ICS-Systeme, IoT-Systeme, Kommunikationsverbindungen und Räume. Öffnen Sie dazu das Formular des jeweiligen Zielobjektes und scrollen Sie bis zum Abschnitt **Wirkungsanalyse**. Wählen Sie in den Drop-Down-Menüs den entsprechenden Schutzbedarf unkritisch, normal, hoch oder sehr hoch für die drei Grundwerte Vertraulichkeit, Integrität und Verfügbarkeit aus.

--> Bild 5
![Schutzbedarfsfeststellung](LINK "Schutzbedarfsfeststellung")

### Ableitung des Schutzbedarfs
In verinice wird der Schutzbedarf ausgehend von Geschäftsprozessen/Fachverfahren als oberster Ebene in der Ableitungshierarchie für die übrigen Zielobjekte getrennt nach Vertraulichkeit, Integrität und Verfügbarkeit automatisiert abgeleitet.
Die automatisierte Ableitung des Schutzbedarfs folgt dabei immer dem Maximumprinzip über die gesamte Ableitungshierarchie, kann andererseits aber in jedem Zielobjekt manuell „überschrieben“ werden, indem der Schutzbedarf über das Drop-Down-Feld *Nutzervorgabe* manuell gesetzt wird. In diesem Fall ist durch Auswahl in dem Drop-Down-Feld *Begründung* noch Verteilungs-/ Kumulationseffekt zu dokumentieren, ob Verteilungseffekt oder Kumulationseffekt zugrunde gelegt wurden.

--> Bild 6
![Ableitung des Schutzbedarfs](LINK "Ableitung des Schutzbedarfs")
