# Getting Your Personal Access Token

To use the Sesami API, you first need to have a Personal Access Token (PAT). If you don't already have one, follow these steps:

### Get PAT via Admin Portal
1. Login to your store. It could be a real store or just a  development store.
2. Open the setting.
3. In the `Setting`, open the `Access Token`
4. Choose a name, required permissions and expiration date.
5. Click on `Generate Personal Access Token`.
6. Now, You can see your **Client ID** and **Personal Access Token**. **Please keep them in a secure place**.


### Get PAT via API
1. Use the Login endpoint and login to your account.(This is a **POST** request.)
```curl
curl --location --globoff 'https://api.sesami.co/api/v1/users/login/password' \
--header 'Content-Type: application/json' \
--data '{
    "password": "YOUR_PASSWORD",
    "email": "YOUR_EMAIL"
}'
```
The response contains an `access_token`.
2. Use the `acces_token` and call the create PAT API. (This is a **POST** request.)
```curl
curl --location --globoff 'https://api.sesami.co/api/v1/auth/access-token' \
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
The response contains your PAT.

You can test it with our [Swagger](https://api.sesami.co/swagger).

:::important

Each **PAT** is uniquely associated with a specific **shop**. This means that the key grants access only to the resources and data for that particular shop, ensuring secure and isolated access.

:::


:::note

As of now, **Personal Access Token** are not automatically generated through the developer portal. To obtain your PAT, please contact our Support Team. They will assist you in generating and securing your PAT, ensuring you have everything you need to start integrating with our platform.

:::

Congratulation! You create your Personal Access Token. Now It's time to [make a request](make-request.md).




