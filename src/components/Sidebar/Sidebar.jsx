import "./Sidebar.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import API_URL, { API_KEY } from "../../utils.js";

import VideoItem from "../VideoItem/VideoItem";
import { Link} from "react-router-dom";

function Sidebar({ videos }) {
  return (
    <>
      <aside className="sidebar">
        <h2 className="sidebar__title">NEXT VIDEOS</h2>
        <div className="sidebar__video-list">
          {videos.map((video) => {
            return (
              <Link to={`/videos/${video.id}`} key={ video.id} className="sidebar__link">
                <VideoItem video={video} />
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
