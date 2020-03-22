import React from 'react';
import AddIngredient from './AddIngredient';
import IngredientsList from './IngredientsList';

const Header = () => {
  return (
    <header className="bg-orange-400 min-h-40vh p-8 flex justify-center items-center">
      <div>
        <h1 className="text-white text-4xl leading-none text-center font-bold mb-12">
          What's in your kitchen?
        </h1>
        <AddIngredient />
        <IngredientsList />
      </div>
    </header>
  );
};

export default Header;
