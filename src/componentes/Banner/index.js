import "./Banner.css";
import circuloColorido from "../../assets/circulo_colorido.png";
import minhaFoto from "../../assets/minha_foto.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <div className="apresentacao">
        <h1 className="titulo">Olá, Mundo</h1>
        <p className="paragrafo">
          Boas vindas ao meu espaço pessoal! Eu sou Naum Marcirio, estudante de
          Engenharia de Software, atualmente estou na Quinta fase, estou focado
          nas tecnologias de Front-End
        </p>
      </div>
      <div className="imagens">
        <img
          className="circuloColorido"
          src={circuloColorido}
          alt="circulo-colorido"
          aria-hidden={true}
        />
        <img
          className="minhaFoto"
          src={minhaFoto}
          alt="foto do Naum"
          aria-hidden={true}
        />
      </div>
    </div>
  );
};

export default Banner;
