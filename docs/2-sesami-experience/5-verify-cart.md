---
sidebar_position: 4
---

# Verify Cart

Appointments in the cart might become unavailable while a customer is still browsing, you can use the verify endpoint to constantly check if the selected slot is still available and prevent double booking.

You need to send the cart data via `POST` to the endpoint `https://app.sesami.co/availabilities/verify-cart`.

#### Headers
Include the following headers:
  - 'Content-Type': 'application/json'
  - 'Accept': 'application/json',
  - 'x-sesami-origin': https://`STORE`.myshopify.com

#### Body
Include as the POST body the response from calling [**GET /cart.js**](https://shopify.dev/api/ajax/reference/cart#get-cart-js)

#### Response
You will get an object with two arrays: `allowed`, `rejected`.
- allowed: contains all the elements that  are currently available.
- rejected: contains all the elements that  are not currently available.

## Example
This code demonstrates how to use Sesami verify-cart. 

```ts
async fetchCart = () => {

  try{
  
    // get cart data:
    const response = await fetch('/cart.js')
    if(!response.ok){
      throw new Error(response.status)
    }
    const cart = await response.json()

    // verify cart data:
    if(cart.item_count){
      
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': `application/json`, 
          'x-sesami-origin': (window.Shopify && window.Shopify.shop && `https://${window.Shopify.shop}`) || (window.location && window.location.origin)
        },
        body: JSON.stringify(cart)
      }

      const response = await fetch('https://app.sesami.co/availabilities/verify-cart', config)
      
      if(response.status === 200){
        const responseJson = await response.json()
        console.log(responseJson)
      }else{
        console.error('error:', response.status)
      }

    }

  }
  catch(error){
    console.error('error:', error)
  }

}

fetchCart()
```