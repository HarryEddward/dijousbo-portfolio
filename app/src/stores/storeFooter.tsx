import { create } from "zustand";
import { BsGithub, BsYoutube } from "react-icons/bs";
import { DiNpm } from "react-icons/di";


interface FooterState {
    sizeItems: number;
    items: { item: JSX.Element, link: string }[];
}


export const useFooterStore = create<FooterState>((set) => ({
    sizeItems: 30,
    items: [
        {
            "item":  <BsGithub size={30}/>,
            "link": "https://github.com/HarryEddward",
        },
        {
            "item":  <DiNpm size={30}/>,
            "link": "https://github.com/HarryEddward",
        },
        {
            "item":  <BsYoutube size={30}/>,
            "link": "https://github.com/HarryEddward",
        }
    ]
}));
