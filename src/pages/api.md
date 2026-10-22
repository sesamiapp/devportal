---
title: Sesami API
description: The Sesami API at a glance, with links to every API page. GraphQL and REST access to a shop's bookings, services, locations, resources and customers.
---

# Sesami API

The Sesami API gives programmatic access to a shop's bookings, services, locations, resources and customers, over GraphQL or REST. Both run on the same backend and share tokens, permissions, ids and error codes.

## Essentials

| Topic | Details |
|---|---|
| GraphQL | `POST https://api.sesami.co/graphql` with a JSON body `{ "query", "variables" }` |
| REST | `https://api.sesami.co/api/v1/{shop}/...` |
| Headers | `x-api-key` (token), `x-client-id` (Client ID), `x-shop-id` (Shop ID) on every request |
| Shop ID | A 24-character id, labelled **Admin ID** in the Sesami Admin, different from the Shopify shop id |
| Naming | Bookings are called **appointments** in the API: `getAppointment`, `/appointments/{id}` |
| Times | `YYYY-MM-DD HH:mm:ss` in the requested `timezone`, no offset; request `UTC` |
| OpenAPI spec | [`https://api.sesami.co/swagger-json`](https://api.sesami.co/swagger-json); authenticate with the headers above |

## Pages

- [Overview](/docs/sesami-api/intro/): what the API is and where to start
- [Quickstart](/docs/sesami-api/quickstart/): a first request in GraphQL and REST
- [Authentication](/docs/sesami-api/concepts/authentication/): tokens, headers, permissions, Shop ID
- [GraphQL and REST](/docs/sesami-api/concepts/graphql-and-rest/): how the two compare, and a request in each
- [Errors](/docs/sesami-api/concepts/errors/): the error format and codes
- [Read a booking](/docs/sesami-api/guides/read-a-booking/): a booking with its customer, service, resources and location
- [REST reference](/docs/sesami-api/reference/rest/): every endpoint, with a try-it console
- [GraphQL reference](/docs/sesami-api/reference/graphql/): the endpoint and the queries used in these docs

Building an app that merchants install? See [Sesami Apps](/docs/sesami-apps/intro/).
