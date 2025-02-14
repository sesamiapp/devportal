# Make a Request
 To use our API, you can use  [Personal Access Token](authentication.md) or [Offline Token](../../sesami-apps/3-api-reference/installation-api.md).

For authenticated requests, you must include your token in the request headers. Use the following format:

```curl
x-api-key: YOUR_TOKEN
x-client-id: YOUR_CLIENT_ID
x-shop-id: YOUR_SHOP_ID
```

### GraphQL and REST
You can use our API ([GraphQL](https://api.sesami.co/graphql) | [REST](https://api.sesami.co/swagger)) to make your first request.

You can use this request to get all of your shops to test your token. 

**GraphQL** 
```
curl --request POST \
--header 'content-type: application/json' \
--header 'x-api-key: YOUR_TOKEN'\
--header 'x-client-id: YOUR_CLIENT_ID'\
--header 'x-shop-id: YOUR_SHOP_ID'\
--url 'https://api.sesami.co/graphql' \
--data '{"query":"query GetShops { getShops {data { email } } }","variables":{}}'
```
**REST API**

```
curl --request GET \
--header 'content-type: application/json' \
--header 'x-api-key: YOUR_TOKEN'\
--header 'x-client-id: YOUR_CLIENT_ID'\
--header 'x-shop-id: YOUR_SHOP_ID'\
--url 'https://api.sesami.co/api/v1/shops?limit=10' \
```

