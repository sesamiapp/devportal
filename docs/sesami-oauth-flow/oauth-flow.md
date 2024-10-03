# Overview
The installation flow follows the OAuth 2.0 flow. In this flow, Sesami acts as the Authorization Server (Protected Resource), the app is the Client, and the merchant is the Resource Owner. This document outlines how to execute the OAuth flow from the app's perspective.

Before proceeding, ensure that you have registered your app. See [Register an App](../sesami-api/register-application.md) for more details.

### Authenticate the requests
The app must authenticate incoming requests. Sesami sends requests with an `hmac` property, which the app should use to verify the authenticity of the requests.

The `hmac` is a string that signs the requests. The app must sign the request parameters using its `client_secret` and validate the result against the `hmac`.

Here is the process:

1. Create an object with the request's parameters, excluding the hmac parameter.
2. Sort the object's keys alphabetically.
For example, consider the following request:

```typescript
https://your-app-domian?code=string&shop_id=string&timestamp=string&hmac=string
```
The app should generate this object:
``` typescript
{
  code: string,
  shop_id: string
  timestamp: number
}
```
:::note
Timestamps are often received as strings in requests (e.g., in query parameters or bodies). Make sure to convert them to numbers before processing. For example, in an Express application:
```typescript
    const timestamp = Number(req.query.timestamp); // or req.body.timestamp
```
:::
Then, the app should encrypt this object using the `sha256` algorithm along with its `client_secret` and compare the result with the provided `hmac` to verify the request.

### Step 1 : Send an authorization request

To initiate the OAuth flow, the app sends a request to the authorization endpoint. The endpoint is:

```HTTPS
https://api.sesami.co/api/v1/oauth/authorization?client_id=string&scopes[]=string&redirect_uri=string&shop_id=string
```

:::info

`scopes`: These are the required permissions. They should be sent in the format: `scopes[]=Shop:Read&scopes[]=Shop:Write`.
The access levels can be one of the following: `Manage | Read | Write`. For more details, see: [Sesami Fine-Grained Permissions](https://sesami.co).
`
:::

This endpoint redirects the user to the Sesami consent page, where the user decides whether to accept or deny your requested permissions. If the user accepts, Sesami sends an authorization code to your specified redirect URI.
The callback URL format is:
```typescript
https://your-app-domain/your-callback-url?code=string&shop_id=string&timestamp&hmac=string
```


### Step 2 : Request an API Key

After receiving the authorization code, you can use it along with your `client_id` and `client_secret` to obtain an offline token (API key).

:::note

The app must obtain an offline token for each shop.

:::

To request the offline token, send a request to the following endpoint:

``` typescript
https://api.sesami.co/api/v1/oauth/access-token
```

With the following body:

``` typescript
{
 code: string //your authorization code
 shop_id: string
 client_id: string
 client_secret: string
}
```





