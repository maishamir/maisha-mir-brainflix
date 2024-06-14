import "./Sidebar.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import API_URL, { API_KEY } from "../../utils.js";

import VideoItem from "../VideoItem/VideoItem";
import { Link } from "react-router-dom";

function Sidebar({ videos, changeVideo }) {
  // todo: get the list of videos here from the api and render them with a link to the /videos/:id
  // todo: render the videoItem component for each item
  // todo: make it so that the videoList contains all videos except for the selected one
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(0);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await axios.get(`${API_URL}videos/${API_KEY}`);
      setVideoList(response.data);
    };
    fetchVideos();
  }, []);

  return (
    <>
      <aside className="sidebar">
        <h2 className="sidebar__title">NEXT VIDEOS</h2>
        <div className="sidebar__video-list">
          {videoList.map((video) => {
            return (
                <VideoItem video={video} />
            );
          })}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
