import useSignOut from "react-auth-kit/hooks/useSignOut";

const LogoutButton = () => {
  const signOut = useSignOut();

  return (
    <button
      onClick={() => {
        signOut();
        window.location.href = "/login";
      }}
      className="block w-full md:w-1/2 h-14 rounded-3xl outline-none border-0 bg-gradient-to-r from-[#be3232] to-[#d33838] text-white text-xl cursor-pointer hover:from-[#d33838] hover:to-[#be3232]"
    >
      تسجيل الخروج
    </button>
  );
};

export default LogoutButton;
