import "./VideoDescription.scss"

function VideoDescription({currentVideo}) {
  return (
    <div class="video-description">
      <p class="video-description__text">{currentVideo.description}</p>
    </div>
  )
}

export default VideoDescription