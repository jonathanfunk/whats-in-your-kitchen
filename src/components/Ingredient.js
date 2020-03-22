import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Ingredient = ({ ingredient }) => {
  const { deleteIngredient } = useContext(GlobalContext);

  return (
    <li>
      {ingredient.value}
      <button onClick={() => deleteIngredient(ingredient.id)}>x</button>
    </li>
  );
};

export default Ingredient;
