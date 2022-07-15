import React from "react"
import Button from "../buttons/Button";
import offer1 from "../../images/offer1.png"

const Offer = () => {
    return (
        <main className="main">
            <section className="offer section">
                <div className="offer__container grid">
                    <div className="offer__data">
                        <h3 className="offer__title">50$ off</h3>
                        <p className="offer__description">some dr martens boots</p>
                        <Button />
                    </div>
                    <img src={offer1} alt="offer" className="offer__img" />
                </div>
            </section>
        </main>
    )
}

export default Offer;