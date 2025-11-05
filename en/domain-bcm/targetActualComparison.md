<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# Performing the target/actual comparison and developing BC strategies

Once the **business impact analysis (BIA)** has been completed, the **recovery time objectives (RTO)** and, where relevant, the **recovery point objectives (RPO)** are available for all time-critical resources under consideration.
These values represent the **target requirements** for recovery capability.
  
As part of the target/actual comparison, a check is made to determine whether the existing technical and organizational measures are sufficient to actually achieve these target values.

## Performing the target/actual comparison

### Comparison of RTO and RTA

The resource managers check for each time-critical resource whether the required RTO can be met with the existing measures.
To do this, the actual recovery time (RTA) is determined and compared with the RTO.
The RTA describes the realistically achievable period from the **declaration of an emergency** to the point in time at which the **BC solution is productive**.
In verinice, the data is recorded in the **target/actual comparison** area in the respective resource.

The following steps must be taken there:
1. **Record the RTA.**
1. **Document the evidence** on which the time was determined.
1. **Evaluate the result** and make a statement as to whether the `RTA ≤ RTO` and whether further action is required.

### Comparison of RPO and RPA

For information-based resources, the **RPO** is compared with the **Recovery Point Actual (RPA)**, which describes the actual expected data loss.
In verinice, there is a field available for recording the **data backup cycle**. Compare this cycle with the specified RPO and document the actual data loss (RPA).
  
Then make a statement as to whether the `RPA ≤ RPO`.

![Target/actual comparison](/assets/domain-bcm/verinice-46-targetActualComparison.png)

## Evaluation and release of results (OUTLOOK)

After completing the target/actual comparison, an overview of all time-critical resources should be created, especially those for which the target values are not achieved. This overview is presented to the institutional management and agreed upon with them.
The institutional management should receive and confirm the following information:
- Overview of time-critical business processes according to BIA  
- Overview of **time-critical resources** according to BIA
- Overview of **insufficiently secured resources** according to target/actual comparison
- Assessment of **risks** from identified gaps
Based on these results, **BC strategies** for closing existing gaps are developed and evaluated.
