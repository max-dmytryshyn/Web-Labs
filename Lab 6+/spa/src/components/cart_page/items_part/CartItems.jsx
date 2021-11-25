import "./CartItems.css";
import { CartItem } from "./CartItem.jsx";

export const CartItems = () => {
  return (
    <div className="cart_items">
      <div className="cart_items__items">
        <CartItem image_src="https://www.stanleytools.com/NA/product/images/3000x3000x96/STHT20348/STHT20348_1.jpg" />
        <CartItem image_src="https://www.stanleytools.com/NA/product/images/3000x3000x96/STHT20348/STHT20348_1.jpg" />
        <CartItem image_src="https://www.stanleytools.com/NA/product/images/3000x3000x96/STHT20348/STHT20348_1.jpg" />
      </div>
      <div className="cart_items__total_price">
        <p className="cart_items__total_price__label">Total amount:</p>
        <p className="cart_items__total_price__value">${300}</p>
      </div>
    </div>
  );
};
