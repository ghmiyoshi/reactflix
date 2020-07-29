import React from 'react';
import { FooterBase } from './styles';
import Logo from './../../assets/logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.youtube.com/channel/UCltMa4eJ3OxQDF4q5yt_PYQ">
        <img src={Logo} alt="kaflix" style={{width: "168px"}}/>
      </a>
      <p>Vídeo toda semana</p>
    </FooterBase>
  );
}

export default Footer;
