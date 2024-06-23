import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL; 
import MainSection from "../../components/MainSection/MainSection.jsx";

function VideoDetailsPage() {
  const { videoId } = useParams(); // Retrieve the video ID from the URL parameters
  const [videoDetailsData, setVideoDetailsData] = useState(null); // State to store the details of the current video
  const [videoList, setVideolist] = useState([]); // State to store the list of other videos for the sidebar

  const fetchAllVideos = async () => {
    const { data } = await axios.get(`${API_URL}videos${API_KEY}`);
    return data;
  };

  const fetchVideoDetails = async (id) => {
    const { data } = await axios.get(`${API_URL}videos/${id}${API_KEY}`);
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allVids = await fetchAllVideos();
        if (allVids.length === 0) {
          console.error("Videos are unavailable at the moment");
          return;
        }
        let currentVideoId = videoId || allVids[0].id;
        const currentVideoDetails = await fetchVideoDetails(currentVideoId);

        setVideoDetailsData(currentVideoDetails);
        const sidebarVideos = allVids.filter(
          (video) => video.id !== currentVideoId
        );
        setVideolist(sidebarVideos);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [videoId]);

  // If video details or video list are not yet loaded, display a loading message
  if (!videoDetailsData || videoList.length === 0) {
    return <p>Just a moment while we load the video details...</p>;
  }

  return <MainSection currentVideo={videoDetailsData} videos={videoList} />;
}

export default VideoDetailsPage;
