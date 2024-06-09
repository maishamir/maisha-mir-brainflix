import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import Sidebar from "./components/Sidebar/Sidebar";
import videoData from "./data/video-details.json"

function App() {

  const [currVideo, setCurrVideo] = useState(videoData[0])

  // set the initial state of the video list (to be rendered in the sidebar), to the entire videoData minus the currentVideo
  const currentVideoData = videoData.filter(video => video.id != currVideo.id)

  const [videoList, setVideoList] = useState(currentVideoData)

  function changeVideo(video) {
    //call setVideoList here
    setCurrVideo(video)
    const newVideoData = videoData.filter(v =>v.id !== video.id )
    //maybe also call setCurrVideo here
    setVideoList(newVideoData)
  }

  return (
    <>
      <Header />
      <MainSection currentVideo={currVideo} />
      <Sidebar videos={videoList} changeVideo={changeVideo} />
    </>
  );
}

export default App;
