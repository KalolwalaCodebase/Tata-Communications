import React from "react";
import { motion } from "framer-motion";

const AnimatedMessage = ({ message }) => {
  const messageVariants = {
    hidden: {
      opacity: 0,
      x: "-100px",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: { 
      transition: { staggerChildren: 1, delayChildren: 0.5 } 
    },
  };

  return (
    <div>
      <motion.b
        className="heading-main-section-down"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        {message.split(" ").map((word, index) => (
          <motion.span
            key={index}
            variants={messageVariants}
            style={{ display: "inline-block" }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.b>
    </div>
  );
};

export default AnimatedMessage;
