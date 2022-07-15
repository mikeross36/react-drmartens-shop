import React from "react"
import closeBtn from "../../images/close-btn.svg"
import CartItem from "./cartitem/CartItem"

const Cart = (props) => {
    const { showCart, closeCart } = props;
    
    return (
        <aside className={`cart ${showCart && "show-cart"}`}>
            <span className="cart__close" onClick={closeCart}>
                <img src={closeBtn} alt="close cart btn" width="30px" height="30px"/>
            </span>
            <h2 className="cart__title-center">your cart</h2>
            <div className="cart__container grid">
                <CartItem/>
            </div>
        </aside>
    )
}

export default Cart;