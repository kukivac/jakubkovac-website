import React from "react";

export default function Header() {
    return (
        <section className={"skills-container"}>
            <section>
                <h2>CO UMÍM</h2>
            </section>
            <section>
                <div>
                    <img src={"shoptet-development.jpg"} alt={""}/>
                    <p>Shoptet & Wordpress</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In rutrum. Et harum quidem rerum facilis est et expedita distinctio. Duis pulvinar.</p>
                </div>
                <div>
                    <img src={"backend-development.jpg"} alt={""}/>
                    <p>Backend development</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In rutrum. Et harum quidem rerum facilis est et expedita distinctio. Duis pulvinar.</p>
                </div>
                <div>
                    <img src={"frontend-development.jpg"} alt={""}/>
                    <p>Frontend development</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In rutrum. Et harum quidem rerum facilis est et expedita distinctio. Duis pulvinar.</p>
                </div>
            </section>
            <div className={"obstacle-1"}></div>
            <div className={"obstacle-2"}></div>
        </section>
    )
}