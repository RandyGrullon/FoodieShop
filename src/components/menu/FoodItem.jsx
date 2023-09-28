import React from "react";

const FoodItem = ({ menu }) => {
  return (
    <div className="min-h-screen flex justify-center items-center p-4 ">
      <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
        {menu.map((item, index) => (
          <div
            key={index}
            className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
          >
            <h3 className="mb-3 text-xl font-bold text-indigo-600">
              {item.title}
            </h3>
            <div className="relative">
              <img
                className="w-full rounded-xl"
                src={item.image}
                alt={item.title}
              />
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
              {item.courseName}
            </h1>
            <div className="my-4">
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <p>{item.schedule}</p>
              </div>
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <p>
                  {
                    // map item.sides
                    item.sides.map((side, index) => (
                      <span key={index} className="">
                        {side}
                        {
                          // if index is not the last one, add a comma
                          index !== item.sides.length - 1 ? ", " : ""
                        }
                      </span>
                    ))
                  }
                </p>
              </div>
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </span>

                <p>
                  {
                    // map item.sides
                    item.addons.map((side, index) => (
                      <span key={index} className="">
                        {side}
                        {
                          // if index is not the last one, add a comma
                          index !== item.addons.length - 1 ? ", " : ""
                        }
                      </span>
                    ))
                  }
                </p>
              </div>
              <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
                Buy Lesson
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodItem;
