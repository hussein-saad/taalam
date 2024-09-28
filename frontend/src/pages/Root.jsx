import Nav from "../layouts/Nav";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Root;
