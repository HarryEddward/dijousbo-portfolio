import React from "react"
import { Helmet } from 'react-helmet';

export function PageAboutHead(): JSX.Element {

    return(
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About</title>
                <link rel="canonical" href="http://adrianmartinmartorell.com/about" />
            </Helmet>
        </div>
    )
}