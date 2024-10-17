---
sidebar_position: 2
---

# AdminClientAppLoaderMain
This class will be used in the `ADMIN_APP_LOADER_MAIN` target.

### Methods

#### showNotification()
This method can show a notification in the Admin Portal.

```ts
public showNotification = (message: string, type: NotificationType) => void

// example
sesami.showNotification('Form updated', NotificationType.SUCCESS)
```

#### navBack()
The app can fire an event in the Admin to navigate to the previews page(installed apps list).
```ts
public navBack: () => void

// example
sesami.navBack()
```
