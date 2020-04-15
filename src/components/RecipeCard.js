import React, { Fragment, useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import axios from 'axios';
import MissingIngredient from './MissingIngredient';
import RecipeContent from './RecipeContent';
import RecipeContentPlaceholder from './RecipeContentPlaceholder';
import Error from './Error';
import Popup from 'reactjs-popup';
import expand from './../images/expand.svg';

const RecipeCard = ({ id, title, image, missingIngredients = null }) => {
  const { ingredients } = useContext(GlobalContext);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState({});
  const [error, setError] = useState(false);

  const openPopup = async () => {
    setError(false);
    setLoading(true);
    setOpen(true);
    try {
      const recipeData = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      setRecipe(recipeData.data);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  const ingredientAdded = missingIngredients.filter((missingIngredient) => {
    return (
      ingredients.filter((ingredient) => {
        return ingredient.value === missingIngredient.name;
      }).length === 0
    );
  });

  let recipeCardContent;
  if (recipe === null || loading) {
    recipeCardContent = <RecipeContentPlaceholder />;
  } else if (error) {
    recipeCardContent = <Error />;
  } else {
    recipeCardContent = (
      <RecipeContent recipeData={recipe} missingIngredients={ingredientAdded} />
    );
  }

  return (
    <Fragment>
      <div className="pb-2/3 relative bg-gray-900 rounded overflow-hidden">
        <div className="absolute z-20 w-16 h-16 flex justify-center items-center right-0">
          <div
            className="w-10 h-10 bg-orange-500 rounded-full leading-10 text-white hover:bg-orange-400 focus:outline-none flex items-center justify-center cursor-pointer"
            onClick={openPopup}
          >
            <img className="h-6 w-6" src={expand} alt="Expand Icon" />
          </div>
        </div>
        <img
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-75"
          src={image}
          alt={title}
        />
        <div className="absolute top-0 left-0 w-full h-full z-10 p-4 flex flex-col justify-end">
          <h3 className="relative text-white text-xl font-medium text-center mb-2">
            {title}
          </h3>
          <div className="text-sm text-center text-gray-100 h-5">
            {ingredientAdded.length ? (
              <p>Missing {ingredientAdded.length} ingredients</p>
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
        {recipeCardContent}
      </Popup>
    </Fragment>
  );
};

export default RecipeCard;
