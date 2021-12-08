import { Route, Routes } from "react-router-dom";
import { Homepage } from "./components/homepage/Homepage";
import { CatalogPage } from "./components/catalog_page/CatalogPage";
import { ItemPage } from "./components/item_page/ItemPage";
import { CartPage } from "./components/cart_page/CartPage";
import { LoginPage } from "./components/login_page/LoginPage";
import { RegistrationPage } from "./components/registration_page/RegistarionPage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/item/:id" element={<ItemPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </div>
  );
}

export default App;
