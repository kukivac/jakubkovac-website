import React from "react";
import Introduction from "./introduction/Introduction";
import Header from "./header/Header";
import Skills from "./skills/Skills";
import Footer from "./footer/Footer";
import ContactPopup from "./contact/Contact";
import "./App.scss"

export default function App() {
    return (
        <div>
            <Header/>
            <Introduction/>
            <Skills/>
            <Footer/>
            <ContactPopup/>
        </div>
    );
}