import classes from "@/styles/Home.module.scss";
import CustomSelect from "@/components/customSelect";
import CustomButton from "@/components/customButton";
import { useState } from "react";

const Form = ({ options }) => {
  console.log("nested options", options);

  const [selectedOption, setSelectedOption] = useState(null);
  const [storageData, setStorageData] = useState({
    material: "",
    type: "",
    color: "",
  });

  const handleSelect = (e, arg) => {
    setSelectedOption(e.value);
    console.log("arg", arg);
    switch (arg.name) {
      case "Material":
        setStorageData((prev) => ({
          ...prev,
          material: e.value,
        }));
        break;
      case "Type":
        setStorageData((prev) => ({
          ...prev,
          type: e.value,
        }));
        break;
      case "Color":
        setStorageData((prev) => ({
          ...prev,
          color: e.value,
        }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open("/selection", "_blank");
    window.localStorage.setItem("windowOptions", JSON.stringify(storageData));
  };
  return (
    <form className={classes.Form} onSubmit={handleSubmit}>
      {Object.keys(options[0]).map((key) => {
        let item = options[0][key];
        console.log("item", item);
        return (
          <div className={classes.SelectWrapper} key={key}>
            <CustomSelect
              text={key}
              id={item.id}
              options={item}
              name={key}
              handleSelect={handleSelect}
            />
          </div>
        );
      })}

      <div className={classes.ButtonWrapper}>
        <CustomButton>Submit</CustomButton>
      </div>
    </form>
  );
};

export default Form;
