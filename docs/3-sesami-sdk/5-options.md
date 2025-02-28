---
sidebar_position: 5
---

# Options

You can pass several options to SesamiSDK.

| Option         | Type      | Required | Default        | Description                                                                                                                                                                        |
| -------------- | --------- | -------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `shopId`       | `String`  | Yes      | -              | Valid Shopify shop ID.                                                                                                                                                             |
| `productId`    | `String`  | Yes      | -              | Valid Shopify product ID.                                                                                                                                                          |
| `variantId`    | `String`  | Yes      | -              | Valid Shopify variant ID.                                                                                                                                                          |
| `timezone`     | `String`  | No       | Store timezone | Timezone for displaying availabilities (e.g., `America/New_York`).                                                                                                                 |
| `teamMember`   | `String`  | No       | `null`         | Team member name, exactly as entered in Sesami (e.g., `John Smith`), this will result in displaying availabilities for all team members that are connected to the current service. |
| `quantity`     | `Number`  | No       | `1`            | Quantity for group appointments.                                                                                                                                                   |
| `weekStartDay` | `Number`  | No       | `0` (Sunday)   | First day of the week (`0` = Sunday, ..., `6` = Saturday).                                                                                                                         |
| `autoLoad`     | `Boolean` | No       | `false`        | Automatically fetch availabilities for the current month on initialization.                                                                                                        |
| `now`          | `Date`    | No       | `new Date()`   | Currently selected date.                                                                                                                                                           |