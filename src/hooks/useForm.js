import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    console.log(values);

    setValues({
      ...values,
      [chave]: valor, // nome: 'teste'
    });

    console.log(values);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setValue(name, value);
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
