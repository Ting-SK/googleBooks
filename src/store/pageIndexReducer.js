const defaultState = {
  pageIndex: 1,
};

const CHANGE_PAGEINDEX = "CHANGE_PAGEINDEX";

export const pageIndexReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_PAGEINDEX:
      return { ...state, pageIndex: action.payload };
    default:
      return state;
  }
};

export const changePageIndex = (payload) => ({
  type: CHANGE_PAGEINDEX,
  payload,
});
