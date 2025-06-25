import React from "react";
import "./CallToMenu.css";
import pizza1 from "./assets/1.png";
import pizza2 from "./assets/2.png";

const CallToMenu = () => {
    return (
        <section className="call-menu-space">
            <div className="call-space">
                <div className="call-title">
                    <div className="line-call"></div>
                    <div className="title-call">Cardápio</div>
                    <div className="line-call"></div>
                </div>
                <div className="boxes-call">
                    <div className="box">
                        <div className="photo-call">
                            <img
                                className="photo"
                                src={pizza1}
                                alt="Tartufo Nero e Burrata"
                            />
                        </div>
                        <div className="text-content">
                            <div className="pizza-title">
                                <p>Tartufo Nero e Burrata</p>
                            </div>
                            <div className="pizza-text">
                                <p>
                                    Massa de fermentação lenta, molho bechamel
                                    trufado, burrata fresca, cogumelos
                                    selvagens, azeite de trufas negras e lascas
                                    de parmesão 36 meses.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="photo-call">
                            <img
                                className="photo"
                                src={pizza2}
                                alt="Filetto e Gorgonzola"
                            />
                        </div>
                        <div className="text-content">
                            <div className="pizza-title">
                                <p>Filetto e Gorgonzola</p>
                            </div>
                            <div className="pizza-text">
                                <p>
                                    Molho pomodoro italiano, filé mignon selado
                                    em manteiga de garrafa, gorgonzola dolce,
                                    cebola caramelizada e nozes tostadas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line2-call"></div>
            </div>
        </section>
    );
}

export default CallToMenu;