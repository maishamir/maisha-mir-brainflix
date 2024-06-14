import "./MainSection.scss";
import VideoSection from "../VideoSection/VideoSection";
import CommentSection from "../CommentSection/CommentSection";
import Sidebar from "../Sidebar/Sidebar";
import VideoInfo from "../VideoInfo/VideoInfo";
import VideoDescription from "../VideoDescription/VideoDescription";

function MainSection({ currentVideo, videos, changeVideo }) {
  return (
    <main className="main-section">
      <h1>MainSection</h1>
      {/* <div className="main-section__video">
        <VideoSection currentVideo={currentVideo} />
      </div>
      <div className="main-section__vid-sidebar">
        <div className="main-section__video-info">
          <VideoInfo currentVideo={currentVideo} />
          <VideoDescription currentVideo={currentVideo} />
          <CommentSection comments={currentVideo.comments} />
        </div>
        <div className="main-section__sidebar">
          <Sidebar videos={videos} changeVideo={changeVideo} />
        </div>
      </div> */}
    </main>
  );
}

export default MainSection;
