import "./Header.css";
import { HeaderItem } from "./HeaderItem";
import { Logo } from "../Logo/Logo";
import { getAllWithFilters } from "../../services/api";
import { useState } from "react";

export const Header = (props) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (event) => {
    setSearchText(String(event.target.value).toLowerCase());
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    props.setLoading(true);
    setTimeout(async () => {
      props.setItems(
        await getAllWithFilters().then((items) => items.filter((item) => item.name.toLowerCase().includes(searchText)))
      );
      props.setLoading(false);
    }, 300);
  };

  return (
    <header className="header">
      <Logo parentName="header" />
      <ul className="header__nav">
        <HeaderItem label="Home" path="/" />
        <HeaderItem label="Catalog" path="/catalog" />
        <HeaderItem label="Cart" path="/cart" />
      </ul>
      {props.isSearchEnabled && (
        <form class="header__search_form" onSubmit={handleSearch}>
          <input type="text" class="header__search_form__text" id="search_input" onChange={handleSearchTextChange} />
        </form>
      )}
    </header>
  );
};
