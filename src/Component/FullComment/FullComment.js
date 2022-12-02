import "./FullComment.css";
// import http from "http";
// import http from "../../Services/httpServices";
import { getAllComments } from "../../Services/getAllCommentsService";
import { deleteComment } from "../../Services/deleteCommentService";
import { getOneComment } from "../../Services/getOneCommentService";
import { useEffect, useState } from "react";

const FullComment = ({ commentId, setComments, setSelectedId }) => {
  const [comment, setComment] = useState(null);
  useEffect(() => {
    if (commentId) {
      getOneComment(commentId)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentId]);
  // const deleteHandler = (commentId) => {
  //   http
  //     .delete(`/comments/${commentId}`)
  //     .then((res) => http.get("/comments"))
  //     .then((res)=> setComments(res.data))
  //     .catch((error) => console.log(error));
  // };

  const deleteHandler = async () => {
    try {
      await deleteComment(commentId);
      const { data } = await getAllComments();
      setComments(data);
      setComment(null);
      setSelectedId(null);
    } catch (error) {}
  };

  let commentDetail = <p>Please Select a Comment!</p>;
  if (commentId) commentDetail = <p>Loading...</p>;

  if (comment) {
    commentDetail = (
      <div className="fullComment">
        <p>{comment.name}</p>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
        <button onClick={deleteHandler}>Delet</button>
      </div>
    );
  }
  return commentDetail;
};

export default FullComment;
