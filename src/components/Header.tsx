import { useEffect, useState } from "react";
export default function Header() {
  const [isAtAboutMePage, setIsAtAboutMePage] = useState(false);

  useEffect(() => {
    function scrollHandle() {
      window.scrollY > 500 && window.scrollY < 4500
        ? setIsAtAboutMePage(true)
        : setIsAtAboutMePage(false);
    }
    window.addEventListener("scroll", scrollHandle);
    return () => window.addEventListener("scroll", scrollHandle);
  }, []);

  return (
    <header
      className={`fixed ${
        isAtAboutMePage ? "hidden" : "flex"
      } z-50 w-full justify-between items-center p-5 px-14 sm:px-10 bg-white`}
    >
      <h1 className="font-bold text-2xl">
        Arfa Banyu <span className="text-[#73c2fb]">Santoro</span>
      </h1>
      <nav>
        <ul className="flex gap-8 md:hidden">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
