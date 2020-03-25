import React from 'react';
import AddIngredient from './AddIngredient';
import IngredientsList from './IngredientsList';

const Header = () => {
  return (
    <header className="header">
      <div>
        <h1 className="text-white text-4xl leading-none text-center font-semibold mb-8">
          What's in your kitchen?
        </h1>
        <AddIngredient />
        <IngredientsList />
      </div>
    </header>
  );
};

export default Header;
