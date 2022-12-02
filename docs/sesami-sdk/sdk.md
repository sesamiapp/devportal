---
sidebar_position: 1
---

# Storefront SDK (Beta)

You can build your own highly customized booking experience using Sesami SDK.

:::info
The Sesami SDK for JavaScript supports the latest two versions of the most popular browsers. Internet explorer and older browsers are not supported.
:::

## Include SDK

Include Sesami SDK on your theme.

1. From your Shopify admin, go to **Online Store > Themes**.
1. Click **Actions > Edit code**.
1. Open **Layout / theme.liquid**.
1. Insert the following code snippet at the bottom of the file.

```markup
 <script async src="https://cdn.sesami.co/sdk.js"></script>
```

## Quick start

Sesami will not block your other resources from being loaded and will not cause any delays or decrease in your store's performance, So you will need to initialize it when it is ready and loaded:


```markup
<script>
  window.sesamiAsyncInit = () => {
    
    sesami = new SesamiSDK({
      variantId: {{product.selected_or_first_available_variant.id}},
      shopId: {{shop.id}},
      productId: {{product.id}},
      quantity: 1,
      autoLoad: true
    })

    sesami.init();
  }
</script>

```

The code above will create a Sesami instance, You use it to render a fully customized calendar and get availabilities for each day.

## Data
Each instance of the Sesami SDK will contain a `data` object with the following structure:

```js
sesami = new SesamiSDK({/*options*/})

sesami.data
/*
{
  labels: Array<Date>,
  Rows: Array<Array<SesamiDayObject>>
}

example:

{
  labels: [Sun Dec 05 2021 00:00:00 {}, Mon Nov 29 2021 00:00:00 {}, ...],
  Rows: [
    [
      date: Sun Nov 28 2021 00:00:00 {}
      getAvailabilities: async ƒ ()
      isCurrentMonth: false
      isCurrentWeek: false
      isPast: true
      isToday: false
    ],
    ...
  ]
}
*/

```
### SesamiDayObject
A Sesami day object contains the following properties:

#### date
`Date` object representing this day

#### getAvailabilities()
async function

Returns a promise that resolves to an array of available slots: `Promise<Array<SesamiSlotObject>>`

#### isCurrentMonth
`Boolean`

Determines if this day is within the same month as the currently set date.

#### isCurrentWeek
`Boolean`

Determines if this day is within the same week as the currently set date.

#### isPast
`Boolean`

Determines if this day is in the past.

#### isToday
`Boolean`

Determines if this day is today.

#### onLoad(callback)

Callback function receives cell availabilities for the currently selected range, [autoLoad](#autoload) must be enabled. This method will only trigger a network request when the data is not already available.

#### onError(callback)

Callback function receives any errors when getting cell availabilities for the currently selected range.

### SesamiSlotObject

```js
/*
example:

{
  duration: 15
  remainingSlots: 1
  startTime: "2022-12-30 10:00"
  status: "available"
}

*/
```
#### duration
`Number`

Slot duration in minutes

#### remainingSlots
`Number`

Number of remaining slots in the currently selected time. Always 1 except for sevices that accept group appointments.

#### startTime
`String`

String representing starting date and time for the current slot in the selected timezone.

#### status
`String`

Currently the only possible value is "available" for storefront integrations.


## Options

You can pass several options to SesamiSDK, here are all possible options:

### shopId
`String`
***Required***
Valid Shopify shop ID.

### productId
`String`
***Required***
Valid Shopify product ID.

### variantId
`String`
***Required***
Valid Shopify variant ID.

### timezone
`String`
Timezone in which you'd like availabilities to be displayed.
IANA timezone values. example: **America/New_York**
Defaults to store timezone.

### teamMember
`String`
Team member name, exactly as entered in Sesami.
example: **John Smith**
Defaults to null, which will result in displaying availabilities for all team members that are connected to the current service.

### quantity
`Number`
Quantity - Only use for a service with group appointments.
defaults to **1**.

### weekStartDay
`Number`
The weekday that should be considered as the first day of the week. Accepted values are **0 - 6**:

**0** = Sunday  
**1** = Monday  
**2** = Tuesday  
**3** = Wednesday  
**4** = Thursday  
**5** = Friday  
**6** = Saturday  

defaults to **0**.

### autoLoad
`Boolean`
If this option is enabled, SDK will automatically fetch availabilities for the current month as soon as it is initialized, or the current date is updated.

defaults to **false**


### now
`Date`
Currently selected date.

defaults to **Current time: `new Date()`**


## Methods

The Sesami SDK provides several methods to render a calendar and fetch availabilities:

### init()

Initializes the instance and starts fetching availabilities for the current month if [autoLoad](#autoload) is enabled.

Arguments: none

### setDate(date)

Updates the current value for [now](#now) and fetches new availabilities if not already fetched and [autoLoad](#autoload) is enabled.

Arguments:  

- date: `Date`

### setVariantId(variantId)

Updates the current value for [variantId](#variantid) and fetches new availabilities if not already fetched and [autoLoad](#autoload) is enabled.

Arguments: 

- variantId: `String`

### setTeamMember(teamMember)

Updates the current value for [teamMember](#teammember) and fetches new availabilities if not already fetched and [autoLoad](#autoload) is enabled.

Arguments: 

- teamMember: `String`

### next(duration)

Navigates to the next (year | month | week | day) and updates the current value for [now](#now) and fetches new availabilities if not already fetched and [autoLoad](#autoload) is enabled.

Arguments: 

- duration: `String` one of: `year | month | week | day`

### previous(duration)

Navigates to the previous (year | month | week | day) and updates the current value for [now](#now) and fetches new availabilities if not already fetched and [autoLoad](#autoload) is enabled.

Arguments: 

- duration: `String` one of: `year | month | week | day`


### load()

Loads availabilities for the currently selected range. Only needed if [autoLoad](#autoload) is disabled. This method will only trigger a network request if the data is not already available.

Arguments: None

### reserve(slot)

Reserves a slot for the period of time defined in Sesami app settings. Returns a promise that resolves to a reservation status.

Arguments: 
- slot: SesamiSlotObject

### getConfig

Retrun the configurations of a service, including:
- Service details
- Assigned team members
- Shop details
- Instant Booking status
- Date and time format
- Locale and translations

Arguments: None

Example:
```js
  /*
  response:
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
*/
```


## Helpers

### formatDate(date, options)

Returnes formatted date in user's preferred locale.
This is a wrapper around [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)

Example:
```js
  sesami.formatDate(new Date("2022-07-07"), {month: "short", year: "numeric"})
  // Jul 2022
```

Arguments: 

- date: `Date`
- options: `Object` - Please check [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) for available options


### getSesamiFields(slot)

Returns a set of hidden input fields that are normally used in a Shopify storefront to add a product with the selected time slot as [**Line item properties**](https://shopify.dev/api/liquid/objects/line_item#line_item-properties) to the cart.

Check out [rendered result](/docs/storefront-integration/anatomy-of-sesami-button#rendered-result) section in storefront integration for more information about these fields.

Arguments:
- slot: [SesamiSlotObject](#sesamislotobject) returned from getAvailabilities method.




