import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Filters } from "./filters_part/Filters";
import { CatalogItems } from "./items_part/CatalogItems";
import { useState } from "react";

export const CatalogPage = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Header isSearchEnabled={true} setLoading={setLoading} />
      <Filters />
      <CatalogItems loading={loading} setLoading={setLoading} />
      <Footer />
    </div>
  );
};
