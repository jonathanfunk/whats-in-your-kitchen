import React, { useState, useContext, Fragment } from 'react';
import { GlobalContext } from '../context/GlobalState';

const MissingIngredient = ({ missingIngredient }) => {
  const [checked, setChecked] = useState(false);

  const { addIngredient, ingredients } = useContext(GlobalContext);

  const addMissingIngredient = missingIngredient => {
    const newIngredient = {
      id: Math.floor(Math.random() * 100000000),
      value: missingIngredient
    };
    addIngredient(newIngredient);
    setChecked(true);
  };

  const ingredientAdded = ingredients.filter(ingredient => {
    return missingIngredient === ingredient.value;
  });

  let missingIngredientItems;
  if (ingredientAdded.length === 0) {
    missingIngredientItems = (
      <Fragment>
        Missing:
        <div
          className="bg-orange-100 px-2 inline-block rounded-full mx-1 mb-2 cursor-pointer text-black hover:bg-orange-200"
          onClick={() => addMissingIngredient(missingIngredient)}
        >
          {missingIngredient}
          <span className="px-1 text-green-600">+</span>
        </div>
      </Fragment>
    );
  } else {
    missingIngredientItems = null;
  }

  return <Fragment>{missingIngredientItems}</Fragment>;
};

export default MissingIngredient;
