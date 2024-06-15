import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg"
import avatar from "../../assets/images/Mohan-muruge.jpg"

function Header() {
  return (
    <>
      <header className="header">
        <img
          src={logo}
          alt="brainflix logo"
          className="header__logo"
        />

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
          <button className="header__button">UPLOAD</button>
        </div>
      </header>
    </>
  );
}

export default Header;
