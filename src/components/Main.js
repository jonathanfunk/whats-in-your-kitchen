import React, { useState, useContext } from 'react';
import axios from 'axios';
import RecipesList from './RecipesList';
import { GlobalContext } from '../context/GlobalState';

import mockData from './../mockData';

const Main = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { ingredients } = useContext(GlobalContext);

  const mergedIngredients = ingredients.map(ingredient => {
    return encodeURIComponent(ingredient.value);
  });

  //const encodedIngredients = mergedIngredients.join();

  const fetchRecipes = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      // const recipes = await axios.get(
      //   `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${encodedIngredients}&number=30&ranking=1&ignorePantry=true&apiKey=${process.env.REACT_APP_API_KEY}`
      // );

      const completeRecipes = mockData.filter(recipe => {
        return recipe.missedIngredientCount === 0;
      });
      console.log('All recipes is...', recipes);
      console.log('Recipes is...', completeRecipes);

      setRecipes(completeRecipes);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  return (
    <section className="py-16 lg:w-60vw lg:max-h-100vh lg:overflow-y-auto">
      <div className="px-8 max-w-5xl m-auto">
        <div className="border-b border-orange-200 pb-2 flex justify-between mb-12">
          <h2 className="font-bold text-gray-900 text-3xl">Recipes</h2>
          <button
            onClick={fetchRecipes}
            disabled={loading}
            className="px-3 py-2 rounded-md bg-orange-500 text-white focus:outline-none hover:bg-orange-400 disabled:opacity-50 disabled:cursor-not-allowed mb"
          >
            {loading ? `Fetching Recipes` : `Fetching Recipes`}
          </button>
        </div>
        <RecipesList recipes={recipes} loading={loading} />
      </div>
    </section>
  );
};

export default Main;
