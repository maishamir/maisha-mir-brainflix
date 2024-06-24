import { useState } from "react";
import "./UploadPage.scss";
const API_URL = import.meta.env.VITE_API_URL;
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

function UploadPage() {
  const [redirect, setRedirect] = useState(false);
  const [buttonText, setButtonText] = useState("PUBLISH");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [descError, setDescError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // check for errors
    let hasError = false;
    if (title.trim() === "") {
      setTitleError(true);
      hasError = true;
    } else {
      setTitleError(false);
    }
    if (desc.trim() === "") {
      setDescError(true);
      hasError = true;
    } else {
      setDescError(false);
    }

    if (hasError) {
      return;
    }

    // todo: if no errors, get the title and description values and make post request
    try {
      await axios.post(`${API_URL}videos`, {
        title: title,
        description: desc,
      });
    } catch (error) {
      console.error("Couldn't make post request", error)
    }

    setButtonText("UPLOADING");

    setTimeout(() => {
      setButtonText("POSTED");
      setTimeout(() => {
        setRedirect(true);
      }, 1000);
    }, 2000);
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <main className="upload-page">
      <h1 className="upload-page__title">Upload Video</h1>
      <hr className="upload-page__divider" />
      <div className="upload-page__container">
        <div className="upload-page__video">
          <h2 className="upload-page__label">VIDEO THUMBNAIL</h2>
          <img
            src={`${API_URL}images/placeholder.jpg`}
            alt=""
            className="upload-page__thumbnail"
          />
        </div>

        <div className="upload-page__form-container">
          <form className="upload-page__form" onSubmit={handleSubmit}>
            <div className="upload-page__input">
              <label htmlFor="videoTitle" className="upload-page__form-label">
                TITLE YOUR VIDEO
              </label>
              <br />
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`upload-page__vid-title ${
                  titleError ? "upload-page__error" : ""
                }`}
                type="text"
                name="videoTitle"
                id="videoTitle"
                placeholder="Add a title to your video"
              />
            </div>
            <div className="upload-page__input">
              <label htmlFor="videoDesc">ADD A VIDEO DESCRIPTION</label>
              <br />
              <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                name="videoDesc"
                id="videoDesc"
                className={`upload-page__vid-desc ${
                  descError ? "upload-page__error" : ""
                }`}
                placeholder="Add a description to your video"
              />
            </div>
          </form>
        </div>
      </div>
      <hr className="upload-page__divider" />
      <div className="upload-page__button-container">
        <button
          type="button"
          className="upload-page__publish"
          onClick={handleSubmit}
        >
          {buttonText}
        </button>
        <Link to="/" className="upload-page__cancel">
          CANCEL
        </Link>
      </div>
    </main>
  );
}

export default UploadPage;
