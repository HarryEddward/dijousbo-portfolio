import { JSX } from "react";
import { ViewHome } from "../../views/Home";
import { PageHomeHead } from "./head";

export function PageHome() {

    return(
        <div className="text-primary-text bg-sec-background">
            <PageHomeHead/>
            <ViewHome/>
        </div>
    )
}