import { JSX, useEffect } from "react";
import { HomeHeader } from './components/Header';
import { HomeSections } from './components/Sections';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { useNavbarStore } from "../../stores/storeNavbar";

export function ViewHome(): JSX.Element {

    const { itemsNavbarDesktop, selectedItemNavbarDesktop, setSelectedItemNavbarDesktop } = useNavbarStore();

    useEffect(() => {
        setSelectedItemNavbarDesktop("Home");
    }, []);

    return(
        <div>
            <Navbar/>
            <HomeHeader/>
            <HomeSections/>
            <Footer/>
        </div>
    )
}