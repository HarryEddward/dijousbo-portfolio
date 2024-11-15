import { JSX } from "react";
import { NavbarResponsive } from "./Responsive";
import { NavbarDesktop } from "./Desktop";

export function Navbar(): JSX.Element {

    return(
        <div className="font-MONTSERRAT_montserrat_black">
            <div className="hidden lg:block mb-10">
                <NavbarDesktop/>
            </div>
            <div className="block lg:hidden">
                <NavbarResponsive/>
            </div>
            
        </div>
    )
}