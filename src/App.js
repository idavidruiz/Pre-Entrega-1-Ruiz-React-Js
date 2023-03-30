import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import Counter from './componentes/Navbar/Counter/Counter';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Button from './componentes/Navbar/Button/Button';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
       <Navbar />
      {/*  {<Counter />} */}
       <ItemListContainer greeting={'¡Bienvenidos a DrumerShop!'}/>
      
    </div>
  ); 
}


export default App ;
