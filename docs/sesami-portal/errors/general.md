---
sidebar_position: 3
---

# General Errors

Let's talk about errors that all request might face.

1. the first error would be internal server error. it happens when something unexpected and unhandled happen in a request flow. the status code of this error is **500**
   ```json
   [
     {
       "constraints": [
         {
           "name": "internal_server_error"
         }
       ],
       "property": "ROOT"
     }
   ]
   ```
2. if the user is not logged in or the access token is not valid, request will face this error. the status code of this error is **401**
   ```json
   [
     {
       "property": "ROOT",
       "constraints": [
         {
           "name": "unauthorized"
         }
       ]
     }
   ]
   ```
3. if the user is logged in, but the action that user is requesting doesn't align with his/her permissions. the status code of this error is **403**
   ```json
   [
     {
       "property": "ROOT",
       "constraints": [
         {
           "name": "forbidden"
         }
       ]
     }
   ]
   ```
4. input validation error. the status code of this error is **400**. here is a list of constraints which you will see facing this error. <br></br>
   **This list only consists of the initial validation check constraints, system might return other errors with 400 as status code which is specified for each method**

   ```list
   'is_not_empty'
   'is_number'
   'is_string'
   'is_boolean'
   'is_email'
   'is_date'
   'is_object'
   'is_mongo_id'
   'is_array'
   'is_url'
   'is_time_zone'
   'invalid_id'	
   'max'
   'min'
   ```
**Note**: The system might return an error with a 400 status code and **invalid_id** in mutation APIs. This indicates that the client cannot access a specific resource.
