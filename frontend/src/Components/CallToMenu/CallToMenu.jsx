import React from "react";
import "./CallToMenu.css";
import { Link } from 'react-router-dom';

const CallToMenu = () => {
    return (
        <section className="call-menu-space">
            <div className="call-space">
                <div className="call-title">
                    <div className="line-call"></div>
                    <div className="title-call">Cardápio</div>
                    <div className="line-call"></div>
                </div>
                <div className="btn-content-call">
                    <Link to="/menu">
                        <button className="btn-call">
                            {' '}
                            ACESSE O CARDÁPIO{' '}
                        </button>
                    </Link>
                </div>
                <div className="line-call"></div>
            </div>
        </section>
    );
}

export default CallToMenu;