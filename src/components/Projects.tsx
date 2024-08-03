import ual from "../assets/ual.png";
import uai from "../assets/uai.png";
import css from "../assets/css.svg";
import vite from "../assets/vite.svg"

type ProjectProps = {
  img: string;
  title: string;
  href: string;
  text: string;
};

const Project = ({ img, title, href, text }: ProjectProps) => (
  <div className="transition-transform grid gap-3 max-w-[360px] rounded-lg border hover:bg-slate-200 hover:-translate-y-5">
    <img src={img} alt={title} className="w-full rounded-t-lg" />
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-center block"
    >
      <h2 className="font-medium text-lg">{title}</h2>
      <p className="opacity-50">{text}</p>
    </a>
    <div className="grid gap-3 h-fit bg-[#73c2fb] p-3 rounded-b-lg text-white">
      <p>Tech Stack:</p>
      <div className="flex gap-3">
        <img src={vite} alt="Vite" width={50} />
        <img src={css} alt="CSS" width={30} />
      </div>
    </div>
  </div>
);

const Projects = () => (
  <section id="projects" className="p-16 sm:p-10">
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

export default Projects;
