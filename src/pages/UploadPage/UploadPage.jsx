import { useState } from "react";
import image from "../../assets/images/Upload-video-preview.jpg";
import "./UploadPage.scss";
import { Link, Navigate } from "react-router-dom";

function UploadPage() {
  const [redirect, setRedirect] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    alert("Uploaded successfully!");
    form.reset();

    setRedirect(true);
  }

  if (redirect) {
    return <Navigate to="/" />;
  }
  return (
    <main className="upload-page">
      <h1 className="upload-page__title">Upload Video</h1>

      <h2 className="upload-page__label">VIDEO THUMBNAIL</h2>
      <img src={image} alt="" className="upload-page__thumbnail" />

      <form className="upload-page__form" onSubmit={handleSubmit}>
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
        <div className="upload-page__button-container">
          <Link to="/" className="upload-page__publish button-link" >PUBLISH</Link>
          <Link to="/" className="upload-page__cancel">
            CANCEL
          </Link>
        </div>


      </form>
    </main>
  );
}

export default UploadPage;
