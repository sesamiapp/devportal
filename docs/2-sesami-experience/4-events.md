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
The reservation process has failed. You can find the error message in the event's detail.

```ts
type ReservationError =
  'session_expired'  | // the session token has been expired
  'rate_limit'       | // user sends too many requests
  'unavailable_slot' | // someone else took the slot
  'unknown'            // none above
```

```js
window.addEventListener('sesami:reservation:failed', e => {
  console.log('reservation failed', e.detail.error)
})
```

### sesami:booking:success
When Instant Booking is enabled, the entire booking flow happens within Sesami. This event is triggered when a slot is successfully booked via Instant Booking.<br></br>
You can get the `appointmentId` in the event's detail.

```js
window.addEventListener('sesami:booking:success', e => {
  console.log('booking success', e.detail.appointmentId)
})
```

### sesami:booking:failed
The booking process has been failed. You can find the error message in the event's detail.

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
  console.log('booking failed', e.detail.error)
})
```

### change

A regular `change` event will be fired on the [hidden fields](/docs/sesami-experience/quick-start/#sesami-hidden-fields).

**Example:** Listen for [sesami:modal:opened](#sesamimodalopened) event and once inputs are rendered, listen for the change event on the `Date` input and programmatically create an order without customers having to click on the add to cart button:

```html
<script>
  (() => {
    window.addEventListener('sesami:modal:opened', e => {
      const tagId = e.detail.tagId
      const hiddenFieldsWrapper = document.getElementById(`sesami-hidden-fields-${tagId}`)
      const sesamiDateInput = hiddenFieldsWrapper.querySelector("[name='properties[Date]']")
      sesamiDateInput.addEventListener('change', e => {
        console.log('date changed', e.target.value)
        // create order...
      })
    })
  })()
</script>
```

### sesami:cart:add
Auto add to cart has been triggered.

```js
window.addEventListener('sesami:cart:add', () => {
  console.log('auto add to cart')
})
```

### sesami:cart:skip
Auto skip cart has been triggered.

```js
window.addEventListener('sesami:cart:skip', () => {
  console.log('skip cart')
})
```
