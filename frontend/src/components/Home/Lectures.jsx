import Lecture from "./Lecture";
import arrow from "../../assets/GIF/downArrow.gif";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const lectures = [
  {
    title: "المحاضرة الثالثه",
    description: "محاضرة تعليمية في مجال الشبكات",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2-HhZCBlgSmUCgt4Mi0IBzGT4V72kIhFycg&s",
  },
  {
    title: "المحاضرة الثانيه",
    description: "محاضرة تعليمية في مجال التصميم",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2-HhZCBlgSmUCgt4Mi0IBzGT4V72kIhFycg&s",
  },
  {
    title: "المحاضرة الأولى",
    description: "محاضرة تعليمية في مجال البرمجة",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2-HhZCBlgSmUCgt4Mi0IBzGT4V72kIhFycg&s",
  },
  {
    title: "المحاضرة السادسه",
    description: "محاضرة تعليمية في مجال الشبكات",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2-HhZCBlgSmUCgt4Mi0IBzGT4V72kIhFycg&s",
  },
  {
    title: "المحاضرة الخامسه",
    description: "محاضرة تعليمية في مجال التصميم",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2-HhZCBlgSmUCgt4Mi0IBzGT4V72kIhFycg&s",
  },
  {
    title: "المحاضرة الرابعه",
    description: "محاضرة تعليمية في مجال البرمجة",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2-HhZCBlgSmUCgt4Mi0IBzGT4V72kIhFycg&s",
  },
];

const Lectures = () => {
  const lecRef = useRef([]);

  useEffect(() => {
    let isMounted = true;
    const observer = new IntersectionObserver((entries) => {
      let delay = 0.2;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.from(entry.target, {
            y: 100,
            duration: 1,
            delay: delay,
            ease: "power3.inOut",
            opacity: 0,
          });
          delay += 0.1;
          if (isMounted && entry.target instanceof Element) {
            observer.unobserve(entry.target);
          }
        }
      });
    });

    lecRef.current.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      isMounted = false;
      lecRef.current.forEach((el) => {
        if (el instanceof Element) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#0e2736] to-[#091924] py-4">
      <div className="container mx-auto text-center text-white">
        <div className="flex flex-col items-center justify-center py-4">
          <h1 className="text-4xl font-bold">
            <span className="">المحاضرات</span>
          </h1>
          <p className="text-lg mt-4 opacity-75">
            مجموعة من المحاضرات المجانية في مختلف المجالات
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {lectures.map((lecture, index) => (
            <Lecture
              ref={(el) => (lecRef.current[index] = el)}
              key={index}
              title={lecture.title}
              description={lecture.description}
              img={lecture.img}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-8 cursor-pointer">
        <button className="text-white text-2xl font-bold border-2 px-4 py-2 rounded-lg">
          استكشف المزيد
        </button>
        <img
          src={arrow}
          alt="arrow"
          className="w-24 h-24 animate-bounce mt-4"
        />
      </div>
    </section>
  );
};

export default Lectures;
