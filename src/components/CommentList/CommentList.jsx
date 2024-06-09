import "./CommentList.scss";
import Comment from "../Comment/Comment";

function CommentList({ comments }) {
  return (
    comments.map(comment => {
      return <Comment commentObj={ comment} />
    })
  )
}

export default CommentList