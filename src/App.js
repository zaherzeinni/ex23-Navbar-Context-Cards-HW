import './index.css';
import React from 'react'
import Navbar from './Components/Navbar';
import Header from './Components/Header';

import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react';

export default function App() {

  return (
    <ChakraProvider>
      <Box>
        <Navbar />
        <Header />
      </Box>
    </ChakraProvider>
  )
}