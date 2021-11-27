import "./AddToCartButton.css";
import React from "react";
import { Link } from "react-router-dom";

export const AddToCartButton = (props) => {
  return (
    <Link className="item_page_item__lower_part__buttons__add_to_cart_button" to="/cart" onClick={props.onClick}>
      Add to cart
    </Link>
  );
};
