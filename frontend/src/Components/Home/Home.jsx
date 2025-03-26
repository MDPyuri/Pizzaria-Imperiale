import React from 'react';
import './Home.css';
import Banner from './img/banner.png';

const Home = () => {
    return (
        <section className="banner">
            <div className="banner-img">
                <img src={Banner} />
            </div>
            <div className="space">
                <div className='line'></div>
                <p className="title-space">Conheça nosso espaço</p>
            </div>
        </section>
    );
};

export default Home;
