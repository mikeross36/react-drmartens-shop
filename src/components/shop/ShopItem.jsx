import React from "react";
import { shopItems } from "./data";
import ButtonLight from "../buttons/Button_light";

const ShopItem = () => {
    return (
        <>
        {shopItems.map(item => {
            const { id, image, name, price } = item;
            return (
                <article key={id} className="boot">
                    <img src={image} alt="" className="boot__img" />
                    <span className="boot__name">{name}</span>
                    <span className="boot__price">{price}</span>
                    <ButtonLight />
                </article>
            )
        })}
        </>
    )
}

export default ShopItem;