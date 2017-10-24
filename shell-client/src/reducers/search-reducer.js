const initialState = {
  searchItems: [],
}

const SearchResults = (state = initialState, action ={}) => {
  switch (action.type) {
    case 'ADD_SEARCH_ITEM':
      return {
        ...state,
        searchItems: action.mediaData,
      }
    default:
      return state;
  }
}

export default SearchResults;
