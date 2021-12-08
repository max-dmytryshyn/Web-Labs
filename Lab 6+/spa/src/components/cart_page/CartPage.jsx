import "./CartPage.css";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { CartItems } from "./items_part/CartItems";
import { BackToCatalogButton } from "./navigation/BackToCatalogButton";
import { ContinueButton } from "./navigation/ContinueButton";

export const CartPage = () => {
  return (
    <div>
      <Header />
      <main className="cart_page__main">
        <h1 className="cart_items__title">Shopping Cart</h1>
        <CartItems />
        <div className="cart_page__buttons">
          <BackToCatalogButton />
          <ContinueButton />
        </div>
      </main>
      <Footer />
    </div>
  );
};
