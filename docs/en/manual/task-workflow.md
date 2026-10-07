<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
<!-- Translated from ../task-workflow.md (German), as of 2026-10-07 -->
# Tasks and Workflow

The tasks page shows you at a glance which implementations are still open and which revisions are coming up – and who is responsible for them. This guide shows you how to link your user account to a person, how tasks are created, and how to work on them.

## Overview {#overview}

### What are tasks? {#what-are-tasks}

The tasks page lists two kinds of tasks:

- **Implementation tasks** – for requirements that have not yet been (fully) implemented.
- **Revision tasks** – for requirements that have already been implemented and whose next review is scheduled.

You can reach the tasks page via the **Tasks** entry in the menu. The number next to the menu entry shows you how many tasks are waiting for you.

::: info Tasks apply per unit and domain
The tasks page always shows the tasks of the unit and domain you are currently working in. You will only see tasks from other units or domains once you switch to them.
:::

### Terms {#terms}

| Term | Meaning |
| --- | --- |
| **Account** | Your user account, which you use to sign in to verinice. |
| **Person object** | A person recorded as an object in a unit (e.g., “PS Pat Smith”). Person objects are used, among other things, as the responsible persons for implementations. |
| **Implementation** | The state in which a requirement (e.g., from a module) is implemented for an object – including status, responsible persons, and dates. |
| **Revision** | The regular review of a requirement that has already been implemented. |
| **Unit / Domain** | The unit is your workspace (e.g., an organization); the domain is the framework you work in (e.g., IT-Grundschutz). |

### Three steps to your tasks {#three-steps}

