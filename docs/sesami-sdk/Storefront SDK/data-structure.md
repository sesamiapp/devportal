---
sidebar_position: 3
---

# Data

Each instance of the Sesami SDK will contain a `data` object with the following structure:

```js
sesami = new SesamiSDK({
  /*options*/
});

sesami.data;
/*
{
  labels: Array<Date>,
  Rows: Array<Array<SesamiDayObject>>
}
*/
```

### `SesamiDayObject`

| Property              | Type             | Description                                                                                                                                                              |
| --------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `date`                | `Date`           | Represents the day.                                                                                                                                                      |
| `getAvailabilities()` | `async function` | Resolves to an array of available slots (`Promise<Array<SesamiSlotObject>>`).                                                                                            |
| `isCurrentMonth`      | `Boolean`        | Indicates if the day is in the current month.                                                                                                                            |
| `isCurrentWeek`       | `Boolean`        | Indicates if the day is in the current week.                                                                                                                             |
| `isPast`              | `Boolean`        | Indicates if the day is in the past.                                                                                                                                     |
| `isToday`             | `Boolean`        | Indicates if the day is today.                                                                                                                                           |
| `onLoad(callback)`    | `Function`       | Receives cell availabilities for the selected range when `autoLoad` is enabled (This method will only trigger a network request when the data is not already available). |
| `onError(callback)`   | `Function`       | Receives errors when fetching cell availabilities.                                                                                                                       |

### `SesamiSlotObject`

:::info
You don't need to build this object yourself, as it is returned by the `getAvailabilities()` function.
:::

| Property         | Type     | Description                                                                      |
| ---------------- | -------- | -------------------------------------------------------------------------------- |
| `duration`       | `Number` | Slot duration in minutes.                                                        |
| `remainingSlots` | `Number` | Remaining slots at the selected time (always `1` except for group appointments). |
| `startTime`      | `String` | Starting date and time in the format `YYYY-MM-DD HH:mm`.                         |
| `status`         | `String` | Current slot status (`"available"` for storefront integrations).                 |

### `SesamiCustomerObject`

An object that contains customer data.

| Property    | Type     | Description               |
| ----------- | -------- | ------------------------- |
| `email`     | `String` | Customer's email address. |
| `firstName` | `String` | Customer's first name.    |
| `lastName`  | `String` | Customer's last name.     |
| `phone`     | `String` | Customer's phone number.  |

:::info
The phone number must be validated according to the E.164 format, which ensures international compatibility [read more](https://www.twilio.com/docs/glossary/what-e164).
:::

### `SesamiOptionsObject`

An object that contains form data as question and answer, key and value. This respresens line item properties correspondent to the eCommerce order.

```js
{
  properties: [{
    name: String
    value: String
  }]
}
```

#### example:

```js
{
  properties:[
    {
      name: "How old are you?"
      value: "18"
    }
    {
      name: "Marital Status"
      value: "Single"
    }
  ]
}
```
