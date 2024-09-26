---
sidebar_position: 2
---

# Availability APIs

## Get Available Slots

Get available slots API and GraphQL query are as follows

#### GraphQL

```graphql
query {
    getAvailableSlots(...Args){}
}
```

#### REST

```REST
GET /:shop/availabilities
```

Both of the these methods accepts this parameters.

- service: This field is **required**. This field is for specifying the service user wants to see the availability of.
- variantId: This field is **required**. This field is for specifying the variant of service user wants to see the availability of.
- duration: This field is **required**. This field is for specifying the duration of the time user wants to book.
- ids: This field is **required**. This field is a 2 dimensional array of resourceIds. Each array of this fields should be of the same type. For example the first array can be Ids of teamMembers and the second array would be the Ids of rooms.
- from: this field is not **required**. This field specify the start of the range. If this field is not specified then we would find the first time availability.
- to: This field is not **required**. This field specify the end of the range. If this field is not specified then we would find the first time availability.
- quantity: This field is not **required**. This field specify the number of booking slots needed.

## Verify Slot

Verify Slot API and GraphQL query are as follows

#### GraphQL

```graphql
query {
    verifySlot(...Args){}
}
```

#### REST

```REST
GET /:shop/availabilities/verify
```

The parameters of this methods are exactly the same as the previous method. the only difference is that the `from` and `to` attributes should be set to the start and end of the range of the slot you want to verify
