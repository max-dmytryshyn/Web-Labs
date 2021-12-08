import { Footer } from "../footer/Footer.jsx";
import { Header } from "../header/Header.jsx";
import { ItemPageItem } from "./ItemPageItem.jsx";
import { useEffect, useState } from "react";
import { getSawById } from "../../services/api.js";
import { useParams } from "react-router";
import { Loader } from "../Loader.jsx";

export const ItemPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    setTimeout(async () => {
      setItem(await getSawById(id));
      setLoading(false);
    }, 500);
  }, [id]);

  return (
    <div>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <ItemPageItem
          image_src="https://www.stanleytools.com/NA/product/images/3000x3000x96/STHT20348/STHT20348_1.jpg"
          item={item}
        />
      )}

      <Footer />
    </div>
  );
};
