import React from 'react';
import RecipeCard from './RecipeCard';
import Placeholder from './Placeholder';

const RecipesList = ({ recipes, loading }) => {
  let recipeItems;
  if (recipes === null || loading) {
    let placeHolders = [];
    for (let i = 0; i < 9; i++) {
      placeHolders.push(<Placeholder />);
    }
    recipeItems = <div className="recipe-grid">{placeHolders}</div>;
  } else {
    if (recipes.length > 0) {
      recipeItems = (
        <div>
          {recipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
            />
          ))}
        </div>
      );
    } else {
      recipeItems = <h4>No recipes found...</h4>;
    }
  }
  return <div>{recipeItems}</div>;
};

export default RecipesList;
