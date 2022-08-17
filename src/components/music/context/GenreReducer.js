export const GenreReducer = (state, action) => {
  switch (action.type) {
    case "SET_GENRE":
      return { ...state, genreList: action.payload.data };
    case "ADD_RADIO-DATA":
      return { ...state, radioData: action.payload };
    case "GET_GENRE_PIC":
      return { ...state, genrePic: action.payload.response.picture_medium };
  }
};
