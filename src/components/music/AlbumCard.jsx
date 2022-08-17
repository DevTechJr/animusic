import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AlbumCard = () => {
  const { albumId } = useParams();
  const [album, setAlbum] = useState(null);

  const getAlbum = (id) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "64221a0798msh645636fe090b535p10ece0jsna9e0ae35c6d6",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    fetch(`https://deezerdevs-deezer.p.rapidapi.com/album/${id}`, options)
      .then((response) => response.json())
      .then((response) => setAlbum(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAlbum(albumId);
  }, [albumId]);

  return (
    <div className="w-full flex justify-center">
      <div className="w-3/4  bg-secondary rounded-lg p-5">
        <div class="card lg:card-side bg-base-100 shadow-xl flex items-center justify-center">
          <figure>
            <img src={album?.cover_big} alt="Album" />
          </figure>
          <div class="w-full card-body items-center flex justify-center">
            <h2 class="font-bold text-2xl text-white">{album?.title}</h2>
            <a
              className="badge badge-primary badge-outline p-3"
              href={album?.link}
              target="_blank"
            >
              View The Album
            </a>
            <div className="w-3/4 flex p-3 justify-between">
              <p className="mx-2 px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full text-center">
                Released : {album?.release_date}
              </p>
              {album?.explicit_lyrics ? (
                <li class="mx-2 px-3 py-1 text-xs font-semibold text-white bg-error-content rounded-full">
                  Explicit
                </li>
              ) : (
                <li class="mx-2 px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full">
                  No Explicit Details
                </li>
              )}
            </div>
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
                <div class="stat-title">Total Listens</div>
                <div class="stat-value text-primary">{album?.fans}</div>
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
                <div class="stat-title">Total Tracks</div>
                <div class="stat-value text-secondary">{album?.nb_tracks}</div>
              </div>
            </div>
            <div class="stat w-1/2">
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
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <div class="stat-title">Duration</div>
              <div class="stat-value text-primary">
              {Math.floor(album?.duration / 60)} Mins
              </div>
            </div>
            <div class=" w-3/5">
              <button
                target="_blank"
                class="btn btn-primary w-full my-10 text-white text-lg normal-case"
              >
                <a target="_blank" href={album?.share}>
                  <span className=" mx-1 text-primary-content text-semibold">
                    {album?.title}
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

export default AlbumCard;
