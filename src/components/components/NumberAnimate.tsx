import { animate, useMotionValue, useTransform, motion } from "framer-motion";
import { useEffect } from "react";
type PercentAnimate = {
  children: number;
};
export default function PercentAnimate({ children }: PercentAnimate) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  useEffect(() => {
    const controls = animate(count, children);

    return () => controls.stop();
  }, []);

  return <motion.div>{rounded}</motion.div>;
}
