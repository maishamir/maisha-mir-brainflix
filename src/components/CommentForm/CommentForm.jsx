import "./CommentForm.scss";

function CommentForm({ comments }) {
  return (
    <>
      <div className="comment-form">
        <p className="comment-form__header">{comments.length} Comments</p>
        <div className="comment-form__input-group">
          <img
            src="src/assets/images/Mohan-muruge.jpg"
            alt=""
            className="comment-form__avatar"
          />
          <form className="comment-form__form">
            <div className="comment-form__input">
              <label htmlFor="comment-text" className="comment-form__label">
                JOIN THE CONVERSATION
              </label>
              <br />
              <textarea
                className="comment-form__comment"
                type="text"
                name="comment-text"
                id="comment-text"
                placeholder="Add a new component"
              />
            </div>
            <button type="submit" className="comment-form__button">
              COMMENT
            </button>
          </form>
        </div>
      </div>
      <hr />
    </>
  );
}

export default CommentForm;
