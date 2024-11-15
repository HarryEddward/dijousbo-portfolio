import { useEffect } from "react";
import { useNavbarStore } from "../../../stores/storeNavbar"
import React from "react";
import { NavbarDesktopContainer } from "./Item/Container";
import { NavbarDesktopSelected } from "./Item/Selected";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function NavbarDesktop() {

    const { itemsNavbarDesktop, selectedItemNavbarDesktop, setSelectedItemNavbarDesktop } = useNavbarStore();


    return(
        <div>
            <div className="flex justify-between py-5">
                <div></div>
                <div className="flex gap-x-3 select-none">
                    {
                        itemsNavbarDesktop.map((item) => (
                            <React.Fragment key={item.name}>
                                <motion.div
                                initial={{
                                    rotate: 0,
                                    scale: 1
                                }}
                                whileTap={{
                                    rotate: 15,
                                    scale: 0.9
                                }}
                                >
                                    <div key={item.name} onClick={() => setSelectedItemNavbarDesktop(item.name)}>
                                    {
                                            selectedItemNavbarDesktop === item.name ? (
                                                <React.Fragment>
                                                    <NavbarDesktopSelected>
                                                        <NavbarDesktopContainer>
                                                            
                                                                <Link to={item.link}>
                                                                    <span>{item.name}</span>
                                                                </Link>
                                                            
                                                            
                                                        </NavbarDesktopContainer>
                                                    </NavbarDesktopSelected>
                                                </React.Fragment>
                                            ) : (
                                                <React.Fragment>
                                                    <NavbarDesktopContainer>
                                                            
                                                                <Link to={item.link}>
                                                                    <span>{item.name}</span>
                                                                </Link>
                                                    </NavbarDesktopContainer>
                                                </React.Fragment>
                                            )
                                    } 
                                        
                                    </div>
                                </motion.div>
                            </React.Fragment>
                        ))
                    }
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}