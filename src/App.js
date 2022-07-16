import React, {useState} from "react"
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Featured from "./components/featured/Featured";
import Collection from "./components/collection/Collection"
import Female from "./components/female/Female";
import Offer from "./components/offer/Offer";
import NewCollection from "./components/new/NewCollection";
import Newsletter from "./components/newsletter/Newsletter";
import Footer from "./components/footer/Footer"
import Cart from "./components/cart/Cart";
import Shop from "./components/shop/Shop";

const App = () => {
  const [showCart, setShowCart] = useState(false)

  const openCart = () => {
    setShowCart(true)
  }

  const closeCart = () => {
    setShowCart(false)
  }

  return (
    <>
      <Header openCart={openCart}/>
      <Cart
        showCart={showCart}
        closeCart={closeCart}
      />
      <Home />
      <Featured openCart={openCart}/>
      <Collection />
      <Female openCart={openCart}/>
      <Offer />
      <NewCollection />
      <Shop openCart={openCart}/>
      <Newsletter />
      <Footer />
    </>
  )
}

export default App;