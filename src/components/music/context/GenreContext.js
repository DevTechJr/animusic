import { createContext } from "react";
import { useContext, useReducer } from "react";
import { GenreReducer } from "./GenreReducer";
import data from "./GenreData";

const GenreContext = createContext();

export const GenreProvider = ({ children }) => {
  const initialState = {
    genreList: [],
    genrePic: "",
    radioData: [],
  };

  const [state, dispatch] = useReducer(GenreReducer, initialState);

  const getGenres = () => {
    dispatch({ type: "SET_GENRE", payload: data });
  };

  const getRadioLinksData = (id, radioLength) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "64221a0798msh645636fe090b535p10ece0jsna9e0ae35c6d6",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    fetch(`https://deezerdevs-deezer.p.rapidapi.com/radio/${id}`, options)
      .then((response) => response.json())
      .then((response) => {
        if (!initialState.radioData.includes(response.id)) {
          initialState.radioData.push(response);
        }
      })
      .catch((err) => console.error(err));
  };

  const getRadioLinks = (radios) => {
    //map through radios

    radios?.forEach((radio) => {
      getRadioLinksData(radio?.id, radios.length);
    });
  };

  return (
    <GenreContext.Provider
      value={{
        getGenres,
        genreList: state.genreList,
        getRadioLinks,
        radioData: initialState?.radioData,
      }}
    >
      {children}
    </GenreContext.Provider>
  );
};

export default GenreContext;
