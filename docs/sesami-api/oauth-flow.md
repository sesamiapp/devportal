# OAuth Flow

Your app should use sesami oauth flow to get an API key.To obtain this, you should add your domain and redirect URIs.To do this:
1. Login to your sesami account
2. Go to `Developers` section.
3. Find your app and open it.
4. Insert your domain and redirect URIs. you should separate them with `,` for a list of URIs.

## Run OAuth flow for the app
You can use the [OAtuh](https://api.sesami.dev/swagger) to start an oauth flow.

### Step 1: Send an authorization request
To start the oauth flow, the app send a request to authorization endpoint.The endpoint is:
```HTTPS
GET /oauth/v1/authorization?client_id=string&scopes[]=string&redirect_uri=string&shop_id=string
```
**Note**
1. The `shop_id` could be your sesami shop id or your shop URL.
2. `scopes` are required permissions. you should send them like ```scopes[]=Shop:Read&scopes[]=Shop:Write```.For more details see [Sesami Permissions](https://api.sesami.dev)

This endpoint redirects the user to the [Sesami Consent Page](https://admin.sesami.dev/app-permissions).
Now you should accept the permissions.Sesami process your request and send an authorization code on your provided redirect uris:

```https://app.domain.com/provided_redirect_uri?code=string&shop_id=string&hmac=string```

The **hmac** is a string that signs the request. The app should sign the request parameters with its client secret and check with hmac.
The app should create this structure first:
``` typescript
{
  code: string,
  shop_id: string
}
```
then encrypt it with the `sha-256` algorithm and its `client_secret`. app should check the result with hmac to verify the request.

### Step2: Request an API Key
Now you have an authorization key. You should use it with your `client_id` and `client_secret` to get your API key.
The point that should be considered is **The app must get an API key for each shop**.

To get an API key, you can use this endpoint:

```POST /oauth/v1/token```

and send this body:
``` typescript
{
 code: string //your authorization code
 shop_id: string
 client_id: string
 client_secret: string
}
```




