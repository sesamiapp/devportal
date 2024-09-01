# OAuth Flow

Your app should use sesami oauth flow to get an API key.To obtain this, you should add your **domain** and **redirect
URIs**.To do this:

1. Login to your sesami account
2. Go to `Developers` section.
3. Find your [registered](register-application.md) app and open it.
4. Insert your domain and redirect URIs. you should separate them with `,` for a list of URIs.

## Sesami OAuth workflow

The installation flow follows the OAuth2.0 flow. In this flow, Sesami is the **Authorization Server(Protected Resource)**, the app is the **Client** and the merchant is the **Resource Owner**.

1. The installation process is started by invoking the installation endpoint. Sesami receives the **shop ID and app ID**
   as parameters and redirects them to the app domain address.
```typescript
https://app-domain?shop_id=string&timestamp=string&hmac=string
```
2. The app should authenticate the shop ID and verify the required process.
3. The app sends a request(redirect) to the Sesami with redirect URIs and required scopes.
4. Sesami checks the redirect URIs and validates them. Then it redirects to the Consent page.
5. On the Consent page, the user can accept the required permissions. Then the front end invokes the grant-permission
   endpoints.
6. Sesami updates the state of the process. Also, it uses the redirect URIs and sends **a code to the app**. In this step,
    Sesami uses the [client secret to sign the request](#how-to-sign-requests).
7. The app now has a **short-lived code** and should use it to get an API key.
8. The app can send a request to ensure the API key works as expected.

9. Congratulation, You get your API key.



## Run OAuth flow for the app

### step 1: Authenticate the request
The app should authenticate request.The Sesami send request with a `hmac` property and app should use it to authenticate the requests.

The `hmac` is a string that signs the request. The app should sign the request parameters with its client secret and
check with hmac.
The app should create an object with request's parameters and sort them alphabetically. 
for Example:
```typescript
https://domian?code=string&shop_id=string&timestamp=string&hmac=string
```
the app should create this object:
``` typescript
{
  code: string,
  shop_id: string
  timestamp: string
}
```

then encrypt it with the `sha256` algorithm and its `client_secret`. The app should check the result with `hmac` to verify
the request.

### Step 2: Send an authorization request

To start the oauth flow, the app send a request to authorization endpoint.The endpoint is:

```HTTPS
GET /api/v1/oauth/authorization?client_id=string&scopes[]=string&redirect_uri=string&shop_id=string
```

:::note

1. The `shop_id` could be your sesami shop id or your shop URL.
2. `scopes` are required permissions. you should send them like ```scopes[]=Shop:Read&scopes[]=Shop:Write```.

:::

This endpoint redirects the user to the [Sesami Consent Page](https://admin.sesami.dev/app-permissions).
Now User should accept your permissions.Sesami processes your request and sends an authorization code on your provided
redirect URIs:

```typescript
https://app.domain.com/app_callback_uri?code=string&shop_id=string&timestamp&hmac=string
```



### Step 3: Request an API Key

Now you have an authorization key. You should use it with your `client_id` and `client_secret` to get your API key.

:::note

The app must get an API key for each shop.

:::

To get an API key, you can use this endpoint:

``` typescript
POST /api/v1/oauth/access-token
```

with this body:

``` typescript
{
 code: string //your authorization code
 shop_id: string
 client_id: string
 client_secret: string
}
```





