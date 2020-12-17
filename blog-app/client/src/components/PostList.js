import Axios from "axios";
import { useEffect, useState } from "react";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const response = await Axios("http://posts.com/posts");
    const posts = response.data;
    setPosts(posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => (
    <div
      key={post.id}
      className="card"
      style={{ width: "30%", marginBottom: "20px" }}
    >
      <div className="card-body">
        <h3>{post.title}</h3>
        <CommentList comments={post.comments} />
        <CommentCreate postId={post.id} />
      </div>
    </div>
  ));

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};

export default PostList;
