import "./VideoItem.scss"

function VideoItem({ video }) {
  
  return (
    <div className="video-item">
      <img src={video.image} alt="" className="video-item__thumbnail" />
      <div className="video-item__details">
        <p className="video-item__title">{ video.title}</p>
        <p className="video-item__channel">{ video.channel}</p>
      </div>
    </div>
  )
}

export default VideoItem