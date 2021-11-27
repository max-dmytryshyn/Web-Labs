import "./CartItems.css";
import { CartItem } from "./CartItem.jsx";
import { CartItemsSelector } from "../../../redux/selectors/cartSelectors";

export const CartItems = () => {
  const items = CartItemsSelector();
  const itemsList = items.map((item) => (
    <CartItem
      item={item}
      image_src="https://www.stanleytools.com/NA/product/images/3000x3000x96/STHT20348/STHT20348_1.jpg"
    />
  ));

  return (
    <>
      {items.length === 0 ? (
        <h1 className="cart_no_items_text">There are no items in your cart</h1>
      ) : (
        <div className="cart_items">
          <div className="cart_items__items">{itemsList}</div>
          <div className="cart_items__total_price">
            <p className="cart_items__total_price__label">Total price:</p>
            <p className="cart_items__total_price__value">
              $
              {items.reduce((cur_sum, next_item) => {
                return cur_sum + next_item.price * next_item.amount;
              }, 0)}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
