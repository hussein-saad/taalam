import classes from "./FormInput.module.css";

const FormInput = ({ label, type, name, id }) => {
  return (
    <div className={classes["input-container"]}>
      <input type={type} id={id} name={name} required />
      <label htmlFor={name} className={classes.label}>
        {label}
      </label>
      <div className={classes.underline}></div>
    </div>
  );
};

export default FormInput;
