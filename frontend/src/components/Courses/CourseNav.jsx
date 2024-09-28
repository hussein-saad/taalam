import { NavLink, useLocation } from "react-router-dom";

const CourseNav = () => {
  const location = useLocation();
  const isActive = (path) =>
    location.pathname === path ? "text-white font-bold" : "text-gray-300";

  return (
    <nav className="flex flex-col md:flex-row-reverse justify-center items-center gap-6 p-4 bg-slate-900">
      <NavLink to="/courses/1" className={isActive("/courses/1")}>
        المحاضرة الأولى
      </NavLink>
      <NavLink to="/courses/2" className={isActive("/courses/2")}>
        المحاضرة الثانية
      </NavLink>
      <NavLink to="/courses/3" className={isActive("/courses/3")}>
        المحاضرة الثالثة
      </NavLink>
      <NavLink to="/courses/4" className={isActive("/courses/4")}>
        المحاضرة الرابعه
      </NavLink>
      <NavLink to="/courses/5" className={isActive("/courses/5")}>
        المحاضرة الخامسه
      </NavLink>
      <NavLink to="/courses/6" className={isActive("/courses/6")}>
        المحاضرة السادسه
      </NavLink>
    </nav>
  );
};

export default CourseNav;
