---
sidebar_position: 3
---

# ExperienceClientInstantBookingConfirmation
This class will be used in the `EXPERIENCE__INSTANT_BOOKING_CONFIRMATION` target.
This target will be rendered after the instant booking process is finished as expected.

### Attributes

#### appointmentId
The generated appointment id after instant booking.

```ts
public getAppointmentId: () => string
```


### Methods

#### onFinish()
After instant booking, Experience will send the appointment ID (alongside other shared variables) to the app and fire an event to ask the app to finish the booking experience.

```ts
public onFinish: (callback: () => void) => void

// example
sesami.onFinish(() => {
  sendAppointmentIdToTheAppBackend()
})
```

#### acceptDone() / rejectDone()
Accept or reject finishing the instant booking process.

```ts
public acceptFinish: () => void
public rejectFinish: () => void

// example
sesami.onDone(() => {
  const response = await sendAppointmentIdToTheAppBackend()
  if(response.state === 200){
    sesami.acceptDone()
  }else{
    sesami.rejectDone()
  }
})
```
