import React from "react"
import { boots } from "./data"
import ButtonLight from "../buttons/Button_light"

const Female = () => {
    return (
        <main className="main">
            <section className="female section" id="female">
                <h2 className="section-title">female boots</h2>
                <div className="female__container grid">
                    {boots.map(boot => {
                        const { id, image, name, price } = boot;
                        return (
                            <article key={id} className="boot">
                                <img src={image} alt="women boot" className="boot__img" />
                                <span className="boot__name">{name}</span>
                                <span className="boot__price">{price}</span>
                                <ButtonLight />
                            </article>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}

export default Female;