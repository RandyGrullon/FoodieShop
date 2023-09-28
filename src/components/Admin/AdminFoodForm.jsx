import React from "react";

const AdminFoodForm = ({ onSubmit }) => {

  return (
    <section
    id="login"
    className=" flex flex-col justify-center max-w-md mx-auto "
  >
    <div className="p-6 bg-sky-100 rounded">
      <div className="flex items-center justify-center font-black m-3 mb-12">
        <h1 className="tracking-wide text-3xl text-gray-900 text-center">
          Formulario creacion de comida
        </h1>
      </div>
      <form
        id="login_form"
        action="api_login"
        method="POST"
        className="flex flex-col justify-center"
      >
        <label className="text-sm font-medium">Nombre del menu</label>
        <input
          className=" 
        mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
        focus:outline-none
        focus:border-sky-500
        focus:ring-1
        focus:ring-sky-500
        focus:invalid:border-red-500 focus:invalid:ring-red-500"
          type="text"
          name="username"
          placeholder="wahyusa"
        />
        <label className="text-sm font-medium">Description</label>
        <textarea
          className="
        mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
        focus:outline-none
        focus:border-sky-500
        focus:ring-1
        focus:ring-sky-500
        focus:invalid:border-red-500 focus:invalid:ring-red-500"
          name="messages"
          placeholder="Write something"
        ></textarea>
        <button
          className="px-4 py-1.5 rounded-md shadow-lg bg-orange-500 font-medium text-gray-100 block transition duration-300"
          type="submit"
        >
          <span id="login_default_state">
            Crear<span id="subtotal"></span>
          </span>
        </button>
      </form>
    </div>
  </section>
  );
};

export default AdminFoodForm;
