<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Risk Consideration

In Grundschutz++, the *Risikobetrachtung* (risk consideration) is the instrument for determining which risks the organization is exposed to and for treating them in a structured and systematic way. You can find the associated requirements in the *Praktik* (practice) **Risikomanagement (RISK)**.

::: info Status of the methodology
The *Risikobetrachtung* is still being developed in Grundschutz++. The *Pilotierungsfassung* (pilot version) defines minimum criteria that every risk methodology must meet. You can use the risk methodology of Grundschutz++ or a methodology of your own choice that meets these criteria.
:::

## When Is a Risk Consideration Required?

A *Risikobetrachtung* is required in particular:

- for business processes with a ***Schutzbedarf*** (protection need) of ***hoch*** (high) and the associated assets
- if requirements of the *Anforderungspaket* (requirements package) are ***nicht erfüllt*** (not fulfilled)
- for a **reduction of the _Sicherheitsniveau_** (security level) of a requirement from **Increased** to **Normal-SdT**
- for ***ergänzende Anforderungen*** (supplementary requirements) that address a damage scenario
- for **assets that are difficult to assign**, for which no suitable *Zielobjektkategorie* (target object category) exists

The results of the *Risikobetrachtung* are included in the *Anforderungspaket* as additional requirements and used further in the implementation plan.

## Minimum Criteria

Regardless of the chosen methodology, the top management of the organization bears the overall responsibility and approves procedures, role definitions, and risk criteria.

**Initiation of risk management**

- uniform procedure for risk identification, assessment, and treatment
- criteria for risk identification, risk assessment, and risk acceptance
- comparable, comprehensible results when carried out repeatedly
- defined roles, in particular risk owners
- approval by the top management and comprehensible documentation of the procedures

**Risk identification and assessment**

- identify risks to confidentiality, integrity, and availability within the scope
- assign a risk owner to each risk
- estimate the consequences and the probability of occurrence and determine the risk level from them
- compare the risk level with the acceptance criteria and prioritize the risks
- document the results

**Risk treatment**

- define treatment options (reduce, avoid, transfer, accept)
- determine the required security measures, create an implementation plan, and have it authorized by the risk owners
- implement the safeguards, assess the residual risks, and have them accepted by the risk owners
- document results and decisions

**Regular review**

The *Risikobetrachtung* must be reviewed at least annually and in the event of significant changes: Have new risks emerged? Are the assessments still accurate? Have the safeguards been implemented? Can the residual risks still be accepted?

## Definitions

The organization-wide risk matrix valid for all objects is defined under [Risk Definitions](../manual/risk-definition.md). To do so, navigate in the menu to **Risk Definitions** and then **GSRD**. Here you can edit the categories by clicking the **pencil icon** and adapt them to your risk criteria:

- **Probability of occurrence:** Rare, Medium, Frequent, Very frequent
- **Extent of damage:** Negligible, Limited, Considerable, Existential
- **Risk categories:** Low, Medium, High, Very high

<!-- SCREENSHOT: ![Risk matrix](../assets/domain-gs-pp/verinice-gspp-risk-matrix.png) – Risk matrix of the risk definition GSRD -->

The adapted definitions and the acceptance criteria must be approved by the top management of the organization.

## Elementary Threats

The domain provides the 47 elementary threats G 0.1 to G 0.47 as **Scenarios**. In the **BSI G0-Threats** field, each requirement of the catalog lists the threats it counteracts. This field shows you which threats have an increased effect if a requirement is *nicht erfüllt*.

Apply the required elementary threats from the [catalog](../manual/catalogs.md) (select **Elementary threats** and click **Apply**).

## Create Risks

For the affected target object (or business process), create one risk per relevant threat: in the object view of the object, select the **Risks** tab, click **+**, and select the elementary threats. A risk object is created for each selected threat.

<!-- SCREENSHOT: ![Create risks](../assets/domain-gs-pp/verinice-gspp-create-risks.png) – Risks tab of a target object with the selection dialog of the elementary threats -->

<!-- SCREENSHOT: ![Risks](../assets/domain-gs-pp/verinice-gspp-risks.png) – List of the created risks in the object view -->


Assign a **Risk owner** to each risk.

## Risk Assessment

Click on the respective risk; a dialog opens. Assess the following parameters:

- **Probability of occurrence** (and optionally an explanation)
- **Impact regarding extent of damage** (and optionally an explanation)

Based on these two values, the **gross risk** is automatically calculated using the risk matrix after you have saved your entries.

<!-- SCREENSHOT: ![Risk assessment](../assets/domain-gs-pp/verinice-gspp-risk-assessment.png) – Risk dialog with probability of occurrence, extent of damage, and calculated gross risk -->

## Risk Treatment

Depending on the level of risk, a risk treatment may or must be performed, and optionally an explanation documented. You can select multiple **treatment options**:

- Risk acceptance
- Risk avoidance
- Risk reduction
- Risk transfer

