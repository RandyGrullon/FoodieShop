import Image from "next/image";
import React from "react";
import { useCart } from "../context/CartContext"; // Importa useCart desde CartContext

const Cart = () => {
  const { cart } = useCart(); // Usa cart desde CartContext

  
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="h-screen bg-gray-100 p-20 text-black">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {Object.values(cart).map((item, index) => (
            <div
              key={index}
              className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={150}
                height={150}
              />
              <div className="mt-4 sm:mt-0 sm:ml-6">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="mt-1">Size: {item.size}</p>
                <p className="mt-1">Quantity: {item.quantity}</p>
                <p className="mt-1">Price: ${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-bold">Summary</h2>
        <div className="mt-4">
          <p>Total: ${total}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
