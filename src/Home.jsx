import React, { useEffect, useState } from "react";
import CardLayout from './Cardlayout'
import Sidebar from './Sidebar'
import Loading from './Loading';

function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate a data fetching delay
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="h-[100vh] w-[100%] bg-gray-900 text-white flex">
      <Sidebar />
      {loading ? <Loading /> : <CardLayout />}
     </div>
  );
}

export default Home;
