import React from 'react';
import './Home.css';
import Banner from './img/banner.png';
import Space1 from './img/ambienteExterno.png'
import Space2 from './img/ambienteInterno.png';

const Home = () => {
    return (
        <section className="our-space">
            <div className="banner-img">
                <div className="banner-text">
                    <div className="banner-title">
                        <p>Bem vindos à</p>
                        <p>Pizzaria Vila Imperiale</p>
                    </div>
                    <div className="banner-subtitle">
                        <p>
                            onde a tradição italiana se une ao requinte gourmet!
                            histórias de uma experiência única em nosso
                            restaurante, com um ambiente acolhedor e sabores
                            autênticos. Aproveite também nosso delivery e leve a
                            verdadeira essência da Itália para sua casa!
                        </p>
                    </div>
                </div>
                <img src={Banner} alt="Banner" />
            </div>
            <div className="space">
                <div className="space-text">
                    <div className="title">
                        <div className="line"></div>
                        <p className="title-space">Conheça nosso espaço</p>
                        <div className="line"></div>
                    </div>
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
                        <p className="text1">De Terça a Domingo - 18h às 23h</p>
                    </div>
                </div>
                <div className="img-place">
                    <img src={Space1} alt="Space1" />
                    <img src={Space2} alt="Space2" />
                </div>
            </div>
        </section>
    );
};

export default Home;
