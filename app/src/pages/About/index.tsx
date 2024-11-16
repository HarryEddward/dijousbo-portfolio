import { Transition1 } from "../../components/Transition/Transition1";
import { ViewAbout } from "../../views/About";
import { PageAboutHead } from "./head";

export function PageAbout(): JSX.Element {

    return(
        <div className="text-primary-text bg-sec-background">
            <PageAboutHead/>
            <Transition1>
                <ViewAbout/>
            </Transition1>
        </div>
    )
}