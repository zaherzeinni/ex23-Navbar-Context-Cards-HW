import React from 'react';
import { Card } from 'antd';
import { HStack,Container,Center,Box,Button} from "@chakra-ui/react"
//////update 21-10-2023
const App = ({addToCart,product}) => (
  <Center  >
{/* <Box 
mt={-5}
_hover={{transform: 'translatey(-2%)'  }}
 transition="0.5s all"> */}

  <Card 
 
    style={{
      width: "400px",
      height:"150px",
      marginTop:100,
      marginBottom:110,
      marginLeft:50,
      textAlign:"start",
      objectFit:"cover"}} 
      cover={<img alt="imge" src={product.IMG1}
       style={{height:'280px',width:'500px',position:"absolute",borderRadius:"0px 0px 0px 0px"}}  />}
  >

    <Container  position="relative" top={220} w={300} columns={[1,2,3]} >
    <Box position="relative" textAlign={"center"} fontSize="16px" fontWeight="bold" bg={'white'} borderRadius="5px 5px 0px 0px" >{product.Title}</Box>
    
    <HStack justifyContent={"space-between"} py={5} bg={'gray.200'} columns={[1,2,3]}>
    <Box position="absolute" >
    <Button 
    onClick={()=>addToCart(product)}
    bg={'black'} color={'white'} ml={150} h={30} fontSize={'12px'} _hover={{bg:'gray'}}>ADD TO CART</Button>
    </Box>
    <Box position="absolute" fontSize="18px" fontWeight="bold" textAlign={'left'} ml={2}>{product.Price}</Box>
    
    </HStack>
    </Container>
    
  </Card>
  
  </Center>
  
);
export default App;

