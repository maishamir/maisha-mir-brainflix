import "./VideoDescription.scss"

function VideoDescription({currentVideo}) {
  return (
    <div className="video-description">
      <p className="video-description__text">{currentVideo.description}</p>
    </div>
  )
}

export default VideoDescription