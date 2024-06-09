import "./CommentForm.scss";

function CommentForm() {
  return (
    <>
      <div className="comment-form">
        <img
          src="src/assets/images/Mohan-muruge.jpg"
          alt=""
          className="comment-form__avatar"
        />
        <form className="comment-form__form">
          <label htmlFor="comment-text">JOIN THE CONVERSATION</label>
          <br />
          <textarea
            className="comment-form__comment"
            type="text"
            name="comment-text"
            id="comment-text"
            placeholder="Add a new component"
          />
          <button type="submit" className="comment-form__button">
            COMMENT
          </button>
        </form>
      </div>
      <hr />
    </>
  );
}

export default CommentForm;
