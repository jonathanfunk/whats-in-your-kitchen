import React, { useState } from 'react';
import axios from 'axios';

const Main = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const recipes = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,flour,eggs,baking%20powder,sugar,cinnamon&number=10&ranking=1&ignorePantry=true&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      setRecipes(recipes.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="py-16 lg:w-60vw lg:max-h-100vh lg:overflow-y-auto">
      <div className="px-8 max-w-5xl m-auto">
        <div className="border-b border-orange-200 pb-2 flex justify-between">
          <h2 className="font-bold text-gray-900 text-3xl">Recipes</h2>
          <button
            onClick={fetchRecipes}
            className="px-3 py-2 rounded-md bg-orange-500 text-white focus:outline-none hover:bg-orange-400"
          >
            Fetch Recipes
          </button>
        </div>
        <ul>
          {recipes.length ? (
            recipes.map(recipe => {
              return <h2>{recipe.title}</h2>;
            })
          ) : (
            <h1>Add ingredients</h1>
          )}
        </ul>
      </div>
    </section>
  );
};

export default Main;
