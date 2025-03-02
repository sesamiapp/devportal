---
sidebar_position: 1
---

# Intro
These are classes that the app developers can use to interact with Admin Portal.

These classes have some common attributes and methods:

### Attributes

#### Shop ID
The current shop inside the Admin Portal.
```ts
public getShopId: () => string
```

#### Locale
The Admin Portal's current locale.
```ts
public getLocale: () => string
```

### Methods

#### getToken()
This will be used to get the authentication token before each API call. The app message will check the token and if it is expired, it will refresh itself and return a valid token.
```ts
public getToken: () => Promise<string | null>

// example
const token = await Sesami.getToken()
```

#### showNotification()
This method can show a notification in the Admin Portal.

```ts
public showNotification = (message: string, type: NotificationType) => void

// example
Sesami.showNotification('Upload completed', NotificationType.SUCCESS)
```
