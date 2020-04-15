import React from 'react';
import MissingIngredient from './MissingIngredient';

const MissingInngredientsList = ({ missingIngredients }) => {
  return (
    <div>
      {missingIngredients.map((ingredient) => (
        <MissingIngredient key={ingredient.id} ingredient={ingredient.name} />
      ))}
    </div>
  );
};

export default MissingInngredientsList;
