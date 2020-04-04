import React, { useState, useContext } from 'react';
import axios from 'axios';
import RecipesList from './RecipesList';
import Footer from './Footer';
import { GlobalContext } from '../context/GlobalState';

import mockData from './../mockData';

const Main = () => {
  const [message, setMessage] = useState(
    'Add ingredients then click "Fetch Recipes". Try to add as many ingredients as you can for better results.'
  );
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { ingredients } = useContext(GlobalContext);

  const mergedIngredients = ingredients.map((ingredient) => {
    return encodeURIComponent(ingredient.value);
  });

  const encodedIngredients = mergedIngredients.join();

  const fetchRecipes = async (e) => {
    e.preventDefault();
    setError(false);
    setMessage('');
    setLoading(true);
    try {
      const recipes = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${encodedIngredients}&number=100&ranking=2&ignorePantry=false&apiKey=${process.env.REACT_APP_API_KEY}`
      );

      const completeRecipeArray = recipes.data.filter((recipe) => {
        return recipe.missedIngredientCount < 2;
      });

      if (completeRecipeArray.length === 0) {
        setMessage(
          "Darn! Can't find any recipes. Try adding more ingredients."
        );
      } else {
        setMessage('');
      }
      setRecipes(completeRecipeArray);
      setLoading(false);
    } catch (err) {
      setError(true);
      setMessage(
        "Darn! It appears we've hit our limit for requests for the day. Please try again tomorrow."
      );
      setLoading(false);
    }
  };

  return (
    <div className="lg:w-60vw lg:max-h-100vh lg:overflow-y-auto flex flex-col justify-between">
      <section className="py-16">
        <div className="px-8 max-w-5xl m-auto">
          <div className="border-b border-orange-200 pb-2 flex justify-between mb-6">
            <h2 className="font-bold text-gray-900 text-3xl">Recipes</h2>
            <button
              onClick={fetchRecipes}
              disabled={loading}
              className="px-3 py-2 rounded-md bg-orange-500 text-white focus:outline-none hover:bg-orange-400 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? `Fetching Recipes` : `Fetch Recipes`}
            </button>
          </div>
          <p className="text-l">{message}</p>
          <RecipesList recipes={recipes} loading={loading} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Main;
