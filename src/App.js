import React, { Component } from 'react';
import './App.css';
import { createGlobalStyle } from "styled-components";
import { bodyHeader, FlexGrow } from './Components/header/header';
import FileUploadPage from './Pages/fileUploadPg';
import Body from './Components/Body/Body';
import { Header } from "./Components/header/header"
const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}
button {
  border : none;
  outline: none;
}

`;

function App() {

  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Body />
    </div>
  );
}
export default App;
