import "./footer.css"
import React from 'react';
import iconFb from "./../../img/socials/fb.svg"
import iconIs from "./../../img/socials/inst.svg"
import iconTw from "./../../img/socials/tw.svg"
import iconIn from "./../../img/socials/in.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__fashion">
                        <div className="footer__text">
                            <div className="footer__title">
                                <h2>FASHION</h2>
                                <span>Complete your style with awesome clothes from us.</span>
                            </div>
                            <div className="footer__icons">
                                <a href=""> <img src={iconFb} alt="Facebook" /></a>
                                <a href=""><img src={iconIs} alt="Instagram" /></a>
                                <a href=""><img src={iconTw} alt="Twitter" /></a>
                                <a href=""><img src={iconIn} alt="In"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="footer__information">
                        <div className="footer__company">
                            <h3>Company</h3>
                            <ul>
                                <li><a href="!#">About</a></li>
                                <li><a href="!#">Contact us</a></li>
                                <li><a href="!#">Support</a></li>
                                <li><a href="!#">Careers</a></li>
                            </ul>
                        </div>
                        <div className="footer__company">
                            <h3>Quick Link</h3>
                            <ul>
                                <li><a href="!#">Share Location</a></li>
                                <li><a href="!#">Orders Tracking</a></li>
                                <li><a href="!#">Size Guide</a></li>
                                <li><a href="!#">FAQs</a></li>
                            </ul>

                        </div>
                        <div className="footer__company">
                            <h3>Legal</h3>
                            <ul>
                                <li><a href="!#">Terms & conditions</a></li>
                                <li><a href="!#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;