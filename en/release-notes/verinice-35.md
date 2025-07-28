<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# verinice 35
The following new features are available to users with the release of verinice 35:

## General functions
**Status: Productive**
### Map view
The map view now supports navigation, the layout has been optimized.
::: danger The map view is only available in selected environments such as the sandbox via feature toggle!
:::

### Risk levels customizable
The levels of the risk matrix can be customized:
![Risk levels]( /assets/en/release-notes/verinice-35-risk-matrix.de.gif)

### Detailed improvements
- Domain-specific content can be customized via configuration.
- When creating a new object from the object overview **All**, the subtype can now be selected in advance.
- Corrections and improvements to translations (renaming of the object type **Measures** to **Controls**; consistent use of **Domain** instead of **Domain** in DE).
- The cookie banner is no longer overlaid by the main navigation.
- The popup with messages no longer overlays the **Plus** button for further actions.

### Bug fixes
- The pagination in the object overview now works correctly when the language is changed.
### Product maintenance
- Optimization of the deployment process
- Improvements to the OpenAPI documentation
- Workaround for the Keycloak Dark Theme removed
- Test coverage extended

### REST API
::: danger The old **not-in-domain endpoints** for writing elements will be removed in an upcoming release. The domain-specific endpoints should be used instead!
:::
::: danger The **“/types ”** endpoint has been marked as obsolete and should no longer be used. The information returned by this endpoint is static and can be found in the OpenAPI documentation if required. The endpoint will be removed in an upcoming release.
:::

## Domain IT-Grundschutz
**Status: Productive**
The risks for the information network are now also output in the **A.5 Risk analysis** report.
## Domain ISO
**Status: Prototype**
- Creation of the risk catalog (conversion from verinice and adaptation to verinice.veo).
- A risk definition can now be selected in all scope objects.

## Domain IT-Grundschutz++
**Status: Prototype**
Creation of a first prototype of the IT-Grundschutz++ domain for the [verinice.XP 2025](https://verinicexp.org)
