import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video"
import Description from "./components/Description/Description"
import Comments from "./components/Comments/Comments"
import VideoList from "./components/VideoList/VideoList"

function App() {
  return (
    <>
      <Header />
      <Video />
      <Description />
      <Comments />
      {/* contains <CommentForm/> */}
      <VideoList />
    </>
  );
}



export default App;
