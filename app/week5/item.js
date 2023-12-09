import React from "react";

const Item = ({ item }) => {
  return (

    <div className="mb-2 p-4 bg-gray-700 rounded">



      <h3 className="text-xl font-bold">{item.name}</h3>
      <p className="text-gray-400">{item.category}</p>
      


      
    </div>
  );
};

export default Item;
