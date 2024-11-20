import { motion, useAnimation } from "framer-motion";
import React from "react";

type Props = {
  children: JSX.Element;
  caption: JSX.Element | string;
};

export function ImageContainer({ children, caption }: Props): JSX.Element {
  const animationImageContainer = useAnimation();

  const handleTapStart = () => {
    animationImageContainer.start({ height: "100%" });
  };

  const handleTapEnd = () => {
    animationImageContainer.start({ height: "0%" });
  };

  return (
    <motion.div
      className="w-full h-full relative select-none"
      onTapStart={handleTapStart}
      onTapCancel={handleTapEnd}
      style={{ overflow: "hidden" }} // Asegúrate de ocultar el contenido cuando la altura es 0%
    >
      {children}
      <motion.div
        className="absolute top-0 left-0 w-full bg-black opacity-80 z-0"
        initial={{ height: "0%" }}
        animate={animationImageContainer}
        style={{ overflow: "hidden" }} // Asegura que el contenido se oculte cuando no hay altura
      >
        <div className="flex w-full h-full justify-center items-center text-yellow-50 p-4">
            {
              typeof caption==="string" ? (
                <React.Fragment>
                  <span>{caption}</span>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {caption}
                </React.Fragment>
              )
            }
        </div>
      </motion.div>
    </motion.div>
  );
}
