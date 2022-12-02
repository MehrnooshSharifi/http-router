import { useState } from "react";
import "./NewComment.css";
const NewComment = ({onAddPost}) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    body: "",
  });

  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  // const postCommentHandler = () => {
  //   axios
  //     .post("http://localhost:3002/comments", {
  //       ...comment,
  //       postId: 10,
  //     })
  //     .then((res) => console.log(res.data))
  //     .catch();
  // };
  return (
    <div className="newComment">
      <div>
        <label>name</label>
        <input type="text" onChange={changeHandler} name="name" />
      </div>
      <div>
        <label>email</label>
        <input type="email" onChange={changeHandler} name="email" />
      </div>
      <div>
        <label>Body</label>
        <input type="texterea" onChange={changeHandler} name="body" />
      </div>
      <button onClick={()=>onAddPost(comment)}>Add New Comment</button>
    </div>
  );
};

export default NewComment;
