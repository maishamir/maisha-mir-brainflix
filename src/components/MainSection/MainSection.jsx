import "./MainSection.scss";
import VideoSection from "../VideoSection/VideoSection";
import CommentSection from "../CommentSection/CommentSection";

function MainSection({ currentVideo }) {
  // console.log("Main section=> ", currentVideo);
  return (
    <main>
      <VideoSection currentVideo={currentVideo} />
      <CommentSection />
    </main>
  );
}

export default MainSection;
