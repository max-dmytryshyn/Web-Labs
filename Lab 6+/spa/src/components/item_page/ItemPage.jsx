import { Footer } from "../footer/Footer.jsx";
import { Header } from "../header/Header.jsx";
import { ItemPageItem } from "./ItemPageItem.jsx";
import { useEffect, useState } from "react";
import { getById } from "../../services/api.js";
import { useParams } from "react-router";

export const ItemPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(0);

  useEffect(async () => {
    setItem(await getById(id));
  }, [id]);

  return (
    <div>
      <Header />
      <ItemPageItem
        image_src="https://www.stanleytools.com/NA/product/images/3000x3000x96/STHT20348/STHT20348_1.jpg"
        item={item}
      />
      <Footer />
    </div>
  );
};
