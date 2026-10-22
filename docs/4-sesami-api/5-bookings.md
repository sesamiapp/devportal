---
sidebar_position: 5
---

# Bookings

Read a booking, including its customer, service, time and location. In the API, bookings are called **appointments**, so the paths and topics use that name.

A common use is reacting to a booking webhook. The webhook body only carries the booking id, so fetch the booking to get the customer and the details:

```json
{
  "topic": "appointment.created",
  "shop_id": "YOUR_SESAMI_ADMIN_SHOP_ID",
  "created_at": "2026-10-22T06:10:22.345Z",
  "hash": "9f2c4e6a8b0d1f3e5a7c9b2d4f6e8a0c1b3d5e7f",
  "data": { "id": "64f1c2a9e4b0a7d3c8e91b25", "type": "appointment" }
}
```

## Retrieve a booking

```
GET https://api.sesami.co/api/v1/{shop}/appointments/{id}?timezone=UTC
```

| Parameter  | In    | Description |
|------------|-------|-------------|
| `shop`     | path  | Your [Sesami (Admin) Shop ID](./1-intro.md#sesami-admin-shop-id). |
| `id`       | path  | The booking id, for example `data.id` from a webhook. |
| `timezone` | query | IANA timezone for `datetime`, `rangeStart` and `rangeEnd`, for example `UTC` or `America/New_York`. Pass `UTC` and convert on your side to avoid ambiguity. |

Send the usual [request headers](./3-make-a-request.md). The `Shop:Read` permission is enough.

```curl
curl --request GET \
--header 'x-api-key: YOUR_TOKEN' \
--header 'x-client-id: YOUR_CLIENT_ID' \
--header 'x-shop-id: YOUR_SESAMI_ADMIN_SHOP_ID' \
--url 'https://api.sesami.co/api/v1/YOUR_SESAMI_ADMIN_SHOP_ID/appointments/64f1c2a9e4b0a7d3c8e91b25?timezone=UTC'
```

### Response

```json
{
  "id": "64f1c2a9e4b0a7d3c8e91b25",
  "shopId": "64a0f3d2c1b8e9a7d6f5e4c3",
  "status": "pending",
  "customer": {
    "id": "64f1c2aae4b0a7d3c8e91b30",
    "firstName": "Jane",
    "lastName": "Doe",
    "name": "Jane Doe",
    "email": "jane@example.com",
    "phone": null
  },
  "datetime": "2026-10-24 14:44:00",
  "rangeStart": "2026-10-24 14:44:00",
  "rangeEnd": "2026-10-24 15:44:00",
  "customerTimezone": "America/New_York",
  "service": "64b2e7f1a9c3d5e8f0a1b2c4",
  "variantTitle": "1 hour",
  "locationId": "64c3d8e2b0a4f6c9e1b2d3a5",
  "resources": ["64d4e9f3c1b5a7d0f2c3e4b6"],
  "quantity": 1,
  "price": 100,
  "currency": "USD",
  "orderId": null,
  "orderName": null,
  "customerManagementLink": null,
  "lineItemProperties": [],
  "events": [],
  "notes": [],
  "createdAt": "2026-10-22T06:10:21.214Z",
  "updatedAt": "2026-10-22T06:10:21.214Z"
}
```

| Field | Description |
|-------|-------------|
| `status` | Booking status, for example `pending`. |
| `customer` | The customer who holds the booking. `email` is how most marketing tools match a profile. |
| `datetime`, `rangeStart`, `rangeEnd` | Start and end as `YYYY-MM-DD HH:mm:ss` in the `timezone` you requested. There is no offset in the string. |
| `customerTimezone` | The customer's timezone when they booked. |
| `service` | Service id. See [Service, location and resource names](#service-location-and-resource-names). |
| `variantTitle` | The option the customer chose, for example a duration. |
| `locationId` | Location id. |
| `resources` | Ids of the team members, rooms or equipment assigned. |
| `price`, `currency` | Booking price and its currency. |
| `orderId`, `orderName` | The Shopify order, when the booking has one. |
| `customerManagementLink` | Link for the customer to manage the booking, when available. |
| `lineItemProperties` | Answers to the booking form, as `{ id, name, value }`. |

A booking that doesn't exist returns `404`:

```json
[{ "property": "Appointment", "constraints": [{ "name": "not_found" }] }]
```

## Service, location and resource names

A booking references its service, location and resources by id. Fetch them for display names. They change rarely, so cache them.

| Request | Name field |
|---------|-----------|
| `GET /api/v1/{shop}/services/{id}` | `title` |
| `GET /api/v1/{shop}/locations/{id}` | `name`, plus `timezone` and `businessAddress` |
| `GET /api/v1/{shop}/resources/{id}` | `name` |

The location's `timezone` is the one to use when showing the booking time to the customer.

## List bookings

```
GET https://api.sesami.co/api/v1/{shop}/appointments?timezone=UTC
```

Returns `{ "data": [...] }` with the same booking shape. See the [REST reference](https://api.sesami.co/swagger) for filters and paging.
