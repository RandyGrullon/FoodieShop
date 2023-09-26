import React from "react";
import { Typography, Divider } from "@mui/material";
import CartItem from "./CartItem";

const Cart = ({ products, onIncreaseQuantity, onDecreaseQuantity }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md text-black">
      <Typography variant="h6" gutterBottom>
        Mi Carrito
      </Typography>
      <Divider className="mb-4" />
      {products.length === 0 ? (
        <Typography variant="body1" className="text-gray-600">
          El carrito está vacío.
        </Typography>
      ) : (
        <div>
          {products.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              onIncreaseQuantity={onIncreaseQuantity}
              onDecreaseQuantity={onDecreaseQuantity}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
