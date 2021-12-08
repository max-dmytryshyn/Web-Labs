import "./ContinueButton.css";
import React from "react";
import { Link } from "react-router-dom";

export const ContinueButton = () => {
  return (
    <Link className="cart_page__continue_button" to="/order">
      Continue
    </Link>
  );
};
