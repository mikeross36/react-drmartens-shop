import React from "react"
import newimg from "../../images/new-men.png"
import arrow from "../../images/arrow-right.svg"
import { newBoots } from "./data"
import ButtonLight from "../buttons/Button_light"

const NewCollection = () => {
    return (
        <main className="main">
            <section className="new section" id="new">
                <h2 className="section-title">new collection</h2>
                <div className="new__container grid">
                    <div className="new__men">
                        <img src={newimg} alt="new men" className="new__men-img" />
                        <h3 className="new__title">dr martens boots</h3>
                        <span className="new__price">from £99.99</span>
                        <button className="new__button">
                            View Collection <img src={arrow} alt="arrow right icon" width="20px" height="20px"/>
                        </button>
                    </div>
                    <div className="new__boot">
                        {newBoots.map(boot => {
                            const { id, image, title, price } = boot;
                            return (
                                <div key={id} className="new__boot-card">
                                    <img src={image} alt="new boot" className="new__boot-img" />
                                    <div className="new__boot-overlay">
                                        <h3 className="overlay__title">{title}</h3>
                                        <span className="overlay__price">{price}</span>
                                        <ButtonLight />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default NewCollection;