import React from "react";
import { useContext, useEffect } from "react";
import GenreContext from "./context/GenreContext";
import MusicPlaylist from "./MusicPlaylist";
import { Link } from "react-router-dom";
import { useState } from "react";
import RadioCard from "./RadioCard";
const MusicRadio = () => {
  const { getGenres, genreList } = useContext(GenreContext);
  const [genrePic, setGenrePic] = useState({});
  const [genreData, setGenreData] = useState([]);
  useEffect(() => {
    getGenres();
  }, []);

  return (
    <div className="flex flex-col w-full justify-evenly items-center">
      <h1 className="text-3xl font-semibold text-secondary my-10 hover:text-primary transition linear duration-400 ">
        Explore New Artists By Genre :
      </h1>
      <div className="grid grid-cols-3 gap-4 w-full">
        {genreList.map((genre) => (
          <RadioCard genre={genre} />
        ))}
      </div>
    </div>
  );
};

export default MusicRadio;
