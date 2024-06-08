import "./VideoSection.scss"
import Video from "../Video/Video";
import VideoInfo from "../VideoInfo/VideoInfo";
import VideoDescription from "../VideoDescription/VideoDescription";

function VideoSection() {
  return (
    <div>
      <h1>VideoSection</h1>
      <Video />
      <VideoInfo />
      <VideoDescription/>
    </div>
  )
}

export default VideoSection