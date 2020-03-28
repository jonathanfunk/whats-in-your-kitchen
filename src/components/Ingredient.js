import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Ingredient = ({ ingredient }) => {
  const { deleteIngredient } = useContext(GlobalContext);

  return (
    <li
      className="bg-orange-100 px-2 inline-block rounded-full mx-1 mb-2 cursor-pointer hover:bg-orange-200"
      onClick={() => deleteIngredient(ingredient.id)}
    >
      {ingredient.value}
      <span className="px-1 text-red-600">x</span>
    </li>
  );
};

export default Ingredient;
