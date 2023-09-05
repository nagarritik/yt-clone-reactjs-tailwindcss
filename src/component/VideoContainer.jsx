import React, { useEffect, useState } from "react";
import VideoTile from "./VideoTile";

function VideoContainer() {
  const [videoResult, setVideoResult] = useState([]);

  useEffect(() => {
    fetchVideo();
  }, []);

  const fetchVideo = async () => {
    const url =
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=AIzaSyA4IbDboFHkGVVT2TuyILHcjKFnzV2BvGU";
    const response = await fetch(url);
    const result = await response.json();
    setVideoResult(result.items);
    console.log(result.items);
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      {videoResult.map((item) => {
        return <VideoTile item={item} />;
      })}
    </div>
  );
}

export default VideoContainer;
