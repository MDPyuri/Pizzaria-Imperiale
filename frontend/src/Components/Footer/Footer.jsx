import React from "react";
import '../Footer/Footer.css';

const Footer = () => {
    return (
        <footer id="Footer">
            <div id="contentRod">
                <div id="title-rod">
                    <div className="line-rod"></div>
                    <p>Fale conosco</p>
                    <div className="line-rod"></div>
                </div>

                <div id="content-rod">
                    <div id="text-rod">
                        <p>
                            Tem alguma dúvida, quer saber mais sobre o Vila
                            Imperiale ou dar um feedback?
                        </p>
                        <p>
                            Envie sua mensagem pelas nossas redes sociais ou
                            pelo nosso whatsapp e retornaremos o mais breve
                            possível!
                        </p>
                    </div>

                    <div id="socialmedia-rod">
                        <div className="item-socialmedia">
                            <ion-icon name="logo-whatsapp"></ion-icon>
                            <p>(12) 3885-2130</p>
                        </div>
                        <div className="item-socialmedia">
                            <ion-icon name="logo-instagram"></ion-icon>
                            <p>@vilaimperiale_</p>
                        </div>
                        <div className="item-socialmedia">
                            <ion-icon name="logo-tiktok"></ion-icon>
                            <p>@vilaimperiale_</p>
                        </div>
                        <div className="item-socialmedia">
                            <ion-icon name="logo-facebook"></ion-icon>
                            <p>VilaImperiale</p>
                        </div>
                    </div>
                </div>

                <div className="line-rod2"></div>

                <div id="copyright-rod">
                    <p>
                        Vila Imperiale © 2025 - Todos os direitos reservados /
                        todas as imagens deste site foram criadas por IA
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;