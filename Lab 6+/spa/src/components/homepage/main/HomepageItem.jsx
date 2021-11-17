import "./HomepageItem.css";

export const HomepageItem = (props) => {
  return (
    <div className="homepage__main__item">
      <img src={props.image_src} alt="item" className="homepage__main__item__image" />
      <h2 className="homepage__main__item__heading">{props.heading}</h2>
      <p className="homepage__main__item__paragraph">{props.content}</p>
    </div>
  );
};
