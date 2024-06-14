import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
// import MainSection from "./components/MainSection/MainSection";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";
import videoData from "./data/video-details.json"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  const [currVideo, setCurrVideo] = useState(videoData[0])

  // set the initial state of the video list (to be rendered in the sidebar), to the entire videoData minus the currentVideo
  const currentVideoData = videoData.filter(video => video.id != currVideo.id)
  const [videoList, setVideoList] = useState(currentVideoData)

  function changeVideo(video) {
    setCurrVideo(video)
    const newVideoData = videoData.filter(v =>v.id !== video.id )
    setVideoList(newVideoData)
  }

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VideoDetailsPage/>}/>
          <Route path="/videos/:videoId" element={<VideoDetailsPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
