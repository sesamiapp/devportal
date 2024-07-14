# Register an application

The first step in creating an app is the registration. You should register your app to get your credentials and use them when needed.

## Register via Sesami Admin portal
You should log in to your account first.so,
1. Go to the [Admin portal panel](https://admin.sesami.co/dev).
2. Login with your username and password.
3. Go to the Developer section.
4. Click on `Register a new app`.

The app name is only required field for registering an app. Each app should have a unique app name.
you get your `client ID` and `client Secret` by clicking on `Register` button.

## Register via API
You should lon in to your account.

1. Use Login API and get an `access_token` with your username and password.
2. Use Register API([REST](https://api.sesami.dev/swagger) | [GraphQL](https://api.sesami.dev/graphql)) and register your app.

