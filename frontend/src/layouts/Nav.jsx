import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useSignOut from "react-auth-kit/hooks/useSignOut";

import { Squash as Hamburger } from "hamburger-react";
import { gsap } from "gsap";
import { useNavigate, useLocation } from "react-router-dom";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();

  const signOutHandler = () => {
    signOut();
    navigate("/login");
  };

  useEffect(() => {
    if (isOpen) {
      gsap.to(navRef.current, {
        height: "auto",
        duration: 0.5,
        ease: "power3.inOut",
        autoAlpha: 1,
      });
    } else {
      gsap.to(navRef.current, {
        height: 0,
        duration: 0.5,
        ease: "power3.inOut",
        autoAlpha: 0,
      });
    }
  }, [isOpen]);

  return (
    <nav className="fixed w-full z-10 bg-gradient-to-b from-[#13394e] to-[#17435C]">
      <div className="w-full md:container mx-auto flex justify-between items-center p-3 text-white">
        <div className="hidden justify-center items-center md:flex">
          {!isAuthenticated && (
            <Link to="/login" className="link shadow-lg">
              تسجيل الدخول
            </Link>
          )}
          {isAuthenticated && (
            <button onClick={signOutHandler} className="link shadow-lg">
              تسجيل الخروج
            </button>
          )}
        </div>
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div className="flex justify-center items-center gap-1">
          {isAuthenticated && (
            <>
              <NavLink
                to="/resources"
                className={
                  location.pathname === "/resources"
                    ? "p-2 rounded-lg bg-gray-800"
                    : "p-2 rounded-lg hover:bg-gray-800"
                }
              >
                الموارد
              </NavLink>
              <NavLink
                to="/courses/1"
                className={
                  location.pathname.startsWith("/courses")
                    ? "p-2 rounded-lg bg-gray-800"
                    : "p-2 rounded-lg hover:bg-gray-800"
                }
              >
                المحاضرات
              </NavLink>
            </>
          )}
          <Link
            to="/"
            className={`font-medium text-4xl ${
              isAuthenticated ? "border-l-2 pl-2" : ""
            } `}
          >
            تَعَلَّمْ
          </Link>
        </div>
      </div>
      <div ref={navRef}>
        <div className="md:hidden p-2 flex flex-col gap-2">
          {!isAuthenticated && (
            <Link to="/login" className="link shadow-lg">
              تسجيل الدخول
            </Link>
          )}
          {isAuthenticated && (
            <button onClick={signOutHandler} className="link shadow-lg">
              تسجيل الخروج
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
