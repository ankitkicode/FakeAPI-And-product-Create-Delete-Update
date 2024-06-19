import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col bg-gray-900 items-center justify-center w-[100%] h-[100vh]">
      <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin mb-4"></div>
      <h1 className="text-white text-2xl font-extrabold">Loading...</h1>
    </div>
  );
};

export default Loading;
