import React, { useState, useContext } from 'react';

const Header = () => {
  const [ingredient, setIngredient] = useState('');

  const onChange = e => {
    e.preventDefault();
    setIngredient(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log('Ingredient is...', ingredient);
  };
  return (
    <header className="bg-orange-400 min-h-40vh p-8 flex justify-center items-center">
      <div>
        <h1 className="text-white text-4xl leading-none text-center font-bold mb-12">
          What's in your kitchen?
        </h1>
        <form className="w-full max-w-sm relative" onSubmit={onSubmit}>
          <input
            type="text"
            name="ingredient"
            placeholder="Ex: apples"
            value={ingredient}
            onChange={onChange}
            className="bg-white px-4 py-3 pr-32 rounded-full w-full border border-orange-400 focus:outline-none focus:border-orange-700"
          />
          <button
            className="absolute top-0 right-0 min-h-full text-sm font-bold uppercase tracking-wider pr-3 w-32"
            type="submit"
          >
            Add to list
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
