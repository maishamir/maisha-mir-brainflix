import "./VideoInfo.scss";

function VideoInfo({ currentVideo }) {
  return (
    <div className="video-info">
      <h1 className="video-info__title">{currentVideo.title}</h1>
      <hr/>
      <div className="video-info__meta">
        <p className="video-info__channel">By {currentVideo.channel}</p>
        <p class="video-info__date">{new Date(currentVideo.timestamp).toLocaleDateString()}</p>
      </div>
      <div class="video-info__stats">
        <p class="video-info__views">{currentVideo.views}</p>
        <p class="video-info__likes">{currentVideo.likes}</p>
      </div>
      <hr/>
    </div>
  );
}

export default VideoInfo;
