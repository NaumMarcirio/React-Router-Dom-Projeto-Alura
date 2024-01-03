import { Link, useLocation } from "react-router-dom";
import "./MenuLink.css";

const MenuLink = (props) => {
  const localizacao = useLocation();
  return (
    <Link
      className={`${"link"} ${
        localizacao.pathname === props.to ? "linkDestacado" : ""
      }`}
      to={props.to}
    >
      {props.nomeLink}
    </Link>
  );
};

export default MenuLink;
