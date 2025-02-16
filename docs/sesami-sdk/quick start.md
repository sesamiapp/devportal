---
sidebar_position: 2
---

# Storefront SDK: Quick Start

Welcome to the Storefront SDK documentation. This guide will walk you through initializing the SDK, rendering a calendar, retrieving availabilities, and booking an appointment using the SDK. By following these steps, you will gain a solid understanding of how to integrate and utilize the SDK effectively.

## Initialization

To begin, include the Storefront SDK in your project by adding the following script to your HTML file:

```html
<script async src="https://cdn.sesami.co/sdk.js"></script>
```

Next, create an instance of the SDK. In your `main.js` file, initialize the SDK with the required parameters:

```js
let SDKInstance = new SesamiSDK({
      variantId: {{product.selected_or_first_available_variant.id}},
      shopId: {{shop.id}},
      productId: {{product.id}},
      quantity: 1,
      autoLoad: true
    });
```

To ensure easy access throughout your application, store the SDK instance in a global variable:

```js
window.sesamiSDK = SDKInstance;
```

## Rendering the Calendar

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

```javascript
const dayName = (date) =>
  new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date);

window.sesamiSDK.data.labels.forEach((dateString) => {
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

```javascript
window.sesamiSDK.data.rows.forEach((row) => {
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
await window.sesamiSDK.book(selectedSlot, customerObject, optionsObject);
```

## Further Exploration

This guide provides a foundational understanding of the Storefront SDK. There are additional methods available, such as navigating between dates and handling advanced configurations. For a complete reference, please consult the full Storefront SDK documentation.

By following this guide, you can efficiently integrate the Storefront SDK into your project and provide a seamless booking experience for your users.
