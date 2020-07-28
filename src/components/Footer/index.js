import React from 'react';
import { FooterBase } from './styles';
import Logo from './../../assets/logo.png';
import './Footer.css'

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.youtube.com/channel/UCltMa4eJ3OxQDF4q5yt_PYQ">
        <img src={Logo} alt="kaflix" className="img-footer"/>
      </a>
      <p>Vídeo toda semana</p>
    </FooterBase>
  );
}

export default Footer;
