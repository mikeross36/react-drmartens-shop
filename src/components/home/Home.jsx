import React from "react"
import homeImg from "../../images/home-pic.png"
import Button from "../buttons/Button";

const Home = () => {
    return (
        <main className="main">
            <section className="home" id="home">
                <div className="home__container grid">
                    <div className="home__boot">
                        <div className="home__overlay">
                            <img src={homeImg} alt="home img" className="home__img" />
                        </div>
                    </div>

                    <div className="home__data">
                        <span className="home__new">new in</span>
                        <h1>crazy</h1>
                        <h1>dr martens boots</h1>
                        <p className="home__description">
                            Explore the new collection of dr Marten boots
                        </p>
                        <Button />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;