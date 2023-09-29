import React, { useState } from "react";

const menufood = {
  breakfast: [
    {
      title: "Breakfast",
      image: "https://www.lacademie.com/wp-content/uploads/2022/04/asian-cuisines.jpg",
      courseName: "Eggs Benedict",
      schedule: "8:00 - 11:00",
      price: "$10.00",
    },
    {
      title: "Breakfast",
      image: "https://www.lacademie.com/wp-content/uploads/2022/04/asian-cuisines.jpg",
      courseName: "Eggs Benedict",
      schedule: "8:00 - 11:00",
      price: "$10.00",
    },
    
  ],
  lunch: [
    {
      title: "Lunch",
      image: "https://i.guim.co.uk/img/media/b0fbbd865e94925b31634a63a820c74a98cafb08/0_0_5216_3130/master/5216.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c666cab4b83a30ac509f64847f3e6e8b",
      courseName: "Eggs Benedict",
      schedule: "11:30 - 3:00",
      price: "$10.00",
    },
    {
      title: "Lunch",
      image: "https://i.guim.co.uk/img/media/b0fbbd865e94925b31634a63a820c74a98cafb08/0_0_5216_3130/master/5216.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c666cab4b83a30ac509f64847f3e6e8b",
      courseName: "Eggs Benedict",
      schedule: "11:30 - 3:00",
      price: "$10.00",
    }
  ],
  dinner: [
    {
      title: "Dinner",
      image: "https://hips.hearstapps.com/hmg-prod/images/table-filled-with-large-variety-of-food-shot-from-royalty-free-image-1659038707.jpg?crop=1xw:0.84335xh;center,top&resize=1200:*",
      courseName: "Eggs Benedict",
      schedule: "3:30 - 9:00",
      price: "$10.00",
    },
    {
      title: "Dinner",
      image: "https://hips.hearstapps.com/hmg-prod/images/table-filled-with-large-variety-of-food-shot-from-royalty-free-image-1659038707.jpg?crop=1xw:0.84335xh;center,top&resize=1200:*",
      courseName: "Eggs Benedict",
      schedule: "3:30 - 9:00",
      price: "$10.00",
    }
  ]

}

const FoodMenu = () => {


  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 pt-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.keys(menufood).map((category) => (
          <div key={category}>
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">
              {category}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {menufood[category].map((item, index) => (
                <div
                  key={index}
                  className="w-full bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    className="object-cover h-48 w-full"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-indigo-600">
                      {item.courseName}
                    </h3>
                    <p className="text-gray-700">{item.schedule}</p>
                    <p className="text-gray-900 font-bold">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodMenu;
