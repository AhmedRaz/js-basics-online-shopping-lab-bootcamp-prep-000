var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
/*
function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
*/

function getPrice()  {
  return Math.floor(Math.random() * 100) + 1;
}

function addToCart(item) {
 var objectItem = { itemName: item , itemPrice : getPrice()};
 console.log(`${item} has been added to your cart.`)
 return cart.push(objectItem);
}


function findItem(item)  {
  var indexLocation = null;
  var index = 0;
  
  if (cart.length === 0)  {
   console.log("Cart is empty." );
   return null;
    }
  else  {
    for(index; index < cart.length; index++)  {
      if (cart[index]['itemName'] === item) 
      {indexLocation = index;}
    }
  }
  if(indexLocation !== null)  {
    return indexLocation;
    }
  else  { 
    return null;}
 
     
}

function total()  {
  var priceTotal = 0;
  for(index = 0; index < cart.length; index++)  {
    priceTotal += cart[index]['itemPrice'];
  }
  return priceTotal;
}

function viewCart()  {
  var cartList = '';
  if(cart.length === 0)  {
    console.log("Your shopping cart is empty.");
    return "Your shopping cart is empty."
  }
  else if(cart.length > 0)  {
   cartList = "In your cart, you have ";
    var index = 0;
    while(index < cart.length)  {
    cartList = cartList + `${cart[index]['itemName']} at \$${cart[index]['itemPrice']}`;
    if(index < cart.length -1)  {
      if(cart.length -1 === 1){
        cartList = cartList + ' ';
      }
      else  {
      cartList = cartList + ', '}
    }
    if(index === cart.length -2) {
      cartList = cartList + 'and ';
    }
    ++index;
    }
    cartList = cartList + '.'
    console.log(cartList);
    return cartList;
  }
}

function removeFromCart(item)  {
  var itemIndex = findItem(item);
  if(itemIndex !== null) {
    var removed = cart.splice(itemIndex, 1);
    console.log(`${item} has been removed from the cart.`);
    }
    else  {
      console.log('That item is not in your cart.');
      return 'That item is not in your cart.';
    }
}

function placeOrder(cardNumber)  {
  if(cardNumber === undefined )  {
    console.log('Sorry, we don\'t have a credit card on file for you.');
    return 'Sorry, we don\'t have a credit card on file for you.'
  }
  else  {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`);
    cart.length = 0; //clears cart array;
    return `Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`;
  }
  
}
