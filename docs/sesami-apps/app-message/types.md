---
sidebar_position: 3
---

# Types
These are the special types in the App Message library.

### App Target
```ts
enum AppTarget {
    ADMIN_APP_LOADER_MAIN = 'ADMIN_APP_LOADER_MAIN',
    ADMIN_APPOINTMENT_DETAILS_INFO = 'ADMIN_APP_LOADER_MAIN',
    EXPERIENCE_INSTANT_BOOKING_FORM = 'ADMIN_APP_LOADER_MAIN',
    EXPERIENCE_INSTANT_BOOKING_FINAL = 'ADMIN_APP_LOADER_MAIN'
}
```

### Appointment
```ts
type Appointment = {
    
    id: string
    datetime: string
    
    serviceId: string | null
    variantId: string
    duration: number
    quantity: number

    resources: Resource[]

    orderId: string
    orderName: string | null
    price: number
    currency: string

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
