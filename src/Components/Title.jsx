import React from 'react';

import { Center } from '@chakra-ui/react';

const Title = ({page}) => {
    return (
        <Center className= {` ${page==='Cart' ? "text-red-500" : "text-black" } text-2xl pt-2 mb-2  `} >

          { page==='Cart' ? 'Cart' : 'Feature Products'}

        </Center>
    );
}

export default Title;
