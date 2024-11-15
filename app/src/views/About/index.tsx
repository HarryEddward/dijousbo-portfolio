import { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { useNavbarStore } from "../../stores/storeNavbar";

export function ViewAbout(): JSX.Element {

    const { itemsNavbarDesktop, selectedItemNavbarDesktop, setSelectedItemNavbarDesktop } = useNavbarStore();

    useEffect(() => {
        setSelectedItemNavbarDesktop("About");
        
    }, [selectedItemNavbarDesktop]);
    console.log(selectedItemNavbarDesktop);
    return(
        <div>
            <Navbar/>
            
        </div>
    )
}