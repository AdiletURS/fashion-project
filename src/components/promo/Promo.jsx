import React from 'react';
import "./promo.css"
import promoImg from './../../img/images/header-img.jpg'
const Promo = () => {
    return (
        <section className="promo">
            <div className="container">
            <div className="promo__content">
                <div className="promo__text">
                    <div className="promo__title">
                        <span className="highliht"><span>LET’S</span></span> <br/>
                        EXPLORE <br/>
                        <span className="highliht highliht--yellow"><span>UNIQUE</span></span> <br/>

                        CLOTHES.
                    </div>
                    <div className="promo__desc">Live for Influential and Innovative fashion!</div>

                    <div className="promo__btn--wrapper"><a href="" className="promo__btn">
                        Shop Now
                    </a></div>
                </div>
                <div className="promo_img">
                    <img src= {promoImg} alt="promo-Woman"/>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Promo;