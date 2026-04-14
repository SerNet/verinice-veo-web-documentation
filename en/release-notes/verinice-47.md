<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# verinice 47

The following new features are available to users with the release of verinice 47.

## General Functions

### verinice on Premise

**Status: Private Beta**

verinice.onprem is currently being installed and tested as part of various beta projects.

Two installation options will be available shortly:

- Helm chart for native Kubernetes clusters.
- Virtual appliance with Talos Linux for Kubernetes.

In on-premises operation:

- All login pages, associated links, and graphics are adapted to the respective operating environment.
- Administrative tasks can be performed via a standalone command line interface (CLI).
- Licensed content (bundles/domains, units, users) is stored via license string.

### Read/write permissions on units

**Status: Productive**

With this iteration of permission management, read and write permissions for users and units can be assigned via **access groups**:

![Access groups](/assets/release-notes/verinice-47-access-groups.de.png)

Read and write permissions for each individual unit can be defined in the access groups:

![Units in access groups](/assets/release-notes/verinice-47-access-groups-units.de.png)

The access groups created can be assigned to individual users:

![Access groups for users](/assets/release-notes/verinice-47-access-groups-user.de.png)

### Detail improvements and bug fixes

**Status: Productive**

- In forms, email validation allows top-level domains (TLDs) with more than three characters.
- The documentation is freely accessible regardless of the permissions that have been set.
- The buttons in the Create Unit dialog are displayed correctly and legibly.
- Corrections in the risk definitions (spelling mistakes and color selection corrected).
- System banners (internal messages) are displayed immediately if no specific display date is specified.
- Update to OpenAPI 3.1 to improve the stability of the REST API.
- Upgrade NUXT to version 4.

## GDPR

**Status: Productive**

### Detail improvements and bug fixes

- The obsolete processing activity in the GDPR domain catalog has been deleted.
