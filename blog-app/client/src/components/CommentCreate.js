import Axios from "axios";
import { useState } from "react";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    await Axios.post(`http://posts.com/posts/${postId}/comments`, {
      content,
    });
    setContent("");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>New comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
