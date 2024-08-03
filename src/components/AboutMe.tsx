import { useInView, useAnimation, motion } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

type TextProps = {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  repeatDelay?: number;
};
const defaulAnimations = {
  hidden: { opacity: 0, y: 1 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.1 } },
};
function Text({ text, el: Wrapper = "p", className, repeatDelay }: TextProps) {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    let timeout;
    function show() {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    }
    isInView ? show() : controls.start("hidden");
    return () => clearTimeout;
  }, [isInView]);
  return (
    <Wrapper className={className}>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        transition={{ staggerChildren: 0.1 }}
      >
        {textArray.map((line) => (
          <span className="block relative">
            <span className="absolute top-0 opacity-30">{text}</span>
            {line.split(" ").map((word: string) => (
              <span className="inline-block">
                {word.split(" ").map((char: string) => (
                  <motion.span
                    className="inline-block"
                    variants={defaulAnimations}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
}
type DivProp = {
  children: ReactNode;
};
function Div({ children }: DivProp) {
  return (
    <div className="h-screen w-screen grid place-content-center p-32 sm:p-10">
      {children}
    </div>
  );
}
export default function AboutMe() {
  useEffect(() => {
    const aboutMe: Element | null = document.querySelector(".sticky");
    window.addEventListener("scroll", () => {
      const offSetTop: number | undefined = aboutMe?.parentElement?.offsetTop;
      const scrollSect: ChildNode | null | undefined = aboutMe?.firstChild;
      let percentage =
        ((window.scrollY - offSetTop) / window.innerHeight) * 100;
      percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
      scrollSect &&
        (scrollSect.style.transform = `translate3d(${-percentage}vw, 0, 0)`);
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        entry.isIntersecting
          ? entry.target.classList.add("show")
          : entry.target.classList.remove("show");
      });
    });
    const text = document.querySelectorAll(".hid");
    text.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <section
        id="about-me"
        className="font-medium text-4xl sm:text-3xl text-[#73c2fb] h-[250vw] md:h-[400vw] sm:h-[500vh]"
      >
        <div className="h-screen w-screen top-0 sticky">
          <div className="h-full w-full grid grid-flow-col">
            <Div>
              <Text text="Halo! Perkenalkan nama saya Arfa Banyu Santoro dan kalian bisa panggil saya Banyu." />
            </Div>
            <Div>
              <Text text="Saya duduk di bangku kelas X-RPL untuk menekuni ilmu di bidang teknologi." />
            </Div>
            <Div>
              <Text text="Saya dilahirkan oleh Ibu yang luar biasa di Jakarta pada tanggal 4 Desember 2008." />
            </Div>
            <Div>
              <Text text="Umur saya 15 tahun 7 bulan 30 hari dan saya merupakan anak pertama dari 2 bersaudara" />
            </Div>
            <Div>
              <Text text="Coding merupakan hobi yang paling saya sukai dari hobi lainnya." />
            </Div>
          </div>
        </div>
      </section>
    </>
  );
}
