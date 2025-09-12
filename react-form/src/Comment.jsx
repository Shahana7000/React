import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comment() {
  let [comments, setComments] = useState([
    {
      username: "@sp",
      remarks: "great job!",
      rating: 5,
    },
  ]);

  let addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
    console.log("added new comment");
  };

  return (
    <>
      <div>
        <h3>All Comments</h3>
        {comments.map((c, i) => (
          <div className="comment" key={i}>
            <span>{c.remarks}</span>
            &nbsp;
            <span>(rating = {c.rating})</span>
            <p>{c.username}</p>
          </div>
        ))}
      </div>
      <hr />
      <CommentsForm addNewComment={addNewComment} />
    </>
  );
}
