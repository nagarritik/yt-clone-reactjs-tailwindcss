import React from "react";

function VideoTile({ item }) {
  return (
    <a href="/">
      <div className="m-2 w-[400px] rounded">
        <img
          className="rounded-md w-full"
          src={item.snippet.thumbnails.medium.url}
          alt=""
        />
        <h1 className="font-medium">{item.snippet.title}</h1>
        <p>{item.snippet.channelTitle}</p>
      </div>
    </a>
  );
}

export default VideoTile;
