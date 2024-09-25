import classes from "./FormInput.module.css";

const FormInput = ({ label, type, name, id, error }) => {
  return (
    <div className={classes["input-container"]}>
      <input
        type={type}
        id={id}
        name={name}
        required
        autoComplete="off"
        className={`${error ? classes.error : ""}`}
      />
      <label htmlFor={name} className={classes.label}>
        {label}
      </label>
      <div
        className={`${classes.underline} ${error ? classes.error : ""}`}
      ></div>
    </div>
  );
};

export default FormInput;
