---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Management

## Model

In this part we will talk about how we can set the availability rules for each resource. Currently we only can set availability for Services and TeamMembers.

we have 2 main models for calculating availability.<br></br>
<Tabs>
<TabItem value="availability" label="Availability Rule" default>

```typescript
{
    type: "wday" | "date",
    date?: string,
    weekday?:
        | "monday"
        | "tuesday"
        | "wednesday"
        | "thursday"
        | "friday"
        | "saturday"
        | "sunday",
    intervals: {
            from:string,
            to:string,
            unavailable?:boolean
        }[]
}
```

This model specify the when should the resource be available or not.
as you can see there is an attribute called type which can be either `date` or `wday`.
we will explain them using an example. first lets talk about the `wday` type

```json
{
  "type": "wday",
  "weekday": "monday",
  "intervals": [
    {
      "from": "12:00",
      "to": "14:00",
      "unavailable": false
    }
  ]
}
```

This model is using `wday` to set an availability rule for all the `monday`s from `12:00` to `14:00`. Now lets talk about `date` type

```json
{
  "type": "date",
  "weekday": "2024-01-01",
  "intervals": [
    {
      "from": "12:00",
      "to": "14:00",
      "unavailable": false
    }
  ]
}
```

This model is using `date` type to set an availability rule for the first day of 2024 from `12:00` to `14:00`

:::note

Both `wday` and `date` type should be generated based on the user **Timezone**

:::

</TabItem>
<TabItem value="range" label="RangeRule">
This model specify the range in which the Availability rule should apply to. Let's check out the model of range rule

```typescript
{
    availableFrom:{
        type: "DAYS_INTO_THE_FUTURE" | "EXACT_DATE" | "NOW",
        value?:string
    },

    availableTo: {
        type: "DAYS_INTO_THE_FUTURE" | "EXACT_DATE" | "INDEFINITELY"
        value?:string
    }
}
```

As you can see we have 2 parameter in this model called `availableFrom` and `availableTo`. This two parameter determine the start and the end of the range in which we would apply the `Availability Rules`. Let talk about different values of each one of these attributes.

#### AvailableFrom

- `DAYS_INTO_THE_FUTURE`: If the type is `DAYS_INTO_THE_FUTURE`, then we would add the number of days specified in the `value` field, to current Date and that would be the start of the range
- `EXACT_DATE`: The exact date of the start of the range in the specified timezone.
- `NOW`: the start of the range would be the the start moment of the operation

#### AvailableTo

- `DAYS_INTO_THE_FUTURE`: If the type is `DAYS_INTO_THE_FUTURE`, then we would add the number of days specified in the `value` field, to current Date and that would be the end of the range
- `EXACT_DATE`: The exact date of the end of the range in the specified timezone.
- `INDEFINITELY`: The end of the range would be our biggest possible threshold. (e.g. 1 Year)

</TabItem>
</Tabs>

## API

As we have said before we can only set availability for TeamMembers and Services. Setting Availability are available in both create and update APIS and Mutations for both TeamMembers and Services.

#### GraphQL

```graphql
mutation {
  createService(shop: $shopId, request: $request) {
    id
  }
}

mutation {
  createTeamMember(shop: $shopId, request: $request) {
    id
  }
}

mutation {
  updateService(shop: $shopId, id: $id, request: $request) {
    id
  }
}

mutation {
  updateTeamMember(shop: $shopId, id: $id, request: $request) {
    id
  }
}
```

####REST

```curl
POST /:shopId/services
POST /:shopId/teamMembers

PATCH /:shopId/services/:serviceId
PATCH /:shopId/teamMembers/:teamMemberId
```

:::note
Please Checkout **Swagger** or **GraphQL SandBox** for more information
:::
