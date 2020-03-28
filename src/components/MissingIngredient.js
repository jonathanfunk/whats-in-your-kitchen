import React, { useState, useContext, Fragment } from 'react';
import { GlobalContext } from '../context/GlobalState';

const MissingIngredient = ({ missingIngredient }) => {
  const [checked, setChecked] = useState(false);

  const { addIngredient } = useContext(GlobalContext);

  const addMissingIngredient = missingIngredient => {
    const newIngredient = {
      id: Math.floor(Math.random() * 100000000),
      value: missingIngredient
    };
    addIngredient(newIngredient);
    setChecked(true);
  };

  return (
    <Fragment>
      {!checked ? (
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
      ) : (
        <div className="bg-green-600 text-white rounded-full w-6 h-6 leading-6 m-auto">
          ✓
        </div>
      )}
    </Fragment>
  );
};

export default MissingIngredient;
