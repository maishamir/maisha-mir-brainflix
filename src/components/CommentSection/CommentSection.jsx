import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";

function CommentSection({ comments }) {
  return (
    <>
      <CommentForm comments={ comments} />
      <CommentList comments={comments } />
    </>
  );
}

export default CommentSection;
