import React from "react";
import "./header.scss";

export default function Header() {
    return (
        <header>
            <div className={"header-logo-name"}>
                <h1>Jakub Kováč</h1>
            </div>
            <div className={"header-info"}>
                <p>Web & Mobile<br/>Development</p>
                <p>Zavolej mi: <a href={"tel: +4207241624369"}>(+420) 724 162 439</a></p>
                <p><a href={"mailto: kukivac@gmail.com"}>kukivac@gmail.com</a></p>
            </div>
            <div className={"header-contact"}>
                <button className={"button-contact-me"}>
                    Contact me
                </button>
            </div>
        </header>
    )
}