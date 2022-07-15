import React from "react"

const Newsletter = () => {
    return (
        <main className="main">
            <section className="newsletter section">
                <div className="newsletter__container grid">
                    <div>
                        <h3 className="newsletter__title">subscribe & get<br />10% off</h3>
                        <p className="newsletter__description">get 10% discount for all our products</p>
                    </div>
                    <form action="#" className="newsletter__subscribe">
                        <input type="main" placeholder="enter email..." className="newsletter__input" />
                        <button className="form__button">
                            <a href="#subscribe">subscribe</a>
                        </button>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Newsletter;