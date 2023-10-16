import React from "react";
import { useState } from "react";


const ProductsComponent = ({addToCart}) => {
  const [products] = useState([
    {
      instock:5,
      name: "Headphones v0",
      cost: 2.99,
      image:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    },
    {
      instock:10,
      name: "Headphones v1",
      cost: 12.99,
      image:
        "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
    {
      instock:15,  
      name: "Headphones v2",
      cost: 14.99,
      image:
        "https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80",
    },
    {
      instock:20,
      name: "Headphones v3",
      cost: 16.99,
      image:
        "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
  ]);

  return (
    <div>


<div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 w-full h-16 p-4">
        {/* All products */}

        {products.map((product, index) => (
          // inside maping show only  single product
          <div className="py-6" key={index}>
            <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
              <div
                className="w-1/3  "
                style={{ backgroundImage: `url('${product.image}')` }}
              ></div>

              {/* // product content */}

              <div className="w-2/3 p-4">
                <h1 className="text-gray-900 font-bold text-2xl">
                  {product.name}
                </h1>
                <p>
                    In Stock:{product.instock} 
                  </p>
                <div className="flex item-center mt-2"></div>
                <div className="flex item-center  justify-between mt-3">
                  <h1 className="text-gray-700 font-bold text-xl">
                    ${product.cost}
                  </h1>
                  
                  <button 
                  onClick={()=>addToCart(product)}
                  className=" px-3 py-2 lg:bg-green-400 md:bg-red-400 bg-yellow-400 hover:bg-blue-500 transition-all duration-300 hover:text-black  text-xs font-bold uppercase rounded lg:text-black  sm:text-white">
               Add to Card 
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    </div>
  );
};

export default ProductsComponent;


