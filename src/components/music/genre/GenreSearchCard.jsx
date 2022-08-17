import React from "react";
import { Link } from "react-router-dom";
import { FaGripLines } from "react-icons/fa";

const GenreSearchCard = ({ searches }) => {
  return (
    <>
      {searches?.map((result) => (
        <div
          class="grid grid-cols-1 overflow-hidden border border-gray-100 m-5 rounded-lg group sm:grid-cols-3 max-h-fit"
          href=""
        >
          <div class="relative">
            <img
              class="absolute inset-0 object-cover w-full h-full"
              src={result?.album.cover_medium}
              alt=""
            />
          </div>

          <div class="p-8 sm:col-span-2">
            <ul class="flex space-x-1">
              {result?.explicit_lyrics ? (
                <li class="inline-block px-3 py-1 text-xs font-semibold text-white bg-error-content rounded-full">
                  Explicit
                </li>
              ) : (
                <li class="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full">
                  No Explicit Details
                </li>
              )}

              <li class="inline-block px-3 py-1 text-xs font-semibold text-white bg-accent rounded-full">
                Rank : {result?.rank}
              </li>
            </ul>

            <h5 class="my-5 font-bold text-center">{result.title}</h5>

            <div className="w-full py-4 p-3 flex flex-col flex-wrap items-center bg-success-content rounded-lg">
              <p className="text-white text-medium">
                By : {result.artist.name}
              </p>
              <FaGripLines className="my-1" />
              <p className="text-white text-medium">
                From : {result.album.title}
              </p>

              <FaGripLines className="my-1" />
              <p className="text-white text-medium">
                Duration : {Math.floor(result.duration / 60)} Minutes
              </p>
            </div>
            <Link to={`/track/${result.id}`} className="text-md text-white">
              <button class="mt-4 p-2 bg-primary hover:bg-secondary transition duration-500 ease-in-out text-sm text-white rounded-lg w-full">
                View Song
              </button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default GenreSearchCard;
