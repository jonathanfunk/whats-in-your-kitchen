import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  ingredients: [],
  recipes: null,
  loading: false
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteIngredient(id) {
    dispatch({
      type: 'DELETE_INGREDIENT',
      payload: id
    });
  }

  function addIngredient(Ingredient) {
    dispatch({
      type: 'ADD_INGREDIENT',
      payload: Ingredient
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        ingredients: state.ingredients,
        deleteIngredient,
        addIngredient
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
