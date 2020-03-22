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
      return {
        ...state,
        ingredients: [action.payload, ...state.ingredients]
      };
    default:
      return state;
  }
};
