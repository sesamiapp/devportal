---
sidebar_position: 1
---

# Quick Start

:::info If you are using the Sesami inside the Shopify

If you add Sesami to your product page using the Shopify Theme Customizer, it will automatically add the tag and the bundle for you. See the [Shopify Integration](/docs/sesami-experience/shopify-integration/intro/) section for more information.
:::

The simplest way to use Sesami Experience is to load the [bundle](https://cdn.sesami.co/storefront/latest/sesami-main.js) and add its tag where you want to load the button:

```html
<html>
  <head>
    <script async src="https://cdn.sesami.co/storefront/latest/sesami-main.js"></script>
  </head>
  <body>
    <sesami-experience
      shop-id="761236725762"
      service-id="981219221893"
    ></sesami-experience>
  </body>
</html>
```

### Behavior
After loading the page, a request will be sent to Sesami to validate the shop and service that are given to the Experience, and after that, a button will be rendered on the page for using the Experience.

### Sesami Hidden Fields
As soon as you open the Sesami Experience, it will render some hidden fields(with empty values) inside the page, which will then be populated with the selected time and other information. (Like selected resource and timezone)

If you place the Experience inside an HTML form, it will render the fields inside the form, if not, it will search for the nearest form and render the fields inside it, and if it cannot find any forms, it will render the fields inside its own tag.

```html
<div class="sesami-hidden-fields-wrapper" id="sesami-hidden-fields-4902">
  <input type="hidden" name="properties[Date]"               class="sesami-hidden-field" sesami-hidden-date=""             >
  <input type="hidden" name="properties[Time]"               class="sesami-hidden-field" sesami-hidden-time=""             >
  <input type="hidden" name="properties[Timezone]"           class="sesami-hidden-field" sesami-hidden-time=""             >
  <input type="hidden" name="properties[Location]"           class="sesami-hidden-field" sesami-hidden-team-member=""      >
  <input type="hidden" name="properties[Resources]"          class="sesami-hidden-field" sesami-hidden-resources=""        >
  <input type="hidden" name="properties[_reservation_token]" class="sesami-hidden-field" sesami-hidden-reservation-token="">
  <input type="hidden" name="properties[_locale]"            class="sesami-hidden-field" sesami-hidden-locale=""           >
  <input type="hidden" name="properties[_session-id]"        class="sesami-hidden-field" sesami-hidden-session-id=""       >
  <input type="hidden" name="remainingSlots"                 class="sesami-hidden-field" sesami-hidden-remaining-slots=""  >
</div>
```

:::note

The above markup will only be generated if the current product is a Sesami service; otherwise, it will do nothing, and your other products won't be affected in any way.

Also, property names that are not hidden(not started with _underline), such as date and time, will be translated to your Experience locale.

:::

### Multiple Forms/Experiences

You can add multiple Experiences inside a page at the same time for different services, variants, etc. Also, some websites/themes might have multiple form elements on the product page, one example would be a theme that has different markups for different devices, So one form appears on a desktop and another on a mobile.

In this case, to avoid mixing different information about each Experience, there will be a common tag-id shared between each Experience and its hidden fields, this tag-id will be available on their HTML tags and also in the payload of all of their [events](/docs/sesami-experience/events/).

Also, if you place each Experience in a form, the hidden fields will be rendered inside its form.

```html
<form id="form-1">
  
  <sesami-experience
    shop-id="761236725762"
    service-id="981219221893"
  ></sesami-experience>

  <input type="submit" value="submit form 1"/>

  <!-- the hidden fields for the first form will be rendered here -->

</form>

<form id="form-2">
  
  <sesami-experience
    shop-id="761236725762"
    service-id="758423784238"
  ></sesami-experience>

  <input type="submit" value="submit form 2"/>

  <!-- the hidden fields for the second form will be rendered here -->

</form>
```

### Rescheduling/Reassigning

You can use the Sesami Experience to reschedule an appointment, or reassign it to another location or resource.

To achieve this, you just need to send the `appointment-id` and `management-token` to the tag:

```html {4-5}
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
  appointment-id="32948238943298428"
  management-token="8374yr3489r98ryh4r0123rj4g8n903dhg3djk309yu47fh3903f4h"
></sesami-experience>
```
