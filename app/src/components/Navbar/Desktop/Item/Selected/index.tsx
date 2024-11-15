import { motion } from "framer-motion"


type Props = {
    children: JSX.Element
}
export function NavbarDesktopSelected({ children }: Props) {

    return(
        <motion.div
        className="outline outline-4"
        >
            {children}
        </motion.div>
    )
}