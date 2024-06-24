import "./Video.scss"

function Video({ currentVideo }) {
  const API_URL = import.meta.env.VITE_API_URL;

  const posterPath = `${API_URL}${currentVideo.image}`;
  return (
    <div className="video">
      <video controls poster={posterPath} className="video__currentVideo">
      </video>
    </div>
  )
}

export default Video