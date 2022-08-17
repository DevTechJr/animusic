import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ArtistCard = () => {
  const { artistId } = useParams();
  const [artistData, setArtistData] = useState(null);

  const getArtistData = (artistId) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "64221a0798msh645636fe090b535p10ece0jsna9e0ae35c6d6",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/artist/${artistId}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setArtistData(response))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getArtistData(artistId);
  }, [artistId]);
  return (
    <div className="w-full flex justify-center">
      <div className="w-3/4  bg-secondary rounded-lg p-5">
        <div class="card lg:card-side bg-base-100 shadow-xl flex items-center justify-center">
          <figure>
            <img src={artistData?.picture_big} alt="Album" />
          </figure>
          <div class="w-full card-body items-center flex justify-center">
            <h2 class="font-bold text-2xl text-white">{artistData?.name}</h2>
            <a
              className="badge badge-primary badge-outline p-3"
              href={artistData?.link}
            >
              View {artistData?.name}'s Deezer Music Profile
            </a>
            <div class="stats shadow">
              <div class="stat">
                <div class="stat-figure text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </div>
                <div class="stat-title">Total Fans</div>
                <div class="stat-value text-primary">{artistData?.nb_fan}</div>
              </div>

              <div class="stat w-full">
                <div class="stat-figure text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div class="stat-title">Total Albums</div>
                <div class="stat-value text-secondary">
                  {artistData?.nb_album}
                </div>
              </div>
            </div>
            <div class=" w-3/5">
              <button
                target="_blank"
                class="btn btn-primary w-full my-10 text-white text-lg normal-case"
              >
                <a target="_blank" href={artistData?.share}>
                  <span className=" mx-1 text-primary-content text-semibold">
                    {artistData?.name}'s
                  </span>{" "}
                  Live Radio Mix
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
