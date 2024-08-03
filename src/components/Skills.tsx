import react from "../assets/react.png";
import php from "../assets/php.png";
import html from "../assets/html.png";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import { useAnimate, useInView } from "framer-motion";
import { useEffect, useState } from "react";
import NumberAnimate from "./components/NumberAnimate";

type SkillProps = {
  skill: string;
  percent: number;
  img: string;
  width: number;
};

const Skill = ({ skill, percent, img, width }: SkillProps) => {
  const [color, setColor] = useState("");
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    const animationProps = isInView ? { width: `${percent}%` } : { width: "0" };
    animate(`.${skill}`, animationProps);
    if (percent < 33) {
      setColor("red");
    } else if (percent < 66) {
      setColor("#ebeb4f");
    } else {
      setColor("#45e045");
    }
  }, [isInView, animate, percent, skill]);

  return (
    <div
      ref={scope}
      className="flex justify-center items-center hover:bg-slate-200 rounded-lg p-3 hover:-translate-y-5 transition-transform"
    >
      <div className="w-[143px] h-[143px] flex justify-center items-center">
        <img src={img} alt={skill} width={width} />
      </div>
      <div className="w-full p-2">
        <div className="flex items-center gap-2">
          <p className="font-semibold">{skill.toUpperCase()}</p>
          <div className="flex items-center gap-1">
            <NumberAnimate>{percent}</NumberAnimate>
            <span>%</span>
          </div>
        </div>
        <div className="w-full h-4 bg-slate-300 rounded-lg mt-2">
          <div
            className={`h-full bg-opacity-100 rounded-lg ${skill}`}
            style={{ width: `${percent}%`, backgroundColor: color }}
          />
        </div>
      </div>
    </div>
  );
};

const Skills = () => (
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

export default Skills;
