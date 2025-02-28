---
sidebar_position: 5
---

# Methods & Helpers

## Methods

The Sesami SDK offers various methods to render a calendar and manage availabilities.

### **Initialization**

- **`init()`**  
  Initializes the SDK instance. Automatically fetches availabilities for the current month if [autoLoad](/docs/sesami-sdk/options/) is enabled.

### **Date & Range Management**

- **`setDate(date: Date)`**  
  Updates the current date [now](/docs/sesami-sdk/options/) and fetches availabilities if they haven't been fetched yet (when [autoLoad](/docs/sesami-sdk/options/) is enabled).

- **`next(duration: "year" | "month" | "week" | "day")`**  
  Moves to the next year, month, week, or day and updates [now](/docs/sesami-sdk/options/). Automatically fetches availabilities if needed and [autoLoad](/docs/sesami-sdk/options/) is enabled.

- **`previous(duration: "year" | "month" | "week" | "day")`**  
  Moves to the previous year, month, week, or day and updates [now](/docs/sesami-sdk/options/). Automatically fetches availabilities if needed and [autoLoad](/docs/sesami-sdk/options/) is enabled.

### **Adjustment**

- **`setVariantId(variantId: string)`**  
  Updates the current value for `variantId` and fetches availabilities if [autoLoad](/docs/sesami-sdk/options/) is enabled.

- **`setTeamMember(teamMember: string)`**  
  Updates the current value for [teamMember](/docs/sesami-sdk/options/) and fetches availabilities if [autoLoad](/docs/sesami-sdk/options/) is enabled.

### **Availabilities**

- **`load()`**  
  Manually loads availabilities for the selected range. Use this when [autoLoad](/docs/sesami-sdk/options/) is disabled (This method will only trigger a network request if the data is not already available).

### **Slot Management**

- **`reserve(slot: SesamiSlotObject)`**  
  Temporarily reserves a slot for the time period defined in Sesami app settings. Returns a promise resolving to the reservation status.

- **`book(slot: SesamiSlotObject, customer: SesamiCustomerObject, options?: SesamiOptionsObject)`**  
  Instantly books a slot for a customer. Returns a promise resolving to the booking status.

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

### **getConfig()**

Retrieves the service configuration, including details about the service, team members, shop, and more.

#### **Returns:**

- **Service Details**: Title, product image, customer management options, etc.
- **Assigned Team Members**: A list of team members with names, avatars, and descriptions.
- **Shop Details**: Shop name and base URL.
- **Instant Booking Status**: Whether instant booking is enabled and required fields.
- **Date/Time Format**: Customizable date and time formatting.
- **Locale and Translations**: Localized strings for the storefront.

```json title="Config Response Example"
{
    "title": "Massage",
    "shop": "sesami-sdk.myshopify.com",
    "product": {
        "image": "https://sesami-pos.myshopify.com/cdn/shop/files/Cats-Massaging.jpg",
        "location": null,
        "customerCanCancel": true,
        "customerCanReschedule": true,
        "customerCanManageBefore": 24
    },
    "timeFormat": "12",
    "dateFormat": "dd NN yyyy hh:mm",
    "hideTimezone": false,
    "reservation": 0,
    "instantBooking": {
        "enabled": true,
        "requiredFields": [
            "email"
        ]
    },
    "teamMembers": [
        {
            "id": "627c2a622ffe7c17f8b776eb",
            "name": "Mishell",
            "image": {
                "id": "default",
                "url": "https://cdn.sesami.co/default_avatar.png"
            },
            "description": null
        },
        {
            "id": "62c4da2d7d56d8dbcc79404c",
            "name": "adrian",
            "image": {
                "id": "default",
                "url": "https://cdn.sesami.co/default_avatar.png"
            },
            "description": null
        }
    ],
    "defaultTeamMemberAvatar": "https://cdn.sesami.co/default_avatar.png",
    "storefrontStartDate": null,
    "baseURL": "https://app.sesami.co",
    "locale": "en",
    "translations": {
        "important": "important",
        "select_a_team_member": "Select a team member",
        "your_timezone_is": "Your timezone is",
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
        "click_here": "Click here"
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
