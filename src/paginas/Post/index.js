import { useParams } from "react-router-dom";
import "./Post.css";
import posts from "../../json/posts.json";
import PostModelo from "../../componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import Erro404 from "../Erro404";
import PaginaPadrao from "../../componentes/PaginaPadrao";

const Post = () => {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return <Erro404 />;
  }
  return (
    <PaginaPadrao>
      <PostModelo
        fotoCapa={`/assets/posts/${post.id}/capa.png`}
        titulo={post.titulo}
      >
        <div className="post-markdown-container">
          <ReactMarkdown>{post.texto}</ReactMarkdown>
        </div>
      </PostModelo>
    </PaginaPadrao>
  );
};

export default Post;
