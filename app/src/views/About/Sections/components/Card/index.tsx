import { motion } from "framer-motion";

type Props = {
    className?: string;
    children: JSX.Element;
}

export function SectionCard({ className, children }: Props) {
    return (
        <div>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -50,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: false
                }}
                transition={{
                    duration: 1,
                    ease: [0.43, 0.13, 0.23, 0.96],
                    type: "spring",
                    stiffness: 120,
                    damping: 20
                }}
                className={`bg-white shadow-md rounded-lg p-6 md:p-8 lg:p-10 ${className}`}
            >
                {children}
            </motion.div>
        </div>
    );
}