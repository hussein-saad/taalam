import { useParams } from "react-router-dom";

import CourseNav from "../components/Courses/CourseNav";
import CourseContent from "../components/Courses/CourseContent";
import Footer from "../layouts/Footer";

const CoursesPage = () => {
  const { courseId } = useParams();

  return (
    <>
      <section className="bg-[#17435C] h-full py-20">
        <CourseNav />
        <CourseContent id={courseId} />
      </section>
      <Footer />
    </>
  );
};

export default CoursesPage;
