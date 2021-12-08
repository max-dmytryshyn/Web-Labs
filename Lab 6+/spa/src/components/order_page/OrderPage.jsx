import "./OrderPage.css";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { OrderForm } from "./OrderForm";
import { BackToCartButton } from "./navigation/BackToCartButton";
import { SubmitOrderButton } from "./navigation/SubmitOrderButton";

export const OrderPage = () => {
  return (
    <>
      <Header />
      <main className="order_page_main">
        <h1>Checkout</h1>
        <OrderForm />
        <div className="order_page_main__buttons">
          <BackToCartButton />
          <SubmitOrderButton />
        </div>
      </main>
      <Footer />
    </>
  );
};
