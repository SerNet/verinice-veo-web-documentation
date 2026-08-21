<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# Von der Risikoanalyse zu BC-Lösungen

Ein effektives Business Continuity Management System (BCMS) setzt nahtlos an den Ergebnissen des Information Security Management Systems (ISMS) an. Während das ISMS primär präventiv ausgerichtet ist, greift das BCMS reaktiv und resilient, wenn präventive Kontrollen versagen oder ein Restrisiko nicht mehr durch Standardschutzmaßnahmen mitigiert werden kann.

## Grundkonzept und Zusammenspiel mit der ISMS-Domäne

 Um doppelte Datenpflegen zu vermeiden, nutzt verinice gezielte domänenübergreifende Synergien:

- Risikoanalyse im ISMS: Die eigentliche Risikoanalyse und Identifikation elementarer Gefährdungen (z. B. Brand, Ransomware, Hochwasser) findet primär in der ISMS- bzw. IT-Grundschutz-Domäne statt.

- Domänenübertragung: BCM-relevante Assets und Gefährdungen werden per Domänenübertragung in die BCM-Domäne überführt und dort als Ressourcen geführt.

- Abstraktion zu Notfallszenarien: Im BCM werden Einzelgefährdungen zu übergeordneten Notfallszenarien bzw. Auswirkungsszenarien gebündelt (z. B. Ausfall Gebäude, Ausfall Personal, Ausfall IT-Infrastruktur). Aus diesen Szenarien heraus werden BC-Strategien und konkrete BC-Lösungen entwickelt.
    
## Ableitung von Business-Continuity-Strategien aus Informationssicherheitsrisiken

### Einleitung & Zielsetzung

In verinice lässt sich dieser methodische Übergang durch die strukturierte Kopplung der ISMS- bzw. IT-Grundschutz-Domäne mit der BCM-Domäne abbilden. Im Folgenden wird das vierstufige Vorgehen zur Überführung von ISMS-Risiken in wirksame Notfallszenarien und BC-Strategien beschrieben.

### Phasenmodell zur Strategieableitung

**Phase 1: Ursprungsanalyse im ISMS (ITGS-Domäne)**

Die Ausgangsbasis bildet die reguläre Risikobewertung innerhalb der ISMS-Domäne:
- Assets & Gefährdungen: Sämtliche relevanten Assets (z. B. IT-Systeme, Infrastrukturen, Gebäude, Personal oder Informationsobjekte) werden systematisch erfasst und mit den entsprechenden Gefährdungen (wie Brandschäden, Ransomware-Befall, Stromausfall oder Hardwaredefekten) verknüpft.
- Risikoanalyse: Im Rahmen der Risikoanalyse wird das Ausmaß potenzieller Schäden sowie deren Eintrittswahrscheinlichkeit bewertet.
- Ergebnis: Assets und Gefährdungen mit einem nicht akzeptablen Restrisiko, bei denen Präventionsmaßnahmen allein nicht ausreichen oder verbleibende Schadensausmaße existenzbedrohend sein können, werden für die Notfall- und Ausweichplanung im BCM vorgemerkt.

**Phase 2: Der domänenübergreifende Brückenschlag**

Um Redundanzen und Medienbrüche zu vermeiden, erfolgt nun der methodische und funktionale Transfer in die BCM-Domäne:

- Ressourcenübernahme: Die identifizierten Assets aus dem ISMS werden in der BCMS-Domäne als kritische Ressourcen übertragen.
- Gefährdungstransfer: Die als risikobehaftet eingestuften Gefährdungen werden ebenfalls in die BCM-Domäne übernommen und stehen dort für die weitere Notfallplanung zur Verfügung.

**Phase 3: Methodische Abstraktion und Bildung von Notfallszenarien**

Ein zentraler Grundsatz des BCM lautet: „Plane nicht für die Ursache, sondern für die Auswirkung.“ Während das ISMS detailliert die Einzelursache betrachtet, bündelt das BCMS diese in übergeordneten Ausfall- bzw. Notfallszenarien:

* Wirkungsbasierte Verknüpfung: Die übernommenen ISMS-Gefährdungen werden in verinice den standardisierten BCM-Notfallszenarien zugeordnet (z. B. Ausfall von Gebäuden/Infrastruktur, Ausfall zentraler IT-Systeme, Verlust von Schlüsselpersonen, Ausfall von Dienstleistern).

Konsolidierungsbeispiel: Die separaten ISMS-Gefährdungen „DDoS-Angriff“, „Ransomware-Verschlüsselung“ und „Storage-Hardwaredefekt“ münden alle in das gemeinsame Notfallszenario „Nichtverfügbarkeit der Kern-IT“. Ebenso werden Gefährdungen wie „Brand“ und „Wassereinbruch“ im Szenario „Ausfall des Standorts / Gebäudes“ konsolidiert.

**Phase 4: Entwicklung von BC-Strategien und Ableitung konkreter BC-Lösungen**

Auf der Ebene der aggregierten Notfallszenarien erfolgt schließlich die Konzeption der Wiederanlauf- und Fortführungsmaßnahmen:

- BC-Strategieentwicklung: Für jedes Notfallszenario wird eine zielgerichtete BC-Strategie festgelegt (z. B. Aktivierung eines Ausweichrechenzentrums, Verlagerung ins Homeoffice, Notfallarbeitsplätze oder Umstellung auf manuelle Workarounds).

- Ausarbeitung von BC-Lösungen: Aus den übergeordneten Strategien werden spezifische, operative BC-Lösungen abgeleitet. Diese definieren die technischen, organisatorischen und personellen Maßnahmen (z. B. Notfallbetriebshandbücher, Wiederanlaufpläne, Notstromversorgungs-Konzepte) und bilden die unmittelbare Grundlage für die Notfallpläne und regelmäßigen Notfallübungen.
