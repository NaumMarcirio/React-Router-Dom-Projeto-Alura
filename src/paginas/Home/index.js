import "./Home.css";
import posts from "../../json/posts.json";
import Post from "../../componentes/PostCard";

const Home = () => {
  return (
    <ul className="posts">
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
};

export default Home;
