import "./VideoItem.scss"

function VideoItem({ video }) {
  const API_URL = import.meta.env.VITE_API_URL
  console.log("VIDEO ITEM LINKS", `${API_URL}${video.image}`)
  return (
    <div className="video-item">
      <img src={`${API_URL}${video.image}`} alt="" className="video-item__thumbnail" />
      <div className="video-item__details">
        <p className="video-item__title">{ video.title}</p>
        <p className="video-item__channel">{ video.channel}</p>
      </div>
    </div>
  )
}

export default VideoItem