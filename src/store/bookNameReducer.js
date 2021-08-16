const defaultState = {
  bookName: "",
};

const CHANGE_BOOKNAME = "CHANGE_BOOKNAME";

export const bookNameReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_BOOKNAME:
      return { ...state, bookName: action.payload };
    default:
      return state;
  }
};

export const changeBookName = (payload) => ({
  type: CHANGE_BOOKNAME,
  payload,
});
