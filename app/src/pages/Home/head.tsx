import React from "react"
import { Helmet } from 'react-helmet';

export function PageHomeHead(): JSX.Element {

    return(
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://adrianmartinmartorell.com/" />
            </Helmet>
        </div>
    )
}