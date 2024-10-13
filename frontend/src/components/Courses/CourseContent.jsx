import { useParams } from "react-router-dom";
import MarkdownPreview from "@uiw/react-markdown-preview";
import lec1 from "../../assets/Lectures/lec1.md?raw";
import lec2 from "../../assets/Lectures/lec2.md?raw";
import lec3 from "../../assets/Lectures/lec3.md?raw";
import lec4 from "../../assets/Lectures/lec4.md?raw";
import lec5 from "../../assets/Lectures/lec5.md?raw";
import lec3_1 from "../../assets/Images/lec3-1.png";
import lec3_2 from "../../assets/Images/lec3-2.png";
import lec4_1 from "../../assets/Images/lec4-1.png";
import lec4_2 from "../../assets/Images/lec4-2.png";
import lec5_1 from "../../assets/Images/lec5-1.png";

const CourseContent = ({ id }) => {
  const newLec3 = lec3
    .replace("../Images/lec3-1.png", lec3_1)
    .replace("../Images/lec3-2.png", lec3_2);

  const newLec4 = lec4
    .replace("../Images/lec4-1.png", lec4_1)
    .replace("../Images/lec4-2.png", lec4_2);

  const newLec5 = lec5.replace("../Images/lec5-1.png", lec5_1);

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
    case "4":
      content = newLec4;
      break;
    case "5":
      content = newLec5;
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
