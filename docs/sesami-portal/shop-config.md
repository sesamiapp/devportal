---
sidebar_position: 3
---

# Shop Config

each shop has a list of config which can we retrieved using these methods. these methods can be called in three ways.

1. user is not Logged in and doesn't know any shop Id, so user wants a general config to load the application

   #### GraphQL Example

   ```graphql
   query getConfig {
     getConfig {
       setting {
         locale
       }
     }
   }
   ```

   #### REST Example

   ```curl
   curl --request GET \
   --url https://api.sesami.dev/shops/config \
   --header 'Authorization: Bearer undefined'
   ```

2. user is logged in, yet doesn't know any shop id, so back end will send the information of the first shop that is accessible to user. the request would be the same as before but request should have the access token in the Authorization header.

3. user is logged in and know the shop id they want to see.

   ```graphql
   query getConfig {
     getConfig(id: "someShopID") {
       setting {
         locale
       }
     }
   }
   ```

   #### REST Example

   ```curl
   curl --request GET \
   --url 'https://api.sesami.dev/shops/config?id=someShopID' \
   --header 'Authorization: Bearer SOMETOKEN'
   ```

### Expected Output

Please check either swagger document or the GraphQL playground for getting the complete schema of the response

### Possible Errors

1. the shop id that has been sent, is not a valid Id
   ```json
   [
     {
       "property": "id",
       "constraints": [
         {
           "name": "is_mongo_id"
         }
       ]
     }
   ]
   ```
2. shop with the specified id was not found
   ```json
   [
     {
       "property": "shop",
       "constraints": [
         {
           "name": "not_found"
         }
       ]
     }
   ]
   ```
