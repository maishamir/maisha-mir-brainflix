import "./Sidebar.scss";
import VideoList from "../VideoList/VideoList";

function SideBar({ videos, changeVideo }) {
  

  return (
    <>
      <aside>
        <h2>NEXT VIDEOS</h2>
        <VideoList videos={videos} changeVideo={changeVideo} />
      </aside>
    </>
  );
}

export default SideBar;
