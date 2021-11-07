import "./CatalogItems.css";
import { CatalogItem } from "./CatalogItem.jsx";

export const CatalogItems = () => {
  const data = [
    {
      id: 1,
      name: "Saw1",
      description: `Remember when you could cut down trees without wasting a single drop of gasoline? The WEN 16-Inch Electric
      Chainsaw provides over 12 amps of sawing power, making easy work out of any tree, bush or branch that gets
      between you and that perfect lawn.
        `,

      price: 100,
    },
    {
      id: 2,
      name: "Saw2",
      description: `Remember when you could cut down trees without wasting a single drop of gasoline? The WEN 16-Inch Electric
      Chainsaw provides over 12 amps of sawing power, making easy work out of any tree, bush or branch that gets
      between you and that perfect lawn.
      `,
      price: 200,
    },
    {
      id: 3,
      name: "Saw3",
      description: `Remember when you could cut down trees without wasting a single drop of gasoline? The WEN 16-Inch Electric
      Chainsaw provides over 12 amps of sawing power, making easy work out of any tree, bush or branch that gets
      between you and that perfect lawn.
      `,
      price: 300,
    },
    {
      id: 4,
      name: "Saw4",
      description: `Remember when you could cut down trees without wasting a single drop of gasoline? The WEN 16-Inch Electric
      `,
      price: 400,
    },
    {
      id: 5,
      name: "Saw5",
      description: `Remember when you could cut down trees without wasting a single drop of gasoline? The WEN 16-Inch Electric
      Chainsaw provides over 12 amps of sawing power, making easy work out of any tree, bush or branch that gets
      between you and that perfect lawn.
      `,
      price: 500,
    },
    {
      id: 6,
      name: "Saw6",
      description: `Remember when you could cut down trees without wasting a single drop of gasoline? The WEN 16-Inch Electric
      Chainsaw provides over 12 amps of sawing power, making easy work out of any tree, bush or branch that gets
      between you and that perfect lawn.
      `,
      price: 600,
    },
    {
      id: 7,
      name: "Saw7",
      description: `Remember when you could cut down trees without wasting a single drop of gasoline? The WEN 16-Inch Electric
      Chainsaw provides over 12 amps of sawing power, making easy work out of any tree, bush or branch that gets
      between you and that perfect lawn.
      `,
      price: 700,
    },
    {
      id: 8,
      name: "Saw8",
      description: `Remember when you could cut down trees without wasting a single drop of gasoline? The WEN 16-Inch Electric
      Chainsaw provides over 12 amps of sawing power, making easy work out of any tree, bush or branch that gets
      between you and that perfect lawn.
      `,
      price: 800,
    },
    {
      id: 9,
      name: "Saw9",
      description: `Remember when you could cut down trees without wasting a single drop of gasoline? The WEN 16-Inch Electric
      Chainsaw provides over 12 amps of sawing power, making easy work out of any tree, bush or branch that gets
      between you and that perfect lawn.
      `,
      price: 900,
    },
    {
      id: 10,
      name: "Saw10",
      description: `Remember when you could cut down trees without wasting a single drop of gasoline? The WEN 16-Inch Electric
      Chainsaw provides over 12 amps of sawing power, making easy work out of any tree, bush or branch that gets
      between you and that perfect lawn.
      `,
      price: 1000,
    },
  ];

  const itemsList = data.map((item) => (
    <CatalogItem
      item={item}
      image_src="https://www.stanleytools.com/NA/product/images/3000x3000x96/STHT20348/STHT20348_1.jpg"
    />
  ));
  return <div className="catalog_items_list">{itemsList}</div>;
};
