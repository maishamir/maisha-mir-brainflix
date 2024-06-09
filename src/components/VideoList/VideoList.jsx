import "./VideoList.scss";
import VideoItem from "../VideoItem/VideoItem";
function VideoList({ videos }) {
  return (
    <div className="video-list">
      {videos.map((video) => {
        return <VideoItem video={video} key={video.id} />;
      })}
    </div>
  );
}

export default VideoList;
