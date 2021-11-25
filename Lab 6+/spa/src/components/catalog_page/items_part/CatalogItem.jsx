import "./CatalogItem.css";
import { ItemInfoButton } from "./ItemInfoButton";

export const CatalogItem = (props) => {
  return (
    <div className="catalog_item">
      <div className="catalog_item__header">
        <h3 className="catalog_item__header__heading">{"Item " + props.item.id}</h3>
      </div>
      <div className="catalog_item__body">
        <img src={props.image_src} class="catalog_item__body__image" alt="catalog item" />
        <h2 className="catalog_item__body__title">{props.item.name}</h2>
        <p className="catalog_item__body__paragraph">{props.item.description}</p>
        <div className="catalog_item__body__price__display">
          <p className="catalog_item__body__price__display__label"> Price:</p>
          <p className="catalog_item__body__price__display__value">{"$ " + props.item.price}</p>
        </div>

        <ItemInfoButton className="catalog_item__view_more__button" id={props.item.id} />
      </div>
    </div>
  );
};
