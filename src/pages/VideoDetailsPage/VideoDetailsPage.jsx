import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL; 
import MainSection from "../../components/MainSection/MainSection.jsx";

function VideoDetailsPage() {
  const { videoId } = useParams(); // Retrieve the video ID from the URL parameters
  const [videoDetailsData, setVideoDetailsData] = useState(null); // State to store the details of the current video
  const [videoList, setVideolist] = useState([]); // State to store the list of other videos for the sidebar

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const allVids = await axios.get(`${API_URL}videos`);
        if (videoId) {
          const {data} = await axios.get(`${API_URL}videos/${videoId}`);
          setVideoDetailsData(data)
        } else {
          const id = allVids.data[0].id;
          const {data} = await axios.get(`${API_URL}videos/${id}`);
          setVideoDetailsData(data)
        }
        const sidebarVideos = allVids.data.filter(video => video.id !== videoId)
        setVideolist(sidebarVideos)
      } catch (e) {
        console.log(e);
      }
    }
    fetchVideoData()
  }, [videoId]);

  // If video details or video list are not yet loaded, display a loading message
  if (!videoDetailsData || videoList.length === 0) {
    return <p>Just a moment while we load the video details...</p>;
  }

  return <MainSection currentVideo={videoDetailsData} videos={videoList} />;
}

export default VideoDetailsPage