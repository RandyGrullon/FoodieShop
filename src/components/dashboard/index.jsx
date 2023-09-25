import React, { useEffect, useState } from "react";
import ProductList from "../product/ProductList";
import { getProducts } from "../../pages/api/products";

export default function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  }, []);


  return (
    <div className="bg-white min-h-screen ">
      <div className="bg-primary py-4 text-white">
        <div className="container mx-auto px-4 text-center text-black">
          <h4 className="text-2xl mb-2 ">Bienvenido a Foodie</h4>
          <p className="text-sm mb-4">
            ¡Explora y compra deliciosos productos alimenticios en nuestra
            tienda en línea!
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <ProductList products={products} />
      </div>
    </div>
  );
}
