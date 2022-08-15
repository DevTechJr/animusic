import React from "react";
import { FaMusic } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "./assets/Logo";

const Home = () => {
  return (
    <aside>
      <div class="px-4 py-8 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div class="p-8 bg-primary-content md:p-12 lg:px-16 lg:py-24">
            <div class="max-w-xl mx-auto text-center">
              <h1 class="text-3xl font-bold text-primary md:text-3xl  flex justify-center">
                <Logo height={200} width={300} />
              </h1>
              <h3 class="text-xl font-bold text-primary-focus md:text-xl">
                The One-Stop Music Index For All Listeners!
              </h3>

              <p class="hidden sm:block sm:mt-4 text-primary/90 font-medium">
                AniMusic &copy; is a free tool available to everyone to find
                information about their favorite music artists, songs and genre!
                Using data provided by the <i>Genius Music API 💡</i>, this tool
                retrieves information about a given artist, their songs and
                collabs! Just simply type in an artist name or song and get
                results!
              </p>
              <div class="relative border border-gray-200 rounded-lg shadow-lg w-3/4 mr-auto ml-auto bg-warning my-4 ">
                <div class="flex items-center p-4 ">
                  <img
                    class="object-cover w-16 h-16 rounded-lg"
                    src="https://images.genius.com/f4a8b5176073cd8f0a4c609e7a64e1f0.1000x1000x1.png"
                    alt=""
                  />

                  <div class="ml-3 overflow-hidden">
                    <p className="text-black font-semibold">
                      Powered By{" "}
                      <span className="font-bold">Genius Music API</span>
                    </p>
                    <p class="max-w-xs text-sm text-accent-content font-semibold">
                      Music Data sourced from{" "}
                      <i>
                        <a href="https://genius.com/">https://genius.com/</a>
                      </i>
                    </p>
                  </div>
                </div>
              </div>

              <div class="mt-4 md:mt-8">
                <Link
                  to="/musicSearch"
                  class="inline-block px-12 py-3 text-sm font-medium text-primary transition bg-white border border-white rounded hover:bg-primary hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Start Your Search!
                </Link>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <img
              alt="#"
              src="https://pyxis.nymag.com/v1/imgs/c43/0b1/19a6bc7cb4a911338c16a4465fac6c3a92-feature-lede-rap-final.rhorizontal.w1100.jpg"
              class="object-cover w-full h-40 sm:h-56 md:h-full"
            />

            <img
              alt="#"
              src="https://www.maroon5.com/sites/g/files/aaj10126/f/styles/suzuki_breakpoints_image_tablet_4x3/public/photo/202004/08/IMG_4194.jpg"
              class="object-cover w-full h-40 sm:h-56 md:h-full"
            />
          </div>
        </div>
        <div className="w-full text-center p-3 my-10">
          <div class="space-y-4">
            <details
              class="p-6 border-l-4 border-green-500 bg-primary-content group"
              open
            >
              <summary class="flex items-center justify-between cursor-pointer">
                <h5 class="text-lg font-medium text-accent-focus">
                  How does this website work?
                </h5>

                <span class="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p class="mt-4 leading-relaxed text-accent-focus">
                It's simple! AniMusic is a search engine created to provide
                users information about music! Our search page allows users to
                find details about tracks, albums, artists and even get helpful
                previews of songs! Try it today!
              </p>
            </details>

            <details class="p-6 border-l-4 border-green-500 bg-primary-content group">
              <summary class="flex items-center justify-between cursor-pointer">
                <h5 class="text-lg font-medium text-accent-focus">
                  Where do the results come from?
                </h5>

                <span class="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p class="mt-4 leading-relaxed text-accent-focus">
                The results provided are directly extracted from data provided
                by the Genius Music API and Deezer Dev API.
              </p>
            </details>
          </div>
        </div>
        <div className="w-full text-center font-semibold text-gray text-2xl mt-7 uppercase">
          <h2>This App Is Powered By :</h2>
        </div>
        <div className="companies w-full flex items-center justify-evenly">
          <img
            className="w-1/6 grayscale hover:grayscale-0 transition ease-in-out duration-500"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Deezer_logo.svg/1280px-Deezer_logo.svg.png"
          />

          <img
            className="w-1/6  grayscale hover:grayscale-0 transition ease-in-out duration-500"
            src="http://images.rapgenius.com/b857207c5de745512bc377284199d781.1000x313x1.png"
          />
          <img
            className="w-1/6  grayscale hover:grayscale-0 transition ease-in-out duration-500"
            src="https://rapidapi.com/wp-content/uploads/2021/02/rapidapi-logo.png"
          />
          <img
            className="w-1/6  grayscale hover:grayscale-0 transition ease-in-out duration-500"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Heroku_logo.svg/2560px-Heroku_logo.svg.png"
          />
          <img
            className="w-1/6  grayscale hover:grayscale-0 transition ease-in-out duration-500"
            src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png"
          />
        </div>
      </div>
    </aside>
  );
};

export default Home;
