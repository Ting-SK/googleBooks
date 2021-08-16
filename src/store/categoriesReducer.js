const defaultState = {
  categories: "",
};

const CHANGE_CATEGORIES = "CHANGE_CATEGORIES";

export const categoriesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};

export const changeCategories = (payload) => ({
  type: CHANGE_CATEGORIES,
  payload,
});
