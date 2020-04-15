import React, { Fragment } from 'react';
import MissingIngredientsList from './MissingingredientsList';

const RecipeContent = ({ recipeData, missingIngredients }) => {
  const {
    image,
    title,
    extendedIngredients,
    analyzedInstructions,
    sourceUrl,
    creditsText,
  } = recipeData;
  return (
    <Fragment>
      <div className="pb-1/2 relative bg-gray-100">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={image}
          alt={title}
        />
      </div>
      <div className="p-6 border-b border-orange-200">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="text-sm text-gray-600 mb-4">
          From{' '}
          <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
            {creditsText}
          </a>
        </p>
        {missingIngredients.length ? (
          <p className="text-sm text-gray-600">
            Missing ingredients:{' '}
            <MissingIngredientsList missingIngredients={missingIngredients} />
          </p>
        ) : null}
      </div>
      <div className="p-6">
        <h3 className="text-xl mb-2">Ingredients</h3>
        <ul>
          {extendedIngredients.map((ingredient) => {
            return (
              <li className="text-sm text-gray-600 p-3 bg-gray-100 odd:bg-gray-200">
                {ingredient.original}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="p-6">
        {analyzedInstructions.length > 0 ? (
          <Fragment>
            <h3 className="text-xl mb-2">Instructions</h3>
            <ul>
              {analyzedInstructions[0].steps.map((step) => {
                return (
                  <li className="text-sm mb-3 flex items-baseline">
                    <span className="w-10 h-10 leading-10 bg-orange-600 text-white inline-block text-center rounded-full mr-2 flex-shrink-0">
                      {step.number}
                    </span>{' '}
                    <span>{step.step}</span>
                  </li>
                );
              })}
            </ul>
          </Fragment>
        ) : (
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-400"
          >
            Click for instructions
          </a>
        )}
      </div>
    </Fragment>
  );
};

export default RecipeContent;
