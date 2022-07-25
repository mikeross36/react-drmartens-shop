import React, {useState, useEffect} from "react"
import menuBtn from "../../images/menu-btn.svg"
import logo from "../../images/boot-logo.svg"
import { links } from "./data"
import closeBtn from "../../images/close-btn.svg"
import shopIcon from "../../images/shopping-cart.svg"
import searchIcon from "../../images/search-icon.svg"

const Header = (props) => {
    const { openCart } = props;
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [scrollHeader, setScrollHeader] = useState(false)

    useEffect(() => {
        const scroll = () => {
            if (window.scrollY >= 50) {
                setScrollHeader(true)
            }
            else {
                setScrollHeader(false)
            }
        };
        window.addEventListener("scroll", scroll)

        return () => {
            window.removeEventListener("scroll", scroll)
        }
    }, [])

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu)
        if (showSearch) {
            setShowSearch(false)
        }
    }

    const closeMobileMenu = () => {
        setShowMobileMenu(false)
    }

    const toggleSearch = () => {
        setShowSearch(!showSearch)
    }

    return (
        <header className={`header ${scrollHeader && "scroll-header"}`} id="header">
            <nav className="nav grid">
                <div className="nav__toggle" onClick={toggleMobileMenu}>
                    <img src={menuBtn} alt="mobmenu btn" width="30px" height="30px"/>
                </div>
                <a href="#logo" className="nav__logo">
                    <img src={logo} alt="loog" width="30px" height="30px" />
                    martens
                </a>
                <div className={`nav__menu ${showMobileMenu && "show-menu"}`}>
                    <ul className="nav__list">
                        {links.map(link => {
                            const { id, url, text } = link;
                            return (
                                <li key={id} className="nav__item" onClick={closeMobileMenu}>
                                    <a href={url} className="nav__link">{text}</a>
                                </li>
                            )
                        })}
                    </ul>
                    <a href="#close" className="nav__close" onClick={closeMobileMenu}>
                        <img src={closeBtn} alt="close menu btn" width="35px" height="35px"/>
                    </a>
                </div>
                <div className="nav__icons">
                    <div className="nav__search" onClick={toggleSearch}>
                        <img src={searchIcon} alt="" className="search__icon" width="30px" height="30px"/>
                    </div>
                    <div className="nav__shop" id="nav-shop" onClick={openCart}>
                        <img src={shopIcon} alt="shopping cart icon" width="30px" height="30px"/>
                    </div>
                </div>
                <div className={`nav__search-form ${showSearch && "active-form"}`}>
                    <input type="search" className="search__input" placeholder="search here..."/>
                </div>
            </nav>
        </header>
    )
}

export default Header;