import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { Squash as Hamburger } from "hamburger-react";
import { gsap } from "gsap";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const navRef = useRef(null);

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
    <nav className="bg-gradient-to-b from-[#13394e] to-[#17435C]">
      <div className="w-full md:container mx-auto flex justify-between items-center p-3 text-white">
        <div className="hidden justify-center items-center gap-4 md:flex">
          <Link to="/login" className="link shadow-lg">
            تسجيل الدخول
          </Link>
        </div>
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div className="flex justify-center items-center gap-2">
          <Link to="/courses" className="p-2">
            المحاضرات
          </Link>
          <Link to="/" className="font-medium text-4xl border-l-2 pl-2">
            تَعَلَّمْ
          </Link>
        </div>
      </div>
      <div ref={navRef}>
        <div className="md:hidden p-2 flex flex-col gap-2">
          <Link to="/login" className="link shadow-lg text-right">
            تسجيل الدخول
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
