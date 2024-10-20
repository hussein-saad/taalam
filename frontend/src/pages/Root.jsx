import Nav from "../layouts/Nav";
import Footer from "../layouts/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
