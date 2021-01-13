const rootReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_ARTICLE_INDEX":
      return {
        ...state,
        articles: action.payload.articles,
      };
    default:
      return state;
  }
};

export default rootReducer;
