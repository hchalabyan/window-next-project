import classes from "../styles/customSelect.module.scss";
import Select from "react-select";
const CustomSelect = ({
  text,
  id,
  options,
  name,
  handleSelect,
  selectedOption,
}) => {
  return (
    <div className={classes.Select}>
      <p>{text}</p>
      <Select
        instanceId={id}
        value={selectedOption}
        onChange={handleSelect}
        options={options}
        name={name}
        placeholder={selectedOption}
        required
      />
    </div>
  );
};

export default CustomSelect;
