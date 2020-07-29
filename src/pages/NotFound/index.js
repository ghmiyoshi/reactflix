import React from 'react';

import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <PageDefault>
      <h1>Página não encontrada!</h1>

      <img src="https://64.media.tumblr.com/tumblr_lmjwp55r9h1qg0puro1_500.gif" style={{ width: '100%' }}></img>
    </PageDefault>
  )
}

export default NotFound;