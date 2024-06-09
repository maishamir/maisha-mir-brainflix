import "./Sidebar.scss";
import VideoList from "../VideoList/VideoList";

function SideBar({ videos}) {
  return (
    <>
      <aside>
        <h2>NEXT VIDEOS</h2>
        <VideoList videos={videos} />
      </aside>
    </>
  );
}

export default SideBar;
