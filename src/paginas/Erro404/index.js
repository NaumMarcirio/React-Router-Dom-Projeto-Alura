import "./Erro404.css";
import erro404 from "../../assets/erro_404.png";
import BotaoPrincipal from "../../componentes/BotaoPrincipal";
import { useNavigate } from "react-router-dom";

const Erro404 = () => {
  const navegar = useNavigate();
  return (
    <>
      <div className="conteudoContainer">
        <span className="texto404">404</span>
        <h1 className="titulo">Ops! Página não encontrada.</h1>
        <p className="paragrafo">
          Tem certeza de que era isso que você estava procurando?
        </p>
        <p className="paragrafo">
          Aguarde uns instantes e recarregue a página, ou volte para a página
          inicial.
        </p>
        <div className="botaoContainer" onClick={() => navegar(-1)}>
          <BotaoPrincipal tamanho={"lg"}>Voltar</BotaoPrincipal>
        </div>
        <img
          src={erro404}
          className="imagemCachorro"
          alt="foto cachorro erro 404"
        />
      </div>

      <div className="espacoEmBranco"></div>
    </>
  );
};

export default Erro404;
