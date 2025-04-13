---
sidebar_position: 4
---

# ExperienceConfirmationPage
This class will be used in the `EXPERIENCE_CONFIRMATION_PAGE` target.
This target will be rendered after the instant booking process is finished as expected.

### Attributes

#### Cart
The customers cart items.

```ts
public getCart: () => CartItem[]
```

#### Booking ID
The generated booking id after the booking process.

```ts
public getBookingId: () => string
```


### Methods

#### onDone()
When user click on Done button in the confirmation page, and event will fire to the extension to ask for closing the modal.

```ts
public onFinish: (callback: () => void) => void

// example
Sesami.onFinish(() => {
  sendAppointmentIdToTheAppBackend()
})
```

#### acceptDone() / rejectDone()
After onDone event fired, the app can accept or reject the event.

```ts
public acceptFinish: () => void
public rejectFinish: () => void

// example
Sesami.onDone(() => {
  const response = await sendAppointmentIdToTheAppBackend()
  if(response.state === 200){
    Sesami.acceptDone()
  }else{
    Sesami.rejectDone()
  }
})
```
