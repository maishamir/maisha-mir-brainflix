import "./CommentSection.scss";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";

function CommentSection() {
  return (
    <>
      <div>
        <h1>CommentSection</h1>
      </div>
      <CommentForm />
      <CommentList />
    </>
  );
}

export default CommentSection;
