import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const MusicPlaylist = ({ list }) => {
  const [listItems, setListItems] = useState(list);
  try {
    return (
      <div className="flex w-5/6 flex-wrap justify-evenly items-center">
        {list.map((playlist) => (
          <div class="button bg-accent transition duration-300 linear hover:bg-accent-focus my-2 px-10 rounded-lg py-5 text-white flex flex-col items-center justify-center">
            <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
            <img
              className="w-10 h-10 m-2 rounded"
              src={playlist.picture_small}
            />
          </div>
        ))}
      </div>
    );
  } catch (err) {}
};

export default MusicPlaylist;
