import React, { useState } from "react";
import './Menu.css';
import Rating from 'react-rating';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

// fotos das pizzas salgadas
import pizzaSal1 from '../../assets/img/pizzaSal1.png';
import pizzaSal2 from '../../assets/img/pizzaSal2.png';

import pizzaSal5 from '../../assets/img/pizzaSal5.png';
import pizzaSal6 from '../../assets/img/pizzaSal6.png';
import pizzaSal7 from '../../assets/img/pizzaSal7.png';
import pizzaSal8 from '../../assets/img/pizzaSal8.png';
import pizzaSal9 from '../../assets/img/pizzaSal9.png';
import pizzaSal10 from '../../assets/img/pizzaSal10.png';

const Menu = () => {

    //sistema de contagem para pizzas e brotos salgados por id
    const [brotoSalg1, setBrotoSalg1] = useState(0);
    const [pizzaSalg1, setPizzaSalg1] = useState(0);
    const [brotoSalg2, setBrotoSalg2] = useState(0);
    const [pizzaSalg2, setPizzaSalg2] = useState(0);

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

    //sistema de substituir descrição
    const [showFullDesc, setShowFullDesc] = useState(false);
    const [showFullDescSalg2, setShowFullDescSalg2] = useState(false);

    const [showFullDescSalg5, setShowFullDescSalg5] = useState(false);
    const [showFullDescSalg6, setShowFullDescSalg6] = useState(false);
    const [showFullDescSalg7, setShowFullDescSalg7] = useState(false);
    const [showFullDescSalg8, setShowFullDescSalg8] = useState(false);
    const [showFullDescSalg9, setShowFullDescSalg9] = useState(false);
    const [showFullDescSalg10, setShowFullDescSalg10] = useState(false);

    //sistema de classificação
    const [rating, setRating] = useState(0);
    const [rating2, setRating2] = useState(0);

    const [rating5, setRating5] = useState(0);
    const [rating6, setRating6] = useState(0);
    const [rating7, setRating7] = useState(0);
    const [rating8, setRating8] = useState(0);
    const [rating9, setRating9] = useState(0);
    const [rating10, setRating10] = useState(0);



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
                        <div className="counter-wrapper2">
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
                       <p>Tartufo Nero e Burrata</p>

                       {/* descida do salg1 */}
                       <div id="descSalg7" className="descButtonSalg7">
                            {!showFullDescSalg7 && <p className="pDescSalg7">Descrição...</p>}
                            {showFullDescSalg7 && (
                                <p className="pDesc2Salg7">
                                    Massa de fermentação lenta, molho bechamel trufado, burrata fresca, cogumelos selvagens, azeite de trufas negras e lascas de parmesão 36 meses.
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
                            <p className="pBrotoPreco">R$95,90</p>
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
                        <div className="counter-wrapper2">
                            <p className="pPizza">Pizza</p> 
                            <p className="pPizzaDivisao"> - </p>
                            <p className="pPizzaPreco">R$189,90</p>
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
                        <p>Filetto e Gorgonzola</p>

                        {/* descida do salg2 */}
                       <div id="descSalg8" className="descButtonSalg8">
                            {!showFullDescSalg8 && <p className="pDescSalg8">Descrição...</p>}
                            {showFullDescSalg8 && (
                                <p className="pDesc2Salg8">
                                    Molho pomodoro italiano, filé mignon selado em manteiga de garrafa, gorgonzola dolce, cebola caramelizada e nozes tostadas.
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
                       <p>Camarão & Champagne</p>

                       {/* descida do salg9 */}
                       <div id="descSalg9" className="descButtonSalg9">
                            {!showFullDescSalg9 && <p className="pDescSalg9">Descrição...</p>}
                            {showFullDescSalg9 && (
                                <p className="pDesc2Salg9">
                                    Base de mascarpone, camarões flambados no champagne brut, raspas de limão siciliano e flor de sal. 
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
                            <p className="pBrotoPreco">R$99,99</p>
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
                        <div className="counter-wrapper2">
                            <p className="pPizza">Pizza</p> 
                            <p className="pPizzaDivisao"> - </p>
                            <p className="pPizzaPreco">R$199,90</p>
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
                        <p>Wagyu & Foie Gras</p>

                        {/* descida do salg6 */}
                       <div id="descSalg10" className="descButtonSalg10">
                            {!showFullDescSalg10 && <p className="pDescSalg10">Descrição...</p>}
                            {showFullDescSalg10 && (
                                <p className="pDesc2Salg10">
                                    Molho bechamel, finas fatias de wagyu A5, foie gras selado, cogumelos selvagens e redução de vinho do Porto.
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
                            <p className="pBrotoPrecoSalg2">R$79,90</p>
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
                            <p className="pPizzaPrecoSalg2">R$249,90</p>
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

        </>
    )
}

export default Menu;