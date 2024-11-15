import { ViewAbout } from "../../views/About";
import { PageAboutHead } from "./head";

export function PageAbout(): JSX.Element {

    return(
        <div className="text-primary-text bg-sec-background">
            <PageAboutHead/>
            <ViewAbout/>
        </div>
    )
}