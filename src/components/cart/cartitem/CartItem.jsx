import React from "react";
import { items } from "./data";

const CartItem = () => {
    return (
        <>
        {items.map(item => {
            const { id, image, title, price, chevronDown, chevronUp, trash } = item;
            return(
                <article key={id} className="cart__card">
                    <div className="cart__box">
                        <img src={image} alt="cart" className="cart__img"/>
                    </div>
                    <div className="cart__details">
                        <h4 className="cart__title">{title}</h4>
                        <span className="cart__price">{price}</span>
                        <div className="cart__amount">
                            <div className="cart__amount-content">
                                <span className="cart__amount-box">
                                    <img src={chevronDown} alt="chevron down" width="20px" height="20px"/>
                                </span>
                                <span className="cart__amount-number">1</span>
                                <span className="cart__amount-box">
                                    <img src={chevronUp} alt="chevron up" width="20px" height="20px"/>
                                </span>
                            </div>
                            <img src={trash} alt="" className="cart__amount-trash" />
                        </div>
                    </div>
                </article>
            )
            })
        }
        </>
    )
}

export default CartItem;