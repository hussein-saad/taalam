import { useParams } from "react-router-dom";

import CourseNav from "../components/Courses/CourseNav";
import CourseContent from "../components/Courses/CourseContent";

const CoursesPage = () => {
  const { courseId } = useParams();
  
  return (
    <section className="bg-[#17435C] h-full pt-20">
      <CourseNav />
      <CourseContent id={courseId}/>
    </section>
  );
};

export default CoursesPage;
