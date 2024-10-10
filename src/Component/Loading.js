import React from 'react';
import Base from '../Base/Base';

const Loading = () => {
  return (
    <Base> 
     <div className="flex flex-col items-center justify-center h-screen">
      <div className="loader mb-2">
        <div className="w-16 h-16 border-8 border-t-8 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className="text-lg text-gray-700">Loading...</p>
    </div>
    </Base>
  
  );
};

export default Loading;
