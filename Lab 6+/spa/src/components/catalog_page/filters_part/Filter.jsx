import "./Filter.css";

export const Filter = (props) => {
  return (
    <label className="filter">
      {props.label}
      <select className="filter__select" onChange={props.onChange}>
        {props.options.map((option) => {
          return <option value={option.value}>{option.label}</option>;
        })}
      </select>
    </label>
  );
};
