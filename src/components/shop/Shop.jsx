import React from "react"
import ShopItem from "./ShopItem"

const Shop = () => {
    return (
        <main className="main" id="shop">
            <section className="female section shop" >
                <h2 className="section-title">all products</h2>
                <div className="female__container grid">
                    <ShopItem />
                </div>
            </section>
        </main>
    )
}

export default Shop;