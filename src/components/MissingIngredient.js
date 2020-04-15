import React, { useState, useContext, Fragment } from 'react';
import { GlobalContext } from '../context/GlobalState';

const MissingIngredient = ({ ingredient }) => {
  const [checked, setChecked] = useState(false);

  const { addIngredient, ingredients } = useContext(GlobalContext);

  const addMissingIngredient = (ingredient) => {
    const newIngredient = {
      id: Math.floor(Math.random() * 100000000),
      value: ingredient,
    };
    addIngredient(newIngredient);
    setChecked(true);
  };

  const ingredientAdded = ingredients.filter((newIngredient) => {
    return ingredient === newIngredient.value;
  });

  return (
    <Fragment>
      {!ingredientAdded.length ? (
        <div
          className="bg-orange-500 px-2 inline-block rounded-full mx-1 mb-2 cursor-pointer text-white hover:bg-orange-400"
          onClick={() => addMissingIngredient(ingredient)}
        >
          {ingredient}
          <span className="px-1 text-green-600">+</span>
        </div>
      ) : null}
    </Fragment>
  );
};

export default MissingIngredient;
