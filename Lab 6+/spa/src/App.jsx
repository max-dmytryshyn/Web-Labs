import { Route, Routes } from "react-router-dom";
import { Homepage } from "./components/homepage/Homepage";
import { CatalogPage } from "./components/catalog_page/CatalogPage";
import { ItemPage } from "./components/item_page/ItemPage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/item/:id" element={<ItemPage />} />
      </Routes>
    </div>
  );
}

export default App;
