import { Route, Routes } from "react-router-dom";
import { Homepage } from "./components/homepage/Homepage";
import { CatalogPage } from "./components/catalog_page/CatalogPage";
import { ItemPage } from "./components/item_page/ItemPage";
import { CartPage } from "./components/cart_page/CartPage";
import { OrderPage } from "./components/order_page/OrderPage";
import { SuccessfulOrderPage } from "./components/order_page/SuccessfulOrderPage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/item/:id" element={<ItemPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/successful_order" element={<SuccessfulOrderPage />} />
      </Routes>
    </div>
  );
}

export default App;
