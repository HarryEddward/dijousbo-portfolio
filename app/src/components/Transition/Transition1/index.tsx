import { motion, AnimatePresence } from "framer-motion";



type Props = {
  children: JSX.Element;
};

export function Transition1({ children }: Props): JSX.Element {
  return (
    <AnimatePresence>
      <motion.div
        key="transition"
        initial={{ opacity: 0, scale: 1.1, y: 50 }}  // Inicia fuera de la vista
        animate={{ opacity: 1, scale: 1, y: 0 }}   // Se mueve hacia su lugar y se desvanece
        exit={{ opacity: 0, y: -50 }}    // Sale hacia arriba mientras se desvanece
        transition={{
          duration: 0.6,  // Duración de la transición
          ease: "easeInOut",  // Efecto de aceleración y desaceleración
        }}
        className="transition-container"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
