import { motion, useAnimation } from "framer-motion";

type Props = {
  children: JSX.Element;
};

export function ImageContainer({ children }: Props): JSX.Element {
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
        <div className="flex w-full h-full justify-center items-center">
            <span className="text-primary-background">Hola mundo</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
