import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import img from "../../assets/Images/hero.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const isAuthenticated = useIsAuthenticated();
  const authUser = useAuthUser();

  let mm = gsap.matchMedia();

  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    mm.add("(max-width: 768px)", () => {
      if (textRef.current) {
        gsap.from(textRef.current, {
          y: 100,
          duration: 1,
          delay: 1,
          ease: "power3.inOut",
          opacity: 0,
          stagger: 0.2,
        });
      }
    });

    mm.add("(min-width: 768px)", () => {
      if (imgRef.current) {
        gsap.from(imgRef.current, {
          x: "50%",
          duration: 1,
          delay: 1,
          ease: "power3.inOut",
          opacity: 1,
        });
      }

      if (textRef.current) {
        gsap.from(textRef.current, {
          x: -200,
          duration: 1,
          delay: 1,
          ease: "power3.inOut",
          opacity: 0,
        });
      }
    });
  }, []);

  return (
    <section className="bg-[#17435C]">
      <div className="container mx-auto px-2 py-2 flex flex-col md:flex-row h-screen justify-center md:justify-between items-center">
        <img
          ref={imgRef}
          src={img}
          alt="hero"
          className="h-[300px] md:h-[400px] lg:h-[600px] object-cover"
        />
        <div
          ref={textRef}
          className="flex flex-col text-center items-center md:text-right md:items-end text-white"
        >
          {isAuthenticated && (
            <h1 className="text-3xl md:text-5xl mb-4 font-bold text-green-400">{authUser.name} مرحبا بك مجددا يا </h1>
          )}
          <h1 className="text-4xl font-bold">
            <span className="font-medium">تَعَلَّمْ</span> لكل الناس في كل مكان
          </h1>
          <p className="text-lg mt-4 opacity-75">
            موقع تعليمي يقدم دورات تعليمية في مختلف المجالات
          </p>
          <Link
            to="/courses/1"
            className="bg-[#007EC5] text-center px-4 w-full md:w-1/3 py-2 mt-4 rounded-xl shadow-xl hover:bg-transparent hover:border-white border-2 border-[#17435C] transition-all ease-in-out duration-300"
          >
            ابدأ الان
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
