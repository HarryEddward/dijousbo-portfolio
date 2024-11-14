import { JSX } from "react";
import { HomeHeader } from './components/Header';
import { HomeSections } from './components/Sections';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

export function ViewHome(): JSX.Element {

    return(
        <div>
            <Navbar/>
            <HomeHeader/>
            <HomeSections/>
            <Footer/>
        </div>
    )
}