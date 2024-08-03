import github from "../assets/github.svg";
import instagram from "../assets/instagram.svg";

export default function Footer() {
  return (
    <footer className="p-16 sm:p-10 bg-[#73c2fb] text-center">
      <div className="flex justify-center items-center gap-2 mb-4">
        <a
          href="https://www.instagram.com/nyu_arfx/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <img src={instagram} alt="Instagram logo" className="w-8 h-8" />
        </a>
        <a
          href="https://github.com/Banyuarfa/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img src={github} alt="GitHub logo" className="w-8 h-8" />
        </a>
      </div>
      <p className="text-white">
        Made with 💖 by{" "}
        <a href="https://www.instagram.com/nyu_arfx/" className="underline">
          Dev
        </a>
      </p>
    </footer>
  );
}
