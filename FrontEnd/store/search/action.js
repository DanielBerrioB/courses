const typeAction = "SEARCH";

const updateSearch = searchValue => {
  return {
    type: typeAction,
    payload: searchValue
  };
};

export default updateSearch;
export { typeAction };
