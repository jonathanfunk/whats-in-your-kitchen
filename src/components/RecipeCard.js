import React, { Fragment, useState } from 'react';
import axios from 'axios';
import MissingIngredient from './MissingIngredient';
import RecipeContent from './RecipeContent';
import RecipeContentPlaceholder from './RecipeContentPlaceholder';
import Popup from 'reactjs-popup';
import singleMockData from './../singleMockData';

const RecipeCard = ({ id, title, image, missingIngredient = null }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState({});

  const openPopup = async () => {
    setLoading(true);
    setOpen(true);
    try {
      const recipeData = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_API_KEY}`
      );

      setRecipe(recipeData.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

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
            onClick={openPopup}
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
        <div className="absolute z-20 w-16 h-16 flex justify-center items-center right-0">
          <button
            className=" w-10 h-10 bg-orange-500 rounded-full leading-10 text-white hover:bg-orange-400 focus:outline-none"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>
        {loading ? (
          <RecipeContentPlaceholder />
        ) : (
          <RecipeContent recipeData={recipe} />
        )}
      </Popup>
    </Fragment>
  );
};

export default RecipeCard;
