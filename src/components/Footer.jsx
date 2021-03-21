import '../styles/components/Footer.css';

import githubImg from '../assets/GitHub-Mark-Light-32px.png';

function Footer() {
    return (
        <footer>
            <p>Desenvolvido por <strong>Henrique Tavares Aguiar</strong></p>
            <a href="https://github.com/henrique-tavares/IFB-PC3-Semana-De-Pratica-3">
                <img src={ githubImg } alt="GitHub" />
            </a>
        </footer>
    );
}

export default Footer;