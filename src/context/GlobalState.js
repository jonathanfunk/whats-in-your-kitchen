import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  ingredients: JSON.parse(localStorage.getItem('ingredients')) || [],
  faves: JSON.parse(localStorage.getItem('faves')) || [],
  recipes: null,
  loading: false,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem('ingredients', JSON.stringify(state.ingredients));
    localStorage.setItem('faves', JSON.stringify(state.faves));
  }, [state.ingredients, state.faves]);

  // Actions
  function deleteIngredient(id) {
    dispatch({
      type: 'DELETE_INGREDIENT',
      payload: id,
    });
  }
  function addIngredient(ingredient) {
    dispatch({
      type: 'ADD_INGREDIENT',
      payload: ingredient,
    });
  }
  function deleteFave(id) {
    dispatch({
      type: 'DELETE_FAVE',
      payload: id,
    });
  }
  function addFave(fave) {
    dispatch({
      type: 'ADD_FAVE',
      payload: fave,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        ingredients: state.ingredients,
        faves: state.faves,
        deleteIngredient,
        addIngredient,
        deleteFave,
        addFave,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
