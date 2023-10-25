import React from "react";
import { Link } from "react-router-dom";

function VideoTile({ item }) {
  return (
    <Link to="/video">
      <div className="m-2 w-[400px] rounded">
        <img
          className="rounded-md w-full"
          src={item.snippet.thumbnails.medium.url}
          alt=""
        />
        <h1 className="font-medium">{item.snippet.title}</h1>
        <p>{item.snippet.channelTitle}</p>
      </div>
    </Link>
  );
}

export default VideoTile;
