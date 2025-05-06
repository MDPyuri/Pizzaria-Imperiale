import React from "react";
import './Menu.css';

import pizzaSal1 from '../../assets/img/pizzaSal1.png';

const Menu = () => {
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
                       <p>const</p>
                    </div>
                    <div className="description">
                       <p>Tartufo Nero e Burrata</p>
                       <div className="descButton">
                            <p className="pDesc">Descrição...</p>
                            {/* botao de descer */}
                            <button className="buttonDesc">a</button>
                       </div>
                       
                       <p className="pBroto">Broto - R$95,90</p>
                       <div className="counter">
                            <button> - </button>
                            <button> 0 </button>
                            <button> + </button>
                       </div>
                       <p className="pPizza">Pizza - R$189,90</p>
                       <div className="counter">
                            <button> - </button>
                            <button> 0 </button>
                            <button> + </button>
                       </div>
                    </div>

                    <button className="addCar">Adicionar ao meu carrinho</button>
                    
                </div>
            </div>
        </>
    )
}

export default Menu;