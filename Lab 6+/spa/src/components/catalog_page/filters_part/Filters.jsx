import { Filter } from "./Filter";
import "./Filters.css";

export const Filters = () => {
  return (
    <div className="filters">
      <div className="filters__filters">
        <form>
          <Filter
            label="Drive type:"
            options={[
              { value: "MECHANICAL", label: "Mechanical" },
              { value: "ELECTRIC", label: "Electric" },
              { value: "INTERNAL_COMBUSTION_ENGINE", label: "Internal combustion engine" },
            ]}
          />
          <Filter
            label="Material to saw:"
            options={[
              { value: "WOOD", label: "Wood" },
              { value: "METAL", label: "Metal" },
              { value: "POLYFOAM", label: "Polyfoam" },
            ]}
          />
          <Filter
            label="Length in cm:"
            options={[
              { value: "0to10", label: "0-10" },
              { value: "10to20", label: "10-20" },
              { value: "20to50", label: "20-50" },
              { value: "50plus", label: "50+" },
            ]}
          />
        </form>
      </div>
      <button className="filters__button">Apply</button>
    </div>
  );
};
