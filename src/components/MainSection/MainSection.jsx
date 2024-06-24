import "./MainSection.scss";
import Comment from "../Comment/Comment";
import Sidebar from "../Sidebar/Sidebar";
import VideoInfo from "../VideoInfo/VideoInfo";
import VideoDescription from "../VideoDescription/VideoDescription";
import CommentForm from "../CommentForm/CommentForm";
import Video from "../Video/Video";

function MainSection({ currentVideo, videos, changeVideo }) {

  console.log("CURRENT VIDEO => ", currentVideo)
  return (
    <main className="main-section">
      <div className="main-section__video">
        <Video currentVideo={currentVideo} />
      </div>

      <div className="main-section__vid-sidebar">
        <div className="main-section__video-info">
          <VideoInfo currentVideo={currentVideo} />
          <VideoDescription currentVideo={currentVideo} />
          <CommentForm comments={currentVideo.comments} />
          <div className="main-section__comment-list">
            {currentVideo.comments.map((comment) => {
              return <Comment commentObj={comment} key={comment.id} />;
            })}
          </div>
        </div>

        <div className="main-section__sidebar">
          <Sidebar videos={videos} changeVideo={changeVideo} />
        </div>
      </div>
    </main>
  );
}

export default MainSection;
