---
sidebar_position: 1
---

# App Targets

The places where an app/extension can load, and have interaction with its Sesami are called targets.

<br></br>

#### <center>Targets List</center>

| Target                          | Description                                             | Usage Example                                         |
|---------------------------------|---------------------------------------------------------|-------------------------------------------------------|
| ADMIN_APP_LOADER                | The main page of the app in the Admin Portal.           | Loading the main page of the app.                     |
| ADMIN_APPOINTMENT_DETAILS_INFO  | The info section inside the appointment details drawer. | Showing the collected data for the appointment.       |
| EXPERIENCE_BEFORE_CART          | The step before adding an appointment to the cart.      | Rendering a form for specific service.                |
| EXPERIENCE_INSTANT_BOOKING_FORM | At the bottom of the instant booking’s form.            | Rendering a generic form, like terms of use agreement.|
| EXPERIENCE_CONFIRMATION_PAGE    | The confirmation page after the instant booking is done.| Getting the appointment ID, or giving a discount code.|

<br></br>

#### <center>Targets Authentication and Context</center>

| Target                            | Authenticated   | Context                                                                                                                     |
|-----------------------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------|
| ADMIN_APP_LOADER                  | Yes             | Target, Shop ID, Locale, Token, HMAC                                                                                        |
| ADMIN_APPOINTMENT_DETAILS_INFO    | Yes             | Target, Shop ID, Locale, Appointment ID, Token, HMAC                                                                        |
| EXPERIENCE_BEFORE_CART            | No              | Target, Shop ID, Locale, Timezone, Product ID, Variant ID, Quantity, Selected Resource IDs, Selected Slot                   |
| EXPERIENCE_INSTANT_BOOKING_FORM   | No              | Target, Shop ID, Locale, Timezone, Product ID, Variant ID, Quantity, Selected Resource IDs, Selected Slot                   |
| EXPERIENCE_CONFIRMATION_PAGE      | No              | Target, Shop ID, Locale, Timezone, Product ID, Variant ID, Quantity, Selected Resource IDs, Selected Slot, Appointment ID   |
