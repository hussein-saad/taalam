import { useNavigate } from "react-router-dom";

const LeftArrow = () => {
  const navigate = useNavigate();
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 16 16"
      className="absolute top-4 left-4 rounded-full bg-[#38d39f] p-2 cursor-pointer hover:bg-[#289973] transition-all duration-300"
      onClick={() => navigate("/")}
    >
      <path
        fill="white"
        fillRule="evenodd"
        d="M5.841 5.28a.75.75 0 0 0-1.06-1.06L1.53 7.47L1 8l.53.53l3.25 3.25a.75.75 0 0 0 1.061-1.06l-1.97-1.97H14.25a.75.75 0 0 0 0-1.5H3.871z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default LeftArrow;
