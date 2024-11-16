import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

export function Theater() {

    const [isOpen, setOpen] = useState(true);

    const animationTheater = useAnimation();

    const animationTheaterOpen = () => {
        setOpen(!isOpen);

        if (isOpen){
            animationTheater.start({
                top: '0vw',
                transition: { duration: 1 },
            })
        } else {
            animationTheater.start({
                top: '-60vw',
                transition: { duration: 1 },
            })
        }
    }

    return (
        <motion.div className="relative h-4 w-full z-40 flex justify-center">
            <motion.div
            className="absolute top-[-60vw] z-[40] "
            initial={{
                top: "-60vw",
            }}
            animate={animationTheater}
            >
                <img src="/img/theater-left.png" alt="" />
            </motion.div>
            <motion.div
            className="absolute w-[100vh] h-[40vw] flex justify-center items-center backdrop-blur-md z-30 max-w-[400px] text-primary-text font-MONTSERRAT_montserrat_black flex-col"
            initial={{
                top: "-60vw",
            }}
            animate={animationTheater}
            >
                <span>Encontraste el</span>
                <span>huevo</span>
                <span>de pascua! 🥚</span>
                
            </motion.div>
            <motion.div
                className="absolute top-[-50vw] select-none z-[40] "
                initial={{
                top: "-50vw",
                }}
                whileTap={{
                    top: "-40vw",
                    transition: {
                        duration: 0.5,
                    },
                }}
                animate={animationTheater}
                onTap={() => animationTheaterOpen()}
                style={{ position: "relative" }} // Asegura que el movimiento funcione correctamente
            >
                <img src="/img/theater-right.png" className="select-none" alt="" />
            </motion.div>
        </motion.div>
    );
}
