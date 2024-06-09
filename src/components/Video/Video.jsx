import "./Video.scss"

function Video({currentVideo}) {
  console.log("Video component => ", currentVideo.image )
  return (
    <div className="video">
      {
        /* ////use a state to keep track of which video is being displayed.
        / I'm going to use the first item in the Video-details.json file as the initial state and display that
        / I am going to add an event listener to each video in the sidebar and change the state to that video object;
        */
      }
      
      <video width="320px" height="240px" controls poster={currentVideo.image} className="video__currentVideo">
        <source src={currentVideo.video} type="video/mp4"/>
      </video>
    </div>
  )
}

export default Video