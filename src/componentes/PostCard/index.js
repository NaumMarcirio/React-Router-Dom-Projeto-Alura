import { Link } from "react-router-dom";
import "./PostCard.css";
import BotaoPrincipal from "../BotaoPrincipal";

const PostCard = ({ post }) => {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className="post">
        <img
          className="capa"
          src={`/assets/posts/${post.id}/capa.png`}
          alt="capa"
        />
        <h2 className="titulo">{post.titulo}</h2>
        <BotaoPrincipal>Ler</BotaoPrincipal>
      </div>
    </Link>
  );
};

export default PostCard;
