import img from "../assets/SVG/404.svg";
import ReturnToHomeButton from "../components/UI/Buttons/ReturnToHomeButton";

const NotFoundPage = () => {
  return (
    <section className="bg-slate-900 h-screen flex flex-col justify-center items-center gap-4 px-2">
      <h1 className="text-white text-3xl text-center">
        الصفحة التي تبحث عنها غير موجودة
      </h1>
      <img src={img} alt="404" className="mx-auto" />
      <ReturnToHomeButton />
    </section>
  );
};

export default NotFoundPage;
