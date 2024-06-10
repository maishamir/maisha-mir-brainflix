import "./CommentList.scss";
import Comment from "../Comment/Comment";

function CommentList({ comments }) {
  return (
    <div class="comment-list">
      {comments.map((comment) => {
        return <Comment commentObj={comment} key={comment.id} />;
      })}
    </div>
  );
}

export default CommentList;
