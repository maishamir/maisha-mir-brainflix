import "./VideoList.scss";
import VideoItem from "../VideoItem/VideoItem";
function VideoList({ videos, changeVideo }) {
  return (
    <div className="video-list">
      {videos.map((video) => {
        return <VideoItem video={video} key={video.id} changeVideo={changeVideo} />;
      })}
    </div>
  );
}

export default VideoList;
