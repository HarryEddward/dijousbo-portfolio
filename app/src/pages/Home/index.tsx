import { JSX } from "react";
import { ViewHome } from "../../views/Home";
import { PageHomeHead } from "./head";
import { Transition1 } from "../../components/Transition/Transition1";

export function PageHome() {

    return(
        <div className="text-primary-text bg-sec-background">
            <PageHomeHead/>
            <Transition1>
                <ViewHome/>
            </Transition1>
        </div>
    )
}