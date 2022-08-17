import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import { FaPlay, FaDownload, FaRegEye } from "react-icons/fa";

const TrackCard = () => {
  const { trackId } = useParams();
  const [track, setTrack] = useState(null);
  const getTrack = (id) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "64221a0798msh645636fe090b535p10ece0jsna9e0ae35c6d6",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    fetch(`https://deezerdevs-deezer.p.rapidapi.com/track/${trackId}`, options)
      .then((response) => response.json())
      .then((response) => setTrack(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getTrack(trackId);
  }, [trackId]);

  return (
    <div className="w-full flex justify-center">
      <div className="w-3/4 bg-primary-focus p-5 h-full rounded-lg flex flex-col items-center">
        <div className="header flex flex-col w-full items-center">
          <h1 className="text-white mt-5 font-bold text-4xl uppercase">
            {track?.title}
          </h1>
          <div className="w-full flex justify-evenly items-center my-8">
            <p className="text-white font-bold text-2xl uppercase">
              By :{" "}
              <Link to={`/artist/${track?.artist?.id}`}>
                <span
                  title="View Artist Profile"
                  className="text-accent hover:text-accent-focus transition duration-500 ease-in-out"
                >
                  {track?.artist?.name}
                </span>
              </Link>
            </p>
            <p className="text-white font-bold text-2xl uppercase">
              Found on :{" "}
              <Link to={`/album/${track?.album?.id}`}>
                <span
                  title="View Album"
                  className="text-accent hover:text-accent-focus transition duration-500 ease-in-out"
                >
                  {track?.album?.title}
                </span>{" "}
              </Link>
              (Album)
            </p>
          </div>
        </div>
        {/* Img here */}
        <img
          className="my-10 rounded-lg border border-white"
          src={track?.album.cover_big}
        />
        <div className="w-full flex items-center justify-evenly mb-10">
          <div className="preview">
            <p className="flex items-center text-white text-md font-semibold mb-4">
              Preview The Track :
              <FaRegEye className="ml-5 text-xl" />
              <FaDownload className="ml-5 text-xl" />
            </p>
            <ReactAudioPlayer src={track?.preview} controls />
          </div>
          <button className="py-4 px-6 mt-10 mb-8 w-1/4 rounded-full bg-accent hover:bg-accent:focus transition duration-500">
            <a
              className="text-white font-semibold text-md flex justify-evenly items-center"
              href={track?.link}
            >
              Listen To Full Track <FaPlay className="text-2xl" />
            </a>
          </button>
        </div>
        <div>
          <div class="stats shadow">
            <div class="stat place-items-center">
              <div class="stat-title">Duration</div>
              <div class="stat-value">{track?.duration}</div>
              <div class="stat-desc">Seconds</div>
            </div>

            <div class="stat place-items-center">
              <div class="stat-title">BPM</div>
              <div class="stat-value text-secondary">{track?.bpm}</div>
              <div class="stat-desc text-secondary">Beats Per Minute</div>
            </div>

            <div class="stat place-items-center">
              <div class="stat-title">Access</div>
              <div class="stat-value">{track?.available_countries?.length}</div>
              <div class="stat-desc">
                Available in {track?.available_countries?.length} Countries
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackCard;
