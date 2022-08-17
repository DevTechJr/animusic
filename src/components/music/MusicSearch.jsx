import React from "react";

const MusicSearch = () => {
  return (
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
        <div class="form-control">
          <div class="input-group active:border-accent">
            <input
              type="text"
              placeholder="e.g. I Feel It Coming"
              class="input input transition duration-500 ease-in-out input-secondary w-full"
            />
            <button class="btn btn-square bg-secondary hover:bg-accent transition duration-500 ease-in-out">
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
  );
};

export default MusicSearch;
