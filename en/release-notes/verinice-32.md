<!-- © 2024 The Project Contributors - see AUTHORS.txt -->
# verinice 32
The following new features are available to users with the release of verinice 32:
## General functions
**Status: Productive**

- On the **Login page**, a clearer distinction is made between logging in to verinice.cloud and purchasing a subscription.
- Links in German renamed to **Verknüpfung** to improve recognition for verinice users.
- Fixed an error when saving risk mitigating measures.
- Fixed an error when editing (saving) the conversion.
- The implementation (RI - RequirementImplementation) of **ControlObjects** can now be applied in **Profiles**.
- Update of the Keycloak theme to V.3.
- Description of various dialogs made more informative.
- Improved behavior of the collapsed menu.
- Fixed an error when resetting the search or search criteria.
- Fixed an error when displaying the **First steps** page, the page is no longer cut off on high-resolution screens.
- Further expansion of test coverage.
- Improved migration for updates with changes to domains.

## Domain Privacy
**Status: Productive**
- Display of the description text of the request in the **Edit implementation** dialog.
- A newly created **Data protection impact assessment** is automatically created as **Part** of the processing activity from which it is created.
- In the **Data protection risk analysis** report, the description is displayed under the risk owner and is no longer truncated.

## Domain IT-Grundschutz
**Status: Productive**
- Updating and improving the documentation of the IT-Grundschutz domain (modeling, IT-Grundschutz check, risk analysis).
- When creating the **Hazard overview**, the generated risks are displayed without manual browser reload.
- Missing modeling of individual requirements (CI - ControlImplementations) when applying the profile **Standard or core protection according to IT-Grundschutz Compendium Edition 2023** including cause fixed.
- Missing display of potential values for probability of occurrence and impact/amount of damage in the risk dialog corrected.

## Domain NIS2
**Status: Productive**
### Release of the domain NIS2
::: warning Release of the **NIS2** domain to reflect Directive (EU) 2022/2555 of the European Parliament and of the Council concerning measures for a high common level of cybersecurity across the Union.
:::
The domain is available for verinice in the [Subscription Portal](https://account.verinice.com/), for details see also the description of the [Domain NIS2](https://verinice.com/loesungen/domaene/nis2-richtlinie) and the [Documentation](https://veo-docs.verinice.com/).
## Domain ISO
**Status: Prototype**
- Mapping of scenarios, threats and vulnerabilities.
- Creation of the risk catalog (conversion from verinice and adaptation to verinice.veo).

## Domain TISAX
**Status: Private beta**
- Revision of the profiles for self-assessments.

