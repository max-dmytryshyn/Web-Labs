import "./Filters.css";
import { Filter } from "./Filter";
import { Button } from "../../Button";
import { useState } from "react";
import { getAllWithFilters } from "../../../services/api";

export const Filters = (props) => {
  const [driveTypeFilter, setDriveTypeFilter] = useState("");
  const [materialToSawFilter, setMaterialToSawFilter] = useState("");
  const [minLengthFilter, setMinLengthFilter] = useState("");
  const [maxLengthFilter, setMaxLengthFilter] = useState("");

  const handleDriveTypeFilterChange = (event) => {
    setDriveTypeFilter(event.target.value);
  };

  const handleMaterialToSawFilterChange = (event) => {
    setMaterialToSawFilter(event.target.value);
  };

  const handleLengthFilterChange = (event) => {
    let value = String(event.target.value);
    let delimiter_index = value.search("_");
    setMinLengthFilter(value.substring(0, delimiter_index));
    setMaxLengthFilter(value.substring(delimiter_index + 1));
  };

  return (
    <div className="filters">
      <div className="filters__filters">
        <form>
          <Filter
            label="Drive type:"
            options={[
              { value: "", label: "Any" },
              { value: "MEC", label: "Mechanical" },
              { value: "ELC", label: "Electric" },
              { value: "ICE", label: "Internal combustion engine" },
            ]}
            onChange={handleDriveTypeFilterChange}
          />
          <Filter
            label="Material to saw:"
            options={[
              { value: "", label: "Any" },
              { value: "WO", label: "Wood" },
              { value: "ME", label: "Metal" },
              { value: "PO", label: "Polyfoam" },
            ]}
            onChange={handleMaterialToSawFilterChange}
          />
          <Filter
            label="Length in cm:"
            options={[
              { value: "", label: "Any" },
              { value: "0_10", label: "0-10" },
              { value: "10_20", label: "10-20" },
              { value: "20_50", label: "20-50" },
              { value: "50_ ", label: "50+" },
            ]}
            onChange={handleLengthFilterChange}
          />
        </form>
      </div>
      <Button
        className="filters__button"
        label="Apply"
        onClick={async () => {
          props.setItems(
            await getAllWithFilters(driveTypeFilter, materialToSawFilter, minLengthFilter, maxLengthFilter)
          );
        }}
      />
    </div>
  );
};
