import "./CatalogItems.css";
import { CatalogItem } from "./CatalogItem.jsx";
import { useEffect } from "react";
import { getAllWithFilters } from "../../../services/api";
import { Loader } from "../../loader/Loader";
import { useDispatch } from "react-redux";
import { CatalogItemsSelector } from "../../../redux/selectors/catalogSelectors";
import { setCatalogItems } from "../../../redux/actions/catalogActions";

export const CatalogItems = (props) => {
  const items = CatalogItemsSelector();
  const dispatch = useDispatch();

  useEffect(async () => {
    props.setLoading(true);
    setTimeout(async () => {
      dispatch(setCatalogItems(await getAllWithFilters()));
      props.setLoading(false);
    }, 500);
  }, []);

  const itemsList = items.map((item) => (
    <CatalogItem
      item={item}
      image_src="https://www.stanleytools.com/NA/product/images/3000x3000x96/STHT20348/STHT20348_1.jpg"
    />
  ));
  return <>{props.loading ? <Loader /> : <div className="catalog_items_list"> {itemsList}</div>}</>;
};
