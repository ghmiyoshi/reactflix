import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const titulosCategorias = categorias.map(({ titulo }) => titulo);

  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository.getAll()
      .then((categoriasFromServer) => {
        console.log(categoriasFromServer);
        setCategorias(categoriasFromServer);
      });
  }, []);

  console.log(categorias);
  console.log(titulosCategorias);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        // eslint-disable-next-line max-len
        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

        console.log(categoriaEscolhida);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        }).then(() => {
          console.log('Vídeo cadastrado com sucesso!');
          history.push('/');
        });
      }}
      >
        <FormField label="Título do Vídeo" type="text" name="titulo" value={values.titulo} onChange={handleChange} />

        <FormField label="URL" type="text" name="url" value={values.url} onChange={handleChange} />

        <FormField label="Categoria" name="categoria" value={values.categoria} onChange={handleChange} suggestions={titulosCategorias} />

        <Button>
          Cadastrar
        </Button>
      </form>
      
    </PageDefault>
  );
}

export default CadastroVideo;
