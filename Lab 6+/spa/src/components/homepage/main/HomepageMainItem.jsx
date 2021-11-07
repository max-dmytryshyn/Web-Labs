import "./HomepageMainItem.css";

export const HomepageMainItem = (props) => {
  return (
    <div className="homepage__main__main_item">
      <img src={props.image_src} alt="main item" className="homepage__main__main_item__image" />
      <div className="homepage__main__main_item__text">
        <h2 className="homepage__main__main_item__heading">{props.heading}</h2>
        <p className="homepage__main__main_item__paragraph">{props.content}</p>
      </div>
    </div>
  );
};
