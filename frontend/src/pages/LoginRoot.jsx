import { Outlet } from "react-router-dom";
import LeftArrow from "../components/UI/Icons/LeftArrow";
import login from "../assets/SVG/login.svg";

const LoginRoot = () => {
  return (
    <section className="flex items-center justify-evenly h-screen bg-gradient-to-t from-slate-800 px-2 to-slate-900">
      <LeftArrow />
      <img src={login} alt="background" className="hidden lg:block h-[500px] w-[500px]" />
      <Outlet />
    </section>
  );
};

export default LoginRoot;
