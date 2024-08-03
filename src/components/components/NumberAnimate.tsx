import { animate, useMotionValue, useTransform, motion } from "framer-motion";
import { useEffect } from "react";

export default function PercentAnimate({ children }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  useEffect(() => {
    const controls = animate(count, parseInt(children));

    return () => controls.stop();
  }, []);

  return <motion.div>{rounded}</motion.div>;
}
