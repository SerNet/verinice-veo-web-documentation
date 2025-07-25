import { MultiLingualSidebarItem } from "./MultiLingualSidebarItem";

export const sidebarItems :  MultiLingualSidebarItem[] = [
  {
    text: { de: "Benutzerhandbuch", en: "User Manual" },
    link: "/manual/",
    collapsed: true,
    items: [
      { text: { de: "Erste Schritte", en: "Getting Started" }, link: "/manual/welcome" },
      { text: { de: "Unit-Verwaltung", en: "Unit Management" }, link: "/manual/unit-management" },
      { text: { de: "Benutzeroberfläche", en: "User Interface" }, link: "/manual/user-interface" },
      { text: { de: "Objekte", en: "Objects" }, link: "/manual/objects" },
      { text: { de: "CSV-Import", en: "CSV Import" }, link: "/manual/CSV-Import" },
      { text: { de: "Kataloge", en: "Catalogs" }, link: "/manual/catalogs" },
      { text: { de: "Reports", en: "Reports" }, link: "/manual/reports" },
      { text: { de: "Risikodefinitionen", en: "Risk Definitions" }, link: "/manual/risk-definition" },
      { text: { de: "Datenübertragung", en: "Data Transfer" }, link: "/manual/data-transfer" },
      { text: { de: "Benutzerverwaltung", en: "User Management" }, link: "/manual/accounts" },
    ],
  },
  {
    text: { de: "Die Domäne DS-GVO", en: "The GDPR Domain" },
    link: "/domain-ds-gvo/",
    collapsed: true,
    items: [
      { text: { de: "Aufbau der Domäne", en: "Domain Structure" }, link: "/domain-ds-gvo/domain-ds-gvo-description" },
      { text: { de: "Verzeichnis der Verarbeitungstätigkeiten", en: "Processing Activities Register" }, link: "/domain-ds-gvo/data-processing" },
      { text: { de: "Datenübertragungen", en: "Data Transfers" }, link: "/domain-ds-gvo/data-transfer" },
      { text: { de: "Risikomanagement", en: "Risk Management" }, link: "/domain-ds-gvo/risk-management" },
      { text: { de: "Datenschutz-Folgenabschätzung", en: "Data Protection Impact Assessment" }, link: "/domain-ds-gvo/data-protection-impact-assessment" },
      { text: { de: "Datenschutzvorfälle", en: "Data Privacy Incidents" }, link: "/domain-ds-gvo/data-privacy-incidents" },
      { text: { de: "Betroffenenanfragen", en: "Data Subject Requests" }, link: "/domain-ds-gvo/request-data-subjects" },
      { text: { de: "Auftragsverarbeiter", en: "Processors" }, link: "/domain-ds-gvo/processors" },
      { text: { de: "Auftraggeber", en: "Controllers" }, link: "/domain-ds-gvo/controllers" },
    ],
  },
  {
    text: { de: "Die Domäne IT-Grundschutz", en: "he IT-Grundschutz Domain" },
    link: "/domain-it-gs/",
    collapsed: true,
    items: [
      { text: { de: "Aufbau der Domäne", en: "Domain Structure" }, link: "/domain-it-gs/domain-it-gs-description" },
      { text: { de: "Strukturanalyse", en: "Structure Analysis" }, link: "/domain-it-gs/structure-analysis" },
      { text: { de: "Schutzbedarfsfeststellung", en: "Protection Needs Assessment" }, link: "/domain-it-gs/protection-needs" },
      { text: { de: "Modellierung", en: "Modeling" }, link: "/domain-it-gs/modelling" },
      { text: { de: "IT-Grundschutz-Check", en: "IT Baseline Protection Check" }, link: "/domain-it-gs/it-grundschutz-check" },
      { text: { de: "Risikoanalyse", en: "Risk Analysis" }, link: "/domain-it-gs/risk-analysis" },
    ],
  },
  {
    text: { de: "Die Domäne ISO/IEC 27000", en: "The ISO/IEC 27000 Domain" },
    link: "/domain-iso/",
    collapsed: true,
    items: [
      { text: { de: "Aufbau der Domäne", en: "Domain Structure" }, link: "/domain-iso/domain-iso-27000-description" },
      { text: { de: "Inventarverzeichnis", en: "Inventory" }, link: "/domain-iso/inventory" },
      { text: { de: "Erklärung zur Anwendbarkeit", en: "Statement of Applicability" }, link: "/domain-iso/soa" },
      { text: { de: "Risikomanagement", en: "Risk Management" }, link: "/domain-iso/risk-management" },
      { text: { de: "Risikoprofil nach DIN ISO/IEC 27001", en: "Risk Profile according to DIN ISO/IEC 27001" }, link: "/domain-iso/profiles" },
    ],
  },
  {
    text: { de: "Die Domäne NIS2", en: "The NIS2 Domain" },
    link: "/domain-nis2/",
    collapsed: true,
    items: [
      { text: { de: "Aufbau der Domäne", en: "Domain Structure" }, link: "/domain-nis2/domain-nis2-description" },
      { text: { de: "Anforderungen umsetzen", en: "Implementing Requirements" }, link: "/domain-nis2/domain-nis2" },
    ],
  },
  {
    text: { de: "Objektmodell", en: "Object Model" },
    link: "/object-model/",
    collapsed: true,
    items: [
      { text: { de: "Domänen", en: "Domains" }, link: "/object-model/domains" },
      { text: { de: "Objekte", en: "Objects" }, link: "/object-model/objects" },
      { text: { de: "Formulare", en: "Forms" }, link: "/object-model/forms" },
      { text: { de: "Kataloge", en: "Catalogs" }, link: "/object-model/catalogs" },
      { text: { de: "Profile", en: "Profiles" }, link: "/object-model/profiles" },
    ],
  },
  {
    text: { de: "Glossar", en: "Glossary" },
    link: "/glossary/",
  },
  {
    text: { de: "Entwicklerdokumentation", en: "Developer Documentation" },
    link: "/developers/",
    collapsed: true,
    items: [
      { text: { de: "Getting started with the verinice API", en: "Getting started with the verinice API" }, link: "/developers/getting-started-with-the-verinice-api" },
      { text: { de: "Wörterbuch", en: "Dictionary" }, link: "/developers/dictionary" },
    ],
  },
  {
    text: { de: "Release Notes", en: "Release Notes" },
    link: "/release-notes/",
    collapsed: true,
    items: [
      { text: { de: "verinice 40", en: "verinice 40" }, link: "/release-notes/verinice-40" },
      { text: { de: "verinice 39", en: "verinice 39" }, link: "/release-notes/verinice-39" },
      { text: { de: "verinice 38", en: "verinice 38" }, link: "/release-notes/verinice-38" },
      { text: { de: "verinice 37", en: "verinice 37" }, link: "/release-notes/verinice-37" },
      { text: { de: "verinice 36", en: "verinice 36" }, link: "/release-notes/verinice-36" },
      { text: { de: "verinice 35", en: "verinice 35" }, link: "/release-notes/verinice-35" },
      { text: { de: "verinice 34", en: "verinice 34" }, link: "/release-notes/verinice-34" },
      { text: { de: "verinice 33", en: "verinice 33" }, link: "/release-notes/verinice-33" },
      { text: { de: "verinice 32", en: "verinice 32" }, link: "/release-notes/verinice-32" },
      { text: { de: "verinice 31", en: "verinice 31" }, link: "/release-notes/verinice-31" },
      { text: { de: "verinice 30", en: "verinice 30" }, link: "/release-notes/verinice-30" },
      { text: { de: "verinice 29", en: "verinice 29" }, link: "/release-notes/verinice-29" },
      { text: { de: "verinice 28", en: "verinice 28" }, link: "/release-notes/verinice-28" },
      { text: { de: "verinice 27", en: "verinice 27" }, link: "/release-notes/verinice-27" },
      { text: { de: "verinice 26", en: "verinice 26" }, link: "/release-notes/verinice-26" },
      { text: { de: "verinice 1.20", en: "verinice 1.20" }, link: "/release-notes/verinice-1.20" },
      { text: { de: "verinice 1.19", en: "verinice 1.19" }, link: "/release-notes/verinice-1.19" },
      { text: { de: "verinice 1.18", en: "verinice 1.18" }, link: "/release-notes/verinice-1.18" },
    ],
  },
  {
    text: { de: "Roadmap", en: "Roadmap" },
    link: "/roadmap/",
  },
];





