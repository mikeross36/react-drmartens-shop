import React from "react"
import logo from "../../images/boot-logo.svg"
import facebook from "../../images/facebook-icon.svg"
import twitter from "../../images/twitter-icon.svg"
import instagram from "../../images/instagram-icon.svg"
import github from "../../images/github-icon.svg"

const Footer = () => {
    return (
        <footer className="footer section">
            <div className="footer__container grid">
                <div className="footer__box">
                    <a href="#" className="footer__logo">
                        <img src={logo} alt="loog" width="40px" height="40px" />
                        martens
                    </a>
                </div>
                <div className="footer__box">
                    <h3 className="footer__title">explore</h3>
                    <ul>
                        <li><a href="#home" className="footer__link">home</a></li>
                        <li><a href="#featured" className="footer__link">featured</a></li>
                        <li><a href="#female" className="footer__link">female</a></li>
                        <li><a href="#new" className="footer__link">new</a></li>
                    </ul>
                </div>
                <div className="footer__box">
                    <h3 className="footer__title">support</h3>
                    <ul>
                        <li><a href="#home" className="footer__link">product help</a></li>
                        <li><a href="#home" className="footer__link">customer care</a></li>
                        <li><a href="#home" className="footer__link">authorized service</a></li>
                    </ul>
                </div>
                <div className="footer__box">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="footer__social">
                        <img src={facebook} alt="" width="30px" height="30px" />
                    </a>
                    <a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer" className="footer__social">
                        <img src={twitter} alt="" width="30px" height="30px" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="footer__social">
                        <img src={instagram} alt="" width="30px" height="30px" />
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noreferrer" className="footer__social">
                        <img src={github} alt="" width="30px" height="30px" />
                    </a>
                </div>
            </div>
            <p className="footer__copy">&copy;2022 DodaDesign All Rights Reserved</p>
        </footer>
    )
}

export default Footer;