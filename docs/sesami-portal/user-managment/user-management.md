---
sidebar_position: 1
---

# Management & Permissions

Currently we only create accounts based on invitations, store owners can invite their staff to access their shop on Sesami portal.
When A shop is created in shopify, a user with full access to the shop is also Created. This user has the permission to create user and assign permissions to them. we take a look at how we can create and update user and set permissions for the created user. As the permission assignment is a part of creating user and updating user, We will talk about the permissions first.
**Please Note that you need to be logged in for using all of these methods.**

## Permission

Each permission is consisted of three parts.

1. Resource Type
2. Identifier
3. Access Level

These information are concatenated using `:`. this is the overall permissions pattern.

```string
ResourceType:Identifier:Permission
```

Here is an example

```string
TeamMember:627c17e347db22454a312346:Write
```

There are 3 access Level in this system which is shown in this enum

```typescript
enum Permission {
  Read = "Read",
  Write = "Write",
  Manage = "Manage",
}
```

and there are a total of 14 Resource in this system right now which is shown in this enum.

```typescript
enum Resource {
  Shop = "Shop",
  Settings = "Settings",
  Flow = "Flow",
  Calendar = "Calendar",
  Customer = "Customer",
  TeamMember = "TeamMember",
  Service = "Service",
  Location = "Location",
  Appointment = "Appointment",
  Plan = "Plan",
  FlowPreset = "FlowPreset",
  Feature = "Feature",
  User = "User",
}
```

and the identifier is the corresponding `id` of the resource in our database. Assigning each of these permissions (we walk talk about how you should assign permissions later) will give users follow up permissions. For example if user has `Manage` permission to a `Shop` resource, it will automatically has `Manage` access to it's `TeamMember`.

### Permission Tree

Permissions type forms a tree which you can see using one of these methods.

#### GraphQL Example

```graphql
query getPermissionTree {
  getPermissionTree {
    tree
  }
}
```

#### REST Example

```curl
curl --request GET \
  --url http://localhost:9000/permissions \
  --header 'Authorization: Bearer someToken' \
  --header 'accept: application/json'
```

##### Expected Output

Here you can see a snippet of the mentioned tree

```json
{
  "tree": {
    "Shop": {
      "Manage": [
        ["Settings", "Manage"],
        ["Flow", "Manage"],
        ["Calendar", "Manage"],
        ["TeamMember", "Manage"],
        ["Service", "Manage"],
        ["Location", "Manage"],
        ["Appointment", "Manage"],
        ["Customer", "Manage"],
        ["User", "Read"]
      ]
    }
  }
}
```

In the second level of this json you see `Shop` and in the third level of this json you see `Manage`and in the fourth level of this json you see a an array of 2 which is an representation of the indirect permissions user will have if they had `Manage` access to a `Shop`. The first item of this 2-items-array is the resource type and the second item is the access level.

##### Possible Error

if you are logged in and have `Manage` permission to a `Shop` you shouldn't face any error.

## Create User

when we want to create a user, we must determine the permissions that we want to assign to this user and the shopId for which we want to assign permissions to the user for. As you can see in the following examples that permissions is an string and should follow the general permissions pattern.

#### GraphQL Example

```graphql
mutation createUser {
  createUser(
    request: {
      email: "email@email.com"
      firstName: "firstName"
      lastName: "lastName"
      shopId: "someShopId"
      permissions: ["TeamMember:SomeTeamMemberId:Read"]
    }
  ) {
    id
    email
    firstName
    lastName
  }
}
```

#### REST Example

```curl
curl --request POST \
  --url https://api.sesami.dev/users \
  --header 'Authorization: Bearer shopManageToken' \
  --header 'Content-Type: application/json' \
  --data '{
  "email":"email@email.com",
	"firstName":"name",
	"lastName":"name",
  "shopId":"someShopId",
  "permissions" ["TeamMember:someTeamMemberId:Read"]
}'
```

### Expected Output

You can check the swagger or the GraphQL schema to see the output of these methods

### Possible Errors

Either of this methods might raise one of these errors

