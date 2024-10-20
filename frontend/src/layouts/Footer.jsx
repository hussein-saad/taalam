const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white p-3">
      <div className="container mx-auto flex flex-col">
        <h1 className="text-4xl font-bold drop-shadow-lg">Ta'llam</h1>
        <p className="text-lg mt-2 opacity-90">
          Learn anything, anytime, anywhere
        </p>
        <p>
          Copyright &copy; 2024, powerd by{" "}
          <a
            href="https://github.com/GoatMoaz"
            className="font-bold"
            target="_blank"
          >
            Moaz Ayman
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/hussein-saad"
            className="font-bold"
            target="_blank"
          >
            Hussein Saad
          </a>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
