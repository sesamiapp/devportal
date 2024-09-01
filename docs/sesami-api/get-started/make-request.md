# Make a Request
 Our API uses the [API key](authentication.md) to authenticate the requests.
 You can view and manage your API key in the Admin portal.

For authenticated requests, you must include your API key in the request headers. Use the following format:

```curl
x-api-key: YOUR_API_KEY
x-client-id: YOUR_CLIENT_ID
x-shop-id: YOUR_SHOP_ID
```

### REST and GraphQL
You can use our API ([GraphQL](https://api.sesami.dev/graphql) | [REST](https://api.sesami.dev/swagger)) to make your first request.

This is a request to get all of your shops with **GraphQL** :
```
curl --request POST \
--header 'content-type: application/json' \
--header 'x-api-key: YOUR_API_KEY'\
--header 'x-client-id: YOUR_CLIENT_ID'\
--header 'x-shop-id: YOUR_SHOP_ID'\
--url 'https://api.sesami.dev/graphql' \
--data '{"query":"query GetShops { getShops {data { email } } }","variables":{}}'
```
or with **REST API**

```
curl --request GET \
--header 'content-type: application/json' \
--header 'x-api-key: YOUR_API_KEY'\
--header 'x-client-id: YOUR_CLIENT_ID'\
--header 'x-shop-id: YOUR_SHOP_ID'\
--url 'https://api.sesami.dev/api/v1/shops?limit=10' \
```