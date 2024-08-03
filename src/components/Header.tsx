import { useEffect, useState } from "react";

export default function Header() {
  const [isAtAboutMePage, setIsAtAboutMePage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtAboutMePage(window.scrollY > 500 && window.scrollY < 4000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 w-full p-5 px-14 sm:px-10 bg-white ${
        isAtAboutMePage ? "hidden" : "flex"
      } justify-between items-center`}
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
