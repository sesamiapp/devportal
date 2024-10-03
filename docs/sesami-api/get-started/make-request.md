# Make a Request
 Our API uses the [Personal Access Token](authentication.md) to authenticate the requests.
 You can view and manage your PAT in the Admin portal.

For authenticated requests, you must include your PAT in the request headers. Use the following format:

```curl
x-api-key: YOUR_TOKEN
x-client-id: YOUR_CLIENT_ID
x-shop-id: YOUR_SHOP_ID
```

### REST and GraphQL
You can use our API ([GraphQL](https://api.sesami.co/graphql) | [REST](https://api.sesami.co/swagger)) to make your first request.

This is a request to get all of your shops with **GraphQL** :
```
curl --request POST \
--header 'content-type: application/json' \
--header 'x-api-key: YOUR_TOKEN'\
--header 'x-client-id: YOUR_CLIENT_ID'\
--header 'x-shop-id: YOUR_SHOP_ID'\
--url 'https://api.sesami.dev/graphql' \
--data '{"query":"query GetShops { getShops {data { email } } }","variables":{}}'
```
or with **REST API**

```
curl --request GET \
--header 'content-type: application/json' \
--header 'x-api-key: YOUR_TOKEN'\
--header 'x-client-id: YOUR_CLIENT_ID'\
--header 'x-shop-id: YOUR_SHOP_ID'\
--url 'https://api.sesami.dev/api/v1/shops?limit=10' \
```