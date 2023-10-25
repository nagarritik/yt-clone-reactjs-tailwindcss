import React, { useEffect, useState } from "react";
import VideoTile from "./VideoTile";
import { useSelector } from "react-redux";

function VideoContainer() {
  const isMenuEnabled = useSelector(slice=>slice.appConfig.isMenuEnabled)
  console.log(isMenuEnabled);
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
  };

  return (
    <div className={`grid ${isMenuEnabled?"grid-cols-3":"grid-cols-4"} gap-2`}>
      {videoResult.map((item) => {
        return <VideoTile item={item} />;
      })}
    </div>
  );
}

export default VideoContainer;
