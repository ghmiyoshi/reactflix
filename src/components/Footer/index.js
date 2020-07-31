import React from 'react';
import { FooterBase } from './styles';
import Instagram from '../../assets/imginsta.png';
import Facebook from '../../assets/imgface.png';
import Youtube from '../../assets/imgyou.png';
import Linkedin from '../../assets/imglinked.png';

function Footer() {
  return (
    <FooterBase>
        <a href="https://www.facebook.com/kalliny.araujo.982">
          <img className='fotimg'src={Facebook} alt="Logo Twitter" />
        </a>

        <a href="https://www.instagram.com/kalliny.study/">
          <img className='fotimg' src={Instagram} alt="Logo Instagram" />
        </a>

        <a href="https://www.youtube.com/channel/UCltMa4eJ3OxQDF4q5yt_PYQ">
          <img className='twtimg' src={Youtube} alt="Logo YouTube" />
        </a>

        <a href="https://www.linkedin.com/in/kalliny-silva-369000182/">
          <img className='fotimg' src={Linkedin} alt="Logo Linkedin" />
        </a>
      <p>
      Kaflix · 2020 © Todos os direitos reservados. Developed by Hideki
      </p>
    </FooterBase>
  );
}

export default Footer;
