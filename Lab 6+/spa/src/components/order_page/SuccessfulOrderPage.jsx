import "./SuccessfulOrderPage.css";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { BackToCatalogButton } from "../cart_page/navigation/BackToCatalogButton";

export const SuccessfulOrderPage = () => {
  return (
    <>
      <Header />
      <main className="successful_order_main">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Eo_circle_green_checkmark.svg"
          alt="Success!"
          className="successful_order_main__image"
        />
        <div className="successful_order_main__text">
          <h1>Success!</h1>
          <p className="successful_order_main__text__paragraph">Yout order sent to processing!</p>
          <p className="successful_order_main__text__paragraph">Check your email box for further information</p>
        </div>
        <BackToCatalogButton />
      </main>
      <Footer />
    </>
  );
};
