import React from 'react';
import './App.css';
import { Home } from './Components/Home/Home';

const tabs = [
  {
    name:'tab 1',
    text:'Texto do primeiro tab'
  },
  {
    name:'tab 2',
    text:'Texto do segundo tab'
  },
  {
    name:'tab 3',
    text:'Texto do terceiro tab'
  },
  {
    name:'tab 4',
    text:'Texto do quarto tab'
  }
]

function App() {
  return (
      <Home tabs={tabs}/>
  );
}

export default App;
