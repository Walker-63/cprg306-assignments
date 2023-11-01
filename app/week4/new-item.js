import React, { useState } from 'react';

//Color of the box that contains all the elements of this page
const BigBoxColor = {
    background: 'linear-gradient(to bottom, #f7fafc, #edf2f7)',
};

const NewItem = () => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [category, setCategory] = useState('Produce');

    const handleSubmission = (x) => {
    x.preventDefault();
    const item = {
        name,
        quantity,
        category,
    };

    console.log(item);
    alert(`New Item:\n
    \tName: ${name}\n
    \tQuantity: ${quantity}\n
    \tCategory: ${category}`);

    setName('');
    setQuantity(0);
    setCategory('Produce');
    };

    return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100">

        <div className="max-w-md p-8 bg-white rounded-lg shadow-lg" style={BigBoxColor}>

            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Add Item</h2>

            <form onSubmit={handleSubmission}>

                <div className="mb-4">

                    <label htmlFor="name" className="block text-gray-700">Item Name</label>

                    <input type="text" id="name" name="name" value={name} onChange={(x) => setName(x.target.value)} required
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400 text-gray-700"/>
                </div>

                <div className="mb-4">
                    <label htmlFor="quantity" className="block text-gray-700">Quantity</label>
                    <input type="number" id="quantity" name="quantity" value={quantity} onChange={(x) => setQuantity(Number(x.target.value))} min="1" max="99" required
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400 text-gray-700"/>
                </div>

                <div className="mb-4">
                    <label htmlFor="category" className="block text-gray-700">Category</label>
                    <select id="category" name="category" value={category}onChange={(x) => setCategory(x.target.value)}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400 text-gray-700">

                        <option value="Produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen">Frozen Foods</option>
                        <option value="canned">Canned Goods</option>
                        <option value="dry">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full">
                    Submit
                </button>

            </form>
        </div>
    </div>
    );
};

export default NewItem;
