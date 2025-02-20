---
sidebar_position: 4
---

# Events

Sesami fires events to help you handle different scenarios in your booking flow. You can listen for these events to trigger different actions, for example when a customer selects a time slot or when Sesami is loaded and initialized on your page.

### sesami:loaded
Sesami resources are loaded in async mode, so they do not block your other resources. Depending on network conditions and the size of other resources, it can take some time until Sesami is fully loaded on a page. This event will let you know when Sesami is ready to accept bookings.

This is an example that shows how you can listen for this event and trigger an action based on it:

```js
window.addEventListener('sesami:loaded', () => {
  console.log('sesami loaded')
})
```

### sesami:modal:opened
The user has clicked on the button and the modal is opened.

```js
window.addEventListener('sesami:modal:opened', () => {
  console.log('modal is opened')
})
```

### sesami:modal:closed
The modal is closed. Either by clicking on the close button with the user, or due to finishing the reservation/booking process.

```js
window.addEventListener('sesami:modal:closed', () => {
  console.log('modal is closed')
})
```

### sesami:reservation:success
The reservation process has been completed successfully.

```js
window.addEventListener('sesami:reservation:success', () => {
  console.log('reservation success')
})
```

### sesami:reservation:failed
The reservation process has been failed. In the situation, you can find the error message in the event's details.

```ts
type ReservationError =
  'session_expired'  | // the session token has been expired
  'rate_limit'       | // user sends too many requests
  'unavailable_slot' | // someone else took the slot
  'unknown'            // none above
```

```js
window.addEventListener('sesami:reservation:failed', e => {
  console.log('reservation failed', e.details.error)
})
```

### sesami:booking:success
The booking process has been completed successfully. You can get the appointment ID in the event's details.

```js
window.addEventListener('sesami:booking:success', e => {
  console.log('booking success', e.details.appointmentId)
})
```

### sesami:booking:failed
The booking process has been failed. In the situation, you can find the error message in the event's details.

```ts
type BookingError =
  'session_expired'  | // the session token has been expired
  'rate_limit'       | // user sends too many requests
  'unavailable_slot' | // someone else took the slot
  'invalid_phone'    | // the phone number is not valid
  'unknown'            // none above
```

```js
window.addEventListener('sesami:booking:failed', e => {
  console.log('booking failed', e.details.error)
})
```






### sesami:booking:success
Unlike the classic experience where booking is only completed when the order is placed,
when instant booking is enabled, the entire booking flow happens within Sesami.
This event is triggered when a slot is successfully booked via Instant booking.

```html title="Example" {4}
<script>
(function(){
    window.addEventListener('sesami:booking:success', function(){
      /// Redirect to "Thank you" page
    })
})()
</script>
```


### change

A regular `change` event will be fired on respective hidden inputs displayed on [Rendered result](#rendered-result) section whenever a user selects a new time slot or changes the selected team member or timezone.

**Example:** Listen for [sesami:loaded](#sesamiloaded) event and once inputs are rendered, listen for the change event on the `Date` input and programmatically create an order without customers having to click on add to cart button:

```html title="Example" {6}
<script>
(function(){
    window.addEventListener('sesami:loaded', function(){
      var formElement = document.querySelector("#form")
      var sesamiDateInput = formElement.querySelector("[name='properties[Date]']")
      sesamiDateInput.addEventListener('change', function(){
        const FD = new FormData( formElement )
        createOrder(FD)
      })
    })
})()
</script>
```
