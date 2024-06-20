import "./VideoSection.scss"
import Video from "../Video/Video";

function VideoSection({ currentVideo }) {
  return (
    <div>
      <Video currentVideo={ currentVideo} />
    </div>
  )
}

export default VideoSection