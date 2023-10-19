import React from 'react';
import { SimpleGrid,Box } from '@chakra-ui/react';
import { Data } from './Data';
import Cards from './Cards'
import Title from './Title';


const Products = ({addToCart,page,cart}) => {
    return (
        <div>
            <Title 
            
            />
        <Box>

<SimpleGrid columns={[1, 1, 2, 3]} spacing={25} mb="20" >
  {Data.map((product,index) => (
    <Cards key={index}
    
    addToCart={addToCart}
    product={product}
    
    />
  ))}
</SimpleGrid>

</Box>
        </div>
    );
}

export default Products;
