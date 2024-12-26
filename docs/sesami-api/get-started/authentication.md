# Getting Your Personal Access Token

To use the Sesami API, you first need to have a Personal Access Token (PAT). If you don't already have one, follow these steps:

### Get PAT via Sesami Admin Portal
1. Login to [Sesami Admin portal](https://admin.sesami.co/login).
2. Find the **Tokens** section in the left-side panel.
3. Click on **Create Token** button.
4. Enter a **name** and select the **required permissions**.
5. Click **Create**.
6. You will now see your **Client ID** and **Personal Access Token**.

:::important

**Please keep them in a secure place**.

:::


### Get PAT via API
1. Use the Login endpoint and login to your account.
```curl
curl -X POST 'https://api.sesami.com/api/v1/users/login/password' \
-H 'Content-Type: application/json' \
-d '{
  "email": "user@example.com",
  "password": "mypassword"
}'
```

The login response is like :
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

2. Use the `acces_token` and call the create PAT API. 
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
The response schema is:
```typescript
{
   token: "YOUR_TOKEN"
   clientId: "YOUR_CLIENT_ID";
   expireAt: "NEVER";
   name: "YOUR_TOKEN_NAME";
 }
```

You can test it with our [Swagger](https://api.sesami.co/swagger).

:::important

Each **PAT** is uniquely associated with a specific **shop**. This means that the key grants access only to the resources and data for that particular shop, ensuring secure and isolated access.

:::


:::note

As of now, **Personal Access Token** are not automatically generated through the developer portal. To obtain your PAT, please contact our Support Team. They will assist you in generating and securing your PAT, ensuring you have everything you need to start integrating with our platform.

:::

Congratulation! You create your Personal Access Token. Now It's time to [make a request](make-request.md).




