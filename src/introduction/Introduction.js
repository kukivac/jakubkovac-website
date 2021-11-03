import React from "react";
import "./introduction.scss";
import profilePic from "./images/profile-photo.jpg";
import facebook from "./images/facebook.png";
import linkedin from "./images/linkedin.png";
import github from "./images/github.svg";
import gmail from "./images/gmail.png";
import diamond from "./images/diamond.svg";
import smile from "./images/happySmile.svg";

export default function Introduction() {
    return (
        <section className={"introduction-container"}>
            <div className={"introduction-scroll-text"}>
                <p>Scroll down for more information</p>
            </div>
            <div className={"introduction-main-text"}>
                <h1>Hello!<br/>I am Jakub Kováč</h1>
                <h2>FREELANCE WEB & MOBILE DEVELOPMENT </h2>
                <p>Společnost nabízí pro své zákazníky širokou a rozmanitou škálu činností s odborným zaměřením na geoinformační systémy, dálkový průzkum Země a digitální kartografii.</p>
                <section className={"introduction-buttons-container"}>
                    <button className={"introduction-hire-button"}>Hire me</button>
                    <button className={"introduction-chat-button"}>Lets Chat</button>
                </section>
                <div className={"introduction-profile-container"}>
                    <section>
                        <img src={profilePic} alt={""} height={"106px"}/>
                    </section>
                    <section>
                        <p className={"introduction-profile-name"}>Jakub Kováč</p>
                        <p className={"introduction-profile-desc"}>Prioritou společnosti je individuální přístup k zákazníkovi a snaha uspokojit co nejlépe jeho potřeby a zájmy.</p>
                    </section>
                </div>
                <section className={"introduction-social-buttons"}>
                    <div>
                        <img src={facebook} alt={"facebook logo"} onClick={() => window.location = "https://www.facebook.com/jakub.kovac.3386"}/>
                    </div>
                    <div>
                        <img src={linkedin} alt={"linkedin logo"} onClick={() => window.location = "https://www.linkedin.com/in/kovac-jakub/"}/>
                    </div>
                    <div>
                        <img src={github} alt={"github logo"} onClick={() => window.location = "https://github.com/kukivac"}/>
                    </div>
                    <div>
                        <img src={gmail} alt={"gmail logo"} onClick={() => window.location = "mailto:kukivac@gmail.com"}/>
                    </div>
                </section>
            </div>
            <div className={"introduction-popup-info"}>
                <div className={"introduction-popup-box shoptet"}>
                    <section>
                        <h1>Shoptet & Wordpress<br/>hero</h1>
                    </section>
                    <section className={"introduction-popup-desc"}>
                        <p><span>50</span><br/>Happy clients</p>
                        <img src={smile} alt={""}/>
                    </section>
                </div>
                <div className={"introduction-popup-box development"}>
                    <section>
                        <h1>Web & Mobile<br/>Development</h1>
                    </section>
                    <section className={"introduction-popup-desc"}>
                        <p><span>Quality solution</span><br/>Web & Mobile Development</p>
                        <img src={diamond} alt={""}/>
                    </section>
                </div>
            </div>
            <div className={"introduction-background-images"}>
                <div className={"background-image"}/>
            </div>
        </section>
    )
}