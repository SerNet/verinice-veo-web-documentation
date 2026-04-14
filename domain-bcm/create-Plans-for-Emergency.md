<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# Geschäftsfortführungs- und Wiederanlaufplanung

## Zielsetzung

Ziel der Geschäftsfortführungs- und Wiederanlaufplanung ist sicherzustellen, dass **zeitkritische Geschäftsprozesse und Ressourcen** nach einem Schadensereignis innerhalb der geforderten Zeit wieder aufgenommen bzw. wiederhergestellt werden können. Grundlage hierfür bilden die Ergebnisse der **Business Impact Analyse (BIA)** und die **definierten Business Continuity Strategien**. Die Planung gliedert sich in zwei Teilbereiche:

- **Wiederanlauf- und Wiederherstellungsplanung** für zeitkritische Ressourcen  
- **Geschäftsfortführungsplanung** für zeitkritische Geschäftsprozesse auf Ebene der Organisationseinheiten

Für beide Bereiche sind strukturierte Pläne zu erstellen, die alle erforderlichen technischen, organisatorischen und personellen Maßnahmen enthalten.

Die **GFPs, WAPs und WHPs** bilden dabei das zentrale operative Instrument des Business Continuity Managements und gewährleisten eine koordinierte, nachvollziehbare und effektive Reaktion auf Notfälle und Krisen.

## Geschäftsfortführungsplanung

Die **Geschäftsfortführungspläne** beschreiben alle erforderlichen Maßnahmen und Abläufe, um zeitkritische Geschäftsprozesse im Notfall innerhalb der vorgegebenen Zeit fortzuführen.
Die in der BIA identifizierten zeitkritischen Prozesse bilden dabei die Grundlage der Planung.

Gemäß der Empfehlung des BSI kann die Geschäftsfortführung je Organisationseinheit geplant und dokumentiert werden. Zentrale Subtypen für die Erstellung eines Geschäftsfortführungsplans – basierend auf der BSI-Vorlage – sind der Scope **Organisationseinheit**, dem die zeitkritischen Geschäftsprozesse zugeordnet sind sowie der Control-Subtyp **BC-Lösung**.

Damit ein Geschäftsfortführungsplan künftig direkt aus verinice per Report generiert werden kann, empfiehlt sich folgende Vorgehensweise:

- **Organisationseinheit anlegen oder zuordnen:** Wechseln Sie zum Scope **Organisationseinheit**. Wurde die Organisationseinheit im Rahmen der BIA bereits einem Geschäftsprozess zugeordnet, ist sie dort automatisch verknüpft. Andernfalls legen Sie ein neues Objekt für die entsprechende Organisationseinheit an.

- **Allgemeine Angaben erfassen:** Dokumentieren Sie grundlegende Informationen zur Geschäftsfortführung, wie:

   - Geltungsbereich und Zielsetzung des GFP,
   - Aktivierung des GFP,
   - verantwortliche Leitungsperson für die Alarmierung,
   - zuständige Personen/Notfallteam

![Angaben zur Geschäftsfortführung einer Organisationseinheit](/assets/domain-bcm/verinice-46-organizationalUnit.gif)

- **Zeitkritische Geschäftsprozesse verknüpfen:** Die zeitkritischen Geschäftsprozesse sind im Reiter **Verknüpfungen** sichtbar, sofern die Organisationseinheit bereits einem Prozess zugeordnet ist. Falls nicht, navigieren Sie zu den Geschäftsprozessen und verknüpfen dort die verantwortliche Organisationseinheit.

- **Notbetrieb und Personalstruktur definieren:** Ergänzen Sie Angaben zur Notbesetzung der Organisationseinheit – einschließlich Rollen, Funktionen und Arbeitsplätze. Dokumentieren Sie:

   - besondere Pflichten, Rechte und Kompetenzen im Notbetrieb,
   - fachspezifische Melde- und Berichtspflichten,
   - relevante interne und externe Kontakte. Die Kontaktdaten und Vertreter sollten im Personen-Objekt hinterlegt werden, um sie im Report automatisch auszugeben.

- **BC-Lösungen der Organisationseinheit zuordnen**: Falls noch keine BC-Lösung angelegt wurde, wechseln Sie zum Control-Subtyp **BC-Lösung** und erfassen Sie dort geeignete Lösungen für Notfälle. Beschreiben Sie die Lösung mit Bezug auf:

   - das zugrunde liegende Ausfallszenario,
   - die betroffene Ressource,
   - die angewandte BC-Strategie,
   - die betroffenen Geschäftsprozesse und
   - die geplanten Notfallmaßnahmen.

