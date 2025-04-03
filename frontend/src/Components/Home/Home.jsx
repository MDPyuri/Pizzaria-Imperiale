import React from 'react';
import './Home.css';
import Banner from './img/banner.png';

const Home = () => {
    return (
        <section className="our-space">
            <div className="banner-img">
                <img src={Banner} />
            </div>
            <div className="space">
                <div className="space-text">
                    <div className="line"></div>
                    <p className="title-space">Conheça nosso espaço</p>
                    <p className="text-space">
                        Cada detalhe foi pensado para proporcionar a você uma
                        experiência inesquecível. Nosso espaço combina conforto,
                        sofisticação e aconchego, criando o ambiente perfeito
                        para desfrutar das melhores pizzas da cidade. Seja para
                        um jantar romântico, uma reunião com amigos ou um
                        momento especial em família, temos o espaço ideal para
                        você!
                    </p>
                    <div className="line2"></div>
                    <div className="text-space2">
                        <p className="text1">
                            Av. Bahia, 1739 - Indaiá, Caraguatatuba - SP
                        </p>
                        <p className="text2">De Terça a Domingo – 18h às 23h</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
