---
sidebar_position: 5
---

# Methods

The `<sesami-experience>` element exposes a small set of methods you can call from your own JavaScript — useful when you want to drive the Experience from a [custom button](/docs/sesami-experience/options/#custom-button), a different DOM event, or a framework component.

### openExperience()
Opens the Experience popup programmatically. This is the same action that fires when a user clicks the default Sesami button.

A typical use case is hiding the Sesami button and triggering the popup from your own element:

```html
<sesami-experience
  id="my-sesami"
  shop-id="761236725762"
  service-id="981219221893"
  style="display: none;"
></sesami-experience>

<button onclick="document.querySelector('#my-sesami').openExperience()">
  Book Now
</button>
```

:::note
Make sure Sesami has finished loading before calling `openExperience()` — either by listening for the [sesami:loaded](/docs/sesami-experience/events/#sesamiloaded) event, or by relying on the click happening after the page is fully loaded.
:::
