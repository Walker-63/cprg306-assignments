"use client";
import React, { useState } from "react";
import Item from "./item";
import items from './items.json';


//Item list function
export default function ItemList() {
  const itemsArray = items.map((item) => ({ ...item }));



  const [sortBy, setSortBy] = useState('name');


  //Sort items stuffs
  const sortedItems = [...itemsArray].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const handleSortByName = () => {
    setSortBy('name');
  };

  const handleSortByCategory = () => {
    setSortBy('category');
  };

  return (
    <div className="bg-blue-800 text-white p-8 rounded shadow-lg">
      <div className="mb-4 flex justify-between items-center">



        <button
          onClick={handleSortByName}
          className={`px-4 py-2 rounded ${sortBy === 'name' ? 'bg-teal-500 text-white' : 'bg-gray-600 hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray'}`}
        >
          Sort by Name button
        </button>


        <button
          onClick={handleSortByCategory}
          className={`px-4 py-2 rounded ${sortBy === 'category' ? 'bg-teal-500 text-white' : 'bg-gray-600 hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray'}`}
        >
          Sort by Category
        </button>


        <button
          onClick={() => setSortBy('grouped')}
          className={`px-4 py-2 rounded ${sortBy === 'grouped' ? 'bg-teal-500 text-white' : 'bg-gray-600 hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray'}`}
        >
          Group by Category
        </button>

      </div>
      {sortBy === 'grouped' ? (
        <div>
          {Object.keys(sortedItems.reduce((acc, item) => {
            if (!acc[item.category]) {
              acc[item.category] = [];
            }
            acc[item.category].push(item);
            return acc;
          }, {})).sort(sortAlphabetically).map((category) => (
            <div key={category} className="mb-4">
              <h2 className="text-2xl font-bold mb-2">{category}</h2>
              {sortedItems
                .filter((item) => item.category === category)
                .map((item) => (
                  <Item key={item.id} item={item} />
                ))}
            </div>
          ))}
        </div>
      ) : (
        <div>
          {sortedItems.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

function sortAlphabetically(a, b) {
  return a.localeCompare(b);
}
