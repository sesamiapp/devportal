---
sidebar_position: 3
---

# Pagination
In this document we'll talk about the pagination logic of our system.

All the resources of portal follows the same pagination rule. For understanding the pagination, let’s look at the response first.

```typescript
class ResourceResponse{}

class PaginationResourceItemResponse extends ResourceResponse {
  cursor:string;
}

class PaginationResourceResponse {
  data: PaginationResourceItemResponse[];
  remainingItems: number;
  totalItems: number;
  nextCursor:string;
  previousCursor:string;
}

```

the overall schema of pagination is like this. Let’s go over it. ResourceResponse is the representation of the response model we have in each method. E.g. ReadPlanResponse. PaginationResourceItemResponse add a field called `cursor` to the ResourceResponse class. you can use this cursor to inform the back-end application what was the last object that you see and where should the next page start from. Let's say that we have 100 items in the database and user request 10 items. The app will generate the cursor for each of these 10 items based on some of their attributes (this attributes might differ for each model). when the 10th item cursor is given back to the app, it will assume that the item which correspond to this cursor was the last item user saw. based on this information it will retrieve the next page. data field in PaginationResourceResponse is the actual data that is requested. totalItems is the number of total items that matches the conditions set by users. we will talk about remainingItems later.

now let’s take a look at different parameters each Pagination API or query take.

- `Limit`: this parameter specifies the maximum length of the page it is a number greater than 0 and less than 101

- `Before` and `After`: The cursor should be used in this field. As we talked before about, the cursor specifies the information about the last seen item, But cursor alone doesn't specify the direction we want to move. If we want to see the items that are placed after the item corresponding to the selected cursor, then we should use `After`. If we want to see the items that are placed before the item corresponding to the selected cursor, the we should use `Before`. 

- `SearchTerm`: each model has some fields that we want to do like query on them. using this field we will find the items that has the searchTerm inside one of these specified fields on data.

- `Status`: This field is a boolean and will determine has 3 possible values. if this fields is not used at all nothing will happen. if this field is set true, then the result only contains items which are active. And if this fields is set to false, then the result only contains items which are not active.

- `Ids`: this is an array of ids. using this fields will perform pagination on top of the ids user has specified.



Each pagination end point has at least 3 of these parameters. It all depends on the end point and the model.