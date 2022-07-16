import React from "react";
import { shopItems } from "./data";
import ButtonLight from "../buttons/Button_light";

const ShopItem = (props) => {
    const { openCart } = props;
    return (
        <>
        {shopItems.map(item => {
            const { id, image, name, price } = item;
            return (
                <article key={id} className="shop__boot">
                    <img src={image} alt="" className="shop__boot-img" />
                    <span className="shop__boot-name">{name}</span>
                    <span className="shop__boot-price">{price}</span>
                    <span onClick={openCart}><ButtonLight /></span>
                </article>
            )
        })}
        </>
    )
}

export default ShopItem;