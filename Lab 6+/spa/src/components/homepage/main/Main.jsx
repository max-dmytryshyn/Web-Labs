import "./Main.css";
import mainSawImage from "./images/main_saw.jpg";
import chainsawImage from "./images/chainsaw.jpg";
import electricSawImage from "./images/electric_saw.jpg";
import jigSawImage from "./images/jig_saw.jpg";
import { Item } from "./Item.jsx";
import { MainItem } from "./MainItem";
import { Button } from "../../Button";

export const Main = () => {
  return (
    <main className="main">
      <MainItem
        image_src={mainSawImage}
        heading="Professional Hand Saw Tuftul TUF1015A"
        content="Tuftul concrete cutter saw plastic handle with soft grip for better comfort and control. Black phosphate
          finish with 34 tough teeth. Ideal for cutting concrete blocks. With handsaw, you will be able to cut
          plywood, trees, drywall, wall, pipes, flying wood, branches and branches quickly and easily. With long,
          sharp teeth and 16 blades, sawing will be easy and smooth. Chip removal groove design: professional
          handboard saw, with chip removal groove to prevent chip blocking groove, cutting more smoothly. Sharp
          grinding teeth on three sides: high frequency quenching, high hardness grinding teeth on three sides,
          prevent stuck saw. Double color handle of aluminium alloy: the newly upgraded handle of aluminium alloy
          connection is strong and durable. Front end hook hole design: front end hook hole design, easy to hang and
          store, safe and convenient."
      />

      <div className="items">
        <Item
          image_src={chainsawImage}
          heading="WEN 4017 16-Inch Electric Chainsaw"
          content="Remember when you could cut down trees without wasting a single drop of gasoline? The WEN 16-Inch Electric
        Chainsaw provides over 12 amps of sawing power, making easy work out of any tree, bush or branch that gets
        between you and that perfect lawn. The 16-inch Oregon chain (Oregon part number 91PX) runs at speeds of up
        to 44 feet per second while the lightweight design limits fatigue during operation. Simply plug the cord
        into the power source of your choice and start chopping."
        />

        <Item
          image_src={electricSawImage}
          heading="7 Inch Electric Circular Saw"
          content="High-power multifunctional electric circular saw for fast cutting. Low running noise, fast cutting speed,
          more powerful power, fine stability, high operating efficiency, strong application performance. Can be
          hand-held, can be flipped, designed for wood cutting. Suitable for wood cutting, wood board cutting, solid
          wood board cutting, bamboo plywood cutting, PVC pipe cutting, MDF cutting, etc. Improved internal structure
          and cooling system, lower energy consumption, lasting and stable power output. The handle and casing are
          integrally die-casted, with a fine structure, solid and practical. 0-45 degree angle adjustment, free
          cutting depth adjustment. The walking-type safety protective cover guarantees safety and prevents accidents.
          External carbon brush for quick and easy replacement."
        />

        <Item
          image_src={jigSawImage}
          heading="DEWALT 20V MAX Jig Saw"
          content="This 20V MAX* Jig Saw has an all metal, lever-action keyless blade clamp designed for quick and easy blade
          changes and an all-metal keyless shoe bevel with four detents at 0 degree, 15 degree, 30 degree, and 45
          degree to make bevel adjustments easy. The variable-speed trigger of the cordless jigsaw provides up to
          3,000 strokes per minute to easily adjust speeds during cutting and 4-position orbital action for wood
          cutting. A removable shoe cover helps protect materials from scratches and the dust blower helps users see
          where they're cutting. Battery and charger sold separately."
        />
      </div>
      <div className="view_more">
        <Button className="view_more__button" label="View more" />
      </div>
    </main>
  );
};
