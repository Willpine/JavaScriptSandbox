import React from 'react'; // Core do react
import ReactDOM from 'react-dom'; // Forma do react se comunicar com o DOM
import App from './App';

// Aqui, o react pega tudo o 
// que está dentro do ReactDOM.render 
// e renderiza dentro do elemento
// #root na index.html

// O strict mode é uma das maneiras
// do react lidar com erros

// Está em JSX - javascript xml

// O app é um componente, porém ele fica por
// volta de toda aplicação e é mais fácil de
// reaproveitar código

// Um componente é simplesmente uma função
// que retorna um JSX
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
