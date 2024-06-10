import "./Sidebar.scss";
import VideoList from "../VideoList/VideoList";

function SideBar({ videos, changeVideo }) {
  

  return (
    <>
      <aside className="sidebar">
        <h2 className="sidebar__title">NEXT VIDEOS</h2>
        <VideoList videos={videos} changeVideo={changeVideo} />
      </aside>
    </>
  );
}

export default SideBar;
