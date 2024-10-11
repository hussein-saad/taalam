import MarkdownPreview from "@uiw/react-markdown-preview";
import video1 from "../../assets/Videos/lec1-1.webm";
import video2 from "../../assets/Videos/lec1-2.webm";
import video3 from "../../assets/Videos/lec1-3.webm";
import video4 from "../../assets/Videos/lec1-4.webm";
import lec1 from "../../assets/Lectures/lec1.md?raw";

const CourseContent = ({ id }) => {
  const markdownContent = lec1
    .replace("./lec1-1.mp4", video1)
    .replace("./lec1-2.mp4", video2)
    .replace("./lec1-3.mp4", video3)
    .replace("./lec1-4.mp4", video4);

  return (
    <section className="container mx-auto p-2" style={{ direction: "rtl" }}>
      <div className="mt-10">
        <MarkdownPreview
          source={markdownContent}
          style={{ backgroundColor: "transparent" }}
        />
      </div>
    </section>
  );
};

export default CourseContent;