1. when user doesn't send any token in the authorization header or the token that was sent is not valid. the status code of this error would be **401**
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
2. when you don't have enough accessibility to create user or give permissions to user for the requested shop or the permissions that is sent to the server aren't related to the shopId that user sent. status code of this error would be. status code of this error would be **403**
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
3. when the Email has already been taken. status code of this error would be **400**
   ```json
   [
     {
       "property": "email",
       "constraints": [
         {
           "name": "is_unique"
         }
       ]
     }
   ]
   ```
4. when one of these 3 fields are empty. the status code of this error would be **400**
   ```json
   [
     {
       "property": "name of the field which is empty. e.g email",
       "constraints": [
         {
           "name": "is_not_empty"
         }
       ]
     }
   ]
   ```
5. when email is not valid. the status code of this error would be **400**
   ```json
   [
     {
       "property": "email",
       "constraints": [
         {
           "name": "is_email"
         }
       ]
     }
   ]
   ```
6. when the permissions sent to the server doesn't follow the overall permissions pattern. status code of this error would be **400**

   ```json
   [
     {
       "property": "permissions",
       "constraints": [
         {
           "name": "valid_permissions",
           "payload": "resource:identifier:permission"
         }
       ]
     }
   ]
   ```

## Find User

There are use cases which we need to see a list of users. E.g. assigning permissions to existing users. we could user these methods. Due to security Issues, we need to get the Id of shop that shop Manage is searching for. another new parameter of these methods is `haveShopAccessibility`. if this boolean is set to `true`, only users which have any access to the requested shop are showed otherwise all users are showed. In both scenarios the app would filter the user which is making the request.

**Please check either Swagger documentation or Graphql schema for complete documentation**

#### GraphQL Example

```graphql
query findUsers {
  getUsers(shop: "someShopId", limit: 10, haveShopAccessibility: false) {
    data {
      id
    }
  }
}
```

#### REST Example

```curl
curl --request GET \
  --url 'http://localhost:9000/users/search/someShopId?limit=10&haveShopAccessibility=true' \
  --header 'Authorization: Bearer someToken'
```

### Expected Output

You can check the swagger or the GraphQL schema to see the output of these methods

### Possible Errors

if user is logged in and has correct permissions, he/she shouldn't face any errors.

## Update User

Updating user like every other update in this app is partial, meaning if one of the request field is `undefined` the value of the field wouldn't be updated in the database. All the fields inside an the request is optional. These examples only update user's permissions for the specified shop
**Please Note that user's email can not be updated**

#### GraphQL Example

```graphql
mutation updateUser {
  updateUser(id: "userId", request: { shopId: "someShopId", permissions: [] }) {
    id
  }
}
```

#### REST Example

```curl
curl --request PATCH \
  --url http://localhost:9000/users/someUserId \
  --header 'Authorization: Bearer someToken' \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: Insomnia/2023.5.2' \
  --data '{
	"shopId":"someId",
	"permissions":["TeamMember:someTeamMemberId:Read"]
}'
```

### Expected Output

You can check the swagger or the GraphQL schema to see the output of these methods

### Possible Errors

All the errors which could happen in the Create User action could happen in the Update User action.

1. user with specified id is not found. the status code of this error would be **404**
   ```json
   [
     {
       "property": "ROOT",
       "constraints": [
         {
           "name": "not_found"
         }
       ]
     }
   ]
   ```

## Update My User

If user wants to update their own information, they can use one of these methods.

#### Graphql Example

```graphql
mutation {
  updateMe(request: { firstName: "someFirstName", lastName: "someLastName" }) {
    id
  }
}
```

#### REST Example

```curl
curl --request PATCH \
  --url http://localhost:9000/users/me \
  --header 'Authorization: Bearer someToken' \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: Insomnia/2023.5.2' \
  --data '{
	"firstName":"someFirstName",
  "lastName": "someLastName"
}'
```

### Expected Output

You can check the swagger or the GraphQL schema to see the output of these methods

### Possible Errors

If user is logged in, user shouldn't face any error
