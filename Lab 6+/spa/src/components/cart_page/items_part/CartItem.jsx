import "./CartItem.css";
import { useDispatch } from "react-redux";
import { removeItemFromCart, increaseItemAmount, decreaseItemAmount } from "../../../redux/actions/cartActions";
import { CartItemsSelector } from "../../../redux/selectors/cartSelectors";
import { Button } from "../../Button";

export const CartItem = (props) => {
  const items = CartItemsSelector();
  const dispatch = useDispatch();

  const handleAmountIncrease = () => {
    dispatch(increaseItemAmount(props.item.id));
  };

  const handleAmountDecrease = () => {
    let item = items.find((cartItem) => cartItem.id === props.item.id);
    if (item.amount === 1) {
      dispatch(removeItemFromCart(props.item.id));
    } else {
      dispatch(decreaseItemAmount(props.item.id));
    }
  };

  return (
    <div className="cart_item">
      <div className="cart_item__info">
        <img src={props.image_src} alt="item" className="cart_item__info__image" />
        <p className="cart_item__info__name">{props.item.name}</p>
      </div>
      <div className="cart_item__amount">
        <Button className="cart_item__amount__change_button" label="-" onClick={handleAmountDecrease} />
        <p className="cart_item__amount__value">{props.item.amount}</p>
        <Button className="cart_item__amount__change_button" label="+" onClick={handleAmountIncrease} />
      </div>
      <p className="cart_item__total_price">${props.item.price * props.item.amount}</p>
    </div>
  );
};
