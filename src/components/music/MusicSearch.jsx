import React, { useState } from "react";
import GenreSearchCard from "./genre/GenreSearchCard";

const MusicSearch = () => {
  const [songs, setSongs] = useState(null);
  const [search, setSearch] = useState("");

  const getSongs = (search) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "64221a0798msh645636fe090b535p10ece0jsna9e0ae35c6d6",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/search?q=${search}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setSongs(response))
      .catch((err) => console.error(err));
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.length === 0 || !search) {
      alert("No Input Provided! Please gimme something to search bro.");
      setSearch("");
    } else {
      getSongs(search);
      setSearch("");
    }
  };

  return (
    <div className="w-full p-3">
      <div className="musicSearch w-full">
        <form className="w-full flex flex-col justify-center items-center">
          <label className="text-3xl font-semibold text-primary transition duration-300 ease-in-out hover:text-secondary my-5">
            Search For Artists, Tracks, Albums and More!
          </label>
          {/* <input
          type="text"
          placeholder="e.g I Feel It Coming The Weeknd"
          class="input-lg input active:input-accent transition duration-500 ease-in-out input-secondary w-full max-w-xs my-7"
        /> */}
          <div class="form-control mb-10">
            <div class="input-group active:border-accent">
              <input
                type="text"
                value={search}
                placeholder="e.g. I Feel It Coming"
                class="input input transition duration-500 ease-in-out input-secondary w-full"
                onChange={handleChange}
              />
              <button
                onClick={handleSubmit}
                class="btn btn-square bg-secondary hover:bg-accent transition duration-500 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="mt-10 flex justify-center items-center flex-wrap grid grid-cols-2">
        <GenreSearchCard searches={songs?.data} />
      </div>
    </div>
  );
};

export default MusicSearch;
