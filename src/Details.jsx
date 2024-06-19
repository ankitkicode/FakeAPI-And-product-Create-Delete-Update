// src/components/Details.js
import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Loading from './Loading';
import { ProductContext } from './utils/Context';
import { toast } from 'react-toastify';

const Details = () => {
  const [products,setProducts] = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (products.length > 0) {
      // console.log(id)
      const foundProduct = products.find(p => p.id ==id);
      // console.log(foundProduct)
      setProduct(foundProduct);
      setLoading(false);
    }
  }, [id, products]);

  const handleDelete = (id) => {
  const filterProduct = products.filter((p)=> p.id !== id)
    setProducts(filterProduct)
    // Update local storage
    localStorage.setItem('products', JSON.stringify(filterProduct));
    // Navigate back to the home page after deletion
    toast.success("Product deleted successfully !")
    navigate('/');
  };

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return (
      <div className="h-[100vh] w-[100%] bg-gray-900 flex items-center justify-center py-8">
        <div className="absolute top-4 left-4">
        <button
          onClick={() => navigate('/')}
          className="bg-gray-600 text-white py-2 px-4 rounded"
        >
          Back to Home
        </button>
      </div>
      </div>
    );
  }

  return (
    <div className="h-[100vh] w-[100%] bg-gray-900 flex items-center justify-center py-8">
      <div className="absolute top-4 left-4">
        <button
          onClick={() => navigate('/')}
          className="bg-gray-600 text-white py-2 px-4 rounded"
        >
          Back to Home
        </button>
      </div>
      <div className="max-w-4xl w-full bg-gray-800 text-white rounded-lg shadow-md p-8 flex space-x-8">
        <img
          className="w-1/2 h-auto object-cover"
          src={product.image}
          alt={product.title}
        />
        <div className="w-1/2 flex flex-col">
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-300 mb-2">{product.category}</p>
          <p className="text-xl text-blue-600 mb-4">${product.price}</p>
          <p className="text-gray-200 mb-6">{product.description}</p>
          <div className="flex space-x-4">
          <Link to={`/edit/${product.id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Edit</Link>
          <button onClick={()=>handleDelete(product.id)} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
