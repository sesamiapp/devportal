---
sidebar_position: 5
---

# Methods

The Sesami SDK offers various methods to render a calendar and manage availabilities:

### **Initialization**

- **`init()`**  
  Initializes the SDK instance. Automatically fetches availabilities for the current month if [autoLoad](../data-structure/#sesamidayobject) is enabled.

---

### **Date & Range Management**

- **`setDate(date: Date)`**  
  Updates the current date [now](../data-structure/#sesamidayobject) and fetches availabilities if they haven't been fetched yet (when [autoLoad](../data-structure/#sesamidayobject) is enabled).

- **`next(duration: "year" | "month" | "week" | "day")`**  
  Moves to the next year, month, week, or day and updates [now](../data-structure/#sesamidayobject). Automatically fetches availabilities if needed and [autoLoad](../data-structure/#sesamidayobject) is enabled..

- **`previous(duration: "year" | "month" | "week" | "day")`**  
  Moves to the previous year, month, week, or day and updates [now](../data-structure/#sesamidayobject). Automatically fetches availabilities if needed and [autoLoad](../data-structure/#sesamidayobject) is enabled..

---

### **Adjustment**

- **`setVariantId(variantId: string)`**  
  Updates the current value for `variantId` and fetches availabilities if [autoLoad](../data-structure/#sesamidayobject) is enabled.

- **`setTeamMember(teamMember: string)`**  
  Updates the current value for [teamMember](../data-structure/#sesamidayobject) and fetches availabilities if [autoLoad](../data-structure/#sesamidayobject) is enabled.

---

### **Availabilities**

- **`load()`**  
  Manually loads availabilities for the selected range. Use this when [autoLoad](../data-structure/#sesamidayobject) is disabled (This method will only trigger a network request if the data is not already available).

---

### **Slot Management**

- **`reserve(slot: SesamiSlotObject)`**  
  Temporarily reserves a slot for the time period defined in Sesami app settings. Returns a promise resolving to the reservation status.

- **`book(slot: SesamiSlotObject, customer: SesamiCustomerObject, options?: SesamiOptionsObject)`**  
  Instantly books a slot for a customer. Returns a promise resolving to the booking status.

#### **Example**

```js
let customer = {
  email: "john@smith.com",
  firstName: "John",
  lastName: "Smith",
  phone: "+12223333333",
};

let options = {
  properties: [
    { name: "my_custom_property_1", value: "YES" },
    { name: "my_custom_property_2", value: "100" },
  ],
};

sesami
  .book(slot, customer, options)
  .then(() => console.log("Booked"))
  .catch((e) => console.error(e));
```

---

### **getConfig()**

Retrieves the service configuration, including details about the service, team members, shop, and more.

#### **Returns:**

- **Service Details**: Title, product image, customer management options, etc.
- **Assigned Team Members**: A list of team members with names, avatars, and descriptions.
- **Shop Details**: Shop name and base URL.
- **Instant Booking Status**: Whether instant booking is enabled and required fields.
- **Date/Time Format**: Customizable date and time formatting.
- **Locale and Translations**: Localized strings for the storefront.

#### **Example Response:**

```js
{
    "title": "Climbing",
    "shop": "sesami-sdk.myshopify.com",
    "product": {
        "image": "https://cdn.shopify.com/s/files/1/0621/4752/6908/products/athletic-woman-climbing-on-overhanging-cliff-rock-with-sunset-sky-picture-id1179235120.jpg?v=1661382680",
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
    "locale": "en",
    "translations": {
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
        "location": "Location",
        "cancel_appointment": "Cancel Appointment",
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
        "try_again": "Try again"
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
        },
        {
            "id": "6337fe18a041b5e985c9ae5e",
            "name": "Karmel",
            "image": {
                "id": "default",
                "url": "https://cdn.sesami.co/default_avatar.png"
            },
            "description": "Technical integration"
        }
    ],
    "defaultTeamMemberAvatar": "https://cdn.sesami.co/default_avatar.png",
    "storefrontStartDate": null,
    "baseURL": "https://app.sesami.co (https://app.sesami.co/)"
}
```
