import { motion } from "framer-motion";
import React from "react";

type Props = {
    className?: string;
    children: JSX.Element;
};

export function UnderlineContainer({ className, children }: Props): React.ReactElement<Props> {
    return (
        <div className={`relative inline-block ${className}`}>
            <motion.span className="inline-block">
                {children}
            </motion.span>
            <motion.div
                className="absolute bottom-0 left-0 h-full bg-gradient-to-r from-primary to-secondary w-full opacity-30"
                initial={{ width: '0%' }}
                whileTap={{  width: '0%' }}
                animate={{ width: '100%' }}
                transition={{
                    type: "spring",  // Utiliza el tipo spring
                    stiffness: 100,  // Rígidez del resorte
                    damping: 25,     // Amortiguación
                    duration: 2    // Duración en segundos (opcional, depende del efecto deseado)
                }}
            />
        </div>
    );
}
