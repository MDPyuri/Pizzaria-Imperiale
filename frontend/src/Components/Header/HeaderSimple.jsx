import './Header.css';
import logo from './img/logo.png';

const HeaderSimple = () => {
    return (
        <header id="Header" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div id="LogoName" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <img src={logo} alt="Logo" style={{ marginRight: '1vw' }} />
                <p style={{ textAlign: 'center', margin: 0 }}>Vila Imperiale</p>
            </div>
        </header>
    );
};

export default HeaderSimple;
