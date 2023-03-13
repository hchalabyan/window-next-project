import classes from "../styles/selection.module.scss";
import { useEffect, useState } from "react";

const Selection = ({ posts }) => {
  console.log("posts", posts);
  const [options, setOptions] = useState({});
  useEffect(() => {
    let data = JSON.parse(window.localStorage.getItem("windowOptions"));
    setOptions(data);
  }, []);
  return (
    <div
      className={classes.Selection}
      style={{ borderColor: options ? options.color : "green" }}
    >
      <h2>You are selected ...</h2>
      <div className={classes.WindowOptions}>
        {options ? (
          <ul>
            <li>
              <span>Material:</span> {options.material}
            </li>
            <li>
              <span>Type:</span> {options.type}
            </li>
            <li>
              <span>Color:</span> {options.color}
            </li>
          </ul>
        ) : (
          "Not Selected Result"
        )}
      </div>
    </div>
  );
};

export default Selection;
