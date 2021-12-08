---
sidebar_position: 3
---

# Storefront SDK (Beta)

You can build your own highly customized booking experience using Sesami SDK.

:::info
The Sesami SDK for JavaScript supports the latest two versions of the most popular browsers. Internet explorer and older browsers are not supported.
:::

## Enable the SDK

The Sesami SDK is currently in closed beta release. If you're interested in trying it out, you can reach out to our customer success team via our [help desk](https://help.sesami.co/).

After this feature is activated on your store, you can enable it from:

**Sesami app > Settings > Storefront settings > Use storefront SDK**


*Enabling the Sesami SDK means that you need to implement storefront integration yourself and the Sesami button will not appear on product pages automatically.*

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




