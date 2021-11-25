import "./GoBackButton.css";
import React from "react";
import { Link } from "react-router-dom";

export const GoBackButton = () => {
  return (
    <Link className="item_page_item__lower_part__buttons__go_back_button" to="/catalog">
      Go back
    </Link>
  );
};
