import React, { useState } from "react";
import Axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    await Axios.post("http://localhost:4000/posts", { title });
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostCreate;
