const defaultState = {
  value: " ",
};

const CHANGE_VALUE = "CHANGE_VALUE";

export const valueReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

export const changeValue = (payload) =>({type: CHANGE_VALUE, payload})