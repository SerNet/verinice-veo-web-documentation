<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# verinice 34

The following new features are available to users with the release of verinice 34:
## General functions
**Status: Productive**
### Multiple selection - Delete

In the first iteration of **multiple selection** the **deletion** of multiple objects is supported.
![Multiple selection - Delete]( /assets/en/release-notes/verinice-34-bulk-delete.de.gif)

### Feature toggle
Feature toggles are used to provide new functions, e.g. to receive feedback from users as early as possible in the development process. The first feature is the ability to switch between list and card view.
![Feature-Toggle - Cards]( /assets/en/release-notes/verinice-34-feature-toggle-cards.de.gif)

::: danger The feature toggles are only available in selected environments such as the sandbox for beta tests!
:::
### Detail improvements
- Domain-specific content can be customized via configuration files (only for **Content Creator** role).

### Bug fixes
- Icon and tooltip for the documentation on the login page corrected.
### Product maintenance
- Update of Nuxt and Nuxt/Kit to v3.15.4.
- Upgrade of the Nuxt i18n module to v9.
- Improvement of internationalization (SFC - separation of concerns).
- Extension of the test coverage.

## Domain data protection
**Status: Productive**
- Extension and improvement of documentation.
- In the **Data protection risk analysis** report, risk-mitigating measures grouped in composites are read out.

## Domain IT-Grundschutz
**Status: Productive**
- Protection requirement inheritance from processes to rooms added.
## Domain NIS2
**Status: Productive**
The **implementing regulation** (EU) 2024/2690 (Implementing Act) is available in the NIS2 domain:
- The NIS Implementing Act has been integrated into the **NIS2 domain catalog**.
- The **NIS2 profile Domainwirtschaft** has been extended to take account of the Implementing Regulation.
![NIS2 Implementation Regulation]( /assets/en/release-notes/verinice-34-nis2-implementing-acts.de.png)

## Domain ISO
**Status: Prototype**
- Creation of the risk catalog (conversion from verinice and adaptation to verinice.veo).
- Support for automated protection requirement inheritance.

## Domain TISAX
**Status: Private Beta**
- Revision of the TISAX / VDA ISA catalog.

## Domain BCM
**Status: Prototype**
- Support of a GAP analysis or self-assessment in the context of Business Continuity Management (BCM).
- Provision of the BCM requirements catalog of the BSI.

