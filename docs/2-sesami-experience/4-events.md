---
sidebar_position: 4
---

# Events

Sesami fires events to help you handle different scenarios in your booking flow; You can listen for these events to trigger different actions when a customer selects a time slot or when Sesami is loaded and initialized on your page.

### sesami:loaded
Sesami resources are loaded in async mode, so they do not block your other resources. Depending on network conditions and the size of other resources, it can take some time until Sesami is fully loaded on a page. This event will let you know when Sesami is ready to accept bookings.

This is an example that shows how you can listen for this event and trigger an action based on it:

```html title="Example" {5}
<script>
/// Disable add to cart button
/// Display a loading spinner
(function(){
    window.addEventListener('sesami:loaded', function(){
      /// Remove loading spinner
      /// Enable add to cart button
    })
})()
</script>
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
