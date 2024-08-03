import ual from "../assets/ual.png";
import uai from "../assets/uai.png";
import react from "../assets/react.png";
import css from "../assets/css.svg";
type ProjectProps = {
  img: string;
  title: string;
  href: string;
  text: string;
};

function Project({ img, title, href, text }: ProjectProps) {
  return (
    <div className="transition-transform grid gap-3 max-w-[360px] rounded-lg border hover:bg-slate-200 hover:-translate-y-5">
      <img src={img} alt={title} width={350} className="w-full rounded-t-lg" />
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-center"
      >
        <h2 className="font-medium text-lg">{title}</h2>
        <p className="opacity-50">{text}</p>
      </a>
      <div className="grid gap-3 h-fit bg-[#73c2fb] p-3 rounded-b-lg text-white">
        <p>Tech Stack:</p>
        <div className="flex gap-3">
          <img src={react} width={50} />
          <img src={css} width={30} />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="p-16 sm:p-10 ">
      <h1 className="text-4xl font-bold text-center my-14">My Projects</h1>
      <div className="grid grid-flow-col sm:grid-flow-row gap-10 place-content-center">
        <Project
          href="https://uynab-anime-list-v2.vercel.app/"
          img={ual}
          title="Uynab Anime List V2"
          text="Tempat melihat informasi dari berbagai jenis anime"
        />
        <Project
          href="https://uynabai.vercel.app/"
          img={uai}
          title="Uynab Artificial Intelegent"
          text="Tempat kamu bertanya seputar informasi yang ada di dunia"
        />
      </div>
    </section>
  );
}
