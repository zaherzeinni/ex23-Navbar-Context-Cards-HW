import React from 'react';

import { Center } from '@chakra-ui/react';

const Title = ({page}) => {
    return (
        <Center className= {` ${page==='Cart' ? "text-red-500" : "text-black" }  cursor-pointer text-xl `} >

          { page==='Cart' ? 'Cart' : 'Feature Products'}

        </Center>
    );
}

export default Title;
