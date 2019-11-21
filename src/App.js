import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header"
import styled from 'styled-components'
import About from "./components/About/About";
import Main from "./components/ProductsAndCart/ProductsAndCart";

function App() {
  return (
    <TheApp className="App">
      <Header/>
      <About/>
      <Main/>
    </TheApp>
  );
}

const TheApp = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  width:100%
  `;

export default App;
