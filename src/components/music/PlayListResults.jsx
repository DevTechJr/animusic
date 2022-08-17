import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const PlayListResults = () => {
  const { radioID } = useParams();
  const [radioData, setRadioData] = useState(null);
  const getRadio = (id) => {
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
        setRadioData(response);
        console.log(response);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getRadio(radioID);
  }, [radioID]);

  return (
    <div className="p-5 w-full flex justify-center items-center">
      <div className="card w-3/5 p-5 rounded-lg bg-secondary flex flex-col items-center justify-center">
        <h1 className="text-2xl text-white font-bold my-5">
          {radioData?.title} Radio Mix
        </h1>
        <img src={radioData?.picture_medium} />
        <button className="w-1/3 my-10 p-3 bg-accent hover:bg-accent-focus rounded-full">
          <a className="text-white font-semibold" href={radioData?.share}>
            Listen Now on Deezer
          </a>
        </button>
        <p className="warning text-medium font-medium text-success-content underline">
          Note : You may need a Deezer account to access music content provided
          by the API
        </p>
      </div>
    </div>
  );
};

export default PlayListResults;
