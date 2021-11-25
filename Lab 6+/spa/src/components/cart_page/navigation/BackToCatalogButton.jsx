import "./BackToCatalogButton.css";
import React from "react";
import { Link } from "react-router-dom";

export const BackToCatalogButton = () => {
  return (
    <Link className="cart_page__back_to_catalog_button" to="/catalog">
      Back to catalog
    </Link>
  );
};
