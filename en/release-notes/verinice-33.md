<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# verinice 33

The following new features are available to users with the release of verinice 33:
## General functions
**Status: Productive**
### Mapping of links

In the object view, incoming and outgoing links are displayed in one view with specification of the link type:
![Links]( /assets/en/release-notes/verinice-33_Links.de.png)

### Detail improvements
- The warning to recalculate the risk values in the risk dialog is now only displayed after changes.
- License terms for documentation completed and updated.
- Domain-specific content can be defined via config file when creating domains.

### Bug fixes
- Corrected display of subtypes in the breadcrumbs if the generic subtype **All** is selected in the object overview.
- Incorrect icon for domain selection with collapsed menu corrected.
- Enter in the **Create Unit** wizard takes you to the next page.
- Selecting a link in the form now correctly opens the target in a new browser tab.
![Open custom link]( /assets/en/release-notes/verinice-33_Custom_Link.png)
- Fixed display error in breadcrumb.
- Provision of risk values and translations in the form schema editor improved.

### Product maintenance
- Update of the Vue Framework to Nuxt 3.15.1.
- Upgrade of the Nuxt i18n module to version 9 and migration of translations.
- Expansion of test coverage through further automated tests.
## Domain data protection
**Status: Productive**
- The handling of threats in the GDPR has been improved:
- Hazards are now only applied once in the unit.
- Some duplicate hazards have been deleted in the GDPR sample organization.
- The description of measures for the TOM subtype is displayed in a Markdown field. The previous description remains untouched for consistency reasons.
- Real domains/URLs removed from sample data.

## Domain IT-Grundschutz
**Status: Productive**
- The safeguarding procedure is now also displayed when implementing risk-mitigating measures:
![Safeguarding procedure]( /assets/en/release-notes/verinice-33_Vorgehensweise_der_Absicherung.de.png)
- Consistent designation of the implementation status **Dispensable** (instead of not applicable).

## Domain NIS2
**Status: Productive**
- Control and measure description are displayed in a Markdown field for the subtypes Minimum measures and Organization-specific measures.
## Domain ISO
**Status: Prototype**
- Mapping of scenarios, threats and vulnerabilities.
- Creation of the risk catalog (conversion from verinice and adaptation to verinice.veo).
## Domain TISAX
**Status: Private Beta**
- Restructuring of the VDA ISA controls and subtypes.
## Domain BCM
**Status: Prototype**
- Description of source units for domain, catalog and profile created.
- BCM requirements catalog imported.
