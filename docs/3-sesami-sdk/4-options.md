---
sidebar_position: 4
---

# Options

You can pass several options to SesamiSDK.

| Option         | Type      | Required | Default        | Description                                                                  |
| -------------- | --------- | -------- | -------------- | ---------------------------------------------------------------------------- |
| `shopId`       | `String`  | Yes      | -              | Valid Shopify shop ID.                                                       |
| `productId`    | `String`  | Yes      | -              | Valid Shopify product ID.                                                    |
| `variantId`    | `String`  | Yes      | -              | Valid Shopify variant ID.                                                    |
| `timezone`     | `String`  | No       | Store timezone | Timezone for displaying availabilities (e.g., `America/New_York`).           |
| `location`     | `String`  | No       | `null`         | Location id used to filter availabilities, booking, and reservation. Pass a falsy value (or omit) for no location filter. |
| `resources`    | `String[]`| No       | `null`         | Array of resource ids used to filter availabilities, booking, and reservation. An empty array is treated as no filter. If both `resources` and `teamMember` are passed, `resources` wins. |
| `teamMember`   | `String`  | No       | `null`         | The team member's name, exactly as entered in Sesami (e.g., John Connor), will result in displaying availabilities for all team members who are connected to the current service. |
| `quantity`     | `Number`  | No       | `1`            | Quantity for group appointments.                                             |
| `weekStartDay` | `Number`  | No       | `0` (Sunday)   | First day of the week (`0` = Sunday, ..., `6` = Saturday).                   |
| `autoLoad`     | `Boolean` | No       | `false`        | Automatically fetch availabilities for the current month on initialization.  |
| `now`          | `Date`    | No       | `new Date()`   | Currently selected date.                                                     |
