const defaultState = {
  sorting: "relevance",
};

const CHANGE_SORTING = "CHANGE_SORTING";

export const sortingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_SORTING:
      return { ...state, sorting: action.payload };
    default:
      return state;
  }
};

export const changeSorting = (payload) => ({
  type: CHANGE_SORTING,
  payload,
});
