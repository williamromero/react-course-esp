import React, { useState } from 'react'

const AddCategory = () => {

  const [inputValue, setInputValue] = useState('Hola mundo');

  const handleInputChange = (e) =>  {
    clearTimeout(0);
    setInputValue(e.target.value); 
    setTimeout(() => {      
      console.log(e.target.value);
    }, 1000);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit ha sido detenido');
  };

  return (

    <form className="searchBox" onSubmit={ handleSubmit}>
      <span>Tu búsqueda es: { inputValue }</span>
      <input type="text" name="search" id="searchItem" value={ inputValue } onChange={ handleInputChange } />
    </form>
  )
}

export default AddCategory
