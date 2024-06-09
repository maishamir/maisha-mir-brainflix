import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import Sidebar from "./components/Sidebar/Sidebar";
import videoData from "./data/video-details.json"

function App() {

  const [currVideo, setCurrVideo] = useState(videoData[2])


  // console.log(currVideo)
  return (
    <>
      <Header />
      <MainSection currentVideo={currVideo} />
      <Sidebar />
    </>
  );
}

export default App;
