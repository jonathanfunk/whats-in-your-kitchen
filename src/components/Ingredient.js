import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Ingredient = ({ ingredient }) => {
  const { deleteIngredient } = useContext(GlobalContext);

  return (
    <li
      className="bg-orange-100 px-2 inline-block rounded-full mr-1"
      onClick={() => deleteIngredient(ingredient.id)}
    >
      {ingredient.value}
    </li>
  );
};

export default Ingredient;
