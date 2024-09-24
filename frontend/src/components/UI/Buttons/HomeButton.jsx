import classes from "./HomeButton.module.css";
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <button className={classes.button} onClick={() => navigate("/")}>
      الصفحه الرئيسيه
    </button>
  );
};

export default HomeButton;
