import React from 'react';
import Logo from './../../assets/logo.png';
import './Menu.css'
//import ButtonLink from './components/ButtonLink';

import Button from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="kaflix"/>
            </a>

            {/*<Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button> */}
        </nav>
    );
}

export default Menu;