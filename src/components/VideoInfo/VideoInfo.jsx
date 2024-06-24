import "./VideoInfo.scss";
const API_URL = import.meta.env.VITE_API_URL

function VideoInfo({ currentVideo }) {
  return (
    <div className="video-info">
      <h1 className="video-info__title">{currentVideo.title}</h1>
      <hr className="video-info__divider" />
      
      <div className="video-info__container">
        <div className="video-info__meta">
          <p className="video-info__channel">By {currentVideo.channel}</p>
          <p className="video-info__date">{new Date(currentVideo.timestamp).toLocaleDateString()}</p>
        </div>
        <div className="video-info__stats">
          <p className="video-info__views">
            <img src={`${API_URL}images/icons/views.svg`} alt="Views" className="video-info__logo" /> {currentVideo.views}
          </p>
          <p className="video-info__likes">
            <img src={`${API_URL}images/icons/likes.svg`} alt="Likes" className="video-info__logo" /> {currentVideo.likes}
          </p>
        </div>
      </div>
      
      <hr className="video-info__divider"/>
    </div>
  );
}

export default VideoInfo;
