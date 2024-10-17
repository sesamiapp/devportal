---
sidebar_position: 1
---

# Intro
These are classes that the app developers can use to interact with Admin Portal.

They have some common attributes and methods:

### Attributes

#### ShopId
The current shop inside the Admin Portal.
```ts
public getShopId: () => string
```

#### locale
The Admin Portal's current locale.
```ts
public getLocale: () => string
```

### Methods

#### getToken()
This will be used to get the authentication token before each API call. The app message will check the token and if it is expired, it will refresh it itself and returns a valid token.
```ts
public getToken: () => Promise<string | null>

// example
const token = await sesami.getToken()
```

