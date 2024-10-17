import { useParams } from "react-router-dom";
import MarkdownPreview from "@uiw/react-markdown-preview";
import lec1 from "../../assets/Lectures/lec1.md?raw";
import lec2 from "../../assets/Lectures/lec2.md?raw";
import lec3 from "../../assets/Lectures/lec3.md?raw";
import lec4 from "../../assets/Lectures/lec4.md?raw";
import lec5 from "../../assets/Lectures/lec5.md?raw";
import lec6 from "../../assets/Lectures/lec6.md?raw";
import lec7 from "../../assets/Lectures/lec7.md?raw";
import lec8 from "../../assets/Lectures/lec8.md?raw";
import lec9 from "../../assets/Lectures/lec9.md?raw";
import lec10 from "../../assets/Lectures/lec10.md?raw";
import lec11 from "../../assets/Lectures/lec11.md?raw";
import lec12 from "../../assets/Lectures/lec12.md?raw";
import lec3_1 from "../../assets/Images/lec3-1.png";
import lec3_2 from "../../assets/Images/lec3-2.png";
import lec4_1 from "../../assets/Images/lec4-1.png";
import lec4_2 from "../../assets/Images/lec4-2.png";
import lec5_1 from "../../assets/Images/lec5-1.png";
import lec7_1 from "../../assets/Images/lec7-1.png";
import lec9_1 from "../../assets/Images/lec9-1.png";
import lec9_2 from "../../assets/Images/lec9-2.png";
import lec10_1 from "../../assets/Images/lec10-1.png";
import lec10_2 from "../../assets/Images/lec10-2.png";
import lec10_3 from "../../assets/Images/lec10-3.png";
import lec10_4 from "../../assets/Images/lec10-4.png";
import lec10_5 from "../../assets/Images/lec10-5.png";
import lec10_6 from "../../assets/Images/lec10-6.png";
import lec11_1 from "../../assets/Images/lec11-1.png";
import lec12_1 from "../../assets/Images/lec12-1.png";
import lec12_2 from "../../assets/Images/lec12-2.png";
import lec12_3 from "../../assets/Images/lec12-3.png";

const CourseContent = () => {
  const newLec3 = lec3
    .replace("../Images/lec3-1.png", lec3_1)
    .replace("../Images/lec3-2.png", lec3_2);

  const newLec4 = lec4
    .replace("../Images/lec4-1.png", lec4_1)
    .replace("../Images/lec4-2.png", lec4_2);

  const newLec5 = lec5.replace("../Images/lec5-1.png", lec5_1);

  const newLec7 = lec7.replace("../Images/lec7-1.png", lec7_1);

  const newLec9 = lec9
    .replace("../Images/lec9-1.png", lec9_1)
    .replace("../Images/lec9-2.png", lec9_2);

  const newLec10 = lec10
    .replace("../Images/lec10-1.png", lec10_1)
    .replace("../Images/lec10-2.png", lec10_2)
    .replace("../Images/lec10-3.png", lec10_3)
    .replace("../Images/lec10-4.png", lec10_4)
    .replace("../Images/lec10-5.png", lec10_5)
    .replace("../Images/lec10-6.png", lec10_6);

  const newLec11 = lec11.replace("../Images/lec11-1.png", lec11_1);

  const newLec12 = lec12
    .replace("../Images/lec12-1.png", lec12_1)
    .replace("../Images/lec12-2.png", lec12_2)
    .replace("../Images/lec12-3.png", lec12_3);

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
    case "6":
      content = lec6;
      break;
    case "7":
      content = newLec7;
      break;
    case "8":
      content = lec8;
      break;
    case "9":
      content = newLec9;
      break;
    case "10":
      content = newLec10;
      break;
    case "11":
      content = newLec11;
      break;
    case "12":
      content = newLec12;
      break;
    default:
      throw new Error("Invalid course id");
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
