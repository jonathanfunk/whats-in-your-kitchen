import React, { Fragment, useState } from 'react';
import MissingIngredient from './MissingIngredient';
import RecipeContent from './RecipeContent';
import Popup from 'reactjs-popup';
import singleMockData from './../singleMockData';

const RecipeCard = ({ title, image, missingIngredient = null }) => {
  const [open, setOpen] = useState(false);
  const [recipe, setRecipe] = useState(singleMockData);
  console.log('Recipe is...', recipe);
  return (
    <Fragment>
      <div className="pb-2/3 relative bg-gray-900 rounded overflow-hidden">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-75"
          src={image}
          alt={title}
        />
        <div className="absolute top-0 left-0 w-full h-full z-10 p-4 flex flex-col justify-end">
          <h3
            className="relative text-white text-xl font-medium text-center mb-2 hover:text-gray-200 cursor-pointer"
            onClick={() => setOpen(true)}
          >
            {title}
          </h3>
          <div className="text-sm text-center text-gray-100 h-5">
            {missingIngredient ? (
              <MissingIngredient missingIngredient={missingIngredient.name} />
            ) : null}
          </div>
        </div>
      </div>
      <Popup open={open} closeOnDocumentClick onClose={() => setOpen(false)}>
        <RecipeContent recipeData={recipe} />
      </Popup>
    </Fragment>
  );
};

export default RecipeCard;
