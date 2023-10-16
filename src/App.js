import "./index.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";

import { ChakraProvider ,Center, Box, SimpleGrid} from "@chakra-ui/react";
import { Data } from "./Components/Data";
import Cards from "./Components/Cards";
import Cart from './Components/Cart';

export default function App() {

  const [page,setPage]= useState("Data");
  const [cart,setCart]= useState([]);

  // (Data) is changeable

  const addToCart = (Data) => {
    let newCart = [...cart];
  
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
      <Box bg="#ddfff7" height={"1400px"} columns={[1,2,2,3]}>
        <Navbar cart={cart} />
        <Center className="text-4xl font-bold mt-1">
        Featured Products
        </Center>
        <SimpleGrid columns={[1, 1, 2, 3]} spacing={25} mb="20" >
          {Data.map((Data) => (
            <Cards 
            Title={Data.Title}
            Price={Data.Price}
            IMG1={Data.IMG1}
            addToCart={addToCart}
            />
          ))}
        </SimpleGrid>
        <Center>
        © 2023 Zaher Zeinni
        </Center>
      </Box>
    </ChakraProvider>
  );
          }
