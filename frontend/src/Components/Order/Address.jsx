import React, { useState, useEffect } from 'react';
import './OrderFinish.css';

const Address = () => {
    return (
        <section className="SectionOrderFinish">
            <div className="OrderFinish-content">
                <div className="title-order">
                    <div className="line-order"></div>
                    <p>Endereço</p>
                    <div className="line-order"></div>
                </div>
            </div>
        </section>
    );
};

export default Address;
