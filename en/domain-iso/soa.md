<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# Statement of Applicability (SoA)

## Purpose of the Function

The Statement of Applicability (SoA) serves as a central component of the ISMS according to ISO/IEC 27001. In this verinice function, you document:

1. which **security controls from Annex A of ISO/IEC 27001** apply to the defined ISMS scope,
1. the reason why they are applicable or excluded, and
1. the current implementation status of these controls.

## Basics: Scope Objects

In verinice, the scope subtype **ISMS Scopes** is available for this purpose:

![Subtype ISMS Scopes]( /assets/en/domain-iso/verinice-39-subtype-scope.de.png)

Any number of scopes can be created, such as:

- **ISMS Scope**: Describes the organizational and technical scope of the ISMS. This object can form the basis for evaluating and determining the applicability of security controls.
- **Certification Scope**: Describes the specific part of the organization that is to be certified.

![ISMS Scope and Certification Scope]( /assets/en/domain-iso/verinice-39-two-scopes.de.png)

## Reviewing Controls and Documenting Applicability

### Selecting the ISMS Scope

Navigate in the menu under **Objects** to **Scopes** and then to **ISMS Scopes**. At the bottom right of the screen, you can use the plus button to create an ISMS scope and describe it in the form.

Alternatively, select the subtype **ISMS Scopes** in the dashboard and create the appropriate object in the object overview.

### Accessing the SoA Function

Open the created **ISMS Scope** and go to the **Controls** tab. Using the plus button **Select Controls**, you can choose the applicable security controls for the Statement of Applicability and save them. If the **ISO/IEC 27001 catalog** has already been applied to your Unit, the list of controls from Annex A of ISO/IEC 27001 will be loaded automatically.

In the list, all security controls that must be applied in the sense of a Statement of Applicability must be selected. These may include both controls from Annex A and organization-specific controls.

### Documenting Applicability, Implementation Status, and Justification

Once the controls are selected, they become part of the Statement of Applicability and are marked as **applicable** for the report.

To justify the selection of a control, click on the respective control in the **Controls** tab:

![Select Controls]( /assets/en/domain-iso/verinice-39-select-control.de.png)

and enter your reasoning in the description field:

![Reason for Selection]( /assets/en/domain-iso/verinice-39-select-reason.de.png)

To document the implementation status of a control, open the implementation dialog by clicking the **Show Implementation** icon:

![Show Implementation]( /assets/en/domain-iso/verinice-39-show-implementation.de.png)

Open the corresponding control and document the current implementation status in the lower section:

![Show Implementation]( /assets/en/domain-iso/verinice-39-implementation-status.de.png)

Controls with the implementation status **Yes**, **No**, **Partially**, or **Not started** will be marked as **applicable** in the **Statement of Applicability** report.

If a control should be part of the SoA but explicitly **excluded**, select the control in the **Controls** tab:

![Document Exclusion]( /assets/en/domain-iso/verinice-39-document-exclusion.de.png)

and enter the justification for the exclusion in the description field:

![Exclusion Justification]( /assets/en/domain-iso/verinice-39-description-exclusion.de.png)

For a control to be listed as not applicable in the report, its implementation status must be set to **Not required** in the implementation details.

## SoA Report

A fully completed Statement of Applicability report can be exported as a PDF for further use. To do this, click **Reports** in the left menu and select **Statement of Applicability**:

![SoA Report]( /assets/en/domain-iso/verinice-39-report-soa.de.png)

Select an ISMS scope with the assigned ISO/IEC 27001 Annex A controls and click **Generate Report** to create the Statement of Applicability.
