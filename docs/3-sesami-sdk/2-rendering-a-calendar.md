---
sidebar_position: 2
---

# Rendering a Calendar

## Rendering Rows and Columns

### Data

Each instance of the Sesami SDK will contain a `data` object with the following structure:

| Property | Type                            | Description                                     |
| -------- | ------------------------------- | ----------------------------------------------- |
| `labels` | `Array<Date>`                   | An array of `Date` objects.                     |
| `rows`   | `Array<Array<SesamiDayObject>>` | A 2D array containing `SesamiDayObject` arrays. |

```ts title="Data"
type Data = {
  labels: Date[]
  rows: SesamiDayObject[][]
}
```

### SesamiDayObject

| Property              | Type             | Description                                                                   |
| --------------------- | ---------------- | ----------------------------------------------------------------------------- |
| `date`                | `Date`           | Represents the day.                                                           |
| `isCurrentMonth`      | `Boolean`        | Indicates if the day is in the current month.                                 |
| `isCurrentWeek`       | `Boolean`        | Indicates if the day is in the current week.                                  |
| `isPast`              | `Boolean`        | Indicates if the day is in the past.                                          |
| `isToday`             | `Boolean`        | Indicates if the day is today.                                                |
| `getAvailabilities()` | `async function` | Resolves to an array of available slots (`Promise<Array<SesamiSlotObject>>`). |
| `onLoad(callback)`    | `Function`       | Receives cell availabilities for the selected range when `autoLoad` is enabled. (This method will only trigger a network request when the data is not already available). |
| `onError(callback)`   | `Function`       | Receives errors when fetching cell availabilities.                            |

```ts title="SesamiDayObject"
{
  labels: [
    Sun Dec 05 2021 00:00:00 {},
    Mon Nov 29 2021 00:00:00 {},
    ...
  ],
  rows: [
    [
      {
        date: Sun Nov 28 2021 00:00:00 {},
        isCurrentMonth: false,
        isCurrentWeek: false,
        isPast: true,
        isToday: false,
        getAvailabilities: async ƒ (),
        onLoad: ƒ (callback: ƒ ()),
        onError: ƒ (callback: ƒ ())
      },
      ...
    ]
    ...
  ]
}
```
Example to display the calendar labels

```ts
const dayName = (date) => new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date)

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

## Getting Availabilities

Each day object contains a `getAvailabilities()` method, which returns available slots.

```ts
type getAvailabilities = () => SesamiSlotObject[]
```

### SesamiSlotObject

| Property         | Type     | Description                                                                      |
| ---------------- | -------- | -------------------------------------------------------------------------------- |
| `startTime`      | `String` | Starting date and time in the format `YYYY-MM-DD HH:mm`.                         |
| `duration`       | `Number` | Slot duration in minutes.                                                        |
| `status`         | `String` | Current slot status (`"available"` for storefront integrations).                 |
| `remainingSlots` | `Number` | Remaining slots at the selected time (always `1` except for group appointments). |

#### Example

```json
[
  {
    "startTime": "2022-12-30 10:00",
    "duration": 15,
    "status": "available",
    "remainingSlots": 1
  },
  {
    "startTime": "2022-12-30 10:15",
    "duration": 15,
    "status": "available",
    "remainingSlots": 3
  },
  ...
]
```
