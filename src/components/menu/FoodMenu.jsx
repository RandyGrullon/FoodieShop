import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from "@/context/CartContext";

const FoodMenu = ({ products }) => {
  const { addToCart } = useCart();  // Use the addToCart function from the CartContext

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 pt-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index}>
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">
              {product.category}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div
                className="w-full bg-white rounded-lg shadow-lg overflow-hidden relative"
              >
                {/* Cart Icon using FontAwesome */}
                <div className="absolute top-2 right-2">
                  <button onClick={() => addToCart(product)}>
                    <FontAwesomeIcon icon={faShoppingCart} className="text-gray-800" />
                  </button>
                </div>
                {/* End Cart Icon */}
                <img
                  className="object-cover h-48 w-full"
                  src={product.image}
                  alt={product.title}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-indigo-600">
                    {product.courseName}
                  </h3>
                  <p className="text-gray-700">{product.schedule}</p>
                  <p className="text-gray-900 font-bold">{product.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodMenu;
