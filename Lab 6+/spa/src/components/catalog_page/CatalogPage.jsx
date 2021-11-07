import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Filters } from "./filters_part/Filters";

export const CatalogPage = () => {
  return (
    <div>
      <Header isSearchEnabled={true} />
      <Filters />
      <Footer />
    </div>
  );
};
