import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Filters } from "./filters_part/Filters";
import { CatalogItems } from "./items_part/CatalogItems";

export const CatalogPage = () => {
  return (
    <div>
      <Header isSearchEnabled={true} />
      <Filters />
      <CatalogItems />
      <Footer />
    </div>
  );
};
