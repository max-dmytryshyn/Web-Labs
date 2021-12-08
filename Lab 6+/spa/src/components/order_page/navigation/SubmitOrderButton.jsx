import "./SubmitOrderButton.css";
import { Link } from "react-router-dom";

export const SubmitOrderButton = (props) => {
  return (
    <Link className="order_page__submit_order_button" to="/successful_order" onClick={props.onClick}>
      Add to cart
    </Link>
  );
};
