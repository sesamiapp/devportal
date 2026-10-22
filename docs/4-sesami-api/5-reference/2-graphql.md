---
sidebar_position: 2
title: GraphQL reference
description: The Sesami GraphQL endpoint and the queries used across these docs.
---

<!-- Interim page. Replace with the reference generated from the schema (API docs plan, phase 2). -->

Send every GraphQL request as a `POST` to one endpoint, with the [authentication headers](../3-concepts/1-authentication.mdx):

```
POST https://api.sesami.co/graphql
```

## Queries used in these docs

| Query | Arguments | Returns |
|---|---|---|
| `getShops` | — | The shops your token can reach, in `data` |
| `getAppointment` | `id: String!`, `timezone: String` | One booking, with `customer`, `service` and `resources` |
| `getAppointments` | `shop: String!`, `limit`, `after`, `before`, `timezone`, `locationId` | A page of bookings in `data`, with `nextCursor` |
| `getLocation` | `shop: String!`, `locationId: String!` | One location, with `name`, `timezone` and `businessAddress` |

Bookings are called appointments in the schema. Field names match the [REST reference](./1-rest.md), so a REST response shows what you can select in GraphQL.
