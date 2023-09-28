import React from "react";
import FoodItem from "@/components/menu/FoodItem";

const Home = () => {
  // Crear datos falsos para los elementos del menú
  const dummyFoodData = [
    {
      title: "Plato del Día",
      image:
        "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      description: "Este es el plato del día de hoy. ¡No te lo pierdas!",
      price: 12.99,
      schedule: "12:00 PM - 2:00 PM",
      sides: ["Arroz", "Ensalada"],
      addons: ["Papas fritas", "Refresco"],
    },
    {
      title: "Opción de Almuerzo",
      image:
        "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      description: "Una deliciosa opción de almuerzo para disfrutar.",
      price: 9.99,
      schedule: "12:00 PM - 3:00 PM",
      sides: ["Puré de papas", "Vegetales asados"],
      addons: ["Sopa del día", "Té helado"],
    },
    {
      title: "Agregado Especial",
      image:
        "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      description: "Una cena especial para una noche inolvidable.",
      price: 16.99,
      schedule: "6:00 PM - 9:00 PM",
      sides: ["Puré de batatas", "Brócoli al vapor"],
      addons: ["Entrada de camarones", "Vino tinto"],
    },
    // Puedes agregar más objetos aquí para simular más opciones de comida
  ];

  return (
    <div className="  text-black bg-gray-100  ">
      <FoodItem menu={dummyFoodData} />
    </div>
  );
};

export default Home;
