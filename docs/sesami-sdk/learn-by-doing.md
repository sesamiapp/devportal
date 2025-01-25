---
sidebar_position: 2
---

# Dive Right In: Learn Storefront SDK The Fun Way!

Hi there! We’ll be diving into the Storefront SDK by building a calendar together. It's a fun and practical way to learn as we go. So, without wasting any time, let’s jump right in!

## Initializing

To initialize the SDK, first, we need the SDK itself!  
Add the SDK CDN to your project. You can just copy this snippet and include it in your project:

```html
<script async src="https://cdn.sesami.co/sdk.js"></script
```

Now we need to create an instance of the SDK.
I’ll create a `main.js` file:

```js
let SDKInstance = new SesamiSDK({
      variantId: {{product.selected_or_first_available_variant.id}},
      shopId: {{shop.id}},
      productId: {{product.id}},
      quantity: 1,
      autoLoad: true
    })
```

Store the `SDKInstance` in a place you can access easily. In my case, I’ll store it in `window.sesamiSDK`:

```js
window.sesamiSDK = SDKInstance;
```

## Rendering The Calendar

Each SDK instance includes a data object. You can find a sample dataset [here](https://sesami.dev/docs/sesami-sdk/sdk/#data).

### Object Structure

The object has a `data` property with the following structure:

| Property | Type                            | Description                                     |
| -------- | ------------------------------- | ----------------------------------------------- |
| `labels` | `Array<Date>`                   | An array of `Date` objects.                     |
| `rows`   | `Array<Array<SesamiDayObject>>` | A 2D array containing `SesamiDayObject` arrays. |

#### Example

Here’s an example of what the `data` property might look like:

```json
{
  labels: [Sun Dec 05 2021 00:00:00 {}, Mon Nov 29 2021 00:00:00 {}, ...],
  rows: [
            [
                {
                    date: Sun Nov 28 2021 00:00:00 {}
                    getAvailabilities: async ƒ ()
                    isCurrentMonth: false
                    isCurrentWeek: false
                    isPast: true
                    isToday: false
                }
                ...
            ]
            ...
        ]
}
```

We use the `labels` to render the label section of the calendar like this:

| Su  | Mo  | Tu  | We  | Th  | Fr  | Sa  |
| --- | --- | --- | --- | --- | --- | --- |

like this

```javascript
// helper
const dayName = (date) =>
  new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date);

window.sesamiSDK.data.labels.map((dateString) => {
  calendarLabels.innerHTML += `<li >${dayName(new Date(dateString))}</li>`;
});
```

We use `rows` to generate the days of the calendar like this:

|     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- |
| 1   | 2   | 3   | 4   | 5   | 6   | 7   |
| 8   | 9   | 10  | 11  | 12  | 13  | 14  |
| 15  | 16  | 17  | 18  | 19  | 20  | 21  |
| 22  | 23  | 24  | 25  | 26  | 27  | 28  |
| 29  | 30  |     |     |     |     |     |

Each array in `rows` represents a row and contains the days for that row.

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

```javascript
// Initialize an empty object to store all availabilities
let allAvailabilities = {};

// Helper function to convert a date to ISO string format (YYYY-MM-DD)
const toIso = (date) => date.toISOString().split("T")[0];

// Process each row in the Sesami SDK data
window.sesamiSDK.data.rows.forEach((row, rowIndex) => {
  row.forEach(async (day) => {
    // Determine the CSS class based on whether the day is in the past
    const className = day.isPast ? "inactive" : "active";

    // Create and configure a new list item element for the day
    const dayElement = document.createElement("li");
    dayElement.className = className;
    dayElement.textContent = getDayNumber(new Date(day.date));

    // Append the day element to the container for days
    days.appendChild(dayElement);

    // Fetch availabilities for the day and store them
    try {
      const availabilities = await day.getAvailabilities();
      const isoDate = toIso(new Date(day.date));
      allAvailabilities[isoDate] = availabilities;
    } catch (error) {
      console.error(`Error fetching availabilities for ${day.date}:`, error);
    }

    // Add a click event listener to handle day selection
    dayElement.addEventListener("click", () => {
      if (!day.isPast) {
        selectDay(day, allAvailabilities);
      }
    });
  });
});
```

## Getting Availabilities

Now that we’ve rendered our days and stored availabilities, it’s time to render available slots!
Before that, let’s look at the slot structure.

### Slot Object Structure

| Property         | Type     | Description                                              |
| ---------------- | -------- | -------------------------------------------------------- |
| `duration`       | `Number` | The duration of the slot in minutes.                     |
| `remainingSlots` | `Number` | The number of slots remaining.                           |
| `startTime`      | `String` | The start time of the slot in "YYYY-MM-DD HH:MM" format. |
| `status`         | `String` | The availability status of the slot.                     |

#### Example

```json
{
  duration: 15
  remainingSlots: 1
  startTime: "2022-12-30 10:00"
  status: "available"
}
```

You can render the availabilities in a drop down and store the selected slot

## Including Extra Data

There are two types of data you can attach to the booking request:

1. **SesamiCustomerObject (required)**
2. **SesamiOptionsObject (optional)**

### SesamiCustomerObject Structure

| Property    | Description             | Example        |
| ----------- | ----------------------- | -------------- |
| `email`     | Customer email address. | john@smith.com |
| `firstName` | Customer first name.    | John           |
| `lastName`  | Customer last name.     | Smith          |
| `phone`     | Customer phone number.  | +12223333333   |

### SesamiOptionsObject Format

The customer object contains a property named `properties`, which is an array of objects with the following format:

| Property | Type     |
| -------- | -------- |
| `name`   | `String` |
| `value`  | `String` |

#### Example

```json
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

## Book

now you can book an event using SDK instant and the data you gathered

```js
await window.sesamiSDK.book(selectedSlot, customerObject, optionsObject);
```

## Hold On!

There’s much more to the SDK than what we've covered. This document aimed to simplify the workflow and help you achieve results quickly while giving you a foundational understanding of how the SDK works. To fully utilize the SDK, you’ll need additional methods, such as next, previous, and more. You can explore these and other features in the Storefront SDK documentation.
