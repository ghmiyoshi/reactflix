import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu'
import categoriasRepository from '../../repositories/categorias';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  const [dadosIniciais, setDadadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos);
        setDadadosIniciais(categoriasComVideos);
      })
      .catch((error) => {
        console.log()
      });
  }, []);

  console.log(dadosIniciais);
  return (
    <div style={{ background: "#141414" }}>
      <Menu />
{dadosIniciais.length === 0 && (<div>Loading...</div>)}

{dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
        <BannerMain
          videoTitle={dadosIniciais[0].videos[0].titulo}
          url={dadosIniciais[0].videos[0].url}
          videoDescription={"\"A mente humana é bastante complexa e, mesmo após anos de estudo, ainda não somos capazes de compreender todo o seu potencial. Filósofos, psicólogos e pensadores em geral já tentaram decifrar aquilo que se passa na cabeça das pessoas...\""}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais[0]}
        />
      </div>
    );
  }

  return (
    <Carousel key={categoria.id} category={categoria}></Carousel>
  );
})}

      <Footer />
    </div>
  );
}

export default Home;