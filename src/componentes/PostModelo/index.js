import "./PostModelo.css";

const PostModelo = ({ fotoCapa, titulo, children }) => {
  return (
    <article className="postModeloContainer">
      <div
        className="fotoCapa"
        style={{ backgroundImage: `url(${fotoCapa})` }}
      ></div>
      <h2 className="titulo">{titulo}</h2>
      <div className="postConteudoContainer">{children}</div>
    </article>
  );
};

export default PostModelo;
