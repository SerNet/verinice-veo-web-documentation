<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# verinice 61

Veröffentlichung: 16. Oktober 2026 (voraussichtlich)

Die folgenden Neuerungen stehen Anwenderinnen und Anwendern mit dem Release von **verinice 61** zur Verfügung.

## Detailverbesserungen und Bugfixes
<!-- epics/277 -->
<!-- epics/278 -->

- Button "Objekt hinzufügen" in der Objektansicht für eine einheitliche Bedienung nach oben verschoben.
- Fehler beim Import von Postleitzahlen im CSV-Import behoben.
- Fehler beim Import mehrerer Risiken für dasselbe Szenario behoben.
- Report "Datenschutz-Risikoanalyse" in den Domänen DS-GVO (DE) und GDPR (INT) optimiert.
- Fehlende Validierung des Subtyps bei addPart-Vorschlägen ergänzt.
- Landingpage der Dokumentation übersichtlicher nach Themenbereichen strukturiert.
- Gelegentlichen "unbekannten Fehler" beim Neuladen der Seite behoben.
- Fehlenden Wiederaufbau einer verlorenen RabbitMQ-Verbindung behoben.
- Fehlende Validierung von Migrationsschritten beim Import von Domain-Templates ergänzt.

## Verbesserungen für den OnPrem-Betrieb
<!-- epics/318 -->
<!-- epics/345 -->

Die folgenden Funktionen und Verbesserungen stehen Administratoren in OnPrem-Umgebungen zur Verfügung. Tiefergehende Beschreibungen entnehmen Sie bitte dem Repository.

- Bereitstellung einer kubeconfig für verinice Engineers zur Überwachung und Verwaltung der Deployments.
- Eigenes Root-CA-Zertifikat für ACME-Challenges über die Helm-Values konfigurierbar, damit auch interne, nicht öffentlich vertrauenswürdige ACME-Server genutzt werden können.
