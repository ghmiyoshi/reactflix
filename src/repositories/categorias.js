import config from '../config';

const URL_CATEGORIAS = `${config.URL}/categorias`;

function getAllWithVideos() {
  console.log(`${URL_CATEGORIAS}?_embed=videos`);

  return fetch(`${URL_CATEGORIAS}?_embed=videos`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados.');
    });
}

function getAll() {
  console.log(`${URL_CATEGORIAS}`);

  return fetch(`${URL_CATEGORIAS}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados.');
    });
}

export default {
  getAllWithVideos, getAll,
};
