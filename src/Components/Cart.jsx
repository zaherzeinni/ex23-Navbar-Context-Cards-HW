import React from "react";
import {
  Box,
  NumberInput,
  Center,
  Button,
  Stack,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputStepper,
} from "@chakra-ui/react";


import Title from "./Title";

export default function Cart({
  cart,
  changeQuantity,
  clearFromCart,
  removeItem,
  page,
}) {
  return (
    <div style={{height:"100vh"}}>
      <Title 
      page='Cart'
      />
      <Center >
        {cart.length > 0 ? (
          <Button colorScheme="red" onClick={clearFromCart}>
            Delete Items
          </Button>
        ) : (
          <Box
            bg="red.400"
            p="2"
            color="white"
            borderRadius="5"
            fontWeight="bold"
          >
            No Items To Delete
          </Box>
        )}
      </Center>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 w-full h-16 p-4">
        {/* All products */}

        {cart.map((product, index) => (
          // inside maping show only  single product
          <div className="py-6" key={index}>
            <div className=" max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
              <div
                className="object-fit: cover object-position: center"
                style={{ backgroundImage: `url('${product.IMG1}')` , width:'600px',height:'250px' , objectFit:"cover" ,objectPosition:"50% 50%"}}
              ></div>

              {/* //z product content */}

              <div className="w-2/3 p-4">
                <h1 className="text-gray-900 font-bold text-2xl">
                  {product.Title}
                </h1>
                <Box>
                  <Stack shouldWrapChildren direction="row">
                    <NumberInput
                      defaultValue={product.quantity}
                      min={0}
                      max={product.instock}
                      size="xs"
                      type="number"
                      htmlSize={4}
                      width="auto"
                      bg="blue.200"
                      onChange={(e) => changeQuantity(product, e.target.value)}
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </Stack>
                </Box>
                <div className="flex item-center mt-2"></div>
                <div className="flex item-center  justify-between mt-3">
                  <h1 className="text-gray-700 font-bold text-xl">
                    ${product.Price}
                  </h1>
                  <button
                    onClick={() => removeItem(product)}
                    className=" px-3 py-2 lg:bg-green-400 md:bg-red-400 bg-yellow-400 hover:bg-blue-500 transition-all duration-300 hover:text-black  text-xs font-bold uppercase rounded lg:text-black  sm:text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
