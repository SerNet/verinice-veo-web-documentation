<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# verinice 36
The following new features are available to users with the release of verinice 36:

## General functions

**Status: Productive**

### Detailed improvements

- The object type **Measures** has been renamed to the generally valid and more comprehensible term **Controls**.
- In a domain, you can configure which **Scope**, **Process** or **Asset** subtypes.

**Compliance-relevant** or **Risk-mitigating** controls can be assigned to.

### Bug fixes

- When inheriting protection requirements, the **effective impact** is correctly inherited instead of the **potential impact**.
- Correction of the prematurely displayed confirmation dialog when creating a new object.
- Fixed an error when saving translations (singular/plural) in the form schema editor.
- Typescript error in the frontend fixed.

### Product maintenance

- Improvement of the deployment process after changes to domains.

### REST API

- Removal of the **/type** endpoint.

## Domain DS-GVO
**Status: Productive**
- The **Risk** tab is no longer displayed for the **Data type**, **IT system** and

**Application** subtypes of the **Asset** object type.
## Domain ISO
**Status: Prototype**
- Creation of the ISO-27001 control catalog.
