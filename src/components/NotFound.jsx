import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full">
      <aside class="overflow-hidden bg-accent transition duration-500 ease-in-out hover:bg-accent-focus sm:grid sm:grid-cols-2 sm:items-center">
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="max-w-xl mx-auto text-center sm:text-left">
            <h2 class="text-2xl font-bold text-white md:text-3xl">
              Oops! This page is unavailable!
            </h2>

            <p class="hidden text-gray-300 md:mt-4 md:block">
              The page you requested is unavailable. Try searching for something
              else! Click below to be taken back to the search page!
            </p>

            <div class="mt-4 md:mt-8">
              <Link
                to="/musicSearch"
                class="inline-block px-12 py-3 text-sm font-medium text-white transition rounded bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Return To Search
              </Link>
            </div>
          </div>
        </div>

        <img
          alt="#"
          src="https://s.yimg.com/uu/api/res/1.2/y9u48_LU3lV5XQ9kfGdVxg--~B/aD00MTI7dz02MTg7YXBwaWQ9eXRhY2h5b24-/http://media.zenfs.com/en_US/News/TheWrap/Kanye_West_Cries_Through_His-625d4a7b7f7261bdce72739a6bbe8597"
          class="object-cover w-full h-full sm:h-[calc(100%_-_2rem)] md:h-[calc(100%_-_4rem)] sm:rounded-tl-[30px] md:rounded-tl-[60px] sm:self-end"
        />
      </aside>
    </div>
  );
};

export default NotFound;
