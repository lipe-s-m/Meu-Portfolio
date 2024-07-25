import "./index.css";
import logo from "./../../icons/Icons/logo 1.png";

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a id="logo" href="#home">
                <img
                  className="logo-header"
                  src={logo}
                  alt="Logo Cabeçalho"
                ></img>
              </a>
            </li>
            <li>
              {" "}
              <a href="#home">Home</a>
            </li>
            <li>
              {" "}
              <a href="#sobre-mim">Sobre Mim</a>
            </li>
            <li>
              {" "}
              <a href="#habilidades">Habilidades</a>
            </li>
            <li>
              {" "}
              <a href="#projects">Projetos</a>
            </li>
            <li>
              {" "}
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
