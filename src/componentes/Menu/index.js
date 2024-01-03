import "./Menu.css";
import MenuLink from "../MenuLink";

const Menu = () => {
  return (
    <header>
      <nav className="navegacao">
        <MenuLink nomeLink="Início" to="/" />
        <MenuLink nomeLink="Sobre Mim" to="/sobremim" />
      </nav>
    </header>
  );
};

export default Menu;
