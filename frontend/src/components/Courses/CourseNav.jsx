import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";

const CourseNav = () => {
  const location = useLocation();
  const [isOpen, setOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path
      ? "bg-gray-800 text-white"
      : "transition-colors hover:bg-gray-800 hover:text-white";
  };

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const navRef = useRef(); // Create a ref

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        toggleMenu(); // Close the menu
      }
    }

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Remove the event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef, toggleMenu]);

  return (
    <nav>
      <div
        className={`fixed -right-4 top-1/2 z-50 transition-transform duration-500 ease-in-out`}
      >
        <div className={`bg-black rounded-l-full p-1`} onClick={toggleMenu}>
          <Hamburger color="white" toggle={setOpen} />
        </div>
      </div>
      {isOpen && (
        <div
          ref={navRef}
          className="fixed top-1/5 w-full sm:w-1/2 md:w-auto right-0 h-full bg-white p-2 rounded-l-lg flex flex-col z-50"
        >
          <div className="text-right mb-10 px-3">
            <button onClick={toggleMenu} className="text-3xl font-bold">
              X
            </button>
          </div>
          <div className="flex flex-col items-center gap-1">
            <NavLink
              to="/courses/1"
              className={`${isActive("/courses/1")} p-2 rounded-lg`}
            >
              الدرس الاول
            </NavLink>
            <NavLink
              to="/courses/2"
              className={`${isActive("/courses/2")} p-2 rounded-lg`}
            >
              الدرس الثاني
            </NavLink>
            <NavLink
              to="/courses/3"
              className={`${isActive("/courses/3")} p-2 rounded-lg`}
            >
              الدرس الثالث
            </NavLink>
            <NavLink
              to="/courses/4"
              className={`${isActive("/courses/4")} p-2 rounded-lg`}
            >
              الدرس الرابع
            </NavLink>
            <NavLink
              to="/courses/5"
              className={`${isActive("/courses/5")} p-2 rounded-lg`}
            >
              الدرس الخامس
            </NavLink>
            <NavLink
              to="/courses/6"
              className={`${isActive("/courses/6")} p-2 rounded-lg`}
            >
              الدرس السادس
            </NavLink>
            <NavLink
              to="/courses/7"
              className={`${isActive("/courses/7")} p-2 rounded-lg`}
            >
              الدرس السابع
            </NavLink>
            <NavLink
              to="/courses/8"
              className={`${isActive("/courses/8")} p-2 rounded-lg`}
            >
              الدرس الثامن
            </NavLink>
            <NavLink
              to="/courses/9"
              className={`${isActive("/courses/9")} p-2 rounded-lg`}
            >
              الدرس التاسع
            </NavLink>
            <NavLink
              to="/courses/10"
              className={`${isActive("/courses/10")} p-2 rounded-lg`}
            >
              الدرس العاشر
            </NavLink>
            <NavLink
              to="/courses/11"
              className={`${isActive("/courses/11")} p-2 rounded-lg`}
            >
              الدرس الحادي عشر
            </NavLink>
            <NavLink
              to="/courses/12"
              className={`${isActive("/courses/12")} p-2 rounded-lg`}
            >
              الدرس الثاني عشر
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default CourseNav;
