import React, { useState } from "react";
import './Menu.css';
import Rating from 'react-rating';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

// fotos das pizzas salgadas
import pizzaSal1 from '../../assets/img/pizzaSal1.png';
import pizzaSal2 from '../../assets/img/pizzaSal2.png';

const Menu = () => {

    //sistema de contagem para pizzas e brotos salgados por id
    const [brotoSalg1, setBrotoSalg1] = useState(0);
    const [pizzaSalg1, setPizzaSalg1] = useState(0);
    const [brotoSalg2, setBrotoSalg2] = useState(0);
    const [pizzaSalg2, setPizzaSalg2] = useState(0);

    //sistema de substituir descrição
    const [showFullDesc, setShowFullDesc] = useState(false);
    const [showFullDescSalg2, setShowFullDescSalg2] = useState(false);

    //sistema de classificação
    const [rating, setRating] = useState(0);
    const [rating2, setRating2] = useState(0);


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
                       <div id="salg1" className="renderStarStyles" style={{ display: 'flex', justifyContent: 'center', marginTop: '0.6vw' }}>
                            <Rating
                                fractions={2}
                                initialRating={rating}
                                onChange={(value) => setRating(value)}
                                emptySymbol={<FaRegStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                fullSymbol={<FaStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                placeholderSymbol={<FaStarHalfAlt color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                            />
                        </div>
                    </div>
                    <div className="description">
                       <p>Tartufo Nero e Burrata</p>

                       {/* descida do salg1 */}
                       <div id="descSalg1" className="descButton">
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
                       
                       {/* counter broto salg1 */}
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

                        {/* counter pizza salg1 */}
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
                    
                    {/* button de add carrinho salg1 */}
                    {/* function de add products in the carrinho */}
                    <button id="addCarSalg1" className="addCar"> Adicionar ao meu carrinho </button>
                    
                </div>

                {/* Segunda parte do containerCentral */}
                <div className="product2">
                    <div className="img2">
                        <img src={pizzaSal2} alt="Pizza Salgada"/>
                        {/* sistema de avaliação */}
                        <div id="salg2" className="renderStarStyles2" style={{ display: 'flex', justifyContent: 'center', marginTop: '0.6vw' }}>
                            <Rating
                                fractions={2}
                                initialRating={rating2}
                                onChange={(value) => setRating2(value)}
                                emptySymbol={<FaRegStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                fullSymbol={<FaStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                placeholderSymbol={<FaStarHalfAlt color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                            />
                        </div>
                    </div>

                    <div className="description2">
                        <p>Filetto e Gorgonzola</p>

                        {/* descida do salg2 */}
                       <div id="descSalg2" className="descButtonSalg2">
                            {!showFullDescSalg2 && <p className="pDescSalg2">Descrição...</p>}
                            {showFullDescSalg2 && (
                                <p className="pDesc2Salg2">
                                    Molho pomodoro italiano, filé mignon selado em manteiga de garrafa, gorgonzola dolce, cebola caramelizada e nozes tostadas.
                                </p>
                            )}
                            {!showFullDescSalg2 && (
                                <button className="buttonDescSalg2" onClick={() => setShowFullDescSalg2(true)}>
                                    <ion-icon name="chevron-down-circle-outline"></ion-icon>
                                </button>
                            )}
                            {showFullDescSalg2 && (
                                <button className="buttonDesc2Salg2" onClick={() => setShowFullDescSalg2(false)}>
                                    <ion-icon name="chevron-up-circle-outline"></ion-icon>
                                </button>
                            )}

                       </div>

                       {/* counter broto salg2 */}
                       <div className={`counter-wrapperSalg2 ${showFullDescSalg2 ? "ajuste-marginSalg2" : ""}`}>
                            <p className="pBrotoSalg2">Broto</p>
                            <p className="pBrotoDivisaoSalg2">-</p>
                            <p className="pBrotoPrecoSalg2">R$89,90</p>
                            <div className="counterSalg2">
                                    <button 
                                        id="-brotoSalg2" 
                                        onClick={() => setBrotoSalg2(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="brotoSalgCounter2"> {brotoSalg2} </button>
                                    <button 
                                        id="+brotoSalg2" 
                                        onClick={() => setBrotoSalg2(prev => prev + 1)}> 
                                    + </button>
                            </div>
                            
                        </div>

                        {/* counter pizza salg2 */}
                        <div className="counter-wrapper2Salg2">
                            <p className="pPizzaSalg2">Pizza</p> 
                            <p className="pPizzaDivisaoSalg2"> - </p>
                            <p className="pPizzaPrecoSalg2">R$179,90</p>
                            <div className="counterSalg2">
                                    <button 
                                        id="-pizzaSalg2" 
                                        onClick={() => setPizzaSalg2(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="pizzaSalgCounter2"> {pizzaSalg2} </button>
                                    <button 
                                        id="+pizzaSalg2" 
                                        onClick={() => setPizzaSalg2(prev => prev + 1)}> 
                                    + </button>
                            </div>
                        </div>

                    </div>

                    {/* button de add carrinho salg2 */}
                    {/* function de add products in the carrinho */}
                    <button id="addCarSalg2" className="addCarSalg2"> Adicionar ao meu carrinho </button>

                </div>


            </div>
        </>
    )
}

export default Menu;