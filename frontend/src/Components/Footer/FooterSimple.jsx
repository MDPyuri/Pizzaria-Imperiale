import './Footer.css';

const FooterSimple = () => {
    return (
        <footer id="Footer">
            <div id="contentRod">
                <div id="title-rod">
                    <div className="line-rod"></div>
                    <p>Vila Imperiale</p>
                    <div className="line-rod"></div>
                </div>
                <div id="copyright-rod">
                    <p>
                        Vila Imperiale © {new Date().getFullYear()} - Todos os direitos reservados
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterSimple;
