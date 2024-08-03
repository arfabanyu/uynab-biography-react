import { useInView, useAnimation, motion } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

type TextProps = {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
};

const defaultAnimations = {
  hidden: { opacity: 0.5, y: 1 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.1 } },
};

function Text({ text, el: Wrapper = "p", className }: TextProps) {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    controls.start(isInView ? "visible" : "hidden");
  }, [isInView, controls]);

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
        {textArray.map((line, index) => (
          <span key={index}>
            {line.split(" ").map((word: string, i: number) => (
              <span key={i} className="inline-block">
                {word.split(" ").map((char, j) => (
                  <motion.span
                    key={j}
                    className="inline-block"
                    variants={defaultAnimations}
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

type DivProps = {
  children: ReactNode;
};

function Div({ children }: DivProps) {
  return (
    <div className="h-screen w-screen grid place-content-center p-32 sm:p-10">
      {children}
    </div>
  );
}

export default function AboutMe() {
  useEffect(() => {
    const handleScroll = () => {
      const aboutMe = document.querySelector(".sticky") as HTMLElement;
      const offsetTop = aboutMe?.parentElement?.offsetTop ?? 0;
      const scrollSect = aboutMe?.firstChild as HTMLElement;
      let percentage =
        ((window.scrollY - offsetTop) / window.innerHeight) * 100;
      percentage = Math.max(0, Math.min(percentage, 400));
      scrollSect.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    });

    const textElements = document.querySelectorAll(".hid");
    textElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      textElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
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
            <Text text="Umur saya 15 tahun 8 bulan dan saya merupakan anak pertama dari 2 bersaudara" />
          </Div>
          <Div>
            <Text text="Coding merupakan hobi yang paling saya sukai dari hobi lainnya." />
          </Div>
        </div>
      </div>
    </section>
  );
}
