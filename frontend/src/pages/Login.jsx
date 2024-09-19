import { Link } from "react-router-dom";

import avatar from "../assets/SVG/avatar.svg";
import FormInput from "../components/UI/Inputs/FormInput";

const LoginPage = () => {
  return (
    <form className="text-center w-full sm:w-auto">
      <img src={avatar} alt="avatar" className="mx-auto h-[150px] w-[150px]" />
      <h2 className="my-3 text-white text-5xl sm:mx-10">مرحبا بك مجددا</h2>
      <FormInput
        label="اسم المستخدم"
        type="text"
        name="username"
        id="username"
      />
      <FormInput
        label="كلمه المرور"
        type="password"
        name="password"
        id="password"
      />
      <div className="flex justify-between">
        <Link
          href="#"
          className="block text-right text-[#999] text-base duration-300 transition hover:text-[#38d39f]"
        >
          نسيت كلمه المرور؟
        </Link>
        <Link
          to="/signup"
          className="block text-right text-[#999] text-base duration-300 transition hover:text-[#38d39f]"
        >
          انشاء حساب جديد
        </Link>
      </div>

      <button
        type="submit"
        className="block w-full h-14 rounded-3xl outline-none border-0 bg-gradient-to-r from-[#32be8f] to-[#38d39f] text-white text-xl mt-4 cursor-pointer hover:from-[#38d39f] hover:to-[#32be8f]"
      >
        تسجيل الدخول
      </button>
    </form>
  );
};

export default LoginPage;
