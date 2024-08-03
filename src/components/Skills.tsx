import react from "../assets/react.png";
import php from "../assets/php.png";
import html from "../assets/html.png";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import { useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import NumberAnimate from "./components/NumberAnimate";

type SkillProps = {
  skill: string;
  percent: number;
  img: string;
  width: number;
};

function Skill({ skill, percent, img, width }: SkillProps) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    isInView
      ? animate(`.${skill}`, { width: `${percent}%` })
      : animate(`.${skill}`, { width: "0" });
  }, [isInView]);
  return (
    <div
      ref={scope}
      className="flex justify-center items-center hover:bg-slate-200 rounded-lg p-3 hover:-translate-y-5 transition-transform"
    >
      <div className="w-[143px] h-[143px] grid place-content-center">
        <img src={img} alt={skill} width={width} className="m-auto" />
      </div>
      <div className="w-full h-full p-2">
        <div className="flex gap-1">
          <p>{skill.toUpperCase()}</p>
          <div className="flex">
            <NumberAnimate>{percent}</NumberAnimate>
            <span>%</span>
          </div>
        </div>
        <div className="w-full h-4 bg-slate-300 rounded-lg">
          <div
            className={`${skill} w-[${percent}%] h-full bg-red-500 rounded-lg`}
          ></div>
        </div>
      </div>
    </div>
  );
}
export default function Skills() {
  return (
    <section id="skills" className="p-16 sm:p-10">
      <h1 className="text-4xl font-bold text-center my-14">My Skills</h1>
      <div className="grid grid-flow-col sm:grid-flow-row gap-10 sm:gap-0 sm:place-content-center">
        <div className="w-full">
          <Skill skill="html" percent={90} img={html} width={120} />
          <Skill skill="css" percent={80} img={css} width={80} />
          <Skill skill="javascript" percent={70} img={javascript} width={100} />
        </div>
        <div className="w-full">
          <Skill skill="php" percent={50} img={php} width={100} />
          <Skill skill="react" percent={65} img={react} width={100} />
          <Skill skill="tailwind" percent={40} img={tailwind} width={100} />
        </div>
      </div>
    </section>
  );
}
