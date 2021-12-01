import React, { Component } from 'react';
import './App.css';
import { createGlobalStyle } from "styled-components";
import { bodyHeader, FlexGrow } from './Components/header/header';
import FileUploadPage from './Pages/fileUploadPg';
import Body from './Components/Body/Body';
import Controller from './Components/Body/controller';
import { Header } from "./Components/header/header"

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}
button {
  border : none;
  outline: none;
}
a {
  text-decoration: none;
  width: 100%;
}

`;

function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Controller />
    </div>
  );
}
export default App;
