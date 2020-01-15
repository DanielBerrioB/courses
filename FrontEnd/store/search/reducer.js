import { typeAction } from "./action";

const initialState = { searchValue: "" };

export default (state = initialState, action) => {
  if (action.type === typeAction) {
    return {
      ...state,
      searchValue: action.payload
    };
  }
  return state;
};
