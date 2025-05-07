import React, { useState } from "react";
import './Menu.css';
import ReactStars from 'react-rating-stars-component';

// fotos das pizzas salgadas
import pizzaSal1 from '../../assets/img/pizzaSal1.png';

const Menu = () => {

    //sistema de contagem para pizzas e brotos salgados por id
    const [brotoSalg1, setBrotoSalg1] = useState(0);
    const [pizzaSalg1, setPizzaSalg1] = useState(0);

    //sistema de substituir descrição
    const [showFullDesc, setShowFullDesc] = useState(false);


    return (
        <>
            <div className="menu">
                <p>Cardápio</p>
            </div>
            
            <div className="line-one">
                <div className="line-one-one"></div>
                <div className="line-one-two"></div>
            </div>
            <div className="pizzas">
                <button className="salt-pizza">Pizzas salgadas</button>
                <button className="sweet-pizza">Pizzas doces</button>
                <button className="vegan-pizza">Pizzas veganas</button>
                <button className="drinks">Bebidas</button>
            </div>
            <div className="search">
                <input
                    type="text"
                    // value={search}
                    // onChange={(event) => setNome(event.target.value)}
                    placeholder="Pesquisar"
                />
                <button><ion-icon name="search-outline"></ion-icon></button>
            </div>
            <div className="line-two"></div>

            <div className="containerCentral">
                <div className="product">
                    <div className="img">
                       <img src={pizzaSal1} alt="Pizza Salgada"/>
                       {/* sistema de avaliação */}
                       <ReactStars
                            count={5}
                            onChange={(newRating) => console.log(`Avaliação: ${newRating}`)}
                            size={50}
                            isHalf={true}
                            activeColor="#c5a15c"
                            className="react-stars"
                            style={{ width: '50px', height: '50px' }}
                        />
                    </div>
                    <div className="description">
                       <p>Tartufo Nero e Burrata</p>
                       <div className="descButton">
                            {!showFullDesc && <p className="pDesc">Descrição...</p>}
                            {showFullDesc && (
                                <p className="pDesc2">
                                    Massa de fermentação lenta, molho bechamel trufado, burrata fresca, cogumelos selvagens, azeite de trufas negras e lascas de parmesão 36 meses.
                                </p>
                            )}
                            {!showFullDesc && (
                                <button className="buttonDesc" onClick={() => setShowFullDesc(true)}>
                                    <ion-icon name="chevron-down-circle-outline"></ion-icon>
                                </button>
                            )}
                            {showFullDesc && (
                                <button className="buttonDesc2" onClick={() => setShowFullDesc(false)}>
                                    <ion-icon name="chevron-up-circle-outline"></ion-icon>
                                </button>
                            )}

                       </div>
                       
                       <div className={`counter-wrapper ${showFullDesc ? "ajuste-margin" : ""}`}>
                            <p className="pBroto">Broto</p>
                            <p className="pBrotoDivisao">-</p>
                            <p className="pBrotoPreco">R$95,90</p>
                            <div className="counter">
                                    <button 
                                        id="-brotoSalg1" 
                                        onClick={() => setBrotoSalg1(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="brotoSalgCounter1"> {brotoSalg1} </button>
                                    <button 
                                        id="+brotoSalg1" 
                                        onClick={() => setBrotoSalg1(prev => prev + 1)}> 
                                    + </button>
                            </div>
                            
                        </div>
                        <div className="counter-wrapper2">
                            <p className="pPizza">Pizza</p> 
                            <p className="pPizzaDivisao"> - </p>
                            <p className="pPizzaPreco">R$189,90</p>
                            <div className="counter">
                                    <button 
                                        id="-pizzaSalg1" 
                                        onClick={() => setPizzaSalg1(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="pizzaSalgCounter1"> {pizzaSalg1} </button>
                                    <button 
                                        id="+pizzaSalg1" 
                                        onClick={() => setPizzaSalg1(prev => prev + 1)}> 
                                    + </button>
                            </div>
                        </div>
                    </div>

                    <button className="addCar">Adicionar ao meu carrinho</button>
                    
                </div>
            </div>
        </>
    )
}

export default Menu;