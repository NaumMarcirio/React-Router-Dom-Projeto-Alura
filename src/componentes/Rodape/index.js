import "./Rodape.css";
import { ReactComponent as MarcaRegistrada } from "../../assets/marca_registrada.svg";

const Rodape = () => {
  return (
    <footer className="rodape">
      <MarcaRegistrada />
      Desenvolvido por Naum Marcirio
    </footer>
  );
};

export default Rodape;
