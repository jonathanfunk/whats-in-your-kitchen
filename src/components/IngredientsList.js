import React, { useContext } from 'react';
import Ingredient from './Ingredient';

import { GlobalContext } from '../context/GlobalState';

const IngredientsList = () => {
  const { ingredients } = useContext(GlobalContext);
  console.log(ingredients);
  return (
    <ul>
      {ingredients.map(ingredient => (
        <Ingredient key={ingredient.id} ingredient={ingredient} />
      ))}
    </ul>
  );
};

export default IngredientsList;
