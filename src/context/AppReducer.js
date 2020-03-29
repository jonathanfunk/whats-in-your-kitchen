export default (state, action) => {
  switch (action.type) {
    case 'DELETE_INGREDIENT':
      return {
        ...state,
        ingredients: state.ingredients.filter(
          ingredient => ingredient.id !== action.payload
        )
      };
    case 'ADD_INGREDIENT':
      console.log('Action payload is...', action.payload);
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    default:
      return state;
  }
};
