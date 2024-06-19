// src/components/CardLayout.js
import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ProductContext } from './utils/Context';
import Loading from './Loading';
import axios from './utils/Axios';

function Card({ id, image, title, price }) {
  return (
    <Link to={`/details/${id}`} className="bg-gray-800 p-4 rounded-lg shadow-md overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          className="h-40 w-full object-cover mb-4 transition-transform duration-300 ease-in-out transform hover:scale-110"
          src={image}
          alt={title}
        />
      </div>
      <h2 className="text-lg font-semibold mb-2 text-white">{title}</h2>
      <p className="text-blue-500 mb-2">${price}</p>
    </Link>
  );
}

function CardLayout() {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const navigate = useNavigate();
  const category = new URLSearchParams(search).get('category');
  const [filterData, setFilterData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getFilterData = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setFilterData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (category) {
      getFilterData();
    } else {
      setFilterData(products);
      setLoading(false);
    }
  }, [category, products]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex-1 overflow-y-auto bg-gray-900 py-8">
    <h1 className="text-3xl font-bold text-center mb-8 text-white">Our Products</h1>
    <div className="container mx-auto px-4">
      {category && (
        <button
          onClick={() => navigate('/')}
          className='text-gray-300 font-semibold italic rounded bg-slate-600 p-2 px-4 mb-4'
        >
          Back
        </button>
      )}
      <div className="grid mt-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filterData && filterData.map((product) => (
          <Card key={product.id} id={product.id} image={product.image} title={product.title} price={product.price} />
        ))}
      </div>
    </div>
  </div>
  
  );
}

export default CardLayout;
