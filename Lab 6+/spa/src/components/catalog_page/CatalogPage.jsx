import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Filters } from "./filters_part/Filters";
import { CatalogItems } from "./items_part/CatalogItems";
import { useState } from "react";

export const CatalogPage = () => {
  const [items, setItems] = useState([]);
  return (
    <div>
      <Header isSearchEnabled={true} />
      <Filters setItems={setItems} />
      <CatalogItems setItems={setItems} items={items} />
      <Footer />
    </div>
  );
};
