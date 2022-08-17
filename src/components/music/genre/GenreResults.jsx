import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { useEffect } from "react";
import GenreContext from "../context/GenreContext";
import GenreCard from "./GenreCard";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const GenreResults = () => {
  const { genreList, getGenres, getRadioLinks, radioData } =
    useContext(GenreContext);

  // const [radioArr, setRadioArr] = useState([...radioData]);

  const { genreId } = useParams();
  const [result] = genreList.filter((genre) => genre.id == genreId);
  const [radios, setRadios] = useState(null);

  useEffect(() => {
    getGenres();
    setRadios(result?.radios);
  }, [result]);

  // getRadioLinks(result?.radios);

  // const updatedRadioArr = radioData;

  return (
    <div className="">
      <section class="text-white bg-primary">
        <div class="max-w-screen-xl px-4 py-32 mx-auto lg:items-center lg:flex">
          <div class="max-w-3xl mx-auto text-center">
            <h1 class="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-white  to-primary-content">
              {result?.title}
            </h1>

            <p class="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
              Listen to {result?.title} radio mixes, tracks and view popular
              songs listened to from this genre below!
            </p>

            <div class="flex flex-wrap justify-center gap-4 mt-8">
              <button
                class="block w-full px-12 py-3 text-sm font-medium text-white bg-accent border border-accent-focus rounded sm:w-auto active:text-opacity-75 hover:bg-accent-focus transition duration-500 ease-in-out hover:text-white focus:outline-none focus:ring"
                href="#radio"
              >
                View Live Radio Mixes
              </button>

              <button class="block w-full px-12 py-3 text-sm font-semibold text-white border border-white rounded sm:w-auto hover:text-accent active:text-white transition duration-500 ease-in-out hover:bg-white active:bg-primary-content focus:outline-none focus:ring">
                Discover Top Songs
              </button>
            </div>
          </div>
        </div>
      </section>
      <div
        id="radio"
        className="my-10 flex flex-col justify-center items-center"
      >
        <h1 className="my-5 text-3xl font-bold text-white flex items-center">
          Listen To Live {result?.title} Radio Mixes For Free!
          <FaPlay className="mx-5" />
        </h1>
        <div className=" flex justify-center items-center flex-wrap grid grid-cols-3">
          {radios?.map((station) => (
            <Link to={`/radio/${station.id}`} className="w-full m-10">
              <div
                className="card p-5 w-5/6 bg-cover bg-no-repeat bg-center flex justify-center items-center hover:border-double hover:border-4 hover:border-primary transition duration-500 ease-in-out"
                style={{ backgroundImage: `url(${station.picture_medium})` }}
              >
                <div className="backdrop-blur-lg hover:backdrop-blur-xl transition duration-500 ease-in-out w-3/4 p-4 flex flex-col items-center justify-center">
                  <h1 className="text-secondary-focus font-bold text-3xl">
                    {station.title}
                  </h1>
                  <h3 className="text-secondary-content text-xl">
                    Station ID : {station.id}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenreResults;
