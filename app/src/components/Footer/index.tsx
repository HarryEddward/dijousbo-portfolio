import React, { JSX } from "react";
import { BsGithub, BsYoutube } from "react-icons/bs";
import { CgNpm } from "react-icons/cg";
import { DiNpm } from "react-icons/di";
import { Link } from "react-router-dom";
import { useFooterStore } from "../../stores/storeFooter";



export function Footer(): JSX.Element {

    const { items } = useFooterStore();

    return(
        <div>
            <div className="flex flex-col w-full py-7 justify-center font-INTER_inter_18pt_light text-center gap-y-4">
                <span>&copy; 2024 Adrià Martín Martorell. Todos los derechos reservados.</span>
                <div className="flex flex-row justify-center gap-x-3">

                    {
                        items.map((item, i) => (
                            <React.Fragment>
                                <Link to={item.link}>
                                    {item.item}
                                </Link>
                            </React.Fragment>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}