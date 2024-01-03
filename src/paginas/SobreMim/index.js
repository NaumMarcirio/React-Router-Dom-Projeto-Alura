import PostModelo from "../../componentes/PostModelo";
import fotoCapa from "../../assets/sobre_mim_capa.png";
import "./SobreMim.css";
import fotoSobreMim from "../../assets/sobre_mim_foto.jpg";

const SobreMim = () => {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className="subtitulo"> Olá, eu sou o Naum!</h3>
      <img src={fotoSobreMim} alt="foto do naum" className="fotoSobreMim" />
      <p className="paragrafo-sobreMim">
        Oi, tudo bem? Eu sou aluno de Engenharia de Software, atualmente na
        quinta fase e estou feliz de te ver por aqui.
      </p>
      <p className="paragrafo-sobreMim">
        Minha história com programação começou em 2021, onde comecei a escrever
        as primeiras linhas de código na máteria da primeira fase de
        programação.
      </p>
      <p className="paragrafo-sobreMim"></p>
      <p className="paragrafo-sobreMim">
        Lorem ipsum integer ullamcorper nulla ut quisque, scelerisque sem orci
        quisque lobortis turpis adipiscing, habitant congue quisque dictum amet.
        semper aenean dolor lacus donec curae taciti luctus tincidunt odio,
        purus himenaeos nullam congue convallis tristique himenaeos augue
        laoreet commodo, habitant tempus maecenas platea venenatis aliquet class
        etiam. vel fusce donec laoreet porttitor rhoncus scelerisque ornare,
        libero sem aenean pulvinar integer aenean fringilla purus, magna mauris
        phasellus dictumst libero iaculis. quam inceptos potenti cras massa
        consectetur lacinia in urna amet accumsan, suspendisse nec curabitur
        iaculis nunc tincidunt conubia lacus lectus eleifend, class cursus proin
        at phasellus iaculis euismod molestie dui.
      </p>
      <p className="paragrafo-sobreMim">
        Molestie litora enim quam eleifend mattis inceptos auctor at velit
        consequat, mattis aliquam mollis ornare consequat eget amet eleifend
        euismod, sociosqu sodales nostra erat nam fusce odio cras adipiscing.
        dictum nunc dapibus sed faucibus tristique sem aenean justo consectetur,
        neque et est quisque sodales in etiam dui ut.
      </p>
      <p className="paragrafo-sobreMim">
        Molestie litora enim quam eleifend mattis inceptos auctor at velit
        consequat, mattis aliquam mollis ornare consequat eget amet eleifend
        euismod, sociosqu sodales nostra erat nam fusce odio cras adipiscing.
        dictum nunc dapibus sed faucibus tristique sem aenean justo consectetur,
        neque et est quisque sodales in etiam dui ut.
      </p>
    </PostModelo>
  );
};

export default SobreMim;
