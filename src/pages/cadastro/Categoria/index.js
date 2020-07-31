import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function Cadastrocategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000'
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    console.log(values);

    setValues({
      ...values,
      [chave]: valor // nome: 'teste'
    })

    console.log(values);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setValue(name, value); 
  }

  useEffect(() => {
    if(window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias'; 
      fetch(URL)
       .then(async (respostaDoServer) =>{
        if(respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias(resposta);
          return; 
        }
        throw new Error('Não foi possível pegar os dados');
       })
    }    
  }, []);
  
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();

        setCategorias([
          ...categorias, // ... Para colocar todas as categorias que já estão no array nessa nova lista de categorias, não sobreescrever  
          values
        ]) 

        console.log('Você submeteu o form', values);
        setValues(valoresIniciais)
      }}>

      <FormField label="Nome da Categoria" type="text" name="nome" value={values.nome} onChange={handleChange}></FormField>

      <FormField label="Descrição" type="textarea" name="descricao" value={values.descricao} onChange={handleChange}></FormField>

      <FormField label="Cor" type="color" name="cor" value={values.cor} onChange={handleChange}></FormField>

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (<div> Carregando...</div>)}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.id}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  )
}

export default Cadastrocategoria;