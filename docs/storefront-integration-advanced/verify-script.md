---
sidebar_position: 4
---

# Verify cart

Appointments in cart might become unavailable while a customer is still browsing, you can use the verify endpoint to constantly check if the selected slot is still available and prevent double booking.

You need to send the cart data via `POST` to the endpoint `https://app.sesami.co/availabilities/verify-cart`.

#### Headers
Include the following headers:
  - 'Content-Type': 'application/json'
  - 'Accept': 'application/json',
  - 'x-sesami-origin':https://`STORE`.myshopify.com


#### Body
Include as the POST body the response from calling [**GET /cart.js**](https://shopify.dev/api/ajax/reference/cart#get-cart-js)


#### Response
As a response you will get an object with two arrays: `allowed`, `rejected`.
- allowed: contains all the elements that  are currently available.
- rejected: contains all the elements that  are not currently available.




## Example
This is code demonstrates how to use Sesami verify-cart. 


```js
async function  fetchCart() {

  try{
      const response = await fetch("/cart.js")
      if(!response.ok){
          throw new Error(response.status)
      }
  
      const cart = await response.json()

      if(cart.item_count){
        const verifyConfig = 
         {
           method: 'POST',
           headers: {
                      'Content-Type': 'application/json',
                      'Accept': `application/json`, 
                      'x-sesami-origin': (window.Shopify && window.Shopify.shop && 'https://'+window.Shopify.shop) || (window.location && window.location.origin) 
                  }
         };

          verifyConfig.body = JSON.stringify(cart)
          const response = await fetch("https://app.sesami.co/availabilities/verify-cart",verifyConfig);
           if(response.status !== 200){
              console.log("error")    
          }else{
              const responseJson = await response.json()              
              console.log(responseJson)   
          }

      }
    

    }
    catch(err){
      console.log("err:",err)
  } 

}
      
              
(async() => {
  
  await fetchCart()  
  
})()

```
