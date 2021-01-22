const initialState = {
  articles: [],
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PEOPLE":
      return {
        ...state,
        articles: [...state.articles, action.payload],
      };
    case "DELETE_PEOPLE":
      return {
        ...state,
        articles: state.articles.filter((e) => e.id !== action.payload),
      };

    case "UPDATE_PEOPLE":
      const x = state.articles.map((e) =>
        e.id === action.payload.idholder
          ? { ...e, name: action.payload.edit }
          : e
      );

      return { ...state, articles: x };

    default:
      return state;
  }
};

export default peopleReducer;
