var cart = [];
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
  if(indexLocation !== null){
  return indexLocation;}
  else{ return "Item not found."}
 
     
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
    if(index === cart.length -1) {
      cartList = cartList + ', and ';
    }
    ++index;
    }
    cartList = cartList + '.'
    console.log(cartList);
    return cartList;
  }
}

addToCart("Peanut Butter");
addToCart("Socks");
addToCart("Iced Tea");
console.log(cart.length);
for(index = 0; index < cart.length; index++)  {
  console.log(cart[index]);}
  
console.log(`You currently have ${cart.length} items, at a total of \$${total()}.`);

addToCart("Peaches");
addToCart("Lemons");
addToCart("Glock k-47");

console.log(cart.length);
for(index = 0; index < cart.length; index++)  {
  console.log(cart[index]);}
  
console.log(`You currently have ${cart.length} items, at a total of \$${total()}.`);

  var finds = findItem("toys"); 
  console.log(finds);
  var finds1 = findItem("Iced Tea");
  console.log(finds1);
  viewCart();
  