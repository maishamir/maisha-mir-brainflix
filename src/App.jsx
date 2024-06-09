import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import Sidebar from "./components/Sidebar/Sidebar";
import videoData from "./data/video-details.json"

function App() {

  const [currVideo, setCurrVideo] = useState(videoData[0])


  // console.log(currVideo)
  return (
    <>
      <Header />
      <MainSection currentVideo={currVideo} />

      {/* pass in a function that gets called in onClick on each video component */}
      {/* update the videoList so that all videos except for the video with the id that was clicked is not in the list */}
      {/* this function will also call the setCurrVideo state function and set the clicked video to be the current video */}
      {/* easyyy peasyyy */}
      <Sidebar />
    </>
  );
}

export default App;
