import React, { Fragment } from 'react';
import RecipeCard from './RecipeCard';
import Placeholder from './Placeholder';

const RecipesList = ({ faveRecipes, recipes, loading }) => {
  let faveRecipeItems;
  if (loading) {
    faveRecipeItems = null;
  } else if (faveRecipes.length > 0) {
    faveRecipeItems = (
      <Fragment>
        {faveRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            image={recipe.image}
            missingIngredients={recipe.missedIngredients}
          />
        ))}
      </Fragment>
    );
  }

  let recipeItems;
  if (recipes === null || loading) {
    let placeHolders = [];
    for (let i = 0; i < 9; i++) {
      placeHolders.push(<Placeholder key={i} />);
    }
    recipeItems = <Fragment>{placeHolders}</Fragment>;
  } else if (recipes.length > 0) {
    recipeItems = (
      <Fragment>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            image={recipe.image}
            missingIngredients={recipe.missedIngredients}
          />
        ))}
      </Fragment>
    );
  }

  return (
    <div className="recipe-grid mb-10">
      {faveRecipeItems}
      {recipeItems}
    </div>
  );
};

export default RecipesList;
