import { Route, Routes } from "react-router-dom";
import { Homepage } from "./components/homepage/Homepage";
import { CatalogPage } from "./components/catalog_page/CatalogPage";
import { ItemPage } from "./components/item_page/ItemPage";
import { CartPage } from "./components/cart_page/CartPage";
import { OrderPage } from "./components/order_page/OrderPage";
import { SuccessfulOrderPage } from "./components/order_page/SuccessfulOrderPage";
import { LoginPage } from "./components/login_page/LoginPage";
import { RegistrationPage } from "./components/registration_page/RegistarionPage";
import { RequireAuth } from "./components/RequireAuth";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Homepage />
            </RequireAuth>
          }
        />
        <Route
          path="/catalog"
          element={
            <RequireAuth>
              <CatalogPage />
            </RequireAuth>
          }
        />
        <Route
          path="/catalog/item/:id"
          element={
            <RequireAuth>
              <ItemPage />
            </RequireAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <CartPage />
            </RequireAuth>
          }
        />
        <Route
          path="/order"
          element={
            <RequireAuth>
              <OrderPage />
            </RequireAuth>
          }
        />
        <Route
          path="/successful_order"
          element={
            <RequireAuth>
              <SuccessfulOrderPage />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </div>
  );
}

export default App;
