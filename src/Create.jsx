// src/components/Create.js
import React, { useContext, useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { ProductContext } from './utils/Context';
import { toast } from 'react-toastify';

const Create = () => {
     
    const [products, setProducts] = useContext(ProductContext);
    const navigate = useNavigate();
  
    const [newProduct, setNewProduct] = useState({
      id: nanoid(),
      title: '',
      image: '',
      price: '',
      description: '',
      category: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setNewProduct({ ...newProduct, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // // Post new product to API (assuming your API supports this)
        // await axios.post('/products', newProduct);
  
        // Update local state with new product
        setProducts([...products, newProduct]);
     localStorage.setItem("products",JSON.stringify([...products, newProduct]));
        // Navigate back to home page
        toast.success("Product successfully Added!")
        navigate('/')
      } catch (error) {
        console.error('There was an error creating the product!', error);
      }
    };
  console.log(products)

  return (
    <div className="h-[100vh] flex items-center justify-center bg-gray-900 py-8">
      <div className="absolute top-4 left-4">
        <button
          onClick={() => navigate('/')}
          className="bg-gray-600 text-white py-2 px-4 rounded"
        >
          Back to Home
        </button>
      </div>

      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Create Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={newProduct.title}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-900 bg-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="image">Image URL</label>
            <input
              type="text"
              name="image"
              id="image"
              value={newProduct.image}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-900 bg-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              value={newProduct.price}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-900 bg-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              value={newProduct.description}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-900 bg-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="category">Category</label>
            <input
              type="text"
              name="category"
              id="category"
              value={newProduct.category}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-900 bg-gray-300 rounded"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded mb-4">Create</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
