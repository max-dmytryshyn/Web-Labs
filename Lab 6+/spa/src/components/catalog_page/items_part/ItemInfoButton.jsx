import "./ItemInfoButton.css";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export const ItemInfoButton = (props) => {
  let match = useLocation();
  return (
    <Link className="catalog_item__view_more__button" to={`${match.pathname}/item/${props.id}`}>
      View more
    </Link>
  );
};
