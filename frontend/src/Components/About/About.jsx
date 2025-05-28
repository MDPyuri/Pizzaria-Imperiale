import React from 'react';
import './About.css';
import yuri from './img/yuri.webp';
import milly from './img/milly.jpg';
import belly from './img/belly.png';
import gabi from './img/gabi.png';

const About = () => {
    return (
        <section className="about-space">
            <div className="space-about">
                <div className="title-about">
                    <div className="line-abo"></div>
                    <div className="title-abo">Sobre Nós</div>
                    <div className="line-abo"></div>
                </div>
                <div className="block-about">
                    <div className="person-block">
                        <div className="photo">
                            <img src={yuri} alt="Foto do Desenvolvedor" />
                        </div>
                        <div className="name-person">
                            <p>Yuri Matsumoto do Prado</p>
                        </div>
                        <div className="about-person">
                            <p>
                                Aluno do IFSP campus Caraguatatuba, curso:
                                Técnico em Informática Integrado ao Ensino Médio
                            </p>
                        </div>
                        <div className="link-git">
                            <a href="https://github.com/MDPyuri">
                                Link do GitHub
                            </a>
                        </div>
                    </div>
                    <div className="person-block">
                        <div className="photo">
                            <img src={milly} alt="Foto do Desenvolvedor" />
                        </div>
                        <div className="name-person">
                            <p>Kamilly da Silva Santos</p>
                        </div>
                        <div className="about-person">
                            <p>
                                Aluna do IFSP campus Caraguatatuba, curso:
                                Técnico em Informática Integrado ao Ensino Médio
                            </p>
                        </div>
                        <div className="link-git">
                            <a href="https://github.com/Milly02online">
                                Link do GitHub
                            </a>
                        </div>
                    </div>
                    <div className="person-block">
                        <div className="photo">
                            <img src={belly} alt="Foto do Desenvolvedor" />
                        </div>
                        <div className="name-person">
                            <p>Isabelly dos Santos Moraes</p>
                        </div>
                        <div className="about-person">
                            <p>
                                Aluna do IFSP campus Caraguatatuba, curso:
                                Técnico em Informática Integrado ao Ensino Médio
                            </p>
                        </div>
                        <div className="link-git">
                            <a href="https://github.com/Bellyinha">
                                Link do GitHub
                            </a>
                        </div>
                    </div>
                    <div className="person-block">
                        <div className="photo">
                            <img src={gabi} alt="Foto do Desenvolvedor" />
                        </div>
                        <div className="name-person">
                            <p>Gabriela Silva Teixeira</p>
                        </div>
                        <div className="about-person">
                            <p>
                                Aluna do IFSP campus Caraguatatuba, curso:
                                Técnico em Informática Integrado ao Ensino Médio
                            </p>
                        </div>
                        <div className="link-git">
                            <a href="https://github.com/Gabi8s8">
                                Link do GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-about-project">
                <div className="title-about">
                    <div className="line-abo"></div>
                    <div className="title-abo">Sobre o Projeto</div>
                    <div className="line-abo"></div>
                </div>
                <div className="about-project">
                    <p>
                        Este site foi desenvolvido como parte do trabalho
                        acadêmico para a disciplina Projeto Integrador 3, unindo
                        design e tecnologia para criar a experiência digital de
                        uma pizzaria fictícia.
                    </p>
                    <p>
                        Todas as imagens foram geradas por inteligência
                        artificial, trazendo um toque inovador ao projeto. Vale
                        destacar que esta é uma iniciativa exclusivamente
                        educacional, sem vínculo com um estabelecimento real.
                    </p>
                </div>
            </div>
        </section>
    );
    
};

export default About;
