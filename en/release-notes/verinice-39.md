<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# verinice 39

The following new features are available to users with the release of verinice 39:

## General functions

### CSV import

The first iteration of the CSV import enables the import of any objects into all domains based on abbreviation, name and description:
![CSV-Import]( /assets/en/release-notes/verinice-39-csv-import.de.gif)

### Implementation of domain-specific controls

Forms can be created and integrated to display different information from **Controls** in the conversion dialog depending on the domain (prerequisite: Content Creator role).
![RI Forms for Controls]( /assets/en/release-notes/verinice-39-ri-form-control.de.png)

### Bug fixes

- When importing units, the unit limit per client is taken into account.

### Product maintenance

- Extension of the test coverage.
- Reliability of various tests improved.

### REST-API

- The **search endpoints** ````/elementType/searches``` announced as *deprecated* with verinice 37 have been removed.
- The **non-in-domain endpoints for writing elements** (```POST  /assets/en``` ```PUT  /assets/en/{id}``` etc.) announced as *deprecated* with verinice 34 have been removed.

## Domain IT-Grundschutz

**Status: Productive**

### Reports

- In the reports **A.4 Result of the IT-Grundschutz check** and **A.6 Implementation plan**, the implementation status is now color-coded:
![Implementation status color-coded]( /assets/en/release-notes/verinice-39-it-gs-report.de.png)
- In the reports **A.3, A.4 and A.6**, the person responsible from the control implementation (module responsible) is now correctly output instead of from the control itself.
- In the report **A.4 Result of the IT-Grundschutz check**, the description field has been removed from the control.

### Documentation

The description of the procedure for block modeling has been updated.

## Domain ISO

**Status: Private Beta**

### Risk profile according to DIN ISO/IEC 27001

The **Risk profile according to DIN ISO/IEC 27001** is ready for use in the ISO/IEC 27000 domain. This first iteration does **NOT** contain any license-protected control texts:
![Risk profile according to DIN ISO/IEC 27001]( /assets/en/release-notes/verinice-39-iso-risiko-profil.de.png)
::: info The risk profile according to DIN ISO/IEC 27001 corresponds to the risk catalog known from verinice!
:::

### Reports

- First versions of the reports for the **Inventory of Assets** and the **Statement of Applicability (SoA)**.
![ISO-Reports]( /assets/en/release-notes/verinice-39-soa-report.de.png)
