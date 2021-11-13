import "./CatalogItems.css";
import { CatalogItem } from "./CatalogItem.jsx";
import { useEffect } from "react";
import { getAllWithFilters } from "../../../services/api";

export const CatalogItems = (props) => {
  useEffect(async () => {
    props.setItems(await getAllWithFilters());
  }, []);

  const itemsList = props.items.map((item) => (
    <CatalogItem
      item={item}
      image_src="https://www.stanleytools.com/NA/product/images/3000x3000x96/STHT20348/STHT20348_1.jpg"
    />
  ));
  return <div className="catalog_items_list">{itemsList}</div>;
};
