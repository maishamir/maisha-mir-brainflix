import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <Link to="/">
          <img src={logo} alt="brainflix logo" className="header__logo" />
        </Link>

        <div className="header__content">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className="header__search-bar"
          />
          <img
            src={avatar}
            alt="user avatar image"
            className="header__avatar"
          />
          <Link to='/upload' className="header__button button-link">
            UPLOAD
          </Link>




        </div>
      </header>
    </>
  );
}

export default Header;
 