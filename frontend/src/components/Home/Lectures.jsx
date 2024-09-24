import Lecture from "./Lecture";
import arrow from "../../assets/GIF/downArrow.gif";


const lectures = [
  {
    title: "المحاضرة الثالثه",
    description: "محاضرة تعليمية في مجال الشبكات",
    img: "https://www.dochipo.com/wp-content/uploads/2021/10/YouTube-Thumbnail-_-Education-1024x576.png",
  },
  {
    title: "المحاضرة الثانيه",
    description: "محاضرة تعليمية في مجال التصميم",
    img: "https://www.dochipo.com/wp-content/uploads/2021/10/YouTube-Thumbnail-_-Education-1024x576.png",
  },
  {
    title: "المحاضرة الأولى",
    description: "محاضرة تعليمية في مجال البرمجة",
    img: "https://www.dochipo.com/wp-content/uploads/2021/10/YouTube-Thumbnail-_-Education-1024x576.png",
  },
  {
    title: "المحاضرة السادسه",
    description: "محاضرة تعليمية في مجال الشبكات",
    img: "https://www.dochipo.com/wp-content/uploads/2021/10/YouTube-Thumbnail-_-Education-1024x576.png",
  },
  {
    title: "المحاضرة الخامسه",
    description: "محاضرة تعليمية في مجال التصميم",
    img: "https://www.dochipo.com/wp-content/uploads/2021/10/YouTube-Thumbnail-_-Education-1024x576.png",
  },
  {
    title: "المحاضرة الرابعه",
    description: "محاضرة تعليمية في مجال البرمجة",
    img: "https://www.dochipo.com/wp-content/uploads/2021/10/YouTube-Thumbnail-_-Education-1024x576.png",
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
