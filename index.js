var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
   var itemPrice = Math.floor(Math.random() * 100)+1
   var itemName = item
   var items = {[itemName]: itemPrice}

   cart.push (items)

   console.log  (`${itemName} has been added to your cart.`)

   return cart
 }

/*
 function viewCart() {
   if (cart.length === 0){
     console.log('Your shopping cart is empty.');
     return;
   }
    var items = [];
    for(let item of cart){
      for(let name in item){
        items.push(`${name} at \$${item[name]}`);
      }
    }
   if (items.length > 1) items[items.length - 1] = "and " + items[items.length - 1];
   if (items.length > 2){
      var item_str = items.join(', ');
   } else {
     item_str = items.join(' ');
     }
       console.log("In your cart, you have " + item_str + ".");
   }
*/


function viewCart() {

  var cartItems = []
  var intro = "In your cart, you have "

  if (cart.length === 0) {
    console.log ('Your shopping cart is empty.');
  }
  else {
    for (var i = 0; i < cart.length; i++) {
      for(var name in cart[i]){
        if(cart[i].hasOwnProperty(name)){

          cartItems.push (`${name} at $${cart[i][name]}`);
                          // "apples at $2"
        } if (cart.length === 1 ){

            console.log (intro + `${cartItems[i]}.`);

        } else if (cart.length === 2 ) {

            console.log ( intro + `${cartItems[0]} and ${cartItems[1]}.`)

        } else if (cart.length >=3) {
debugger
            console.log (intro + `${cartItems.slice(0, cart.length-1)}, and ${cartItems[cart.length-1]}.`)
        }
      }
    }
  }
}


      //  var fullCart = cartItems.slice(i, cart.length-1)
      //  var lastItem = cartItems[cart.length-1]

function total() {

}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here}
}
