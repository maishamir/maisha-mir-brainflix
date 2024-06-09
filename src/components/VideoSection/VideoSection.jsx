import "./VideoSection.scss"
import Video from "../Video/Video";
import VideoInfo from "../VideoInfo/VideoInfo";
import VideoDescription from "../VideoDescription/VideoDescription";

function VideoSection({ currentVideo }) {
  // console.log("VideoSection => ", currentVideo);
  return (
    <div>
      <Video currentVideo={ currentVideo} />
      <VideoInfo currentVideo={currentVideo} />
      <VideoDescription currentVideo={currentVideo} />
    </div>
  )
}

export default VideoSection