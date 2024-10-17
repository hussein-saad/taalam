import Lecture from "./Lecture";
import arrow from "../../assets/GIF/downArrow.gif";
import { Link } from "react-router-dom";

const lectures = [
  {
    title: "الدرس الثالث",
    description: "تحليل المقدار الثلاثي المربع الكامل",
    img: "https://static.vecteezy.com/system/resources/thumbnails/013/115/384/small_2x/cartoon-maths-elements-background-education-logo-vector.jpg",
    id: 3,
  },
  {
    title: "الدرس الثاني",
    description: "تحليل المقدار الثلاثي الجزء الثاني",
    img: "https://static.vecteezy.com/system/resources/thumbnails/013/115/384/small_2x/cartoon-maths-elements-background-education-logo-vector.jpg",
    id: 2,
  },
  {
    title: "الدرس الأول",
    description: "تحليل المقدار الثلاثي",
    img: "https://static.vecteezy.com/system/resources/thumbnails/013/115/384/small_2x/cartoon-maths-elements-background-education-logo-vector.jpg",
    id: 1,
  },
  {
    title: "الدرس السادس",
    description: "التحليل بالتقسيم",
    img: "https://static.vecteezy.com/system/resources/thumbnails/013/115/384/small_2x/cartoon-maths-elements-background-education-logo-vector.jpg",
    id: 6,
  },
  {
    title: "الدرس الخامس",
    description: "تحليل مجموع المكعبين والفرق بينهما",
    img: "https://static.vecteezy.com/system/resources/thumbnails/013/115/384/small_2x/cartoon-maths-elements-background-education-logo-vector.jpg",
    id: 5,
  },
  {
    title: "الدرس الرابع",
    description: "تحليل الفرق بين المربعين",
    img: "https://static.vecteezy.com/system/resources/thumbnails/013/115/384/small_2x/cartoon-maths-elements-background-education-logo-vector.jpg",
    id: 4,
  },
];

const Lectures = () => {
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
              key={index}
              id={lecture.id}
              title={lecture.title}
              description={lecture.description}
              img={lecture.img}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-8 cursor-pointer">
        <Link to="/courses/1" className="text-white text-2xl font-bold border-2 px-4 py-2 rounded-lg">
          استكشف المزيد
        </Link>
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
