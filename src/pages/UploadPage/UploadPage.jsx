import { useState, useRef } from "react";
import "./UploadPage.scss";
const API_URL = import.meta.env.VITE_API_URL;
import { Link, Navigate } from "react-router-dom";

function UploadPage() {
  const [redirect, setRedirect] = useState(false);
  const [buttonText, setButtonText] = useState("PUBLISH");
  const formRef = useRef();
  const titleRef = useRef();
  const descRef = useRef();

  function handleSubmit() {
    const form = formRef.current;
    const title = titleRef.current.value;

    const desc = descRef.current.value;

    let hasError = false;

    if (title === "" || title === "undefined") {
      titleRef.current.classList.add("upload-page__error");
      hasError = true;
    } else {
      titleRef.current.classList.remove("upload-page__error");
    }

    if (!desc) {
      descRef.current.classList.add("upload-page__error");
      hasError = true;
    } else {
      descRef.current.classList.remove("upload-page__error");
    }

    if (hasError) return;

    


    setButtonText("UPLOADING");
    form.reset();

    setTimeout(() => {
      setButtonText("POSTED");
      setTimeout(() => {
        setRedirect(true);
      }, 1000);
    }, 2000);
  }

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
            src={`${API_URL}images/image9.jpg`}
            alt=""
            className="upload-page__thumbnail"
          />
        </div>

        <div className="upload-page__form-container">
          <form className="upload-page__form" ref={formRef}>
            <div className="upload-page__input">
              <label htmlFor="videoTitle" className="upload-page__form-label">
                TITLE YOUR VIDEO
              </label>
              <br />
              <input
                ref={titleRef}
                className="upload-page__vid-title"
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
                ref={descRef}
                name="videoDesc"
                id="videoDesc"
                className="upload-page__vid-desc"
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
