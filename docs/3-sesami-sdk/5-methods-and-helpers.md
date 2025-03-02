---
sidebar_position: 5
---

# Methods & Helpers

## Methods

The Sesami SDK offers various methods to render a calendar and manage availabilities.

### Initialization

- **`init()`**  
  Initializes the SDK instance. Automatically fetches availabilities for the current month if [`autoLoad`](/docs/sesami-sdk/options/) is enabled.

### Date & Range Management

- **`setDate(date: Date)`**  
  Updates the current date [`now`](/docs/sesami-sdk/options/) and fetches availabilities if they haven't been fetched yet (when [`autoLoad`](/docs/sesami-sdk/options/) is enabled).

- **`next(duration: "year" | "month" | "week" | "day")`**  
  Moves to the next year, month, week, or day and updates [`now`](/docs/sesami-sdk/options/). Automatically fetches availabilities if needed and [`autoLoad`](/docs/sesami-sdk/options/) is enabled.

- **`previous(duration: "year" | "month" | "week" | "day")`**  
  Moves to the previous year, month, week, or day and updates [`now`](/docs/sesami-sdk/options/). Automatically fetches availabilities if needed and [`autoLoad`](/docs/sesami-sdk/options/) is enabled.

### Adjustment

- **`setVariantId(variantId: string)`**  
  Updates the current value for [`variantId`](/docs/sesami-sdk/options/) and fetches availabilities if [`autoLoad`](/docs/sesami-sdk/options/) is enabled.

- **`setTeamMember(teamMember: string)`**  
  Updates the current value for [`teamMember`](/docs/sesami-sdk/options/) and fetches availabilities if [`autoLoad`](/docs/sesami-sdk/options/) is enabled.

### Availabilities

- **`load()`**  
  Manually loads availabilities for the selected range. Use this when [`autoLoad`](/docs/sesami-sdk/options/) is disabled (This method will only trigger a network request if the data is not already available).

### Slot Management

- **`reserve(slot: SesamiSlotObject)`**  
  Temporarily reserves a slot for the period defined in Sesami app settings. Returns a promise resolving to the reservation status.

- **`book(slot: SesamiSlotObject, customer: SesamiCustomerObject, options?: SesamiOptionsObject)`**  
  Instantly book a slot for a customer. Returns a promise resolving to the booking status.

#### **Example**

```js
let customer = {
  firstName: 'John',
  lastName: 'Connor',
  phone: '+12223333333',
  email: 'john@connor.com'
}

let options = {
  properties: [
    { name: 'age', value: '20' },
    { name: 'agree_with_terms', value: 'yes' }
  ]
}

window.sesami
  .book(slot, customer, options)
  .then(() => console.log('Booked'))
  .catch(e => console.error(e))
```

### getConfig()

Retrieves the service configuration, including details about the service, team members, shop, and more.

#### **Returns:**

- **Shop Details**: Shop name, base URL, etc.
- **Service Details**: Title, product image, customer management options, etc.
- **Locations**: Available locations and resources for the service.
- **Instant Booking Status**: Whether instant booking is enabled and required fields.
- **Date/Time Format**: Customizable date and time formatting.
- **Extensions**: List of installed apps extensions.
- **Locale and Translations**: Localized strings for the storefront.
- **Features**: Shop features based on plan and other settings.

