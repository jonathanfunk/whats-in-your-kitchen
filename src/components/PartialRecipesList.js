import React from 'react';
import RecipeCard from './RecipeCard';

const PartialRecipesList = ({ partialRecipes }) => {
  let partialRecipeItems;
  console.log('Partial Recipes...', partialRecipes);
  if (partialRecipes.length > 0) {
    partialRecipeItems = (
      <>
        <div className="border-b border-orange-200 pb-2 flex justify-between mb-6">
          <h2 className="font-bold text-gray-900 text-3xl">
            So close! Just need one more ingredient.
          </h2>
        </div>
        <div className="recipe-grid">
          {partialRecipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
              missingIngredient={recipe.missedIngredients[0]}
            />
          ))}
        </div>
      </>
    );
  } else {
    partialRecipeItems = null;
  }

  return <>{partialRecipeItems}</>;
};

export default PartialRecipesList;
