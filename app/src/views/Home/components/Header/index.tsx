import { JSX } from "react";
import { motion } from "framer-motion";
import { UnderlineContainer } from "../../../../components/UnderlineContainer";

export function HomeHeader(): JSX.Element {
  return (
    <div className="font-MONTSERRAT_montserrat_black z-0">
      <motion.h2
        className="text-xl pl-6 md:p-0 md:text-center font-MONTSERRAT_montserrat_extralight select-none"
        whileTap={{
          letterSpacing: "0.1em",
          transition: {
            duration: 0.2,
            ease: "easeOut",
          },
        }}
      >
        Adrià Martín Martorell
      </motion.h2>
      <h1 className="inline-block w-full pl-6 md:p-0 md:text-center text-4xl md:text-8xl text-wrap py-8 z-0">
        <span className="z-0">
          El mejor desarrollador web de
          <UnderlineContainer
            className="px-3"
            children={<span className="">17 años</span>}
          />
          en el mundo
          <motion.span
            className="ml-3 inline-block z-0"
            initial={{
              rotate: 0,
            }}
            animate={{
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            drag
            dragConstraints={{
              top: -3,
              right: 3,
              bottom: 3,
              left: -3,
            }}
          >
            🌍
          </motion.span>
        </span>
      </h1>
    </div>
  );
}