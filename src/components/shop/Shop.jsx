import React from "react"
import ShopItem from "./ShopItem"

const Shop = ({openCart}) => {
    return (
        <main className="main" id="shop">
            <section className="shop section">
                <h2 className="section-title">all products</h2>
                <div className="shop__container grid">
                    <ShopItem openCart={openCart}/>
                </div>
            </section>
        </main>
    )
}

export default Shop;