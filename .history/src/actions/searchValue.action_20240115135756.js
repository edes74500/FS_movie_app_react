export const SET_INPUT_SEARCH_VALUE = "SET_INPUT_SEARCH_VALUE";

export const searchValue = (inputSearchValue) => {
  return {
    type: "SET_INPUT_SEARCH_VALUE",
    payload: inputSearchValue,
  };
};