```json title="Config Response Example"
{
  "title": "Cat Massage",
  "shop": "cat-massage.myshopify.com",
  "shopId": "73ej83874241b002709b8db",
  "calendarExperience": "CLASSIC",
  "product": {
    "id": "644c0db76u3a2ff85c9088fad",
    "image": "https://sesami-pos.myshopify.com/cdn/shop/files/Cats-Massaging.jpg",
    "location": null,
    "customerCanCancel": true,
    "customerCanReschedule": true,
    "customerCanManageBefore": null,
    "groupAppointment": 3,
    "flexStartInterval": null
  },
  "timeFormat": "12",
  "dateFormat": "dd NN yyyy hh:mm",
  "hideTimezone": true,
  "reservation": 15,
  "instantBooking": {
    "enabled": true,
    "requiredFields": [
      "firstName",
      "lastName",
      "email",
      "phone"
    ]
  },
  "locale": "en",
  "translations": {
    "you_can_action_until_the_appointment_starts": "You can {action} until the appointment starts.",
    "number_left": "{number} left",
    "select": "Select",
    "close": "Close",
    "back": "Back",
    "previous": "Previous",
    "book": "Book",
    "review_and_book": "Review & Book",
    "duration": "Duration",
    "min": "min",
    "today": "Today",
    "important": "important",
    "select_a_team_member": "Select a team member",
    "your_timezone_is": "Your timezone is",
    "any_available": "Any Available",
    "book_with_maximum_availability": "Book with maximum availability",
    "please_select_date_and_time": "Please select date and time",
    "confirm": "Confirm",
    "loading": "Loading...",
    "no_available_slots": "No available slots",
    "date": "Date",
    "time": "Time",
    "timezone": "Timezone",
    "team_member": "Team Member",
    "brand_text": "We book with {sesami}",
    "return": "Return",
    "reschedule": "Reschedule",
    "rescheduled": "Rescheduled",
    "cancel": "Cancel",
    "greeting": "Hi {name}!",
    "click_here": "Click here",
    "all": "All",
    "next": "Next",
    "location": "Location"
  },
  "locations": [
    {
      "id": "67a5402b1297947834b02ff0",
      "name": "Paris",
      "image": {
        "id": "default",
        "url": null
      },
      "description": "",
      "resourceGroups": [
        {
          "hideAnyAvailable": false,
          "resources": [
            {
              "name": "Ehsan",
              "id": "646fea87b3e0a998a17dc047",
              "image": {
                "id": "default",
                "url": "https://app.sesami.co/static/default_avatar.png"
              },
              "type": "Team Member"
            },
            {
              "name": "Alex",
              "id": "65cb1fc98ccab3356ea492dc",
              "image": {
                "id": "default",
                "url": "https://app.sesami.co/static/default_avatar.png"
              },
              "type": "Team Member"
            }
          ]
        },
        {
          "hideAnyAvailable": true,
          "resources": [
            {
              "name": "Room 1",
              "id": "666abc785590b39decacb1d9",
              "image": {
                "id": "67b6dec4745b3370e6535bb1",
                "url": null
              },
              "type": "Room"
            },
            {
              "name": "Room 2",
              "id": "67b59a6245aa681b2893d274",
              "image": {
                "id": "default",
                "url": null
              },
              "type": "Room"
            }
          ]
        }
      ]
    }
  ],
  "defaultResourceAvatar": "https://app.sesami.co/static/default_avatar.png",
  "storefrontStartDate": null,
  "storefrontButtonLabel": "Select Time",
  "baseURL": "https://app.sesami.co",
  "sesamiBrand": "<span>We book with <a target='_blank' href='https://sesami.co'><img alt='Sesami icon' src='https://app.sesami.co/static/icon.png' width='16'/> Sesami</a></span>",
  "removeBranding": false,
  "extensions": [
    {
      "_id": "673489f69cf7e3fb4aedbca0",
      "name": "Form loader",
      "url": "https://formsapp.sesami.co/experience/formLoader",
      "target": "EXPERIENCE_INSTANT_BOOKING_FORM",
      "isAdmin": false,
      "appId": "66b4712057bc573a3a98bb5c",
      "appName": "sesami-forms-app"
    },
    {
      "_id": "6739df8c6ce9a73e1e8d64c8",
      "name": "Confirmation page",
      "url": "https://formsapp.sesami.co/experience/confirmation",
      "target": "EXPERIENCE_CONFIRMATION_PAGE",
      "isAdmin": false,
      "appId": "66b4712057bc573a3a98bb5c",
      "appName": "sesami-forms-app"
    }
  ],
  "features": {
    "CALENDAR_SYNC": true,
    "REMOVE_BRANDING": true,
    "SERVICE_HOURS": false,
    "APPOINTMENT_MANAGEMENT": true,
    "GROUP_APPOINTMENTS": true,
    "APPOINTMENT_REPORT": true,
    "RESERVATION": true,
    "STOREFRONT_SDK": true,
    "FLOWS": true,
    "INSTANT_BOOKING": true,
    "STOREFRONT_CALENDAR_V2": true,
    "EXPERIENCE_SELECTOR": true,
    "STOREFRONT_FULL_EXPERIENCE": true,
    "MULTI_LOCATION": true
  }
}
```

## Helpers

### formatDate(date, options)

Formats a `Date` object based on the user's preferred locale using the [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) API. This method simplifies the process of creating localized date strings.

| **Argument** | **Type** | **Description**                                                                                                                                                                                              |
| ------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `date`       | `Date`   | The date to format.                                                                                                                                                                                          |
| `options`    | `Object` | An object specifying date formatting options. See [Intl.DateTimeFormat options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) for more details. |

**Example Usage:**

```ts
sesami.formatDate(new Date("2022-07-07"), { month: "short", year: "numeric" });
// Output: "Jul 2022" (depending on the locale)
```

---

### getSesamiFields(slot)

Generates a set of hidden input fields for use in a Shopify storefront. These fields are typically added as [line item properties](https://shopify.dev/api/liquid/objects/line_item#line_item-properties) when adding a product to the cart, ensuring that the selected time slot is linked to the product.

| **Argument** | **Type**                                                | **Description**                                               |
| ------------ | ------------------------------------------------------- | ------------------------------------------------------------- |
| `slot`       | [SesamiSlotObject](/docs/sesami-sdk/rendering-a-calendar/#sesamislotobject) | The slot object returned from the `getAvailabilities` method. |

**Usage in Storefront Integration:**  
To learn more about these fields, see the [hidden fields](/docs/sesami-experience/quick-start/#sesami-hidden-fields) section of the Sesami Experience documentation.
