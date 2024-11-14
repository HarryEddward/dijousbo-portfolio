import { Sling as Hamburger } from 'hamburger-react';
import { JSX, useEffect } from "react";
import { motion, useAnimation } from 'framer-motion';
import { useNavbarStore } from '../../../stores/storeNavbar';

export function NavbarResponsive(): JSX.Element {

    const { isOpen, toggleNavbar } = useNavbarStore();
    console.log(isOpen)
    const navbarAnimation = useAnimation();

    const navbarOpen = (): void => {
        navbarAnimation.start({
            x: '-100%'
        });
    }
    const navbarClosed = (): void => {
        navbarAnimation.start({
            x: '0%'
        });
    }

    useEffect(() => {
        if (!isOpen) {
            navbarOpen();
          } else {
            navbarClosed();
        }
    }, [isOpen, navbarAnimation])

    return(
        <div className='relative'>
            <div className="flex p-5">
                <Hamburger toggled={isOpen} toggle={toggleNavbar} size={50}/>
            </div>
            <div className="relative">
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={navbarAnimation}
                    className={`absolute top-0 left-0 w-full h-screen backdrop-blur-md`}>
                    <div className='text-[8vw]'>
                        <motion.button
                            initial={{
                                scale: 1
                            }}
                            whileTap={{
                                scale: 0.8,
                                transition: {
                                    duration: 0.2
                                }
                            }}
                            className='w-full py-0 bg-primary-background'>
                            Home
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
