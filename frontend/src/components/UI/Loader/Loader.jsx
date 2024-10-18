import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <section className="bg-[#17435C] flex flex-col h-screen items-center justify-center gap-8">
      <div className="text-white text-7xl font-medium">تَعَلَّمْ</div>
      <div className={classes["dots-container"]}>
        <div className={classes.dot}></div>
        <div className={classes.dot}></div>
        <div className={classes.dot}></div>
        <div className={classes.dot}></div>
        <div className={classes.dot}></div>
      </div>
    </section>
  );
};

export default Loader;
