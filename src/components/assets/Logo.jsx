import React from "react";
import { FaMusic } from "react-icons/fa";
import Link from "react-router-dom";
import img from "./AniMusicLogo.png";

const Logo = ({ height, width }) => {
  return (
    // <div className="p-2 flex items-center ">
    //   <h1 className="mx-2">AniMusic</h1>
    //   <FaMusic />
    // </div>
    <img height={height} width={width} src={img} />
  );
};

export default Logo;
