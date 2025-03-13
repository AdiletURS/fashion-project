import "./voucher.css"
import React from 'react';
import phoneImg from "./../../img/images/vouchers-img.png"
import appStore from "./../../img/icons/app-store.png"
import googlePlay from "./../../img/icons/google-play.png"
const Voucher = () => {
    return (
        <section className="voucher">
            <div className="container">
                <div className="voucher__content">
                    <div className="voucher__text">
                        <div className="voucher__title">
                            <h2>DOWNLOAD APP &
                                GET THE VOUCHER!</h2>
                            <span>Get 30% off for first transaction using Rondovision mobile app for now.</span>
                        </div>
                        <div className="voucher__social">

                            <a href=""><img src={appStore} alt="AppStore"/></a>
                            <a href=""><img src={googlePlay} alt="GooglePlay"/></a>
                        </div>
                    </div>
                    <div className="voucher__img">
                        <img src={phoneImg} alt="Phone"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Voucher;