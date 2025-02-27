---
sidebar_position: 2
---

# Data Structure

### Data

Each instance of the Sesami SDK will contain a `data` object with the following structure:

| Property | Type                            | Description                                     |
| -------- | ------------------------------- | ----------------------------------------------- |
| `labels` | `Array<Date>`                   | An array of `Date` objects.                     |
| `rows`   | `Array<Array<SesamiDayObject>>` | A 2D array containing `SesamiDayObject` arrays. |

```ts
type data = {
  labels: Date[]
  rows: SesamiDayObject[][]
}
```

### SesamiDayObject

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
  new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date)

window.sesami.data.labels.forEach(dateString => {
  calendarLabels.innerHTML += `<li>${dayName(new Date(dateString))}</li>`
})
```

Example to display the calendar rows:

```ts
window.sesami.data.rows.forEach(row => {

  row.forEach(async day => {
    const className = day.isPast ? 'inactive' : 'active'
    const dayElement = document.createElement('li')
    dayElement.className = className
    dayElement.textContent = new Date(day.date).getDate()
    days.appendChild(dayElement)

    try{
      const availabilities = await day.getAvailabilities()
      console.log(`Availabilities for ${day.date}:`, availabilities)
    }catch(error){
      console.error(`Error fetching availabilities for ${day.date}:`, error)
    }

    dayElement.addEventListener('click', () => {
      if(!day.isPast){
        selectDay(day)
      }
    })

  })
  
})
```













### SesamiSlotObject

| Property         | Type     | Description                                                                      |
| ---------------- | -------- | -------------------------------------------------------------------------------- |
| `duration`       | `Number` | Slot duration in minutes.                                                        |
| `remainingSlots` | `Number` | Remaining slots at the selected time (always `1` except for group appointments). |
| `startTime`      | `String` | Starting date and time in the format `YYYY-MM-DD HH:mm`.                         |
| `status`         | `String` | Current slot status (`"available"` for storefront integrations).                 |

:::info
You don't need to build this object by yourself, as it is returned from the `getAvailabilities()` function.
:::

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
