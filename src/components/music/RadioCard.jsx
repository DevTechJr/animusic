import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const RadioCard = ({ genre }) => {
  const [genrePic, setGenrePic] = useState("");

  const getGenrePic = async (id) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c669378587msh101d6e8892170bep1d21bbjsnb312ae43d7cf",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    fetch(`https://deezerdevs-deezer.p.rapidapi.com/genre/${id}`, options)
      .then((response) => response.json())
      .then((response) => {
        let imgurl = response.picture_medium;
        setGenrePic(imgurl);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getGenrePic(genre.id);
  }, []);

  return (
    <div
      className="card p-5 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${genrePic})` }}
    >
      <div className="cardBody backdrop-blur-md p-5 flex flex-col justify-start items-center">
        <h1 className="text-2xl font-semibold text-primary">{genre?.title}</h1>
        <Link
          to={`/genre/${genre?.id}`}
          className="rounded-lg  bg-accent mt-5 text-md text-white p-5 flex items-center justify-center"
        >
          Explore This Genre
          <FaExternalLinkAlt className="ml-5 w-5 h-5 text-white" />
        </Link>
        {/* <img className="w-1/2 rounded-lg my-10" src={genrePic} /> */}
        {/* <button onClick={() => }>Click Me</button> */}

        {/* {<MusicPlaylist list={genre.radios} />} */}
      </div>
    </div>
  );
};

export default RadioCard;
