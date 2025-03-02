# Personal Access Token

To use the Sesami API, you first need to have a Personal Access Token (PAT).

### Get PAT via Sesami Admin Portal
1. Login to [Sesami Admin portal](https://admin.sesami.co).
1. Navigate to the [**Tokens**](https://admin.sesami.co/token) section.
3. Click on **Create Token**.
4. Enter a **Name** and select the **Grant Permissions**.
5. Click **Create**.
6. You will now see your **Client ID** and **Personal Access Token**.

![Personal Access Token](/img/personal-access-token.png)

:::warning
**Please keep your personal access token in a secure place, if you lose it, it cannot be recovered.**
:::

<!-- 
### Get PAT via API

1. Use the **Login** endpoint and log in to your account:

```curl
curl -X POST 'https://api.sesami.com/api/v1/users/login/password' \
-H 'Content-Type: application/json' \
-d '{
  "email": "user@example.com",
  "password": "mypassword"
}'
```

The login response should be like this:

```typescript
{
  data: {
    loginByPassword: {
      refresh_token: string,
      access_token: string
    }
  }
}
```

2. Use the `access_token` and call the **Create PAT** API:

```curl
curl -XPOST 'https://api.sesami.co/api/v1/auth/access-token' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--data '{
    "type": "PERSONAL_ACCESS_TOKEN",
    "personalAccessTokenRequest": {
        "permissions": ["Shop:YOUR_SHOP_ID:Read"],
        "expireAt": "NEVER",
        "shop": "YOUR_SHOP_ID",
        "name": "ANY NAME",
        "user": "YOUR_USER_ID"
  },
}'
```

The response schema should be like this:

```json
{
  "token": "YOUR_TOKEN",
  "clientId": "YOUR_CLIENT_ID",
  "expireAt": "NEVER",
  "name": "YOUR_TOKEN_NAME"
}
``` -->

:::important
Each **PAT** is uniquely associated with a specific **shop**. This means that the key grants access only to the resources and data for that particular shop, ensuring secure and isolated access.
:::

:::note
As of now, **Personal Access Tokens** are not automatically generated through the developer portal. To obtain your PAT, please contact our Support Team. They will assist you in generating and securing your PAT, ensuring you have everything you need to start integrating with our platform.
:::
