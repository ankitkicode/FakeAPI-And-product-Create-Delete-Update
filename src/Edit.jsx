// src/components/Edit.js
import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductContext } from './utils/Context';
import Loading from './Loading';
import { toast } from 'react-toastify';

const Edit = () => {
    const [products, setProducts] = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // console.log("ID from params:", id); // Log the id from params
    // console.log("Products array:", products); // Log the products array

    const foundProduct = products.find(p => p.id == id);
    console.log("Found Product:", foundProduct); // Log the found product

    if (foundProduct) {
      setProduct(foundProduct);
    }
    setLoading(false); // Set loading to false even if product is not found
  }, [id, products]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({ ...prevProduct, [name]: value }));
    // console.log(product)
  };

  const handleSave = (e) => {
    e.preventDefault();
    const updatedProducts = products.map(p => (p.id == id ? product : p));
    setProducts(updatedProducts);
    // console.log(updatedProducts)
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    toast.success("product Updated !")
    navigate(-1);
  };

  if (loading) {
    return <Loading />;
  }


  if (!product) {
    return (
      <div className="h-[100vh] w-[100%] bg-gray-900 flex items-center justify-center py-8">
        <div className="absolute top-4 left-4">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-600 text-white py-2 px-4 rounded"
          >
            Back to Home
          </button>
        </div>
        <p className="text-white">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="h-[100vh] w-[100%] bg-gray-900 flex items-center justify-center py-8">
      <div className="absolute top-4 left-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-600 text-white py-2 px-4 rounded"
        >
          Back to Home
        </button>
      </div>
      <div className="max-w-4xl w-full bg-gray-800 text-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
        <form onSubmit={handleSave}>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={product.title}
              onChange={handleChange}
              className="w-full px-3 py-2 text-xl text-gray-900 bg-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="image">Image URL</label>
            <input
              type="text"
              name="image"
              id="image"
              value={product.image}
              onChange={handleChange}
              className="w-full px-3 py-2 text-xl text-gray-900 bg-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              value={product.price}
              onChange={handleChange}
              className="w-full px-3 py-2 text-xl text-gray-900 bg-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              value={product.description}
              onChange={handleChange}
              className="w-full px-3 py-2 h-[20vh] text-xl text-gray-900 bg-gray-400 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="category">Category</label>
            <input
              type="text"
              name="category"
              id="category"
              value={product.category}
              onChange={handleChange}
              className="w-full px-3 py-2 text-xl text-gray-900 bg-gray-300 rounded"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded mb-4">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
