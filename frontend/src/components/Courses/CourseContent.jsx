import { useParams } from "react-router-dom";
import MarkdownPreview from "@uiw/react-markdown-preview";
import lec1 from "../../assets/Lectures/lec1.md?raw";
import lec2 from "../../assets/Lectures/lec2.md?raw";
import lec3 from "../../assets/Lectures/lec3.md?raw";
import lec3_1 from "../../assets/Images/lec3-1.png";
import lec3_2 from "../../assets/Images/lec3-2.png";

const CourseContent = ({ id }) => {
  const newLec3 = lec3
    .replace("../Images/lec3-1.png", lec3_1)
    .replace("../Images/lec3-2.png", lec3_2);
  const { courseId } = useParams();
  let content = "";

  switch (courseId) {
    case "1":
      content = lec1;
      break;
    case "2":
      content = lec2;
      break;
    case "3":
      content = newLec3;
      break;
    default:
      content = "";
  }
  return (
    <section className="container mx-auto p-2" style={{ direction: "rtl" }}>
      <div className="mt-10">
        <MarkdownPreview
          source={content}
          style={{ backgroundColor: "transparent" }}
        />
      </div>
    </section>
  );
};

export default CourseContent;
