import "./BackToCartButton.css";
import { Link } from "react-router-dom";

export const BackToCartButton = () => {
  return (
    <Link className="order_page__back_to_catalog_button" to="/cart">
      Go back
    </Link>
  );
};
