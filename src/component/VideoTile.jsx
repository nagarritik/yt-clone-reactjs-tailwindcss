import React from "react";

function VideoTile({ item }) {
  return (
    <a href="#">
      <div className="m-2 w-[400px] bg-gray-100 p-1 rounded">
        <img
          className="rounded-md"
          src={item.snippet.thumbnails.medium.url}
          alt=""
        />
        <h1>{item.snippet.title}</h1>
        <p>{item.snippet.channelTitle}</p>
      </div>
    </a>
  );
}

export default VideoTile;
