import logoImage from "./images/logo.svg";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <img src={logoImage} className="header__logo" alt="logo" />
      <ul className="header__nav">
        <li className="header__nav__item">
          <a href="">Home</a>
        </li>
        <li className="header__nav__item">
          <a href="">Catalog</a>
        </li>
        <li className="header__nav__item">
          <a href="">Cart</a>
        </li>
      </ul>
    </header>
  );
};
