import github from "../assets/github.svg";
import instagram from "../assets/instagram.svg";
export default function Footer() {
  return (
    <footer className="p-16 sm:p-10 bg-[#73c2fb]">
      <div className="text-center grid place-content-center gap-2">
        <div className="flex gap-2 z-50 social-media-btn justify-center items-center">
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
        <p className="text-white">
          made with 💖 by <a href="https://www.instagram.com/nyu_arfx/">Dev</a>
        </p>
      </div>
    </footer>
  );
}
