import { JSX } from "react";
import { NavbarResponsive } from "./Responsive";
import { NavbarDesktop } from "./Desktop";
import { Theater } from "../../views/Home/components/Theater";

export function Navbar(): JSX.Element {

    return(
        <div className="font-MONTSERRAT_montserrat_black">
            <div className="hidden lg:block mb-10">
                <NavbarDesktop/>
            </div>
            <div className="block lg:hidden">
                <Theater/>
                <NavbarResponsive/>
            </div>
            
        </div>
    )
}