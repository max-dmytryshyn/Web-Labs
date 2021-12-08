import "./ContinueButton.css";
import React from "react";
import { Link } from "react-router-dom";
import { CartItemsSelector } from "../../../redux/selectors/cartSelectors";

export const ContinueButton = () => {
  const items = CartItemsSelector();
  return (
    <>
      {items.length !== 0 ? (
        <Link className="cart_page__continue_button" to="/order">
          Continue
        </Link>
      ) : (
        <></>
      )}
    </>
  );
};
