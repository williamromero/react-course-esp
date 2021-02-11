import React, { useState } from 'react';
import AddCategory from './AddCategory';

function GifExpertApp() {

  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])
  // const addElement = () => setCategories([...categories, 'Caballeros del Zodiaco']);

  return (
    <div className="content">
      <h2>GifExpertApp</h2>
      {/* <button onClick={ addElement }>Agregar</button> */}

      <AddCategory />
      
      <ol>
        { 
          categories.map((category) => {
            return <li key={ category }> { category } </li>;
          }) 
        }
      </ol>
    </div>
  )
}

export default GifExpertApp;
