import "./index.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
//import Title from "./Components/Title";

///import Products from "./Components/ProductsComp";
import Products from "./Components/Products";

import { ChakraProvider , Box,Center } from "@chakra-ui/react";

import Cart from './Components/Cart';

export default function App() {

  const [page,setPage]= useState("products");
  const [cart,setCart]= useState([]);

  // (Data) is changeable

  const addToCart = (Data) => {
    let newCart = [...cart];
    console.log("Data==>",Data)
   
  
  // step 1 find if Data in cart?
  let itemInCart = newCart.find((item)=> item.Title===Data.Title);

  if (itemInCart) {
    itemInCart.quantity++;
  }
  //if Data not in newcart array set first new data in newcart setquantity one
  else {
    itemInCart = {
      ...Data,
      quantity: 1,
    };
  //then push Data to new array
    newCart.push(itemInCart);
    setCart(newCart);
  }
  setCart(newCart);
  console.log("productData",cart);
};


const navigateTo = (pageName) => {
  setPage(pageName);
  console.log("pagename",pageName,page)
};

const changeQuantity = (Data, amount) => {
  const newCart = [...cart];
  newCart.find((item) => item.Title === Data.Title).quantity = amount;
  setCart(newCart);
  console.log("cart Change:", cart);
};

const clearFromCart = () => {
  setCart([]);
};

const removeItem = (Data) => {
  const newFilteredItems = cart.filter((item) => item !== Data);

  setCart(newFilteredItems);
};

 
  return (
    <ChakraProvider>
      <Box bg="#ddfff7"  columns={[1,2,2,3]}>

        <Navbar 
        cart={cart}
        navigateTo={navigateTo}
        />
        
        {/* <Title 
        page={page}
        /> */}

        {page === "products" ? (
              <Products 
              addToCart={addToCart}
              cart={cart}
              page={page}
              
              
              />
            ) : (
              <Cart
                cart={cart}
                changeQuantity={changeQuantity}
                clearFromCart={clearFromCart}
                removeItem={removeItem}
                page={page}
                
              />
            )}
<Center pb='5' fontSize={20}>
© 2023 Zaher Zeinni
</Center>

      </Box>
    </ChakraProvider>
  );
          }
