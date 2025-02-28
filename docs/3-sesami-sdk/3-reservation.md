---
sidebar_position: 3
---

# Reservation

### `SesamiCustomerObject`

An object that contains customer data.

| Property    | Type     | Description               |
| ----------- | -------- | ------------------------- |
| `email`     | `String` | Customer's email address. |
| `firstName` | `String` | Customer's first name.    |
| `lastName`  | `String` | Customer's last name.     |
| `phone`     | `String` | Customer's phone number.  |

:::info
The phone number must be validated according to the E.164 format, which ensures international compatibility [read more](https://en.m.wikipedia.org/wiki/E.164).
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








<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

## Rendering a Calendar

Each SDK instance provides a `data` object containing the calendar structure. The dataset follows this format:

### Data Object Structure

| Property | Type                            | Description                                     |
| -------- | ------------------------------- | ----------------------------------------------- |
| `labels` | `Array<Date>`                   | An array of `Date` objects.                     |
| `rows`   | `Array<Array<SesamiDayObject>>` | A 2D array containing `SesamiDayObject` arrays. |

#### Example

```json
{
  labels: [Sun Dec 05 2021 00:00:00 {}, Mon Nov 29 2021 00:00:00 {}, ...],
  rows: [
    [
      {
        date: Sun Nov 28 2021 00:00:00 {},
        getAvailabilities: async ƒ (),
        isCurrentMonth: false,
        isCurrentWeek: false,
        isPast: true,
        isToday: false
      },
      ...
    ]
    ...
  ]
}
```

Example to display the calendar labels:

```ts
const dayName = (date) =>
  new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date);

window.sesami.data.labels.forEach((dateString) => {
  calendarLabels.innerHTML += `<li>${dayName(new Date(dateString))}</li>`;
});
```

The `rows` property contains the calendar days:

### Day Object Structure

| Property              | Type             | Description                                                                                                                                                                                             |
| --------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `date`                | `Date`           | Represents the date for this day.                                                                                                                                                                       |
| `getAvailabilities()` | `Async Function` | Returns a promise that resolves to an array of available slots: `Promise<Array<SesamiSlotObject>>`.                                                                                                     |
| `isCurrentMonth`      | `Boolean`        | Indicates if this day is within the same month as the currently set date.                                                                                                                               |
| `isCurrentWeek`       | `Boolean`        | Indicates if this day is within the same week as the currently set date.                                                                                                                                |
| `isPast`              | `Boolean`        | Indicates if this day is in the past.                                                                                                                                                                   |
| `isToday`             | `Boolean`        | Indicates if this day is today.                                                                                                                                                                         |
| `onLoad(callback)`    | `Function`       | The callback function receives cell availabilities for the currently selected range; requires autoLoad to be enabled. This method triggers a network request only if the data is not already available. |
| `onError(callback)`   | `Function`       | The callback function receives any errors when retrieving cell availabilities for the selected range.                                                                                                   |

Example to display the calendar rows:

```ts
window.sesami.data.rows.forEach((row) => {
  row.forEach(async (day) => {
    const className = day.isPast ? "inactive" : "active";
    const dayElement = document.createElement("li");
    dayElement.className = className;
    dayElement.textContent = new Date(day.date).getDate();
    days.appendChild(dayElement);

    try {
      const availabilities = await day.getAvailabilities();
      console.log(`Availabilities for ${day.date}:`, availabilities);
    } catch (error) {
      console.error(`Error fetching availabilities for ${day.date}:`, error);
    }

    dayElement.addEventListener("click", () => {
      if (!day.isPast) {
        selectDay(day);
      }
    });
  });
});
```

## Retrieving Availabilities

Each day object contains a `getAvailabilities()` method, which returns available slots.

### Slot Object Structure

| Property         | Type     | Description                                 |
| ---------------- | -------- | ------------------------------------------- |
| `duration`       | `Number` | Slot duration in minutes.                   |
| `remainingSlots` | `Number` | Number of available slots.                  |
| `startTime`      | `String` | Start time formatted as `YYYY-MM-DD HH:MM`. |
| `status`         | `String` | Availability status.                        |

#### Example

```json
{
  "duration": 15,
  "remainingSlots": 1,
  "startTime": "2022-12-30 10:00",
  "status": "available"
}
```

## Including Additional Data

You can attach extra data when making a booking request. This includes customer details and additional options.

### Customer Data (`SesamiCustomerObject`)

| Property    | Description             | Example        |
| ----------- | ----------------------- | -------------- |
| `email`     | Customer email address. | john@smith.com |
| `firstName` | Customer first name.    | John           |
| `lastName`  | Customer last name.     | Smith          |
| `phone`     | Customer phone number.  | +12223333333   |

### Optional Data (`SesamiOptionsObject`)

Additional data can be stored in the `properties` array:

| Property | Type     |
| -------- | -------- |
| `name`   | `String` |
| `value`  | `String` |

#### Example

```json
{
  "properties": [
    {
      "name": "How old are you?",
      "value": "18"
    },
    {
      "name": "Marital Status",
      "value": "Single"
    }
  ]
}
```

## Booking an Appointment

Once you have gathered the necessary data, you can book an appointment using the following method:

```js
await window.sesami.book(selectedSlot, customerObject, optionsObject);
```

## Further Exploration

This guide provides a foundational understanding of the Storefront SDK. There are additional methods available, such as navigating between dates and handling advanced configurations. For a complete reference, please consult the full Storefront SDK documentation.

By following this guide, you can efficiently integrate the Storefront SDK into your project and provide a seamless booking experience for your users.
