import "./Comment.scss";

function Comment({ commentObj }) {
  // console.log("Current comment => ", commentObj);
  return (
    <>
      <div className="comment" >
        <div className="comment__avatar"></div>
        <div className="comment__stats">
          <p className="comment__author">{commentObj.name}</p>
          <p className="comment__date">{new Date(commentObj.timestamp).toLocaleDateString('en-US') }</p>
        </div>
        <p className="comment__text">{ commentObj.comment}</p>
      </div>
      <hr />
    </>

    // <h1>Comment</h1>
  );
}

export default Comment;
