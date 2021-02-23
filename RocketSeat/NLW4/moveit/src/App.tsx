import React from 'react';
// import {Button} from './components/Button'; // Importando um componente devo usar chaves
import { ExperienceBar } from './components/ExperienceBar';
import './styles/global.css';    
  // Não podemos retornar mais de 1 elemento
    // no react a não ser que eles estejam
    // agrupados dentro de um elemento pai,
    // por isso a div
function App() {
  return (
    <div className="container">
      {/* <Button color="red">Botão 1</Button>
      <Button color="blue">Botão 2</Button>
      <Button color="green">Botão 3</Button> */}
      <ExperienceBar />
    </div>
  );
}

export default App;
