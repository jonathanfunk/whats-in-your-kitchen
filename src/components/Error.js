import React from 'react';

const Error = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold">Darn!</h2>
      <p className="text-gray-600">
        There appears to be an issue fetching this recipe. Please check out
        another recipe or try again later.
      </p>
    </div>
  );
};

export default Error;
