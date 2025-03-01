---
sidebar_position: 3
---

# Booking & Reservation

## Booking

You can book an available time slot instantly.

To do this, you can call the `book` function in your Sesami instance, it will get [`SesamiSlotObject`](/docs/sesami-sdk/rendering-a-calendar/#sesamislotobject), [`SesamiCustomerObject`](#sesamicustomerobject), and [`SesamiOptionsObject`](#sesamioptionsobject), and return a promise that resolves to a booking status.

```ts
type book = (
  slot: SesamiSlotObject,
  customer: SesamiCustomerObject,
  options: SesamiOptionsObject
) => Promise<string>

// usage
await window.sesami.book(selectedSlot, customerObject, optionsObject)
```

### `SesamiCustomerObject`

An object that contains customer data.

| Property    | Type     | Description               |
| ----------- | -------- | ------------------------- |
| `email`     | `String` | Customer's email address. |
| `firstName` | `String` | Customer's first name.    |
| `lastName`  | `String` | Customer's last name.     |
| `phone`     | `String` | Customer's phone number.  |

:::info
The phone number must be validated according to the [E.164 format](https://en.m.wikipedia.org/wiki/E.164), which ensures international compatibility.
:::

### `SesamiOptionsObject`

An object that contains form data as question and answer, key and value. This represents line item properties corresponding to the eCommerce order.

```js
{
  properties: [{
    name: String
    value: String
  }]
}
```

#### Example

```js
{
  properties:[
    {
      name: "How old are you?"
      value: "18"
    }
    {
      name: "Marital Status"
      value: "Single"
    }
  ]
}
```

## Reservation

You can Reserve a slot for the period defined in Sesami service settings.

To do this, you can call the `reserve` function in your Sesami instance, it will get a [`SesamiSlotObject`](/docs/sesami-sdk/rendering-a-calendar/#sesamislotobject) and return a promise that resolves to a reservation status.

```ts
type reserve = (slot: SesamiSlotObject) => Promise<string>
```
