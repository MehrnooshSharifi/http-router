import { useEffect } from "react";
import Comment from "../../Component/Comment/Coment";
import FullComment from "../../Component/FullComment/FullComment";
import NewComment from "../../Component/NewComment/NewComment";
import { addNewComment } from "../../Services/AddNewCommentService";
// import axios from "axios";
// import http from "../../Services/httpServices";
import { getAllComments } from "../../Services/getAllCommentsService";
import "./Discussion.css";
import { useState } from "react";
import { toast } from 'react-toastify';
const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/comments")
    //   .then((response) => {
    //     setComments(response.data.slice(0,4))
    //     })
    //   .catch((error) => {
    //     console.log(error)});
    const getComment = async () => {
      try {
        const response = await getAllComments();
        setComments(response.data);
      } catch (error) {
        setError(true);
      }
    };
    getComment();
  }, []);

  const selectCommentHandler = (id) => {
    setSelectedId(id);
  };

  const postCommentHandler = (comment) => {
    addNewComment({...comment ,postId :10})
      .then((res) => getAllComments())
      .then((res) => setComments(res.data))
      .catch();
  };
  const renderComments = () => {
  let renderValue = <p>Loading...</p>
  if(error) {
    renderValue=<p>fetching data failed</p>
    toast.error("there is an error")
  }
  if(comments && !error){
    renderValue=
    comments.map((c) => (
      <Comment
        key={c.id}
        name={c.name}
        email={c.email}
        onClick={() => selectCommentHandler(c.id)}
      />
    ))
  }
      return renderValue;
    };

  return (
    <main>
      <section>{renderComments()}
      </section>
      <section>
        <FullComment commentId={selectedId} setComments={setComments} setSelectedId={setSelectedId}/>
      </section>
      <section>
        <NewComment onAddPost={postCommentHandler} />
      </section>
    </main>
  );
};

export default Discussion;
