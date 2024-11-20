import { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { useNavbarStore } from "../../stores/storeNavbar";
import { Header } from "./Header";
import { Sections } from "./Sections";
import { Footer } from "../../components/Footer";

export function ViewAbout(): JSX.Element {

    const { itemsNavbarDesktop, selectedItemNavbarDesktop, setSelectedItemNavbarDesktop } = useNavbarStore();

    useEffect(() => {
        setSelectedItemNavbarDesktop("About");
        
    }, [selectedItemNavbarDesktop]);
    console.log(selectedItemNavbarDesktop);
    return(
        <div>
            <Navbar/>
            <Header/>
            <Sections/>
            <Footer/>
        </div>
    )
}