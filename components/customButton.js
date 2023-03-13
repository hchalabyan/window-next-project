import classes from "../styles/customButton.module.scss";
const CustomButton = ({ children }) => {
  return <button className={classes.CustomButton}>{children}</button>;
};
export default CustomButton;
