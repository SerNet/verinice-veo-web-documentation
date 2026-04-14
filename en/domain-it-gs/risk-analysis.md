<!-- © 2024 The Project Contributors - see AUTHORS.txt -->
# Risk Analysis according to 200-3

## Definitions

In BSI IT Baseline Protection according to 200-x, different parameters for risk calculation can be defined per unit. The organization-wide risk matrix valid for all target objects is defined under [Risk Definitions](/manual/risk-definition.md).  
Navigate in the menu to **Risk Definitions** and then **GSRA**. Here you can edit the categories by clicking the **pencil icon**. You can adapt the following parameters to your requirements:

- Probability of occurrence
  - Name and definition of the categories
- Extent of damage
  - Name and definition of the categories
- Risk categories
  - Name, definition, and color of the categories

![Risk Matrix]( /assets/en/domain-it-gs/verinice-32-risk-matrix.de.png)

## Create Threat Overview

If a risk analysis is required, you must create a **threat overview** in the target object's details. This may be necessary, for example, if the target object has a high or very high protection requirement in one of the three security objectives.

![Create Threat Overview]( /assets/en/domain-it-gs/verinice-32-threat-overview.de.png)

This action copies the elemental threats according to the BSI cross-reference tables into your unit and creates risk objects for each elemental threat in the object environment of the target object:

![Risks]( /assets/en/domain-it-gs/verinice-32-risks.de.png)

## Risk Assessment

To further process the individual elemental threats, click on the respective threat to open a dialog. The first step is to perform the risk assessment. Evaluate the following parameters:

- **Probability of occurrence** (and optionally an explanation)
- **Impact regarding extent of damage** (and optionally an explanation)

Based on these two values, the **gross risk** is automatically calculated using the risk matrix after you save your entries.

![Risk Assessment]( /assets/en/domain-it-gs/verinice-32-risik-assessment.de.png)

## Risk Treatment

Depending on the level of risk, a risk treatment may or must be performed, and optionally an explanation documented. You can select multiple **treatment options**, with the following options available:

- Risk acceptance
- Risk avoidance
- Risk reduction
- Risk transfer

![Risk Treatment]( /assets/en/domain-it-gs/verinice-32-risk-treatment.de.png)

### Risk Reduction

If the risk treatment option **Risk Reduction** is selected, the risk can be reduced by adding additional security measures. You have two ways to add mitigating measures:

1. To create a **new measure**, click **Add Mitigating Measures** and then **Create Mitigating Measure**. A dialog opens to create the new measure. After saving your data for the measure, the new measure will be displayed in the previous risk dialog under **Measures for Risk Reduction**.

2. To link **existing measures**, click **Add Mitigating Measures** and then **Link Mitigating Measure**. A dialog opens where you can select the required mitigating measures from all already existing measures. After closing the dialog by clicking **Save**, the selected measures will be displayed in the **Measures for Risk Reduction** section:

![Link Existing Measures]( /assets/en/domain-it-gs/verinice-32-risk-reduction-1.de.png)

![Measures for Risk Reduction (Mitigating Measures)]( /assets/en/domain-it-gs/verinice-32-risk-reduction-2.de.png)

Finally, the **net risk** (and optionally an explanation) must be set manually. **Save** and **Close** the risk dialog.

### Edit Mitigating Measures

To edit your mitigating measures, click **Show Implementation** for the corresponding elemental threat in the **Risks** tab in the target object's environment.

![Mitigating Measures: Show Implementation]( /assets/en/domain-it-gs/verinice-32-implementation-1.de.png)

You will be taken to the overview of all mitigating measures for the selected elemental threat. Here you can edit the individual requirements/measures. Clicking on a requirement/measure opens the implementation dialog where you can view or enter the following information:

- Information about the target object and requirement/measure.
- Requirement description (from the IT Baseline Protection Compendium).
- Implementation information:
  - Responsible person.
  - Implementation deadline (date).
  - Implementation status (Not processed, Yes, Partially, No, Dispensable).
  - Implementation description.

![Mitigating Measures: Edit Implementation]( /assets/en/domain-it-gs/verinice-32-implementation-2.de.png)

After entering the data, close the dialog with **Save**.