1. **Link a person:** Your account is linked to your person object in the unit – see [Link accounts to person objects](#link-persons).
2. **Assign a task:** Your person is entered as responsible for an implementation – see [Create tasks](#create-tasks).
3. **Work on the task:** You open the task on the tasks page and update the implementation – see [Work on tasks](#work-on-tasks).

## Link accounts to person objects {#link-persons}

For implementations, you enter person objects as the responsible persons – not accounts. For verinice to know which tasks belong to *you*, your account must be linked to your person object. Only then will the tasks page automatically show you your own tasks.

There are two ways to create a link:

- Main users link any person to an account in the object view.
- All users can link their own person directly on the tasks page.

### As a main user in the object view {#link-object-view}

Every person object has a **User assignment** section in the object view. It appears in second position, directly after the first section with the basic data.

<!-- Screenshot: Object view of a person with the "User assignment" section -->

**Link an account**

1. Open the person object in the object view.
2. In the **User assignment** section, click the selection field.
3. Select the account from the list. All accounts of your client are suggested with their first and last names; you can also search by name.
4. Save the object.

**Change or remove a link**

1. Open the person object in the object view.
2. In the **User assignment** section,
   - select a different account to **replace** the link, or
   - clear the selection field to **remove** the link.
3. Save the object.

::: warning Only main users can change links
As a secondary user, you only see the username of an account that has already been linked in the **User assignment** section. You cannot add, change, or remove the link there. You can, however, link your own person yourself [via the tasks page](#link-tasks-page).
:::

### Yourself via the tasks page {#link-tasks-page}

If no person is assigned to your account in the current unit yet, the tasks page shows the following note:

> To take on tasks in this unit, link a person object to your user account.

<!-- Screenshot: Tasks page with note and "Link my person" button -->

1. Click **Link my person**.
2. Select your person from the list of persons in the unit. Only persons that are not yet linked to any account are offered.
3. If there is no suitable person object yet, create a new person in the same dialog. It is automatically linked to your account.

You then stay on the tasks page. The filter is now set to your person, so you only see your own tasks (see [Filter by responsibility](#filter)). The note and the button are no longer displayed.

::: info Good to know
- The link applies **across domains**: once a person is linked to your account, this applies in all domains of the unit.
- If an account is deleted, verinice automatically removes the link from all person objects.
:::

### One person, multiple persons? {#multiple-persons}

- **A person** can be linked to **at most one account**.
- **An account** can be linked to **multiple persons**.

**The usual case: one person per unit.** Person objects always belong to a unit. If you work in several units, each unit therefore needs its own person object linked to your account. Only then will you see your tasks there.

**The special case: multiple persons in the same unit.** Sometimes it makes sense to assign several person objects to one account in a unit – for example, your person “PS Pat Smith” and a role such as “HD Head of Department”. The tasks page then shows you the tasks of all your persons; for each task, you can see which person it belongs to (see [Filter by responsibility](#filter)).

## Create tasks (implementation/revision) {#create-tasks}

You do not create tasks separately: they are created automatically from the details of an implementation. Whether and for whom a task appears depends on the **status of the implementation**, the **responsible person**, and the **date**.

### Assign an implementation task {#assign-implementation-task}

An implementation task is created for every implementation that has not yet been completed.

1. Open the implementation page of the object (e.g., an asset, process, or scope).
2. Click the implementation of the requirement you want. The implementation dialog opens.
3. Under **Responsible**, enter the responsible person.
4. Optionally, under **Implement until**, enter the date by which the requirement should be implemented – e.g., December 31, 2026. This date appears as the due date on the tasks page.
5. Save.

The task now appears on the tasks page for the person you entered.

### Assign a revision task {#assign-revision-task}

Once a requirement has been implemented, you schedule its next review as a revision task.

1. Open the implementation page of the object and click the implementation. The implementation dialog opens.
2. Set the status to **yes** or **dispensable**.
3. Under **Next revision by**, enter the person who is to carry out the revision.
4. Under **Next revision on**, enter the date of the next revision – e.g., June 30, 2027. This date appears as the due date on the tasks page.
5. Save.

::: warning No date, no revision task
A revision task is only created if **Next revision on** is filled in. If the field is empty, no task appears for the implemented requirement – even if a person has been entered under **Next revision by**.
:::

### Which task is created when? {#status-table}

| Status of the implementation | “Next revision on” set? | Task | Responsible | Due |
| --- | --- | --- | --- | --- |
| unedited | – | Implementation task | Responsible | Implement until |
| partial | – | Implementation task | Responsible | Implement until |
| no | – | Implementation task | Responsible | Implement until |
| yes | yes | Revision task | Next revision by | Next revision on |
| dispensable | yes | Revision task | Next revision by | Next revision on |
| yes / dispensable | no | no task | – | – |

::: tip Unassigned tasks
If you do not enter a person, the task is still created – it is then **not assigned to anyone**. You can find such tasks using the filter on the tasks page (see [Filter by responsibility](#filter)).
:::

::: info Only tasks of the current domain
Only implementations where both the object and the requirement are associated with the current domain are taken into account.
:::

## The tasks page: overview and filter {#tasks-page}

### Layout of the tasks page {#layout}

The tasks page shows each open task as a card. On each card, you see:

- the **task type** – implementation or revision,
- the **object** the requirement applies to (e.g., an asset, a process, or a scope),
- the **requirement** (e.g., “APP.2.1.A6 Secure operation of directory services”),
- the **due date**,
- the **responsible person**.

<!-- Screenshot: Tasks page with several cards (implementation and revision) -->

If there are many tasks, the page spreads them across several pages; use the page navigation at the end of the list to move on.

### Filter by responsibility {#filter}

Above the cards, there is a search bar that you can use to filter tasks by responsible person.

**Default setting**

- **If a person in the unit is assigned to your account**, the filter is preset to that person, e.g., “Responsible = PS Pat Smith”. You therefore only see your own tasks.
- **If several persons in the unit are assigned to your account**, the filter contains all of these persons, e.g., “Responsible = PS Pat Smith, HD Head of Department”. You see the tasks of all your persons; the responsible person on the card tells you which of your persons a task belongs to.
- **If no person in the unit is assigned to your account**, the search bar is empty. You see all tasks in the unit.

**Adjust the filter**

You can change the filter at any time. The search bar suggests the persons in the unit, and you can combine several persons:

- **Show tasks of other persons:** Select one or more persons.
- **Show unassigned tasks:** Filter for tasks that nobody is responsible for.
- **Show all tasks:** Remove the filter completely.

<!-- Screenshot: Search bar with person filter "Responsible = ..." -->

::: info Number in the menu
The number next to the **Tasks** menu entry is always based on the default filter, i.e., on your own tasks. If you change the filter on the tasks page, the number of cards displayed may therefore differ from the number in the menu.
:::

::: tip For team leads
If you want to see who is working on what, remove the filter or select the persons on your team. Also filter for unassigned tasks to find work that nobody has taken on yet.
:::

## Work on tasks {#work-on-tasks}

### Open a task {#open-task}

When you move the mouse pointer over a card, it is highlighted. Click the card to open the **implementation dialog** as a pop-up – the same dialog as on the implementation page. This applies to implementation tasks and revision tasks alike.

In the implementation dialog, you can update, among other things:

- the **status** of the implementation (unedited, partial, no, yes, dispensable),
- the responsible person (**Responsible**) and the **Implement until** date,
- the revision details **Next revision by** and **Next revision on**.

<!-- Screenshot: Implementation dialog as a pop-up over the tasks page -->

### What happens after saving? {#after-saving}

After you save, the tasks page updates automatically – as does the number in the menu. What happens to the task depends on your changes:

| Your change | Result on the tasks page |
| --- | --- |
| Status remains unedited, partial, or no | The implementation task remains (possibly with a new person or a new date). |
| Status set to yes or dispensable, **Next revision on** set | The implementation task disappears and a revision task appears. |
| Status set to yes or dispensable, **Next revision on** empty | The task disappears; no new task is created. |
| A different person entered | The task appears for the new person; with your default filter, you no longer see it. |

### Complete an implementation {#complete-implementation}

1. Click the implementation task.
2. Set the status to **yes** (or **dispensable** if the requirement does not need to be implemented).
3. Schedule the first revision: enter **Next revision by** and **Next revision on**.
4. Save. The implementation task disappears; the revision task will be ready for the scheduled date.

### Perform a revision and schedule the next one {#perform-revision}

1. Click the revision task.
2. Check whether the requirement is still implemented and adjust the status if necessary.
3. Under **Next revision on**, enter the date of the following revision and change **Next revision by** if needed.
4. Save. The revision task now appears with the new due date.

::: tip
If you set the status back to **partial** or **no** during a revision, the revision task turns back into an implementation task for the person entered under **Responsible**.
:::

### Hand over a task {#hand-over-task}

1. Click the task.
2. Enter the new person: for an implementation task under **Responsible**, for a revision task under **Next revision by**.
3. Save. The task now appears for the new person.

## Frequently asked questions {#faq}

### I don't see any tasks. Why? {#faq-no-tasks}

Check the following:

- **Is your account linked to a person?** Without a link, verinice cannot assign your own tasks to you – see [Link accounts to person objects](#link-persons).
- **Are you in the right unit and domain?** The tasks page only shows tasks of the current unit and domain – see [What are tasks?](#what-are-tasks).
- **Which filter is set?** The tasks may be assigned to another person or to nobody yet – see [Filter by responsibility](#filter).
- **Is your person entered for the implementations?** For implementation tasks under **Responsible**, for revision tasks under **Next revision by** – see [Create tasks](#create-tasks).

### A task I expected is missing. {#faq-task-missing}

- For an implemented requirement (status **yes** or **dispensable**), a revision task is only created if **Next revision on** is filled in – see [Which task is created when?](#status-table).
- The object and the requirement must be associated with the current domain.
- Check whether the task is assigned to another person and adjust the [filter](#filter).

### I can't change the user assignment of a person. {#faq-change-assignment}

Only main users can link accounts to persons, or change or remove links, in the object view. You can, however, link your own person yourself via the tasks page – see [Yourself via the tasks page](#link-tasks-page).

### My person is not offered for selection. {#faq-person-not-selectable}

A person can only be linked to one account. If it is already linked to another account, it is not offered under **Link my person**. In this case, contact a main user to correct the link – see [As a main user in the object view](#link-object-view).

### I am assigned to several persons. Is that correct? {#faq-multiple-persons}

Yes, that is possible:

- **In different units**, this is the usual case: you need your own linked person object in each unit in which you take on tasks.
- **In the same unit**, it is a special case, e.g., if you also take on a role. The tasks page then shows the tasks of all your persons.

For more information, see [One person, multiple persons?](#multiple-persons).

### The "Tasks" menu item is missing. {#faq-menu-item-missing}

The tasks page may not be enabled in your installation. Contact your administrator.
