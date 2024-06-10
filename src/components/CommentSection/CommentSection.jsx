import "./CommentSection.scss";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";

function CommentSection({ comments }) {
  // console.log(comments);
  return (
    <>
      <CommentForm comments={ comments} />
      <CommentList comments={comments } />
    </>
  );
}

export default CommentSection;
