import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";
import '../CommentSection/CommentSection.scss'

function CommentSection({ comments }) {
  return (
    <>
      <CommentForm comments={ comments} />
      <div className="comment-list">
        {comments.map((comment) => {
          return <Comment commentObj={comment} key={comment.id} />
        })}
      </div>
    </>
  );
}

export default CommentSection;
