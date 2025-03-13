import "./payday.css"
import React from 'react';
import promoImg from "../../img/images/header-img.jpg";
import paydayImg from "../../img/images/promo-img.jpg"
const Payday = () => {
    return (
        <section className="payday">
            <div className="container">
                <div className="payday__content">
                    <div className="payday_img">
                        <img src= {paydayImg} alt="payday-Woman"/>
                    </div>
                    <div className="payday__text">
                        <div className="payday__title">
                            <span>PAYDAY</span>
                            SALE NOW
                        </div>
                        <div className="payday__desc">
                            Spend minimal $100 get 30% off
                            voucher code for your next purchase
                        </div>
                        <div className="payday__text-data">
                            <h3>1 June - 10 June 2021</h3>
                            <span>*Terms & Conditions apply</span>
                        </div>

                        <div className="payday__btn--wrapper"><a href="" className="payday__btn">
                            Shop Now
                        </a></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payday;