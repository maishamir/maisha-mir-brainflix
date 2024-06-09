import "./Header.scss";
import Button from "../Button/Button";

function Header() {
  return (
    <>
      <header className="header">
        <img
          src="src/assets/logo/BrainFlix-logo.svg"
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
            src="src/assets/images/Mohan-muruge.jpg"
            alt="user avatar image"
            className="header__avatar"
          />
          {/* <Button buttonText='UPLOAD' className="header__upload-button"/> */}
          <button className="header__button">UPLOAD</button>
        </div>
      </header>
    </>
  );
}

export default Header;
