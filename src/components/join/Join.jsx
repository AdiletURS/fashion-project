import "./join.css"
import React from 'react';

const Join = () => {
    return (
        <section className="join">
            <div className="container">
                <div className="join__content">
                    <div className="joint__title">
                        <h2>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h2>
                        <span>Type your email down below and be young wild generation</span>
                    </div>
                    <div className="join__input">
                        <div className="input__container">
                            <input type="text" className="join__input" placeholder="Add your email here" />
                            <button className="input__button">SEND</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Join;