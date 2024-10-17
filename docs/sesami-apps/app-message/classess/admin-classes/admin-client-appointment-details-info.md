---
sidebar_position: 3
---

# AdminClientAppointmentDetailsInfo

This class will be used in the `ADMIN_APPOINTMENT_DETAILS_INFO` target.

### Attributes

#### appointment
The current appointment.

```ts
public getAppointment: () => Appointment
```

### Methods

#### showNotification()
This method can show a notification in the Admin Portal.

```ts
public showNotification = (message: string, type: NotificationType) => void

// example
sesami.showNotification('Oops! Something went wrong!', NotificationType.ERROR)
```
