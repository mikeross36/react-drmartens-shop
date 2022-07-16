 import React from "react"
import ButtonLight from "../buttons/Button_light"
import {boots} from "./data"

const Featured = (props) => {
    const { openCart } = props;
    return (
        <main className="main">
            <section className="featured section" id="featured">
                <h2 className="section-title">featured</h2>
                <div className="featured__container grid">
                    {boots.map(boot => {
                        const { id, tag, image, name, price } = boot;
                        return (
                            <article key={id} className="boot">
                                <div className="boot__sale">{tag}</div>
                                <img src={image} alt="sale boot" className="boot__img" />
                                <span className="boot__name">{name}</span>
                                <span className="boot__price">{price}</span>
                                <span onClick={openCart}><ButtonLight /></span>
                            </article>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}

export default Featured;