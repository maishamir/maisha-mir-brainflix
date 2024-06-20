import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API_URL, { API_KEY } from "../../utils.js";
import MainSection from "../../components/MainSection/MainSection.jsx";

function VideoDetailsPage() {
  const { videoId } = useParams(); // Retrieve the video ID from the URL parameters
  const [videoDetailsData, setVideoDetailsData] = useState(null); // State to store the details of the current video
  const [videoList, setVideolist] = useState([]); // State to store the list of other videos for the sidebar

  // Fetch video details and list of videos whenever videoId changes
  useEffect(() => {
    const fetchVideoDetails = async () => {
      let vidId = ""; // Variable to store the current video ID
      try {
        if (videoId === undefined || videoId === null) {
          // If no specific video ID is provided, fetch the default video details
          const videoResponse = await axios.get(`${API_URL}videos${API_KEY}`);
          vidId = videoResponse.data[0].id;

          const defaultVideoDetail = await axios.get(
            `${API_URL}videos/${vidId}${API_KEY}`
          );
          setVideoDetailsData(defaultVideoDetail.data); // Set the default video details
        } else {
          // Fetch details of the specified video by ID
          vidId = videoId;
          const videoResponse = await axios.get(
            `${API_URL}videos/${vidId}${API_KEY}`
          );
          setVideoDetailsData(videoResponse.data); // Set the specified video details
        }

        // Fetch the list of all videos
        const vidsResponse = await axios.get(`${API_URL}videos${API_KEY}`);
        const vidsResponseData = vidsResponse.data;

        // Filter out the current video from the list of videos
        const remainingVideos = vidsResponseData.filter(
          (video) => video.id !== vidId
        );

        // Set the sidebar videos
        setVideolist(remainingVideos);
      } catch (err) {
        console.error("Error", err); // Log any errors during the data fetching process
      }
    };
    fetchVideoDetails(); // Call the function to fetch video details
  }, [videoId]); // The useEffect will run whenever the videoId changes

  // If video details or video list are not yet loaded, display a loading message
  if (!videoDetailsData || videoList.length === 0) {
    return <p>Just a moment while we load the video details...</p>;
  }

  // Destructure properties from videoDetailsData for easier access
  const { title, channel, image, description, comments } = videoDetailsData;

  return (
    <div className="video-detailsPage">
      <MainSection currentVideo={videoDetailsData} videos={videoList } />
    </div>
  );
}

export default VideoDetailsPage;
