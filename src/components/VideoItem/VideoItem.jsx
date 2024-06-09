import "./VideoItem.scss"

function VideoItem({ video, changeVideo }) {
  
  function handleVideoClick() {
    changeVideo(video)
  }
  return (
    <div className="video-item" onClick={handleVideoClick}>
      <img src={video.image} alt="" className="video-item__thumbnail" />
      <div className="video-item__details">
        <p className="video-item__title">{ video.title}</p>
        <p className="video-item__channel">{ video.channel}</p>
      </div>
    </div>
  )
}

export default VideoItem