- **Notfallmaßnahmen der BC-Lösung verknüpfen**: Erstellen und/oder verknüpfen Sie Notfallmaßnahmen unter **Maßnahmen, um den Notbetrieb zu erreichen (Wiederanlauf in den Notbetrieb)**, **Maßnahmen für die Geschäftsfortführung**, **Maßnahmen zur Rückführung in den Normalbetrieb** entweder als einzelne Objekte oder als Composite, dem Sie Unteraktivitäten zuordnen. So können für jede Maßnahme organisatorische und technische Voraussetzungen sowie die verantwortliche Person dokumentiert werden.

![BC-Lösung erstellen und einer Organisationseinheit zuordnen](/assets/domain-bcm/verinice-46-bc-solution.gif)

Auf vorhandene GFPs kann unter dem Bereich **Dokumente** verwiesen werden.

## Erstellung von Wiederanlauf- und Wiederherstellungspläne für kritische Ressourcen

Die **Wiederanlaufs- und Wiederherstellungsplanung** umfasst alle organisatorischen, technischen und personellen Maßnahmen, um ausgefallene Ressourcen wie IT-Systeme, Gebäude, Arbeitsplätze oder Dienstleistungen schnellstmöglich wieder in einen betriebsbereiten Zustand zu versetzen. Diese Planung erfolgt idealerweise von den Ressourcenzuständigen. In verinice orientiert sich der Aufbau der Wiederanlauf- und Wiederherstellungsplanung an der **BSI-Vorlage für Wiederanlaufpläne**. Die Planung erfolgt direkt im jeweiligen **Ressourcen-Objekt**.

#### Inhalte der Wiederanlaufplanung

- **Allgemeine Informationen:** Zielsetzung, Aktivierungsprozess und Rahmenbedingungen.
- **Voraussetzungen zum Wiederanlauf:** Organisatorische und technische Voraussetzungen.
- **Durchführung des Wiederanlaufs:** Konkrete Ablaufschritte, Zuständigkeiten und Umsetzungsdetails. Erstellen und/oder verknüpfen Sie **Notfallmaßnahmen**, die die Durchführung des Wiederanlaufs beschreiben – entweder als **einzelne Objekte** oder als **Composite**, dem Unteraktivitäten zugeordnet werden. Für jede Maßnahme können organisatorische und technische Voraussetzungen sowie die verantwortliche Person dokumentiert werden. Zusätzlich kann pro Notfallmaßnahme festgehalten werden:

  * Prüfschritte, 
  * erwartete Dauer und erforderliche Dokumentation,
  * ausführendes System und zuständige Person,
  * nachgelagerte Aktivitäten und Abhängigkeiten,
  * Korrektur- und Verbesserungsmaßnahmen bei identifizierten Schwachstellen.

![Notfallmaßnahmen dokumentieren](/assets/domain-bcm/verinice-46-emergencyMeasure.gif)

![Wiederanlaufplanung einer Ressource](/assets/domain-bcm/verinice-46-wap.gif)

- **Funktionstests und Übergabe in den Notbetrieb:**
  Beschreibung der Testaktivitäten und ihrer Ergebnisse (erfolgreich/nicht erfolgreich) sowie ggf. notwendiger Korrekturmaßnahmen.
- **Notbetrieb:**
  Dokumentation erwarteter Einschränkungen, ergänzender Maßnahmen und relevanter Hinweise.

![WAP](/assets/domain-bcm/verinice-46-testactivities.gif)

#### Inhalte der Wiederherstellungsplanung

Im zweiten Abschnitt werden die **Voraussetzungen zur Wiederherstellung** der Ressource beschrieben. Die **Wiederherstellungspläne (WHP)** ergänzen die **Wiederanlaufpläne (WAP)** und beschreiben alle erforderlichen Maßnahmen, um ausgefallene Ressourcen vollständig wiederherzustellen und den **Normalbetrieb** zu sichern.

Für die Wiederherstellung können folgende Punkte dokumentiert werden:

* organisatorische und technische Voraussetzungen,
* Maßnahmen zur Durchführung der Wiederherstellung,
* Maßnahmen zur Rückführung in den Normalbetrieb,
* Korrektur- und Verbesserungsmaßnahmen zur Nachbereitung, Bewertung und Dokumentation der Ergebnisse.

![WAP](/assets/domain-bcm/verinice-46-whp.gif)
