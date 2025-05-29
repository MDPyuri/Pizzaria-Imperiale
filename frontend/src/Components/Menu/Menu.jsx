import React, { useState } from "react";
import './Menu.css';

import FilterPizza from "./FilterPizza";


import Rating from 'react-rating';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Menu = () => {

    //sistema de contagem para pizzas e brotos salgados por id
    const [brotoSalg1, setBrotoSalg1] = useState(0);
    const [pizzaSalg1, setPizzaSalg1] = useState(0);
    const [brotoSalg2, setBrotoSalg2] = useState(0);
    const [pizzaSalg2, setPizzaSalg2] = useState(0);
    const [brotoSalg3, setBrotoSalg3] = useState(0);
    const [pizzaSalg3, setPizzaSalg3] = useState(0);
    const [brotoSalg4, setBrotoSalg4] = useState(0);
    const [pizzaSalg4, setPizzaSalg4] = useState(0);
    const [brotoSalg5, setBrotoSalg5] = useState(0);
    const [pizzaSalg5, setPizzaSalg5] = useState(0);
    const [brotoSalg6, setBrotoSalg6] = useState(0);
    const [pizzaSalg6, setPizzaSalg6] = useState(0);
    const [brotoSalg7, setBrotoSalg7] = useState(0);
    const [pizzaSalg7, setPizzaSalg7] = useState(0);
    const [brotoSalg8, setBrotoSalg8] = useState(0);
    const [pizzaSalg8, setPizzaSalg8] = useState(0);
    const [brotoSalg9, setBrotoSalg9] = useState(0);
    const [pizzaSalg9, setPizzaSalg9] = useState(0);
    const [brotoSalg10, setBrotoSalg10] = useState(0);
    const [pizzaSalg10, setPizzaSalg10] = useState(0);
    const [brotoSalg11, setBrotoSalg11] = useState(0);
    const [pizzaSalg11, setPizzaSalg11] = useState(0);
    const [brotoSalg12, setBrotoSalg12] = useState(0);
    const [pizzaSalg12, setPizzaSalg12] = useState(0);
    const [brotoSalg13, setBrotoSalg13] = useState(0);
    const [pizzaSalg13, setPizzaSalg13] = useState(0);
    const [brotoSalg14, setBrotoSalg14] = useState(0);
    const [pizzaSalg14, setPizzaSalg14] = useState(0);
    const [brotoSalg15, setBrotoSalg15] = useState(0);
    const [pizzaSalg15, setPizzaSalg15] = useState(0);
    const [brotoSalg16, setBrotoSalg16] = useState(0);
    const [pizzaSalg16, setPizzaSalg16] = useState(0);
    const [brotoSalg17, setBrotoSalg17] = useState(0);
    const [pizzaSalg17, setPizzaSalg17] = useState(0);
    const [brotoSalg18, setBrotoSalg18] = useState(0);
    const [pizzaSalg18, setPizzaSalg18] = useState(0);
    const [brotoSalg19, setBrotoSalg19] = useState(0);
    const [pizzaSalg19, setPizzaSalg19] = useState(0);
    const [brotoSalg20, setBrotoSalg20] = useState(0);
    const [pizzaSalg20, setPizzaSalg20] = useState(0);
    const [brotoSalg21, setBrotoSalg21] = useState(0);
    const [pizzaSalg21, setPizzaSalg21] = useState(0);

    //sistema de substituir descrição das pizzas salgadas
    const [showFullDesc, setShowFullDesc] = useState(false);
    const [showFullDescSalg2, setShowFullDescSalg2] = useState(false);
    const [showFullDescSalg3, setShowFullDescSalg3] = useState(false);
    const [showFullDescSalg4, setShowFullDescSalg4] = useState(false);
    const [showFullDescSalg5, setShowFullDescSalg5] = useState(false);
    const [showFullDescSalg6, setShowFullDescSalg6] = useState(false);
    const [showFullDescSalg7, setShowFullDescSalg7] = useState(false);
    const [showFullDescSalg8, setShowFullDescSalg8] = useState(false);
    const [showFullDescSalg9, setShowFullDescSalg9] = useState(false);
    const [showFullDescSalg10, setShowFullDescSalg10] = useState(false);
    const [showFullDescSalg11, setShowFullDescSalg11] = useState(false);
    const [showFullDescSalg12, setShowFullDescSalg12] = useState(false);
    const [showFullDescSalg13, setShowFullDescSalg13] = useState(false);
    const [showFullDescSalg14, setShowFullDescSalg14] = useState(false);
    const [showFullDescSalg15, setShowFullDescSalg15] = useState(false);
    const [showFullDescSalg16, setShowFullDescSalg16] = useState(false);
    const [showFullDescSalg17, setShowFullDescSalg17] = useState(false);
    const [showFullDescSalg18, setShowFullDescSalg18] = useState(false);
    const [showFullDescSalg19, setShowFullDescSalg19] = useState(false);
    const [showFullDescSalg20, setShowFullDescSalg20] = useState(false);
    const [showFullDescSalg21, setShowFullDescSalg21] = useState(false);

    //sistema de classificação pizzas salgadas
    const [rating, setRating] = useState(0);
    const [rating2, setRating2] = useState(0);
    const [rating3, setRating3] = useState(0);
    const [rating4, setRating4] = useState(0);
    const [rating5, setRating5] = useState(0);
    const [rating6, setRating6] = useState(0);
    const [rating7, setRating7] = useState(0);
    const [rating8, setRating8] = useState(0);
    const [rating9, setRating9] = useState(0);
    const [rating10, setRating10] = useState(0);
    const [rating11, setRating11] = useState(0);
    const [rating12, setRating12] = useState(0);
    const [rating13, setRating13] = useState(0);
    const [rating14, setRating14] = useState(0);
    const [rating15, setRating15] = useState(0);
    const [rating16, setRating16] = useState(0);
    const [rating17, setRating17] = useState(0);
    const [rating18, setRating18] = useState(0);
    const [rating19, setRating19] = useState(0);
    const [rating20, setRating20] = useState(0);
    const [rating21, setRating21] = useState(0);


    return (
        <>
            <FilterPizza />

            {/* containerCentral2  */}
            <div className="containerCentral">
                <div className="product">
                    <div className="img">
                       <img src={pizzaSal3} alt="Pizza Salgada"/>
                       {/* sistema de avaliação */}
                       <div id="salg3" className="renderStarStyles" style={{ display: 'flex', justifyContent: 'center', marginTop: '0.6vw' }}>
                            <Rating
                                fractions={2}
                                initialRating={rating3}
                                onChange={(value) => setRating3(value)}
                                emptySymbol={<FaRegStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                fullSymbol={<FaStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                placeholderSymbol={<FaStarHalfAlt color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                            />
                        </div>
                    </div>
                    <div className="description">
                       <p>Parma e Figos Caramelizados</p>

                       {/* descida do salg3 */}
                       <div id="descSalg3" className="descButtonSalg3">
                            {!showFullDescSalg3 && <p className="pDescSalg3">Descrição...</p>}
                            {showFullDescSalg3 && (
                                <p className="pDesc2Salg3">
                                    Mussarela de búfala, presunto de Parma envelhecido 24 meses, figos frescos caramelizados, redução de balsâmico e rúcula selvagem. 
                                </p>
                            )}
                            {!showFullDescSalg3 && (
                                <button className="buttonDescSalg3" onClick={() => setShowFullDescSalg3(true)}>
                                    <ion-icon name="chevron-down-circle-outline"></ion-icon>
                                </button>
                            )}
                            {showFullDescSalg3 && (
                                <button className="buttonDesc2Salg3" onClick={() => setShowFullDescSalg3(false)}>
                                    <ion-icon name="chevron-up-circle-outline"></ion-icon>
                                </button>
                            )}

                       </div>
                       
                       {/* counter broto salg3 */}
                       <div className={`counter-wrapperSalg3 ${showFullDescSalg3 ? "ajuste-marginSalg3" : ""}`}>
                            <p className="pBroto">Broto</p>
                            <p className="pBrotoDivisao">-</p>
                            <p className="pBrotoPreco">R$85,90</p>
                            <div className="counter">
                                    <button 
                                        id="-brotoSalg3" 
                                        onClick={() => setBrotoSalg3(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="brotoSalgCounter3"> {brotoSalg3} </button>
                                    <button 
                                        id="+brotoSalg3" 
                                        onClick={() => setBrotoSalg3(prev => prev + 1)}> 
                                    + </button>
                            </div>
                            
                        </div>

                        {/* counter pizza salg3 */}
                        <div className="counter-wrapper2Salg3">
                            <p className="pPizza">Pizza</p> 
                            <p className="pPizzaDivisao"> - </p>
                            <p className="pPizzaPreco">R$169,90</p>
                            <div className="counter">
                                    <button 
                                        id="-pizzaSalg3" 
                                        onClick={() => setPizzaSalg3(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="pizzaSalgCounter3"> {pizzaSalg3} </button>
                                    <button 
                                        id="+pizzaSalg3" 
                                        onClick={() => setPizzaSalg3(prev => prev + 1)}> 
                                    + </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* button de add carrinho salg3 */}
                    {/* function de add products in the carrinho */}
                    <button id="addCarSalg3" className="addCar"> Adicionar ao meu carrinho </button>
                    
                </div>

                {/* Segunda parte do containerCentral2 */}
                <div className="product2">
                    <div className="img2">
                        <img src={pizzaSal4} alt="Pizza Salgada"/>
                        {/* sistema de avaliação */}
                        <div id="salg4" className="renderStarStyles2" style={{ display: 'flex', justifyContent: 'center', marginTop: '0.6vw' }}>
                            <Rating
                                fractions={2}
                                initialRating={rating4}
                                onChange={(value) => setRating4(value)}
                                emptySymbol={<FaRegStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                fullSymbol={<FaStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                placeholderSymbol={<FaStarHalfAlt color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                            />
                        </div>
                    </div>

                    <div className="description2">
                        <p>Brie & Pera ao Mel de Trufas</p>

                        {/* descida do salg4 */}
                       <div id="descSalg4" className="descButtonSalg4">
                            {!showFullDescSalg4 && <p className="pDescSalg4">Descrição...</p>}
                            {showFullDescSalg4 && (
                                <p className="pDesc2Salg4">
                                    Queijo brie derretido, peras caramelizadas no vinho branco, mel trufado e amêndoas laminadas.
                                </p>
                            )}
                            {!showFullDescSalg4 && (
                                <button className="buttonDescSalg4" onClick={() => setShowFullDescSalg4(true)}>
                                    <ion-icon name="chevron-down-circle-outline"></ion-icon>
                                </button>
                            )}
                            {showFullDescSalg4 && (
                                <button className="buttonDesc2Salg4" onClick={() => setShowFullDescSalg4(false)}>
                                    <ion-icon name="chevron-up-circle-outline"></ion-icon>
                                </button>
                            )}

                       </div>

                       {/* counter broto salg4 */}
                       <div className={`counter-wrapperSalg4 ${showFullDescSalg4 ? "ajuste-marginSalg4" : ""}`}>
                            <p className="pBrotoSalg2">Broto</p>
                            <p className="pBrotoDivisaoSalg2">-</p>
                            <p className="pBrotoPrecoSalg2">R$79,90</p>
                            <div className="counterSalg2">
                                    <button 
                                        id="-brotoSalg4" 
                                        onClick={() => setBrotoSalg4(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="brotoSalgCounter4"> {brotoSalg4} </button>
                                    <button 
                                        id="+brotoSalg4" 
                                        onClick={() => setBrotoSalg4(prev => prev + 1)}> 
                                    + </button>
                            </div>
                            
                        </div>

                        {/* counter pizza salg4 */}
                        <div className="counter-wrapper2Salg4">
                            <p className="pPizzaSalg2">Pizza</p> 
                            <p className="pPizzaDivisaoSalg2"> - </p>
                            <p className="pPizzaPrecoSalg2">R$159,90</p>
                            <div className="counterSalg2">
                                    <button 
                                        id="-pizzaSalg4" 
                                        onClick={() => setPizzaSalg4(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="pizzaSalgCounter4"> {pizzaSalg4} </button>
                                    <button 
                                        id="+pizzaSalg4" 
                                        onClick={() => setPizzaSalg4(prev => prev + 1)}> 
                                    + </button>
                            </div>
                        </div>

                    </div>

                    {/* button de add carrinho salg4 */}
                    {/* function de add products in the carrinho */}
                    <button id="addCarSalg4" className="addCarSalg2"> Adicionar ao meu carrinho </button>

                </div>
            </div>

            {/* containerCentral3 */}
            <div className="containerCentral">
                <div className="product">
                    <div className="img">
                       <img src={pizzaSal5} alt="Pizza Salgada"/>
                       {/* sistema de avaliação */}
                       <div id="salg5" className="renderStarStyles" style={{ display: 'flex', justifyContent: 'center', marginTop: '0.6vw' }}>
                            <Rating
                                fractions={2}
                                initialRating={rating5}
                                onChange={(value) => setRating5(value)}
                                emptySymbol={<FaRegStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                fullSymbol={<FaStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                placeholderSymbol={<FaStarHalfAlt color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                            />
                        </div>
                    </div>
                    <div className="description">
                       <p>Camarão & Champagne</p>

                       {/* descida do salg5 */}
                       <div id="descSalg5" className="descButtonSalg5">
                            {!showFullDescSalg5 && <p className="pDescSalg5">Descrição...</p>}
                            {showFullDescSalg5 && (
                                <p className="pDesc2Salg5">
                                    Base de mascarpone, camarões flambados no champagne brut, raspas de limão siciliano e flor de sal. 
                                </p>
                            )}
                            {!showFullDescSalg5 && (
                                <button className="buttonDescSalg5" onClick={() => setShowFullDescSalg5(true)}>
                                    <ion-icon name="chevron-down-circle-outline"></ion-icon>
                                </button>
                            )}
                            {showFullDescSalg5 && (
                                <button className="buttonDesc2Salg5" onClick={() => setShowFullDescSalg5(false)}>
                                    <ion-icon name="chevron-up-circle-outline"></ion-icon>
                                </button>
                            )}

                       </div>
                       
                       {/* counter broto salg5 */}
                       <div className={`counter-wrapperSalg5 ${showFullDescSalg5 ? "ajuste-marginSalg5" : ""}`}>
                            <p className="pBroto">Broto</p>
                            <p className="pBrotoDivisao">-</p>
                            <p className="pBrotoPreco">R$99,99</p>
                            <div className="counter">
                                    <button 
                                        id="-brotoSalg5" 
                                        onClick={() => setBrotoSalg5(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="brotoSalgCounter5"> {brotoSalg5} </button>
                                    <button 
                                        id="+brotoSalg5" 
                                        onClick={() => setBrotoSalg5(prev => prev + 1)}> 
                                    + </button>
                            </div>
                            
                        </div>

                        {/* counter pizza salg5 */}
                        <div className="counter-wrapper2Salg5">
                            <p className="pPizza">Pizza</p> 
                            <p className="pPizzaDivisao"> - </p>
                            <p className="pPizzaPreco">R$199,90</p>
                            <div className="counter">
                                    <button 
                                        id="-pizzaSalg5" 
                                        onClick={() => setPizzaSalg5(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="pizzaSalgCounter5"> {pizzaSalg5} </button>
                                    <button 
                                        id="+pizzaSalg5" 
                                        onClick={() => setPizzaSalg5(prev => prev + 1)}> 
                                    + </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* button de add carrinho salg5 */}
                    {/* function de add products in the carrinho */}
                    <button id="addCarSalg5" className="addCar"> Adicionar ao meu carrinho </button>
                    
                </div>

                {/* Segunda parte do containerCentra3 */}
                <div className="product2">
                    <div className="img">
                        <img src={pizzaSal6} alt="Pizza Salgada"/>
                        {/* sistema de avaliação */}
                        <div id="salg6" className="renderStarStyles2" style={{ display: 'flex', justifyContent: 'center', marginTop: '0.6vw' }}>
                            <Rating
                                fractions={2}
                                initialRating={rating6}
                                onChange={(value) => setRating6(value)}
                                emptySymbol={<FaRegStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                fullSymbol={<FaStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                placeholderSymbol={<FaStarHalfAlt color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                            />
                        </div>
                    </div>

                    <div className="description2">
                        <p>Wagyu & Foie Gras</p>

                        {/* descida do salg6 */}
                       <div id="descSalg6" className="descButtonSalg6">
                            {!showFullDescSalg6 && <p className="pDescSalg6">Descrição...</p>}
                            {showFullDescSalg6 && (
                                <p className="pDesc2Salg6">
                                    Molho bechamel, finas fatias de wagyu A5, foie gras selado, cogumelos selvagens e redução de vinho do Porto.
                                </p>
                            )}
                            {!showFullDescSalg6 && (
                                <button className="buttonDescSalg6" onClick={() => setShowFullDescSalg6(true)}>
                                    <ion-icon name="chevron-down-circle-outline"></ion-icon>
                                </button>
                            )}
                            {showFullDescSalg6 && (
                                <button className="buttonDesc2Salg6" onClick={() => setShowFullDescSalg6(false)}>
                                    <ion-icon name="chevron-up-circle-outline"></ion-icon>
                                </button>
                            )}

                       </div>

                       {/* counter broto salg6 */}
                       <div className={`counter-wrapperSalg6 ${showFullDescSalg6 ? "ajuste-marginSalg6" : ""}`}>
                            <p className="pBrotoSalg2">Broto</p>
                            <p className="pBrotoDivisaoSalg2">-</p>
                            <p className="pBrotoPrecoSalg2">R$79,90</p>
                            <div className="counterSalg2">
                                    <button 
                                        id="-brotoSalg6" 
                                        onClick={() => setBrotoSalg6(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="brotoSalgCounter6"> {brotoSalg6} </button>
                                    <button 
                                        id="+brotoSalg6" 
                                        onClick={() => setBrotoSalg6(prev => prev + 1)}> 
                                    + </button>
                            </div>
                            
                        </div>

                        {/* counter pizza salg6 */}
                        <div className="counter-wrapper2Salg6">
                            <p className="pPizzaSalg2">Pizza</p> 
                            <p className="pPizzaDivisaoSalg2"> - </p>
                            <p className="pPizzaPrecoSalg2">R$249,90</p>
                            <div className="counterSalg2">
                                    <button 
                                        id="-pizzaSalg6" 
                                        onClick={() => setPizzaSalg6(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="pizzaSalgCounter6"> {pizzaSalg6} </button>
                                    <button 
                                        id="+pizzaSalg6" 
                                        onClick={() => setPizzaSalg6(prev => prev + 1)}> 
                                    + </button>
                            </div>
                        </div>

                    </div>

                    {/* button de add carrinho salg6 */}
                    {/* function de add products in the carrinho */}
                    <button id="addCarSalg6" className="addCarSalg2"> Adicionar ao meu carrinho </button>

                </div>
            </div>

            {/* containerCentral4 */}
            <div className="containerCentral">
                <div className="product">
                    <div className="img">
                       <img src={pizzaSal7} alt="Pizza Salgada"/>
                       {/* sistema de avaliação */}
                       <div id="salg7" className="renderStarStyles" style={{ display: 'flex', justifyContent: 'center', marginTop: '0.6vw' }}>
                            <Rating
                                fractions={2}
                                initialRating={rating7}
                                onChange={(value) => setRating7(value)}
                                emptySymbol={<FaRegStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                fullSymbol={<FaStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                placeholderSymbol={<FaStarHalfAlt color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                            />
                        </div>
                    </div>
                    <div className="description">
                       <p>Carbonara di Roma</p>

                       {/* descida do salg7 */}
                       <div id="descSalg7" className="descButtonSalg7">
                            {!showFullDescSalg7 && <p className="pDescSalg7">Descrição...</p>}
                            {showFullDescSalg7 && (
                                <p className="pDesc2Salg7">
                                    Molho carbonara artesanal (ovos caipiras e pecorino romano), pancetta crocante, parmesão envelhecido e pimenta-do-reino moída na hora. 
                                </p>
                            )}
                            {!showFullDescSalg7 && (
                                <button className="buttonDescSalg7" onClick={() => setShowFullDescSalg7(true)}>
                                    <ion-icon name="chevron-down-circle-outline"></ion-icon>
                                </button>
                            )}
                            {showFullDescSalg7 && (
                                <button className="buttonDesc2Salg7" onClick={() => setShowFullDescSalg7(false)}>
                                    <ion-icon name="chevron-up-circle-outline"></ion-icon>
                                </button>
                            )}

                       </div>
                       
                       {/* counter broto salg7 */}
                       <div className={`counter-wrapperSalg7 ${showFullDescSalg7 ? "ajuste-marginSalg7" : ""}`}>
                            <p className="pBroto">Broto</p>
                            <p className="pBrotoDivisao">-</p>
                            <p className="pBrotoPreco">R$86,90</p>
                            <div className="counter">
                                    <button 
                                        id="-brotoSalg7" 
                                        onClick={() => setBrotoSalg7(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="brotoSalgCounter7"> {brotoSalg7} </button>
                                    <button 
                                        id="+brotoSalg7" 
                                        onClick={() => setBrotoSalg7(prev => prev + 1)}> 
                                    + </button>
                            </div>
                            
                        </div>

                        {/* counter pizza salg7 */}
                        <div className="counter-wrapper2Salg7">
                            <p className="pPizza">Pizza</p> 
                            <p className="pPizzaDivisao"> - </p>
                            <p className="pPizzaPreco">R$169,90</p>
                            <div className="counter">
                                    <button 
                                        id="-pizzaSalg7" 
                                        onClick={() => setPizzaSalg7(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="pizzaSalgCounter7"> {pizzaSalg7} </button>
                                    <button 
                                        id="+pizzaSalg7" 
                                        onClick={() => setPizzaSalg7(prev => prev + 1)}> 
                                    + </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* button de add carrinho salg7 */}
                    {/* function de add products in the carrinho */}
                    <button id="addCarSalg7" className="addCar"> Adicionar ao meu carrinho </button>
                    
                </div>

                {/* Segunda parte do containerCentral4 */}
                <div className="product2">
                    <div className="img2">
                        <img src={pizzaSal8} alt="Pizza Salgada"/>
                        {/* sistema de avaliação */}
                        <div id="salg8" className="renderStarStyles2" style={{ display: 'flex', justifyContent: 'center', marginTop: '0.6vw' }}>
                            <Rating
                                fractions={2}
                                initialRating={rating8}
                                onChange={(value) => setRating8(value)}
                                emptySymbol={<FaRegStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                fullSymbol={<FaStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                placeholderSymbol={<FaStarHalfAlt color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                            />
                        </div>
                    </div>

                    <div className="description2">
                        <p>Queijos Nobres & Mel de Acácia</p>

                        {/* descida do salg8 */}
                       <div id="descSalg8" className="descButtonSalg8">
                            {!showFullDescSalg8 && <p className="pDescSalg8">Descrição...</p>}
                            {showFullDescSalg8 && (
                                <p className="pDesc2Salg8">
                                    Queijo taleggio, grana padano 24 meses, gorgonzola dolce e queijo de cabra, finalizados com mel de acácia e nozes caramelizadas.
                                </p>
                            )}
                            {!showFullDescSalg8 && (
                                <button className="buttonDescSalg8" onClick={() => setShowFullDescSalg8(true)}>
                                    <ion-icon name="chevron-down-circle-outline"></ion-icon>
                                </button>
                            )}
                            {showFullDescSalg8 && (
                                <button className="buttonDesc2Salg8" onClick={() => setShowFullDescSalg8(false)}>
                                    <ion-icon name="chevron-up-circle-outline"></ion-icon>
                                </button>
                            )}

                       </div>

                       {/* counter broto salg8 */}
                       <div className={`counter-wrapperSalg8 ${showFullDescSalg8 ? "ajuste-marginSalg8" : ""}`}>
                            <p className="pBrotoSalg2">Broto</p>
                            <p className="pBrotoDivisaoSalg2">-</p>
                            <p className="pBrotoPrecoSalg2">R$89,90</p>
                            <div className="counterSalg2">
                                    <button 
                                        id="-brotoSalg8" 
                                        onClick={() => setBrotoSalg8(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="brotoSalgCounter8"> {brotoSalg8} </button>
                                    <button 
                                        id="+brotoSalg8" 
                                        onClick={() => setBrotoSalg8(prev => prev + 1)}> 
                                    + </button>
                            </div>
                            
                        </div>

                        {/* counter pizza salg8 */}
                        <div className="counter-wrapper2Salg8">
                            <p className="pPizzaSalg2">Pizza</p> 
                            <p className="pPizzaDivisaoSalg2"> - </p>
                            <p className="pPizzaPrecoSalg2">R$179,90</p>
                            <div className="counterSalg2">
                                    <button 
                                        id="-pizzaSalg8" 
                                        onClick={() => setPizzaSalg8(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="pizzaSalgCounter8"> {pizzaSalg8} </button>
                                    <button 
                                        id="+pizzaSalg8" 
                                        onClick={() => setPizzaSalg8(prev => prev + 1)}> 
                                    + </button>
                            </div>
                        </div>

                    </div>

                    {/* button de add carrinho salg8 */}
                    {/* function de add products in the carrinho */}
                    <button id="addCarSalg8" className="addCarSalg2"> Adicionar ao meu carrinho </button>

                </div>
            </div>


            {/* containerCentral5 */}
            <div className="containerCentral">
                <div className="product">
                    <div className="img">
                       <img src={pizzaSal9} alt="Pizza Salgada"/>
                       {/* sistema de avaliação */}
                       <div id="salg9" className="renderStarStyles" style={{ display: 'flex', justifyContent: 'center', marginTop: '0.6vw' }}>
                            <Rating
                                fractions={2}
                                initialRating={rating9}
                                onChange={(value) => setRating9(value)}
                                emptySymbol={<FaRegStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                fullSymbol={<FaStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                placeholderSymbol={<FaStarHalfAlt color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                            />
                        </div>
                    </div>
                    <div className="description">
                       <p>Trufa Branca & Aspargos Selvagens</p>

                       {/* descida do salg9 */}
                       <div id="descSalg9" className="descButtonSalg9">
                            {!showFullDescSalg9 && <p className="pDescSalg9">Descrição...</p>}
                            {showFullDescSalg9 && (
                                <p className="pDesc2Salg9">
                                    Massa finíssima, molho branco artesanal, lascas de trufa branca italiana, aspargos frescos e parmesão de alta maturação.  
                                </p>
                            )}
                            {!showFullDescSalg9 && (
                                <button className="buttonDescSalg9" onClick={() => setShowFullDescSalg9(true)}>
                                    <ion-icon name="chevron-down-circle-outline"></ion-icon>
                                </button>
                            )}
                            {showFullDescSalg9 && (
                                <button className="buttonDesc2Salg9" onClick={() => setShowFullDescSalg9(false)}>
                                    <ion-icon name="chevron-up-circle-outline"></ion-icon>
                                </button>
                            )}

                       </div>
                       
                       {/* counter broto salg9 */}
                       <div className={`counter-wrapperSalg9 ${showFullDescSalg9 ? "ajuste-marginSalg9" : ""}`}>
                            <p className="pBroto">Broto</p>
                            <p className="pBrotoDivisao">-</p>
                            <p className="pBrotoPreco">R$120,90</p>
                            <div className="counter">
                                    <button 
                                        id="-brotoSalg9" 
                                        onClick={() => setBrotoSalg9(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="brotoSalgCounter9"> {brotoSalg9} </button>
                                    <button 
                                        id="+brotoSalg9" 
                                        onClick={() => setBrotoSalg9(prev => prev + 1)}> 
                                    + </button>
                            </div>
                            
                        </div>

                        {/* counter pizza salg9 */}
                        <div className="counter-wrapper2Salg9">
                            <p className="pPizza">Pizza</p> 
                            <p className="pPizzaDivisao"> - </p>
                            <p className="pPizzaPreco">R$239,90</p>
                            <div className="counter">
                                    <button 
                                        id="-pizzaSalg9" 
                                        onClick={() => setPizzaSalg9(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="pizzaSalgCounter9"> {pizzaSalg9} </button>
                                    <button 
                                        id="+pizzaSalg9" 
                                        onClick={() => setPizzaSalg9(prev => prev + 1)}> 
                                    + </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* button de add carrinho salg9 */}
                    {/* function de add products in the carrinho */}
                    <button id="addCarSalg9" className="addCar"> Adicionar ao meu carrinho </button>
                    
                </div>

                {/* Segunda parte do containerCentral5 */}
                <div className="product2">
                    <div className="img">
                        <img src={pizzaSal10} alt="Pizza Salgada"/>
                        {/* sistema de avaliação */}
                        <div id="salg10" className="renderStarStyles2" style={{ display: 'flex', justifyContent: 'center', marginTop: '0.6vw' }}>
                            <Rating
                                fractions={2}
                                initialRating={rating10}
                                onChange={(value) => setRating10(value)}
                                emptySymbol={<FaRegStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                fullSymbol={<FaStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                placeholderSymbol={<FaStarHalfAlt color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                            />
                        </div>
                    </div>

                    <div className="description2">
                        <p>Pato Confit & Laranja Caramelizada</p>

                        {/* descida do salg10 */}
                       <div id="descSalg10" className="descButtonSalg10">
                            {!showFullDescSalg10 && <p className="pDescSalg10">Descrição...</p>}
                            {showFullDescSalg10 && (
                                <p className="pDesc2Salg10">
                                    Massa de fermentação lenta, base de creme de queijo de cabra, pato confitado desfiado, laranjas caramelizadas no vinho branco e pimenta rosa.
                                </p>
                            )}
                            {!showFullDescSalg10 && (
                                <button className="buttonDescSalg10" onClick={() => setShowFullDescSalg10(true)}>
                                    <ion-icon name="chevron-down-circle-outline"></ion-icon>
                                </button>
                            )}
                            {showFullDescSalg10 && (
                                <button className="buttonDesc2Salg10" onClick={() => setShowFullDescSalg10(false)}>
                                    <ion-icon name="chevron-up-circle-outline"></ion-icon>
                                </button>
                            )}

                       </div>

                       {/* counter broto salg10 */}
                       <div className={`counter-wrapperSalg10 ${showFullDescSalg10 ? "ajuste-marginSalg10" : ""}`}>
                            <p className="pBrotoSalg2">Broto</p>
                            <p className="pBrotoDivisaoSalg2">-</p>
                            <p className="pBrotoPrecoSalg2">R$115,90</p>
                            <div className="counterSalg2">
                                    <button 
                                        id="-brotoSalg10" 
                                        onClick={() => setBrotoSalg10(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="brotoSalgCounter10"> {brotoSalg10} </button>
                                    <button 
                                        id="+brotoSalg10" 
                                        onClick={() => setBrotoSalg10(prev => prev + 1)}> 
                                    + </button>
                            </div>
                            
                        </div>

                        {/* counter pizza salg10 */}
                        <div className="counter-wrapper2Salg10">
                            <p className="pPizzaSalg2">Pizza</p> 
                            <p className="pPizzaDivisaoSalg2"> - </p>
                            <p className="pPizzaPrecoSalg2">R$220,90</p>
                            <div className="counterSalg2">
                                    <button 
                                        id="-pizzaSalg10" 
                                        onClick={() => setPizzaSalg10(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="pizzaSalgCounter10"> {pizzaSalg10} </button>
                                    <button 
                                        id="+pizzaSalg10" 
                                        onClick={() => setPizzaSalg10(prev => prev + 1)}> 
                                    + </button>
                            </div>
                        </div>

                    </div>

                    {/* button de add carrinho salg10 */}
                    {/* function de add products in the carrinho */}
                    <button id="addCarSalg10" className="addCarSalg2"> Adicionar ao meu carrinho </button>

                </div>
            </div>

            {/* container6 */}
            <div className="containerCentral">
                <div className="product">
                    <div className="img">
                       <img src={pizzaSal11} alt="Pizza Salgada"/>
                       {/* sistema de avaliação */}
                       <div id="salg11" className="renderStarStyles" style={{ display: 'flex', justifyContent: 'center', marginTop: '0.6vw' }}>
                            <Rating
                                fractions={2}
                                initialRating={rating11}
                                onChange={(value) => setRating11(value)}
                                emptySymbol={<FaRegStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                fullSymbol={<FaStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                placeholderSymbol={<FaStarHalfAlt color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                            />
                        </div>
                    </div>
                    <div className="description">
                       <p>Stracciatella & Presunto Ibérico</p>

                       {/* descida do salg11 */}
                       <div id="descSalg11" className="descButtonSalg11">
                            {!showFullDescSalg11 && <p className="pDescSalg11">Descrição...</p>}
                            {showFullDescSalg11 && (
                                <p className="pDesc2Salg11">
                                    Mussarela de búfala stracciatella, presunto ibérico pata negra envelhecido, rúcula selvagem e azeite extravirgem premium. 
                                </p>
                            )}
                            {!showFullDescSalg11 && (
                                <button className="buttonDescSalg11" onClick={() => setShowFullDescSalg11(true)}>
                                    <ion-icon name="chevron-down-circle-outline"></ion-icon>
                                </button>
                            )}
                            {showFullDescSalg11 && (
                                <button className="buttonDesc2Salg11" onClick={() => setShowFullDescSalg11(false)}>
                                    <ion-icon name="chevron-up-circle-outline"></ion-icon>
                                </button>
                            )}

                       </div>
                       
                       {/* counter broto salg11 */}
                       <div className={`counter-wrapperSalg11 ${showFullDescSalg11 ? "ajuste-marginSalg11" : ""}`}>
                            <p className="pBroto">Broto</p>
                            <p className="pBrotoDivisao">-</p>
                            <p className="pBrotoPreco">R$123,90</p>
                            <div className="counter">
                                    <button 
                                        id="-brotoSalg11" 
                                        onClick={() => setBrotoSalg11(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="brotoSalgCounter11"> {brotoSalg11} </button>
                                    <button 
                                        id="+brotoSalg11" 
                                        onClick={() => setBrotoSalg11(prev => prev + 1)}> 
                                    + </button>
                            </div>
                            
                        </div>

                        {/* counter pizza salg11 */}
                        <div className="counter-wrapper2Salg11">
                            <p className="pPizza">Pizza</p> 
                            <p className="pPizzaDivisao"> - </p>
                            <p className="pPizzaPreco">R$249,90</p>
                            <div className="counter">
                                    <button 
                                        id="-pizzaSalg11" 
                                        onClick={() => setPizzaSalg11(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="pizzaSalgCounter11"> {pizzaSalg11} </button>
                                    <button 
                                        id="+pizzaSalg11" 
                                        onClick={() => setPizzaSalg11(prev => prev + 1)}> 
                                    + </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* button de add carrinho salg11 */}
                    {/* function de add products in the carrinho */}
                    <button id="addCarSalg11" className="addCar"> Adicionar ao meu carrinho </button>
                    
                </div>

                {/* Segunda parte do containerCentral6 */}
                <div className="product2">
                    <div className="img2">
                        <img src={pizzaSal12} alt="Pizza Salgada"/>
                        {/* sistema de avaliação */}
                        <div id="salg12" className="renderStarStyles2" style={{ display: 'flex', justifyContent: 'center', marginTop: '0.6vw' }}>
                            <Rating
                                fractions={2}
                                initialRating={rating12}
                                onChange={(value) => setRating12(value)}
                                emptySymbol={<FaRegStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                fullSymbol={<FaStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                placeholderSymbol={<FaStarHalfAlt color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                            />
                        </div>
                    </div>

                    <div className="description2">
                        <p>Queijo Gruyère & Alho Negro</p>

                        {/* descida do salg12 */}
                       <div id="descSalg12" className="descButtonSalg12">
                            {!showFullDescSalg12 && <p className="pDescSalg12">Descrição...</p>}
                            {showFullDescSalg12 && (
                                <p className="pDesc2Salg12">
                                    Mistura de queijos gruyère, taleggio e gouda, com toque de alho negro fermentado e mel de castanheira.
                                </p>
                            )}
                            {!showFullDescSalg12 && (
                                <button className="buttonDescSalg12" onClick={() => setShowFullDescSalg12(true)}>
                                    <ion-icon name="chevron-down-circle-outline"></ion-icon>
                                </button>
                            )}
                            {showFullDescSalg12 && (
                                <button className="buttonDesc2Salg12" onClick={() => setShowFullDescSalg12(false)}>
                                    <ion-icon name="chevron-up-circle-outline"></ion-icon>
                                </button>
                            )}

                       </div>

                       {/* counter broto salg12 */}
                       <div className={`counter-wrapperSalg12 ${showFullDescSalg12 ? "ajuste-marginSalg12" : ""}`}>
                            <p className="pBrotoSalg2">Broto</p>
                            <p className="pBrotoDivisaoSalg2">-</p>
                            <p className="pBrotoPrecoSalg2">R$95,90</p>
                            <div className="counterSalg2">
                                    <button 
                                        id="-brotoSalg12" 
                                        onClick={() => setBrotoSalg12(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="brotoSalgCounter12"> {brotoSalg12} </button>
                                    <button 
                                        id="+brotoSalg12" 
                                        onClick={() => setBrotoSalg12(prev => prev + 1)}> 
                                    + </button>
                            </div>
                            
                        </div>

                        {/* counter pizza salg12 */}
                        <div className="counter-wrapper2Salg12">
                            <p className="pPizzaSalg2">Pizza</p> 
                            <p className="pPizzaDivisaoSalg2"> - </p>
                            <p className="pPizzaPrecoSalg2">R$189,90</p>
                            <div className="counterSalg2">
                                    <button 
                                        id="-pizzaSalg12" 
                                        onClick={() => setPizzaSalg12(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="pizzaSalgCounter12"> {pizzaSalg12} </button>
                                    <button 
                                        id="+pizzaSalg12" 
                                        onClick={() => setPizzaSalg12(prev => prev + 1)}> 
                                    + </button>
                            </div>
                        </div>

                    </div>

                    {/* button de add carrinho salg12 */}
                    {/* function de add products in the carrinho */}
                    <button id="addCarSalg12" className="addCarSalg2"> Adicionar ao meu carrinho </button>

                </div>
            </div>

            {/* containerCentral7  */}
            <div className="containerCentral">
                <div className="product">
                    <div className="img">
                       <img src={pizzaSal13} alt="Pizza Salgada"/>
                       {/* sistema de avaliação */}
                       <div id="salg13" className="renderStarStyles" style={{ display: 'flex', justifyContent: 'center', marginTop: '0.6vw' }}>
                            <Rating
                                fractions={2}
                                initialRating={rating13}
                                onChange={(value) => setRating13(value)}
                                emptySymbol={<FaRegStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                fullSymbol={<FaStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                placeholderSymbol={<FaStarHalfAlt color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                            />
                        </div>
                    </div>
                    <div className="description">
                       <p>Cordeiro & Hortelã</p>

                       {/* descida do salg13 */}
                       <div id="descSalg13" className="descButtonSalg13">
                            {!showFullDescSalg13 && <p className="pDescSalg13">Descrição...</p>}
                            {showFullDescSalg13 && (
                                <p className="pDesc2Salg13">
                                    Massa crocante, cordeiro assado lentamente e desfiado, queijo feta, molho de iogurte grego e redução de hortelã fresca. 
                                </p>
                            )}
                            {!showFullDescSalg13 && (
                                <button className="buttonDescSalg13" onClick={() => setShowFullDescSalg13(true)}>
                                    <ion-icon name="chevron-down-circle-outline"></ion-icon>
                                </button>
                            )}
                            {showFullDescSalg13 && (
                                <button className="buttonDesc2Salg13" onClick={() => setShowFullDescSalg13(false)}>
                                    <ion-icon name="chevron-up-circle-outline"></ion-icon>
                                </button>
                            )}

                       </div>
                       
                       {/* counter broto salg13 */}
                       <div className={`counter-wrapperSalg13 ${showFullDescSalg13 ? "ajuste-marginSalg13" : ""}`}>
                            <p className="pBroto">Broto</p>
                            <p className="pBrotoDivisao">-</p>
                            <p className="pBrotoPreco">R$122,90</p>
                            <div className="counter">
                                    <button 
                                        id="-brotoSalg13" 
                                        onClick={() => setBrotoSalg13(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="brotoSalgCounter13"> {brotoSalg13} </button>
                                    <button 
                                        id="+brotoSalg13" 
                                        onClick={() => setBrotoSalg13(prev => prev + 1)}> 
                                    + </button>
                            </div>
                            
                        </div>

                        {/* counter pizza salg13 */}
                        <div className="counter-wrapper2">
                            <p className="pPizza">Pizza</p> 
                            <p className="pPizzaDivisao"> - </p>
                            <p className="pPizzaPreco">R$239,90</p>
                            <div className="counter">
                                    <button 
                                        id="-pizzaSalg13" 
                                        onClick={() => setPizzaSalg13(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="pizzaSalgCounter13"> {pizzaSalg13} </button>
                                    <button 
                                        id="+pizzaSalg13" 
                                        onClick={() => setPizzaSalg13(prev => prev + 1)}> 
                                    + </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* button de add carrinho salg13 */}
                    {/* function de add products in the carrinho */}
                    <button id="addCarSalg13" className="addCar"> Adicionar ao meu carrinho </button>
                    
                </div>

                {/* Segunda parte do containerCentral7 */}
                <div className="product2">
                    <div className="img2">
                        <img src={pizzaSal14} alt="Pizza Salgada"/>
                        {/* sistema de avaliação */}
                        <div id="salg14" className="renderStarStyles2" style={{ display: 'flex', justifyContent: 'center', marginTop: '0.6vw' }}>
                            <Rating
                                fractions={2}
                                initialRating={rating14}
                                onChange={(value) => setRating14(value)}
                                emptySymbol={<FaRegStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                fullSymbol={<FaStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                placeholderSymbol={<FaStarHalfAlt color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                            />
                        </div>
                    </div>

                    <div className="description2">
                        <p>Rosbife de Wagyu & Mostarda Dijon</p>

                        {/* descida do salg14 */}
                       <div id="descSalg14" className="descButtonSalg14">
                            {!showFullDescSalg14 && <p className="pDescSalg14">Descrição...</p>}
                            {showFullDescSalg14 && (
                                <p className="pDesc2Salg14">
                                    Massa leve, molho de mostarda Dijon, rosbife de wagyu A5, queijo suíço emmental e rúcula baby.
                                </p>
                            )}
                            {!showFullDescSalg14 && (
                                <button className="buttonDescSalg14" onClick={() => setShowFullDescSalg14(true)}>
                                    <ion-icon name="chevron-down-circle-outline"></ion-icon>
                                </button>
                            )}
                            {showFullDescSalg14 && (
                                <button className="buttonDesc2Salg14" onClick={() => setShowFullDescSalg14(false)}>
                                    <ion-icon name="chevron-up-circle-outline"></ion-icon>
                                </button>
                            )}

                       </div>

                       {/* counter broto salg14 */}
                       <div className={`counter-wrapperSalg14 ${showFullDescSalg14 ? "ajuste-marginSalg14" : ""}`}>
                            <p className="pBrotoSalg2">Broto</p>
                            <p className="pBrotoDivisaoSalg2">-</p>
                            <p className="pBrotoPrecoSalg2">R$125,90</p>
                            <div className="counterSalg2">
                                    <button 
                                        id="-brotoSalg14" 
                                        onClick={() => setBrotoSalg14(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="brotoSalgCounter14"> {brotoSalg14} </button>
                                    <button 
                                        id="+brotoSalg14" 
                                        onClick={() => setBrotoSalg14(prev => prev + 1)}> 
                                    + </button>
                            </div>
                            
                        </div>

                        {/* counter pizza salg14 */}
                        <div className="counter-wrapper2Salg14">
                            <p className="pPizzaSalg2">Pizza</p> 
                            <p className="pPizzaDivisaoSalg2"> - </p>
                            <p className="pPizzaPrecoSalg2">R$259,90</p>
                            <div className="counterSalg2">
                                    <button 
                                        id="-pizzaSalg14" 
                                        onClick={() => setPizzaSalg14(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="pizzaSalgCounter14"> {pizzaSalg14} </button>
                                    <button 
                                        id="+pizzaSalg14" 
                                        onClick={() => setPizzaSalg14(prev => prev + 1)}> 
                                    + </button>
                            </div>
                        </div>

                    </div>

                    {/* button de add carrinho salg14 */}
                    {/* function de add products in the carrinho */}
                    <button id="addCarSalg14" className="addCarSalg2"> Adicionar ao meu carrinho </button>

                </div>
            </div>

            {/* containerCentral8 */}
            <div className="containerCentral">
                <div className="product">
                    <div className="img">
                       <img src={pizzaSal15} alt="Pizza Salgada"/>
                       {/* sistema de avaliação */}
                       <div id="salg15" className="renderStarStyles" style={{ display: 'flex', justifyContent: 'center', marginTop: '0.6vw' }}>
                            <Rating
                                fractions={2}
                                initialRating={rating15}
                                onChange={(value) => setRating15(value)}
                                emptySymbol={<FaRegStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                fullSymbol={<FaStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                placeholderSymbol={<FaStarHalfAlt color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                            />
                        </div>
                    </div>
                    <div className="description">
                       <p>Salmão Defumado & Ovas de Caviar </p>

                       {/* descida do salg15 */}
                       <div id="descSalg15" className="descButtonSalg15">
                            {!showFullDescSalg15 && <p className="pDescSalg15">Descrição...</p>}
                            {showFullDescSalg15 && (
                                <p className="pDesc2Salg15">
                                    Base de mascarpone, fatias de salmão defumado artesanalmente, ovas de caviar e zest de limão siciliano. 
                                </p>
                            )}
                            {!showFullDescSalg15 && (
                                <button className="buttonDescSalg15" onClick={() => setShowFullDescSalg15(true)}>
                                    <ion-icon name="chevron-down-circle-outline"></ion-icon>
                                </button>
                            )}
                            {showFullDescSalg15 && (
                                <button className="buttonDesc2Salg15" onClick={() => setShowFullDescSalg15(false)}>
                                    <ion-icon name="chevron-up-circle-outline"></ion-icon>
                                </button>
                            )}

                       </div>
                       
                       {/* counter broto salg15 */}
                       <div className={`counter-wrapperSalg15 ${showFullDescSalg15 ? "ajuste-marginSalg15" : ""}`}>
                            <p className="pBroto">Broto</p>
                            <p className="pBrotoDivisao">-</p>
                            <p className="pBrotoPreco">R$144,90</p>
                            <div className="counter">
                                    <button 
                                        id="-brotoSalg15" 
                                        onClick={() => setBrotoSalg15(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="brotoSalgCounter15"> {brotoSalg15} </button>
                                    <button 
                                        id="+brotoSalg15" 
                                        onClick={() => setBrotoSalg15(prev => prev + 1)}> 
                                    + </button>
                            </div>
                            
                        </div>

                        {/* counter pizza salg15 */}
                        <div className="counter-wrapper2">
                            <p className="pPizza">Pizza</p> 
                            <p className="pPizzaDivisao"> - </p>
                            <p className="pPizzaPreco">R$299,90</p>
                            <div className="counter">
                                    <button 
                                        id="-pizzaSalg15" 
                                        onClick={() => setPizzaSalg15(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="pizzaSalgCounter15"> {pizzaSalg15} </button>
                                    <button 
                                        id="+pizzaSalg15" 
                                        onClick={() => setPizzaSalg15(prev => prev + 1)}> 
                                    + </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* button de add carrinho salg15 */}
                    {/* function de add products in the carrinho */}
                    <button id="addCarSalg15" className="addCar"> Adicionar ao meu carrinho </button>
                    
                </div>

                {/* Segunda parte do containerCentra8 */}
                <div className="product2">
                    <div className="img">
                        <img src={pizzaSal16} alt="Pizza Salgada"/>
                        {/* sistema de avaliação */}
                        <div id="salg16" className="renderStarStyles2" style={{ display: 'flex', justifyContent: 'center', marginTop: '0.6vw' }}>
                            <Rating
                                fractions={2}
                                initialRating={rating16}
                                onChange={(value) => setRating16(value)}
                                emptySymbol={<FaRegStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                fullSymbol={<FaStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                placeholderSymbol={<FaStarHalfAlt color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                            />
                        </div>
                    </div>

                    <div className="description2">
                        <p>Polvo Grelhado & Batatas ao Murro</p>

                        {/* descida do salg16 */}
                       <div id="descSalg16" className="descButtonSalg16">
                            {!showFullDescSalg16 && <p className="pDescSalg16">Descrição...</p>}
                            {showFullDescSalg16 && (
                                <p className="pDesc2Salg16">
                                    Molho branco especial, polvo grelhado lentamente, batatas ao murro, páprica defumada e azeite de alho confitado.
                                </p>
                            )}
                            {!showFullDescSalg16 && (
                                <button className="buttonDescSalg16" onClick={() => setShowFullDescSalg16(true)}>
                                    <ion-icon name="chevron-down-circle-outline"></ion-icon>
                                </button>
                            )}
                            {showFullDescSalg16 && (
                                <button className="buttonDesc2Salg16" onClick={() => setShowFullDescSalg16(false)}>
                                    <ion-icon name="chevron-up-circle-outline"></ion-icon>
                                </button>
                            )}

                       </div>

                       {/* counter broto salg16 */}
                       <div className={`counter-wrapperSalg16 ${showFullDescSalg16 ? "ajuste-marginSalg16" : ""}`}>
                            <p className="pBrotoSalg2">Broto</p>
                            <p className="pBrotoDivisaoSalg2">-</p>
                            <p className="pBrotoPrecoSalg2">R$134,90</p>
                            <div className="counterSalg2">
                                    <button 
                                        id="-brotoSalg16" 
                                        onClick={() => setBrotoSalg16(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="brotoSalgCounter16"> {brotoSalg16} </button>
                                    <button 
                                        id="+brotoSalg16" 
                                        onClick={() => setBrotoSalg16(prev => prev + 1)}> 
                                    + </button>
                            </div>
                            
                        </div>

                        {/* counter pizza salg16 */}
                        <div className="counter-wrapper2Salg16">
                            <p className="pPizzaSalg2">Pizza</p> 
                            <p className="pPizzaDivisaoSalg2"> - </p>
                            <p className="pPizzaPrecoSalg2">R$269,90</p>
                            <div className="counterSalg2">
                                    <button 
                                        id="-pizzaSalg16" 
                                        onClick={() => setPizzaSalg16(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="pizzaSalgCounter16"> {pizzaSalg16} </button>
                                    <button 
                                        id="+pizzaSalg16" 
                                        onClick={() => setPizzaSalg16(prev => prev + 1)}> 
                                    + </button>
                            </div>
                        </div>

                    </div>

                    {/* button de add carrinho salg16 */}
                    {/* function de add products in the carrinho */}
                    <button id="addCarSalg16" className="addCarSalg2"> Adicionar ao meu carrinho </button>

                </div>
            </div>

            {/* containerCentral9 */}
            <div className="containerCentral">
                <div className="product">
                    <div className="img">
                       <img src={pizzaSal17} alt="Pizza Salgada"/>
                       {/* sistema de avaliação */}
                       <div id="salg17" className="renderStarStyles" style={{ display: 'flex', justifyContent: 'center', marginTop: '0.6vw' }}>
                            <Rating
                                fractions={2}
                                initialRating={rating17}
                                onChange={(value) => setRating17(value)}
                                emptySymbol={<FaRegStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                fullSymbol={<FaStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                placeholderSymbol={<FaStarHalfAlt color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                            />
                        </div>
                    </div>
                    <div className="description">
                       <p>Prosciutto di San Daniele & Melão Cantaloupe</p>

                       {/* descida do salg17 */}
                       <div id="descSalg17" className="descButtonSalg17">
                            {!showFullDescSalg17 && <p className="pDescSalg17">Descrição...</p>}
                            {showFullDescSalg17 && (
                                <p className="pDesc2Salg17">
                                    Molho pomodoro San Marzano, mussarela de búfala artesanal, presunto San Daniele DOP curado 24 meses, finas lâminas de melão cantaloupe e redução de balsâmico envelhecido.
                                </p>
                            )}
                            {!showFullDescSalg17 && (
                                <button className="buttonDescSalg17" onClick={() => setShowFullDescSalg17(true)}>
                                    <ion-icon name="chevron-down-circle-outline"></ion-icon>
                                </button>
                            )}
                            {showFullDescSalg17 && (
                                <button className="buttonDesc2Salg17" onClick={() => setShowFullDescSalg17(false)}>
                                    <ion-icon name="chevron-up-circle-outline"></ion-icon>
                                </button>
                            )}

                       </div>
                       
                       {/* counter broto salg17 */}
                       <div className={`counter-wrapperSalg17 ${showFullDescSalg17 ? "ajuste-marginSalg17" : ""}`}>
                            <p className="pBroto">Broto</p>
                            <p className="pBrotoDivisao">-</p>
                            <p className="pBrotoPreco">R$95,90</p>
                            <div className="counter">
                                    <button 
                                        id="-brotoSalg17" 
                                        onClick={() => setBrotoSalg17(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="brotoSalgCounter17"> {brotoSalg17} </button>
                                    <button 
                                        id="+brotoSalg17" 
                                        onClick={() => setBrotoSalg17(prev => prev + 1)}> 
                                    + </button>
                            </div>
                            
                        </div>

                        {/* counter pizza salg17 */}
                        <div className="counter-wrapper2">
                            <p className="pPizza">Pizza</p> 
                            <p className="pPizzaDivisao"> - </p>
                            <p className="pPizzaPreco">R$189,90</p>
                            <div className="counter">
                                    <button 
                                        id="-pizzaSalg17" 
                                        onClick={() => setPizzaSalg17(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="pizzaSalgCounter17"> {pizzaSalg17} </button>
                                    <button 
                                        id="+pizzaSalg17" 
                                        onClick={() => setPizzaSalg17(prev => prev + 1)}> 
                                    + </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* button de add carrinho salg17 */}
                    {/* function de add products in the carrinho */}
                    <button id="addCarSalg17" className="addCar"> Adicionar ao meu carrinho </button>
                    
                </div>

                {/* Segunda parte do containerCentral9 */}
                <div className="product2">
                    <div className="img2">
                        <img src={pizzaSal18} alt="Pizza Salgada"/>
                        {/* sistema de avaliação */}
                        <div id="salg18" className="renderStarStyles2" style={{ display: 'flex', justifyContent: 'center', marginTop: '0.6vw' }}>
                            <Rating
                                fractions={2}
                                initialRating={rating18}
                                onChange={(value) => setRating18(value)}
                                emptySymbol={<FaRegStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                fullSymbol={<FaStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                placeholderSymbol={<FaStarHalfAlt color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                            />
                        </div>
                    </div>

                    <div className="description2">
                        <p>Stracciatella & Pesto de Pistache</p>

                        {/* descida do salg18 */}
                       <div id="descSalg18" className="descButtonSalg18">
                            {!showFullDescSalg18 && <p className="pDescSalg18">Descrição...</p>}
                            {showFullDescSalg18 && (
                                <p className="pDesc2Salg18">
                                    Mussarela de búfala, creme de stracciatella italiana, pesto de pistache siciliano e tomatinhos confitados no azeite extravirgem grego.
                                </p>
                            )}
                            {!showFullDescSalg18 && (
                                <button className="buttonDescSalg18" onClick={() => setShowFullDescSalg18(true)}>
                                    <ion-icon name="chevron-down-circle-outline"></ion-icon>
                                </button>
                            )}
                            {showFullDescSalg18 && (
                                <button className="buttonDesc2Salg18" onClick={() => setShowFullDescSalg18(false)}>
                                    <ion-icon name="chevron-up-circle-outline"></ion-icon>
                                </button>
                            )}

                       </div>

                       {/* counter broto salg18 */}
                       <div className={`counter-wrapperSalg18 ${showFullDescSalg8 ? "ajuste-marginSalg18" : ""}`}>
                            <p className="pBrotoSalg2">Broto</p>
                            <p className="pBrotoDivisaoSalg2">-</p>
                            <p className="pBrotoPrecoSalg2">R$89,90</p>
                            <div className="counterSalg2">
                                    <button 
                                        id="-brotoSalg18" 
                                        onClick={() => setBrotoSalg18(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="brotoSalgCounter18"> {brotoSalg18} </button>
                                    <button 
                                        id="+brotoSalg18" 
                                        onClick={() => setBrotoSalg18(prev => prev + 1)}> 
                                    + </button>
                            </div>
                            
                        </div>

                        {/* counter pizza salg18 */}
                        <div className="counter-wrapper2Salg18">
                            <p className="pPizzaSalg2">Pizza</p> 
                            <p className="pPizzaDivisaoSalg2"> - </p>
                            <p className="pPizzaPrecoSalg2">R$179,90</p>
                            <div className="counterSalg2">
                                    <button 
                                        id="-pizzaSalg18" 
                                        onClick={() => setPizzaSalg18(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="pizzaSalgCounter18"> {pizzaSalg18} </button>
                                    <button 
                                        id="+pizzaSalg18" 
                                        onClick={() => setPizzaSalg18(prev => prev + 1)}> 
                                    + </button>
                            </div>
                        </div>

                    </div>

                    {/* button de add carrinho salg18 */}
                    {/* function de add products in the carrinho */}
                    <button id="addCarSalg18" className="addCarSalg2"> Adicionar ao meu carrinho </button>

                </div>
            </div>


            {/* containerCentral10 */}
            <div className="containerCentral">
                <div className="product">
                    <div className="img">
                       <img src={pizzaSal19} alt="Pizza Salgada"/>
                       {/* sistema de avaliação */}
                       <div id="salg19" className="renderStarStyles" style={{ display: 'flex', justifyContent: 'center', marginTop: '0.6vw' }}>
                            <Rating
                                fractions={2}
                                initialRating={rating19}
                                onChange={(value) => setRating19(value)}
                                emptySymbol={<FaRegStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                fullSymbol={<FaStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                placeholderSymbol={<FaStarHalfAlt color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                            />
                        </div>
                    </div>
                    <div className="description">
                       <p>Costela Angus & Cebolas Roxas Caramelizadas</p>

                       {/* descida do salg19 */}
                       <div id="descSalg19" className="descButtonSalg19">
                            {!showFullDescSalg19 && <p className="pDescSalg19">Descrição...</p>}
                            {showFullDescSalg19 && (
                                <p className="pDesc2Salg19">
                                    Molho pomodoro italiano, queijo gruyère derretido, costela angus desfiada lentamente cozida por 12h e cebolas roxas caramelizadas no vinho do Porto.  
                                </p>
                            )}
                            {!showFullDescSalg19 && (
                                <button className="buttonDescSalg19" onClick={() => setShowFullDescSalg19(true)}>
                                    <ion-icon name="chevron-down-circle-outline"></ion-icon>
                                </button>
                            )}
                            {showFullDescSalg19 && (
                                <button className="buttonDesc2Salg19" onClick={() => setShowFullDescSalg19(false)}>
                                    <ion-icon name="chevron-up-circle-outline"></ion-icon>
                                </button>
                            )}

                       </div>
                       
                       {/* counter broto salg19 */}
                       <div className={`counter-wrapperSalg19 ${showFullDescSalg19 ? "ajuste-marginSalg19" : ""}`}>
                            <p className="pBroto">Broto</p>
                            <p className="pBrotoDivisao">-</p>
                            <p className="pBrotoPreco">R$98,90</p>
                            <div className="counter">
                                    <button 
                                        id="-brotoSalg19" 
                                        onClick={() => setBrotoSalg19(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="brotoSalgCounter19"> {brotoSalg19} </button>
                                    <button 
                                        id="+brotoSalg19" 
                                        onClick={() => setBrotoSalg19(prev => prev + 1)}> 
                                    + </button>
                            </div>
                            
                        </div>

                        {/* counter pizza salg19 */}
                        <div className="counter-wrapper2">
                            <p className="pPizza">Pizza</p> 
                            <p className="pPizzaDivisao"> - </p>
                            <p className="pPizzaPreco">R$199,90</p>
                            <div className="counter">
                                    <button 
                                        id="-pizzaSalg19" 
                                        onClick={() => setPizzaSalg19(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="pizzaSalgCounter19"> {pizzaSalg19} </button>
                                    <button 
                                        id="+pizzaSalg19" 
                                        onClick={() => setPizzaSalg19(prev => prev + 1)}> 
                                    + </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* button de add carrinho salg19 */}
                    {/* function de add products in the carrinho */}
                    <button id="addCarSalg19" className="addCar"> Adicionar ao meu carrinho </button>
                    
                </div>

                {/* Segunda parte do containerCentral10 */}
                <div className="product2">
                    <div className="img">
                        <img src={pizzaSal20} alt="Pizza Salgada"/>
                        {/* sistema de avaliação */}
                        <div id="salg20" className="renderStarStyles2" style={{ display: 'flex', justifyContent: 'center', marginTop: '0.6vw' }}>
                            <Rating
                                fractions={2}
                                initialRating={rating20}
                                onChange={(value) => setRating20(value)}
                                emptySymbol={<FaRegStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                fullSymbol={<FaStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                placeholderSymbol={<FaStarHalfAlt color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                            />
                        </div>
                    </div>

                    <div className="description2">
                        <p>Margherita DOP Suprema</p>

                        {/* descida do salg20 */}
                       <div id="descSalg20" className="descButtonSalg20">
                            {!showFullDescSalg20 && <p className="pDescSalg20">Descrição...</p>}
                            {showFullDescSalg20 && (
                                <p className="pDesc2Salg20">
                                    Tomates San Marzano, mussarela di bufala Campana DOP, azeite extravirgem siciliano, manjericão fresco e toque final de queijo pecorino romano.
                                </p>
                            )}
                            {!showFullDescSalg20 && (
                                <button className="buttonDescSalg20" onClick={() => setShowFullDescSalg20(true)}>
                                    <ion-icon name="chevron-down-circle-outline"></ion-icon>
                                </button>
                            )}
                            {showFullDescSalg20 && (
                                <button className="buttonDesc2Salg20" onClick={() => setShowFullDescSalg20(false)}>
                                    <ion-icon name="chevron-up-circle-outline"></ion-icon>
                                </button>
                            )}

                       </div>

                       {/* counter broto salg20 */}
                       <div className={`counter-wrapperSalg20 ${showFullDescSalg20 ? "ajuste-marginSalg20" : ""}`}>
                            <p className="pBrotoSalg2">Broto</p>
                            <p className="pBrotoDivisaoSalg2">-</p>
                            <p className="pBrotoPrecoSalg2">R$94,90</p>
                            <div className="counterSalg2">
                                    <button 
                                        id="-brotoSalg20" 
                                        onClick={() => setBrotoSalg20(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="brotoSalgCounter20"> {brotoSalg20} </button>
                                    <button 
                                        id="+brotoSalg20" 
                                        onClick={() => setBrotoSalg20(prev => prev + 1)}> 
                                    + </button>
                            </div>
                            
                        </div>

                        {/* counter pizza salg20 */}
                        <div className="counter-wrapper2Salg20">
                            <p className="pPizzaSalg2">Pizza</p> 
                            <p className="pPizzaDivisaoSalg2"> - </p>
                            <p className="pPizzaPrecoSalg2">R$189,90</p>
                            <div className="counterSalg2">
                                    <button 
                                        id="-pizzaSalg20" 
                                        onClick={() => setPizzaSalg20(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="pizzaSalgCounter20"> {pizzaSalg20} </button>
                                    <button 
                                        id="+pizzaSalg20" 
                                        onClick={() => setPizzaSalg20(prev => prev + 1)}> 
                                    + </button>
                            </div>
                        </div>

                    </div>

                    {/* button de add carrinho salg20 */}
                    {/* function de add products in the carrinho */}
                    <button id="addCarSalg20" className="addCarSalg2"> Adicionar ao meu carrinho </button>

                </div>
            </div>


            {/* containerCentral11 */}
            <div className="containerCentral">
                <div className="product">
                    <div className="img">
                        <img src={pizzaSal21} alt="Pizza Salgada"/>
                        {/* sistema de avaliação */}
                        <div id="salg21" className="renderStarStyles" style={{ display: 'flex', justifyContent: 'center', marginTop: '0.6vw' }}>
                            <Rating
                                fractions={2}
                                initialRating={rating21}
                                onChange={(value) => setRating21(value)}
                                emptySymbol={<FaRegStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                fullSymbol={<FaStar color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                                placeholderSymbol={<FaStarHalfAlt color="#c5a15c" style={{ fontSize: '1.6vw' }} />}
                            />
                        </div>
                    </div>

                    <div className="description">
                        <p>Pata Negra & Figos Frescos</p>

                        {/* descida do salg21 */}
                       <div id="descSalg21" className="descButtonSalg21">
                            {!showFullDescSalg21 && <p className="pDescSalg21">Descrição...</p>}
                            {showFullDescSalg21 && (
                                <p className="pDesc2Salg21">
                                    Massa artesanal, base de burrata cremosa, jamón ibérico Pata Negra envelhecido 48 meses, figos frescos caramelizados e nozes pecan tostadas.
                                </p>
                            )}
                            {!showFullDescSalg21 && (
                                <button className="buttonDescSalg21" onClick={() => setShowFullDescSalg21(true)}>
                                    <ion-icon name="chevron-down-circle-outline"></ion-icon>
                                </button>
                            )}
                            {showFullDescSalg21 && (
                                <button className="buttonDesc2Salg21" onClick={() => setShowFullDescSalg21(false)}>
                                    <ion-icon name="chevron-up-circle-outline"></ion-icon>
                                </button>
                            )}

                       </div>

                       {/* counter broto salg21 */}
                       <div className={`counter-wrapperSalg21 ${showFullDescSalg21 ? "ajuste-marginSalg21" : ""}`}>
                            <p className="pBroto">Broto</p>
                            <p className="pBrotoDivisao">-</p>
                            <p className="pBrotoPreco">R$134,90</p>
                            <div className="counter">
                                    <button 
                                        id="-brotoSalg21" 
                                        onClick={() => setBrotoSalg21(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="brotoSalgCounter21"> {brotoSalg21} </button>
                                    <button 
                                        id="+brotoSalg21" 
                                        onClick={() => setBrotoSalg21(prev => prev + 1)}> 
                                    + </button>
                            </div>
                            
                        </div>

                        {/* counter pizza salg21 */}
                        <div className="counter-wrapper2Salg21">
                            <p className="pPizza">Pizza</p> 
                            <p className="pPizzaDivisao"> - </p>
                            <p className="pPizzaPreco">R$269,90</p>
                            <div className="counter">
                                    <button 
                                        id="-pizzaSalg21" 
                                        onClick={() => setPizzaSalg21(prev => prev > 0 ? prev - 1 : 0)}> 
                                    - </button>
                                    <button id="pizzaSalgCounter21"> {pizzaSalg21} </button>
                                    <button 
                                        id="+pizzaSalg21" 
                                        onClick={() => setPizzaSalg21(prev => prev + 1)}> 
                                    + </button>
                            </div>
                        </div>

                    </div>

                    {/* button de add carrinho salg21 */}
                    {/* function de add products in the carrinho */}
                    <button id="addCarSalg21" className="addCar"> Adicionar ao meu carrinho </button>

                </div>
            </div>

            
        </>
    )
}

export default Menu;