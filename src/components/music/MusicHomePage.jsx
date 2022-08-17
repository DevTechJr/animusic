import React from "react";
import MusicSearch from "./MusicSearch";
import MusicRadio from "./MusicRadio";

const MusicHomePage = () => {
  return (
    <div className="flex flex-col p-2">
      <MusicSearch />

      <div class="divider my-20">OR</div>
      <MusicRadio />
    </div>
  );
};

export default MusicHomePage;
