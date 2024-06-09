import "./CommentSection.scss";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";

function CommentSection({ comments }) {
  // console.log(comments);
  return (
    <>
      <p><strong>{ comments.length} Comments</strong></p>
      <CommentForm />
      <CommentList comments={comments } />
    </>
  );
}

export default CommentSection;
