import { useState, useRef } from "react";
import image from "../../assets/images/Upload-video-preview.jpg";
import "./UploadPage.scss";
import { Link, Navigate } from "react-router-dom";

function UploadPage() {
  const [redirect, setRedirect] = useState(false);
  const [buttonText, setButtonText] = useState("PUBLISH")
  const formRef = useRef();

  function handleSubmit() {
    const form = formRef.current
    console.log(formRef.current)

    setButtonText('UPLOADING...')
    form.reset();

    setTimeout(() => {
      setButtonText('POSTED')
      setTimeout(() => {
        setRedirect(true)
      }, 1000)
    }, 2000)
  }

  if (redirect) {
    return <Navigate to="/" />;
  }


  return (
    <main className="upload-page">
      <h1 className="upload-page__title">Upload Video</h1>

      <hr className="upload-page__divider"/>
      <h2 className="upload-page__label">VIDEO THUMBNAIL</h2>
      <img src={image} alt="" className="upload-page__thumbnail" />

      <form className="upload-page__form" ref={formRef}>
        <div className="upload-page__input">
          <label htmlFor="videoTitle" className="upload-page__form-label">
            TITLE YOUR VIDEO
          </label>
          <br />
          <input
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
            name="videoDesc"
            id="videoDesc"
            className="upload-page__vid-desc"
            placeholder="Add a description to your video"
          />
        </div>

        <hr className="upload-page__divider"/>
        <div className="upload-page__button-container">
          <button type="button" className="upload-page__publish" onClick={handleSubmit}>{buttonText}</button>
          <Link to="/" className="upload-page__cancel">
            CANCEL
          </Link>
        </div>


      </form>
    </main>
  );
}

export default UploadPage;
