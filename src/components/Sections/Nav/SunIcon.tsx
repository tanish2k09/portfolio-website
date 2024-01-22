import React from "react";
import { motion } from "framer-motion";
import { transition, whileTap } from "../../../scripts/Constants";
import { Props } from "framer-motion/types/types";

export const SunIcon = (props: Props) => {
  const raysVariants = {
    initial: { rotate: 45 },
    animate: { rotate: 0, transition }
  };

  const coreVariants = {
    initial: { scale: 1.5 },
    animate: { scale: 1, transition }
  };

  return (
    <motion.svg
      key="sun"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      whileTap={whileTap}
      // Centers the rotation anchor point vertically & horizontally
      style={{ originX: "50%", originY: "50%" }}
    >
      <motion.circle
        cx="11.9998"
        cy="11.9998"
        r="5.75375"
        initial="initial"
        animate="animate"
        variants={coreVariants}
      />
      <motion.g initial="initial" animate="animate" variants={raysVariants}>
        <circle
          cx="3.08982"
          cy="6.85502"
          r="1.71143"
          transform="rotate(-60 3.08982 6.85502)"
        />
        <circle
          cx="3.0903"
          cy="17.1436"
          r="1.71143"
          transform="rotate(-120 3.0903 17.1436)"
        />
        <circle cx="12" cy="22.2881" r="1.71143" />
        <circle
          cx="20.9101"
          cy="17.1436"
          r="1.71143"
          transform="rotate(-60 20.9101 17.1436)"
        />
        <circle
          cx="20.9101"
          cy="6.8555"
          r="1.71143"
          transform="rotate(-120 20.9101 6.8555)"
        />
        <circle cx="12" cy="1.71143" r="1.71143" />
      </motion.g>
    </motion.svg>
  );
};
