import { useEffect } from "react";
import uynabFace from "../assets/uynab-face.jpeg";
import uynanFaceBlob from "../assets/blob-uynab-face.svg";
import instagram from "../assets/instagram.svg";
import github from "../assets/github.svg";
import ParallaxText from "./ParallaxText";

function Text() {
  useEffect(() => {
    const status: Element | null = document.querySelector(".type-animate-text");
    function animateText(): void {
      setTimeout(() => {
        status && (status.textContent = "Arfa Banyu S.");
      }, 0);
      setTimeout(() => {
        status && (status.textContent = "Student");
      }, 4000);
      setTimeout(() => {
        status && (status.textContent = "Web Dev");
      }, 8000);
    }
    animateText();
    setInterval(animateText, 12000);
  }, []);
  return (
    <div className="grid gap-5 text-left w-96 sm:w-72 z-0">
      <div>
        <h1 className="text-5xl md:text-4xl m">Hello, I'm </h1>
        <span className="text-5xl md:text-4xl font-bold text-[#73c2fb] relative type-animate-text"></span>
      </div>
      <p>Seorang pelajar yang ingin menjadi programmer di masa depan.</p>
      <div className="flex gap-2 z-50 social-media-btn">
        <a
          href="https://www.instagram.com/nyu_arfx/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="instagram" />
        </a>
        <a
          href="https://github.com/Banyuarfa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github" />
        </a>
      </div>
      <a
        href="#about-me"
        className="sm:hidden bg-[#73c2fb] w-fit p-3 hover:bg-[#5180a1] rounded text-white"
      >
        About Me
      </a>
    </div>
  );
}
function Image() {
  return (
    <div className="relative z-30">
      <img src={uynabFace} className="w-96 z-10 sm:m-auto rounded uynab-face" />
      <img src={uynanFaceBlob} className="absolute -z-10 top-10" />
    </div>
  );
}
export default function Home() {
  return (
    <section
      id="home"
      className="overflow-x-hidden grid place-content-center h-screen px-14 overflow-hidden"
    >
      <div className="flex flex-row-reverse sm:gap-5 sm:flex-col justify-around items-center sm:items-start sm:w-72">
        <div className="parallax absolute z-40 top-20 left-0">
          <ParallaxText baseVelocity={1}>Arfa Banyu Santoro</ParallaxText>
        </div>

        <Image />
        <Text />
        <div className="parallax absolute z-40 bottom-20 left-0">
          <ParallaxText baseVelocity={-1}>Arfa Banyu Santoro</ParallaxText>
        </div>
      </div>
    </section>
  );
}
