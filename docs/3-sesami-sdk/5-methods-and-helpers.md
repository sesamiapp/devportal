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

- **`setLocation(location: string)`**  
  Updates the current location id. Pass a falsy value to clear it. Fetches availabilities if [`autoLoad`](/docs/sesami-sdk/options/) is enabled.

- **`setResources(resources: string[])`**  
  Updates the current resource ids used to filter availabilities. Pass a non-empty array of ids; an empty array or a non-array value clears the selection. Fetches availabilities if [`autoLoad`](/docs/sesami-sdk/options/) is enabled.

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

Fetches the storefront configuration for the current product. Use it to drive pickers and labels in a custom booking UI: locations (including timezone and resource groups), team members, instant booking and reservation settings, date/time formatting, locale, translations, and feature flags.

#### **Returns:**

- **Shop**: `shopId`, `shop`, `origin`, and Sesami `baseURL`.
- **Product**: Service `title` and the `product` object (image, group size, cancel/reschedule settings).
- **Team members**: Top-level `teamMembers` list, plus `defaultTeamMemberAvatar` / `defaultResourceAvatar`.
- **Locations**: `locations[]` with timezone, contact fields, and `resourceGroups` (`hideAnyAvailable`, `resources`).
- **Booking**: `reservation` (hold duration in minutes) and `instantBooking` (`enabled`, `requiredFields`).
- **Storefront display**: `locale`, `dateFormat`, `timeFormat`, `hideTimezone`, `calendarExperience`, `storefrontButtonLabel`, `storefrontStartDate`, `removeBranding`, `sesamiBrand`.
- **Extensions**: Installed app extensions (empty array when none are installed).
- **Translations**: Localized storefront strings.
- **Features**: Plan/feature flags enabled for the shop.

```json title="Config Response Example"
{
  "shopId": "64f0a1b2c3d4e5f678901234",
  "shop": "example.myshopify.com",
  "origin": "example.myshopify.com",
  "baseURL": "https://storefront.sesami.co",
  "defaultTeamMemberAvatar": "https://cdn.sesami.co/static/default_avatar.png",
  "defaultResourceAvatar": "https://cdn.sesami.co/static/default_avatar.png",
  "features": {
    "REMOVE_BRANDING": true,
    "STOREFRONT_FULL_EXPERIENCE": true
  },
  "locale": "en",
  "dateFormat": "dd NN yyyy hh:mm",
  "timeFormat": "12",
  "hideTimezone": false,
  "storefrontStartDate": null,
  "storefrontButtonLabel": "Select Time",
  "calendarExperience": "V2",
  "removeBranding": false,
  "sesamiBrand": "<span>We book with <a target='_blank' href='https://sesami.co'><img alt='Sesami icon' src='https://cdn.sesami.co/icon.png' width='16'/> Sesami</a></span>",
  "title": "Example Service",
  "product": {
    "id": "64f0a1b2c3d4e5f678901235",
    "title": "Example Service",
    "image": "https://cdn.shopify.com/s/files/1/0000/0000/0000/files/example.jpg",
    "location": null,
    "groupAppointment": 1,
    "flexStartInterval": null,
    "customerCanCancel": false,
    "customerCanReschedule": false,
    "customerCanManageBefore": null
  },
  "reservation": 10,
  "instantBooking": {
    "enabled": false,
    "requiredFields": [
      "email",
      "firstName",
      "lastName"
    ]
  },
  "teamMembers": [
    {
      "id": "64f0a1b2c3d4e5f678901236",
      "name": "Alex",
      "description": null,
      "image": {
        "id": "64f0a1b2c3d4e5f678901237",
        "url": "https://cdn.sesami.co/uploads/avatar/64f0a1b2c3d4e5f678901237.jpg"
      }
    }
  ],
  "locations": [
    {
      "id": "64f0a1b2c3d4e5f678901238",
      "name": "Main Location",
      "description": null,
      "image": null,
      "timezone": "America/New_York",
      "phone": null,
      "email": null,
      "businessAddress": null,
      "resourceGroups": [
        {
          "hideAnyAvailable": false,
          "resources": []
        }
      ]
    }
  ],
  "extensions": [],
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
    "resources": "Resources",
    "verify_cart_error_slot_unavailable": "Unfortunately this time slot is not available anymore. Please remove this item and book again.",
    "verify_cart_error_time_not_selected": "No time slot selected, Please remove this item and select a date and time.",
    "verify_cart_error_team_member_not_found": "Team member not found",
    "brand_text": "We book with {sesami}",
    "return": "Return",
    "reschedule": "Reschedule",
    "rescheduled": "Rescheduled",
    "cancel": "Cancel",
    "greeting": "Hi {name}!",
    "click_here": "Click here",
    "all": "All",
    "next": "Next",
    "location": "Location",
    "cancel_appointment": "Cancel Appointment",
    "reschedule_appointment": "Reschedule",
    "appointment_management_alert": "until {numberOfHours} hours before the appointment starts: {formattedDateAndTime}",
    "session_expired": "Session expired",
    "storefront_selected_slot": "Selected slot",
    "storefront_input_label_first_name": "First name",
    "storefront_input_label_last_name": "Last name",
    "storefront_input_label_email": "Email",
    "storefront_input_label_phone": "Phone",
    "storefront_input_label_country_code": "Country code",
    "storefront_input_validation_field_is_required": "{fieldName} is required",
    "storefront_input_validation_field_is_invalid": "Invalid value",
    "storefront_input_validation_please_enter_a_valid_phone_number": "Please enter a valid phone number",
    "storefront_input_label_country_code_suggested": "Suggested",
    "error_storefront_session_expired": "Please reload the page and try again.",
    "storefront_reservation_notice": "The selected slot will be reserved for {reservationPeriod} minutes",
    "storefront_reservation_error_generic": "Something went wrong, please reload the page and try again.",
    "storefront_reservation_error_bad_request": "Slot could not be reserved, please try again.",
    "storefront_reservation_error_slot_unavailable": "Someone else has already booked this time, please select another time.",
    "storefront_book_success_message": "Thanks for booking an appointment with us, You can now close this window",
    "storefront_book_error_generic": "Something went wrong, please reload the page and try again.",
    "storefront_book_error_validation": "Please enter a valid value for highlighted field(s)",
    "storefront_book_error_slot_unavailable": "Someone else has already booked this time, please select another time.",
    "error_loading_calendar": "There was an error loading the calendar",
    "error_ratelimit": "Too many requests, please retry after a few minutes.",
    "try_again": "Try again",
    "appointment_management_expired_management_period": "This appointment can no longer be managed. allowed period has already expired",
    "appointment_management_product_deleted": "Couldn't find service, Please contact store.",
    "appointment_management_disabled_cancellation": "This appointment can't be cancelled, Please contact store.",
    "appointment_management_disabled_rescheduling": "This appointment can't be rescheduled, Please contact store.",
    "appointment_management_limit_reached": "This appointment can't be rescheduled, Limit reached.",
    "appointment_management_rescheduled_successfully_title": "Appointment rescheduled successfully",
    "appointment_management_rescheduled_successfully_description": "<p>You will receive a confirmation email soon.</p><p>You can now close this window.</p>",
    "appointment_management_cancellation_failed": "Could not cancel appointment",
    "appointment_management_cancelled_successfully_title": "Appointment cancelled successfully",
    "appointment_management_cancelled_successfully_description": "<p>You can now close this window.</p>"
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
