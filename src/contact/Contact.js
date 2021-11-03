import React from "react";

export default function Header() {
    return (
        <div className={"contact-popup"}>
            <span className={"contact-popup-close"}>

            </span>
            <section>
                <h1>
                    Let's talk!
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipi</p>
            </section>
            <section>
                <div>
                    <img src={"location-pin.jpg"} alt={""}/>
                    Nuselská 59/14
                    140 00 Praha 4
                </div>
                <div>
                    <a href={"tel: +420724162439"}>
                        <img src={"email-icon.jpg"} alt={""}/>
                        kukivac@gmail.com
                    </a>
                </div>
                <div>
                    <a href={"mailto: kukivac@gmail.com"}>
                        <img src={"phone-icon.jpg"} alt={""}/>
                        +420 724 162 439
                    </a>
                </div>
            </section>
            <section>
                <form>
                    <label htmlFor={"contact-form-name"}>Jméno Příjmení (firma)</label>
                    <input type={"text"} placeholder={"John from MyShop.cz"} name={"name"} id={"contact-form-name"}/>
                    <label htmlFor={"contact-form-email"}>Email</label>
                    <input type={"text"} placeholder={"john@myshop.cz"} name={"email"} id={"contact-form-email"}/>
                    <label htmlFor={"contact-form-name"}>Jméno Příjmení (firma)</label>
                    <p className={"pseudo-label"}>
                        Služba
                    </p>
                    <section>
                        <button>Shoptet</button>
                        <button>Web</button>
                        <button>Other</button>
                    </section>
                    <select name={"service"}>
                        <option>Shoptet</option>
                        <option>Web</option>
                        <option>Other</option>
                    </select>
                    <label htmlFor={"contact-form-about"}> Popis projektu/dotazu</label>
                    <textarea id={"contact-form-about"} name={"about"}/>
                    <button type={"submit"} name={"submit"}>Odeslat</button>
                </form>
            </section>
        </div>
    )
}