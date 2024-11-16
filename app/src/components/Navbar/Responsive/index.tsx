import { Sling as Hamburger } from 'hamburger-react';
import React, { JSX, useEffect } from "react";
import { motion, useAnimation } from 'framer-motion';
import { useNavbarStore } from '../../../stores/storeNavbar';
import { Link } from 'react-router-dom';

export function NavbarResponsive(): JSX.Element {

    const { isOpen, toggleNavbar, itemsNavbarDesktop } = useNavbarStore();
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
        <div className='relative z-50'>
            <div className="flex p-5">
                <Hamburger toggled={isOpen} toggle={toggleNavbar} size={50}/>
            </div>
            <div className="relative">
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={navbarAnimation}
                    className={`absolute top-0 left-0 w-full h-screen backdrop-blur-md z-[90]`}>
                    
                    {
                        itemsNavbarDesktop.map((item) => (
                            
                            <React.Fragment key={item.name}>
                                <div className='text-[10vw]'>
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
                                        <Link to={item.link}>
                                            <span>{item.name}</span>
                                        </Link>
                                    </motion.button>
                                </div>
                            </React.Fragment>
                            
                        ))
                    }
                    
                </motion.div>
            </div>
        </div>
    );
}
