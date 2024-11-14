import { JSX } from "react";
import { NavbarResponsive } from "./Responsive";

export function Navbar(): JSX.Element {

    return(
        <div className="font-MONTSERRAT_montserrat_black">
            <div className="hidden lg:block">
                
            </div>
            <div className="block lg:hidden">
                <NavbarResponsive/>
            </div>
            
        </div>
    )
}