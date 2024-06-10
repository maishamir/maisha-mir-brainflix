import "./Video.scss"

function Video({currentVideo}) {
  return (
    <div className="video">
      <video controls poster={currentVideo.image} className="video__currentVideo">
      </video>
    </div>
  )
}

export default Video