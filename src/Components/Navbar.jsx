import { React } from 'react';
import { Box } from '@chakra-ui/react';
import {ShoppingCartOutlined,LoginOutlined} from '@ant-design/icons'
import { toast } from 'react-toastify';



const Navbar = ({cart,navigateTo,signuserOut,Link,isAuth,user,page}) => {

  const notify = () => toast("User must Login first ! please Scroll Down")


  return (
    
      <div>




      <Box className='flex justify-between items-center p-4 z-[100] w-full bg-[#081621] h-[10vh]'>
     
     
     <button  onClick={() => navigateTo("products")}>
      <Box color={'white'} ml={5}>
      
     <img src="home.png" alt="img" width={40} height={40} />
     
      </Box>
      </button>
      


      <Box alignItems={'flex-end'} maxW={'auto'} justifyItems={"flex-end"}>
      <Box color={'white'} className='justify-between space-x-8'>
         
      <span className="absolute top-2 right-40 bg-red-600 rounded-2xl p-0.5">
            {cart.length}
            </span>
             
            
            {isAuth ? (

            <button  onClick={() => navigateTo("cart")}>
            <ShoppingCartOutlined />Cart  
            </button>
            ) 
            : 
            (
            <button onClick={notify} >
            <ShoppingCartOutlined />Cart
            </button>
            )
            }
          
  
 

  {!isAuth ? (

    
    <Link 
    
    
    id="Login" to="/Login" className="  text-base"
    
    
    >
  
     <LoginOutlined /> Log In
    </Link>
  ) : (
    <>

      <button id="Logout" onClick={signuserOut}>
        
        Log Out
      </button>
      <div className=" ml-12 text-blue-600 text-xl font-semibold">
        {user?.displayName}
      </div>
    </>
  )}


      
      
      </Box>
      </Box>
      </Box>
  
</div>    
  );
}

export default Navbar;
