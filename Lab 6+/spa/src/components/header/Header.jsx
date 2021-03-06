import "./Header.css";
import { HeaderItem } from "./HeaderItem";
import { getAllSawsWithFilters } from "../../services/api";
import { Logo } from "../logo/Logo";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCatalogItems } from "../../redux/actions/catalogActions";
import { Link } from "react-router-dom";

export const Header = (props) => {
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();

  const handleSearchTextChange = (event) => {
    setSearchText(String(event.target.value).toLowerCase());
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    props.setLoading(true);
    setTimeout(async () => {
      dispatch(
        setCatalogItems(
          await getAllSawsWithFilters().then((items) =>
            items.filter((item) => item.name.toLowerCase().includes(searchText))
          )
        )
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
      <Link
        className="logout_button"
        to="/login"
        onClick={() => {
          localStorage.isLoggedIn = false;
        }}
      >
        Log out
      </Link>
    </header>
  );
};
