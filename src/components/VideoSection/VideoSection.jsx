import "./VideoSection.scss"
import Video from "../Video/Video";
import VideoInfo from "../VideoInfo/VideoInfo";
import VideoDescription from "../VideoDescription/VideoDescription";

function VideoSection({ currentVideo }) {
  return (
    <div>
      <Video currentVideo={ currentVideo} />
    </div>
  )
}

export default VideoSection