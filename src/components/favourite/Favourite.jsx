import "./favourite.css"
import React from 'react';
import Card from "../card/Card";
import fav01 from "./../../img/images/promo-01.jpg"
import fav02 from "./../../img/images/promo-02.jpg"

const Favourite = () => {
    return (
        <section className="favourite">
            <div className="container">
                <div className="favourite__header">
                    <h1 className="title-2">Young’s Favourite</h1>
                </div>
                <div className="favourite__cards">
                    <Card title="Trending on instagram Explore Now!" img={fav01}/>
                    <Card title="All Under $40" img={fav02}/>
                </div>
            </div>
        </section>
    );
};

export default Favourite;