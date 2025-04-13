---
sidebar_position: 3
---

# Types
These are the special types in the App Message library.

### App Target
```ts
enum AppTarget {
    ADMIN_APP_LOADER = 'ADMIN_APP_LOADER',
    ADMIN_APPOINTMENT_DETAILS = 'ADMIN_APPOINTMENT_DETAILS',
    EXPERIENCE_BEFORE_CART = 'EXPERIENCE_BEFORE_CART',
    EXPERIENCE_INSTANT_BOOKING_FORM = 'EXPERIENCE_INSTANT_BOOKING_FORM',
    EXPERIENCE_CONFIRMATION_PAGE = 'EXPERIENCE_CONFIRMATION_PAGE'
}
```

### Cart Item
```ts
type CartItem = {
    serviceId: string
    variantId: string
    quantity: number
    resources: Resource[]
    timezone: string
    slot: Date
    reservationId: string | null
}
```

### Resource
```ts
type Resource = {
    id: string | null
    name: string
    image: string | null
    description: string | null
}
```

###  Notification
```ts
enum NotificationType {
    SUCCESS = 'SUCCESS',
    INFO = 'INFO',
    WARNING = 'WARNING',
    ERROR = 'ERROR'
}
```
