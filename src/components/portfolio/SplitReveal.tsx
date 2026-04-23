import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  stagger?: number;
}

const SplitReveal = ({
  text,
  className = "",
  as: Tag = "h2",
  delay = 0,
  stagger = 0.06,
}: Props) => {
  const words = text.split(" ");

  const MotionTag = motion[Tag] as typeof motion.h2;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-15%" }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%" },
              visible: { y: 0 },
            }}
            transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
};

export default SplitReveal;

export const RevealLine = ({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);
