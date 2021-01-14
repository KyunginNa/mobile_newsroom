const rootReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_ARTICLE_INDEX":
      return {
        ...state,
        articles: action.payload.articles,
      };
    case "SET_CURRENT_ARTICLE":
      return {
        ...state,
        currentArticle: action.payload.article,
      };
    default:
      return state;
  }
};

export default rootReducer;
