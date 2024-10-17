import { Link } from "react-router-dom";

const Lecture = ({ title, description, img, id }) => {
  return (
    <Link
      to={`/courses/${id}`}
      className="flex flex-col justify-center items-center cursor-pointer"
    >
      <img
        src={img}
        alt="Thumbnail"
        className="rounded-xl w-full md:w-3/4 object-cover duration-300 hover:scale-105"
      />
      <h1 className="text-xl font-bold mt-2">{title}</h1>
      <p className="text-lg mt-2 opacity-90">{description}</p>
    </Link>
  );
};

export default Lecture;
