import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddIngredient = () => {
  const [ingredient, setIngredient] = useState('');
  const { addIngredient } = useContext(GlobalContext);

  const onChange = e => {
    e.preventDefault();
    setIngredient(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const newIngredient = {
      id: Math.floor(Math.random() * 100000000),
      ingredient
    };
    addIngredient(newIngredient);
    setIngredient('');
  };
  return (
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
  );
};

export default AddIngredient;
