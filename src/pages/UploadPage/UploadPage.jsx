import { useState } from "react";
import image from "../../assets/images/Upload-video-preview.jpg";
import "./UploadPage.scss";
import { Link, Navigate } from "react-router-dom";

function UploadPage() {

    const [redirect, setRedirect] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        const form = e.target;
        const { videoTitle, videoDesc } = form;
        console.log("Title: ", videoTitle.value)
        console.log("Description: ", videoDesc.value)

        alert("Uploaded successfully!")
        form.reset()

        setRedirect(true)
    }

    if (redirect) {
        return <Navigate to = "/"/>
    }
  return (
    <main className="upload-page">
      <h1>Upload Video</h1>

      <h2>VIDEO THUMBNAIL</h2>
      <img src={image} alt="" className="uploadpage__thumbnail" />

      <form className="upload-page__form" onSubmit={handleSubmit}>
        <div className="upload-page__input">
          <label htmlFor="videoTitle" className="upload-page__label">
            TITLE YOUR VIDEO
          </label>
          <br />
          <input
            type="text"
            name="videoTitle"
            id="videoTitle"
            placeholder="Add a title to your video"
          />
        </div>
        <div class="upload-page__input">
          <textarea name="videoDesc" id="videoDesc" class="upload-page__description" placeholder="Add a description to your video"/>
        </div>
        <button type="submit">Publish</button>
      </form>
    </main>
  );
}

export default UploadPage;
