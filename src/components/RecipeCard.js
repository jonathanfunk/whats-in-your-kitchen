import React from 'react';

const RecipeCard = ({ title, image }) => {
  return (
    <li>
      <h1>{title}</h1>
      <img src={image} alt={title} />
    </li>
  );
};

export default RecipeCard;
