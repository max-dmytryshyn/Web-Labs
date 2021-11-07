import "./Header.css";
import { HeaderItem } from "./HeaderItem";
import { Logo } from "../Logo/Logo";

export const Header = (props) => {
  return (
    <header className="header">
      <Logo parentName="header" />
      <ul className="header__nav">
        <HeaderItem label="Home" path="/" />
        <HeaderItem label="Catalog" path="/catalog" />
        <HeaderItem label="Cart" path="/cart" />
      </ul>
    </header>
  );
};
