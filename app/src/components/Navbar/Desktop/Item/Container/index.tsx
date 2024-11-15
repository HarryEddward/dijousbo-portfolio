import { motion } from "framer-motion"
import { UnderlineContainer } from "../../../../UnderlineContainer"

type Props = {
    children: JSX.Element
}

export function NavbarDesktopContainer({ children }: Props) {

    return(
        <div>
            <motion.div
            className="px-5 py-2 select-none border-2 border-primary-text">
                {children}
            </motion.div>
        </div>
    )
}