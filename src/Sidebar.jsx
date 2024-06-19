// src/components/Sidebar.js
import React, { useContext } from 'react';
import { ProductContext } from './utils/Context';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [products ] = useContext(ProductContext);
let descint_categary = products && products.reduce((acc,cv)=>[...acc,cv.category],[]);
descint_categary = [...new Set(descint_categary)]


  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <Link to={'/create'} className="bg-blue-500 flex items-center justify-center hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded">
        <h1>Add Product</h1>
      </Link>
      <hr className="border-gray-600" />
      <div className="mt-4">
        <h2 className="px-4 py-2 text-lg font-bold">Categories</h2>
        <ul className='flex flex-col gap-2  text-gray-200 capitalize font-semibold'>

          {
            descint_categary.map((category, index) =>(
              <Link  
              key={index}
              to={`/?category=${category}`}
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                <li className='list-disc ml-4'>{category}</li>
                </Link>
            )
          )}
         
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
