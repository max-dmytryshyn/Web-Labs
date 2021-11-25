import "./CartItem.css";

export const CartItem = (props) => {
  return (
    <div className="cart_item">
      <div className="cart_item__info">
        <img src={props.image_src} alt="item" className="cart_item__info__image" />
        <p className="cart_item__info__name">Saw name</p>
      </div>
      <div className="cart_item__amount">
        <button className="cart_item__amount__change_button">-</button>
        <p className="cart_item__amount__value">{2}</p>
        <button className="cart_item__amount__change_button">+</button>
      </div>
      <p className="cart_item__total_price">${100}</p>
    </div>
  );
};
