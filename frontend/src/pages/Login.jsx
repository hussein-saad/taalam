import { Link } from "react-router-dom";

import avatar from "../assets/SVG/avatar.svg";
import loginSVG from "../assets/SVG/login.svg";

import FormInput from "../components/UI/Inputs/FormInput";
import LeftArrow from "../components/UI/Icons/LeftArrow";
import HomeButton from "../components/UI/Buttons/HomeButton";
import LogoutButton from "../components/UI/Buttons/LogoutButton";
import LoginButton from "../components/UI/Buttons/LoginButton";

import useSignIn from "react-auth-kit/hooks/useSignIn";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

const LoginPage = () => {
  const signIn = useSignIn();
  const isAuthenticated = useIsAuthenticated();

  const authUser = useAuthUser();

  const loginHandler = async (e) => {
    e.preventDefault();

    const userData = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    try {
      const response = await fetch("http://localhost:3000/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      const data = await response.json();

      signIn({
        auth: {
          token: data.token,
          type: "Bearer",
        },
        userState: {
          name: data.data.user.username,
          id: data.data.user._id,
        },
      });

      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex items-center justify-evenly h-screen bg-gradient-to-t from-slate-800 px-2 to-slate-900">
      <LeftArrow />
      <img
        src={loginSVG}
        alt="background"
        className="hidden lg:block h-[500px] w-[500px]"
      />
      {!isAuthenticated && (
        <form onSubmit={loginHandler} className="text-center w-full sm:w-auto">
          <img
            src={avatar}
            alt="avatar"
            className="mx-auto h-[150px] w-[150px]"
          />
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
          <Link
            href="#"
            className="block text-right text-[#999] text-base duration-300 transition hover:text-[#38d39f]"
          >
            نسيت كلمه المرور؟
          </Link>
          <LoginButton />
        </form>
      )}

      {isAuthenticated && (
        <div className="flex flex-col p-4">
          <h2 className="text-white text-3xl text-center sm:text-4xl md:text-5xl">
            {authUser.name} مرحبا بك مجددا يا{" "}
          </h2>
          <div className="flex flex-col items-center md:flex-row justify-between mt-4 gap-8">
            <LogoutButton />
            <HomeButton />
          </div>
        </div>
      )}
    </section>
  );
};

export default LoginPage;
