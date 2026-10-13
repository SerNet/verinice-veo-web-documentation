<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# verinice 61

Release Date: October 16, 2026 (tentative)

The following new features will be available to users with the release of **verinice 61**.

## Detail Improvements and Bug Fixes
<!-- epics/277 -->
<!-- epics/278 -->

- The “Add Object” button in the object view has been moved to the top for a more consistent user experience.
- Fixed an error when importing postal codes via CSV import.
- Fixed an error when importing multiple risks for the same scenario.
- Optimized the “Data Protection Risk Analysis” report in the GDPR (DE) and GDPR (INT) domains.
- Added missing validation for the subtype in addPart suggestions.
- Structured the documentation landing page more clearly by topic area.
- Fixed an occasional unknown error when reloading the page.
- Fixed a failure to re-establish a lost queue connection.
- Added missing validation of migration steps when importing domain templates.

## Improvements for On-Premises Operation
<!-- epics/318 -->
<!-- epics/345 -->

The following features and improvements are available to administrators in on-premises environments. Please refer to the repository for more detailed descriptions.

- Provision of a kubeconfig for verinice engineers to monitor and manage deployments.
- Custom root CA certificate for ACME challenges can be configured via Helm values, allowing the use of internal, non-publicly trusted ACME servers.
