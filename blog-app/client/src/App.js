const { default: PostCreate } = require("./components/PostCreate");

function App() {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
    </div>
  );
}

export default App;
