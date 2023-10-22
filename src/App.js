import "./App.css";
import React, { useState,useEffect } from "react";
import Navbar from "./Components/Navbar";

import Products from "./Components/Products";

import { ChakraProvider , Box,Center } from "@chakra-ui/react";

import Cart from './Components/Cart';

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./Components/Login";
//import Home from "./Components/Home";


export default function App() {



  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  // const navigate =useNavigate()
  const [user, setUser] = useState();

  console.log("isAuth -->", isAuth, auth?.currentUser?.displayName);

  const signuserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/";
      //navigate('/login')
    });
  };

  useEffect(() => {
    // when auth user with firebase changed see this changes
    // eslint-disable-next-line
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //console.log('user data-->' , user)
      // data from firebase/auth set in user in useState
      setUser(user);
    });
  }, []);





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
      <Router>
      <ToastContainer />
      <Box bg="#ddfff7"  columns={[1,2,2,3]}>

        <Navbar 
        cart={cart}
        navigateTo={navigateTo}
        signuserOut={signuserOut}
        Link={Link}
        isAuth={isAuth}
        user={user}
        setUser={setUser}
        page={page}
        
        />

 

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
                addToCart={addToCart}
                
              />
              
            )}

         


          <Routes>
           
            <Route
              path="/Login"
              element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />}
            />
          </Routes>
       

<Center pb='5' fontSize={20}>
© 2023 Zaher Zeinni
</Center>

      </Box>
      </Router>
    </ChakraProvider>
  );
          }
