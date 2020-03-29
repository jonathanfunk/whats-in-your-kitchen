import React, { Fragment } from 'react';

const RecipeContentPlaceholder = () => {
  let placeHolders = [];
  for (let i = 0; i < 13; i++) {
    placeHolders.push(<li className="h-8 bg-gray-100 odd:bg-gray-200"></li>);
  }
  return (
    <Fragment>
      <div className="pb-1/2 relative bg-gray-100"></div>
      <div className="p-6 border-b border-orange-200">
        <div className="bg-gray-100 h-8 w-64 mb-1"></div>
        <div className="bg-gray-100 h-4 w-48"></div>
      </div>
      <div className="p-6">
        <div className="bg-gray-100 h-8 w-56 mb-2"></div>
        <ul>{placeHolders}</ul>
      </div>
    </Fragment>
  );
};

export default RecipeContentPlaceholder;
