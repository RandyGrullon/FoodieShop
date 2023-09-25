import React from "react";
import { ShoppingCart } from "@mui/icons-material";
import Image from "next/image";

const ProductCard = ({ product, onAddToCart }) => {

  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <Image
        src={
          product.imageUrl
        } // Reemplaza con la URL de la imagen del producto
        alt={product.name}
        className="w-full h-auto"
        width={300}
        height={300}
      />
      <div className="p-4">
        <h6 className="text-xl font-semibold">{product.name}</h6>
        <p className="text-sm text-gray-500 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-primary text-lg font-semibold">
            ${product.price}
          </span>
          <button
            className="text-primary hover:text-primary-dark transition duration-300"
            onClick={() => onAddToCart(product)}
          >
            <ShoppingCart fontSize="medium" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