<!-- SCREENSHOT: ![Risk treatment](../assets/domain-gs-pp/verinice-gspp-risk-treatment.png) – Risk treatment section with treatment options -->

### Risk Reduction

If the treatment option **Risk Reduction** is selected, you reduce the risk with additional security measures. You have two ways to add mitigating measures:

1. To create a **new measure**, click **Add Mitigating Measures** and then **Create Mitigating Measure**. After you have saved your data for the measure, the new measure is displayed in the risk dialog in the **Measures for Risk Reduction** section.

1. To link **existing measures**, click **Add Mitigating Measures** and then **Link Mitigating Measure**. In the dialog, select the required measures and close it with **Save**.

<!-- SCREENSHOT: ![Measures for risk reduction](../assets/domain-gs-pp/verinice-gspp-risk-reduction.png) – Measures for Risk Reduction section with linked mitigating measures and net risk -->

Finally, the **net risk** (and optionally an explanation) must be set manually. **Save** and **Close** the risk dialog.

Include safeguards that result in permanent security requirements as [*ergänzende Anforderungen*](./modelling#supplementing-requirements) in the *Anforderungspaket*.

### Edit Mitigating Measures

To edit your mitigating measures, click **Show Implementation** for the corresponding risk in the **Risks** tab in the object view of the target object. You will be taken to the overview of all mitigating measures for the selected risk. Clicking on a measure opens the implementation dialog, which you edit in the same way as for the requirements (see [*Realisierung*](./implementation#show-implementation) (realization)).

<!-- SCREENSHOT: ![Mitigating measures](../assets/domain-gs-pp/verinice-gspp-safeguards.png) – Overview of the mitigating measures of a risk -->

## Residual Risks

The residual risks (net risks) must be accepted by the responsible risk owners. Document the acceptance comprehensibly, e.g., in the explanation of the net risk. The residual risks are incorporated into the [prioritization of the implementation](./implementation#implementation-planning-and-prioritization) and into the [management review](./monitoring-improvement#management-review).

## Elementary Threats at a Glance

| ID | Threat | ID | Threat |
|---|---|---|---|
| G 0.1 | Feuer | G 0.25 | Ausfall von Geräten oder Systemen |
| G 0.2 | Ungünstige klimatische Bedingungen | G 0.26 | Fehlfunktion von Geräten oder Systemen |
| G 0.3 | Wasser | G 0.27 | Ressourcenmangel |
| G 0.4 | Verschmutzung, Staub, Korrosion | G 0.28 | Software-Schwachstellen oder -Fehler |
| G 0.5 | Naturkatastrophen | G 0.29 | Verstoß gegen Gesetze oder Regelungen |
| G 0.6 | Katastrophen im Umfeld | G 0.30 | Unberechtigte Nutzung oder Administration von Geräten und Systemen |
| G 0.7 | Großereignisse im Umfeld | G 0.31 | Fehlerhafte Nutzung oder Administration von Geräten und Systemen |
| G 0.8 | Ausfall oder Störung der Stromversorgung | G 0.32 | Missbrauch von Berechtigungen |
| G 0.9 | Ausfall oder Störung von Kommunikationsnetzen | G 0.33 | Personalausfall |
| G 0.10 | Ausfall oder Störung von Versorgungsnetzen | G 0.34 | Anschlag |
| G 0.11 | Ausfall oder Störung von Dienstleistern | G 0.35 | Nötigung, Erpressung oder Korruption |
| G 0.12 | Elektromagnetische Störstrahlung | G 0.36 | Identitätsdiebstahl |
| G 0.13 | Abfangen kompromittierender Strahlung | G 0.37 | Abstreiten von Handlungen |
| G 0.14 | Ausspähen von Informationen (Spionage) | G 0.38 | Missbrauch personenbezogener Daten |
| G 0.15 | Abhören | G 0.39 | Schadprogramme |
| G 0.16 | Diebstahl von Geräten, Datenträgern oder Dokumenten | G 0.40 | Verhinderung von Diensten (Denial of Service) |
| G 0.17 | Verlust von Geräten, Datenträgern oder Dokumenten | G 0.41 | Sabotage |
| G 0.18 | Fehlplanung oder fehlende Anpassung | G 0.42 | Social Engineering |
| G 0.19 | Offenlegung schützenswerter Informationen | G 0.43 | Einspielen von Nachrichten |
| G 0.20 | Informationen oder Produkte aus unzuverlässiger Quelle | G 0.44 | Unbefugtes Eindringen in Räumlichkeiten |
| G 0.21 | Manipulation von Hard- oder Software | G 0.45 | Datenverlust |
| G 0.22 | Manipulation von Informationen | G 0.46 | Integritätsverlust schützenswerter Informationen |
| G 0.23 | Unbefugtes Eindringen in IT-Systeme | G 0.47 | Schädliche Seiteneffekte IT-gestützter Angriffe |
| G 0.24 | Zerstörung von Geräten oder Datenträgern | | |
