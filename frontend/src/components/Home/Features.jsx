import Feature from "./Feature";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const features = [
  {
    title: "تعلم مجاني",
    description: "تعلم مجاني لكل الناس في كل مكان بدون قيود وبدون تكاليف مالية",
    Img: "education",
  },
  {
    title: "محتوى متجدد",
    description: "محتوى متجدد ودورات جديدة بشكل دوري ومستمر",
    Img: "educator",
  },
  {
    title: "شهادات معتمده",
    description: "شهادات معتمدة بعد اجتياز الدورة بنجاح للمتدرب",
    Img: "certificate",
  },
];

const Features = () => {
  const featureRef = useRef([]);

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
          if (isMounted && entry.target instanceof Element) {
            observer.unobserve(entry.target);
          }
        }
        delay += 0.2;
      });
    });

    featureRef.current.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      isMounted = false;
      featureRef.current.forEach((el) => {
        if (el instanceof Element) {
          observer.unobserve(el);
        }
      });
    };
  }, []);
  return (
    <section className="bg-gradient-to-b from-[#17435C] to-[#0e2736] px-2">
      <div className="container mx-auto flex flex-col py-8 text-center sm:text-right text-white">
        <div className="flex flex-col items-center sm:items-end justify-center py-4 mb-8">
          <h1 className="text-4xl font-bold">المميزات</h1>
          <p className="text-lg mt-4 opacity-75">
            مجموعة من المميزات التي يقدمها الموقع
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <Feature
              ref={(el) => (featureRef.current[index] = el)}
              key={index}
              title={feature.title}
              description={feature.description}
              Img={feature.Img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
