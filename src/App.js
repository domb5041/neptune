import React, {useState} from 'react';
import './App.css';
import Header from './content/Header'
import Main from './content/Main'


function App() {
  const [planets] = useState([
    {
      name: 'mercury'
    },
    {
      name: 'venus'
    },
    {
      name: 'earth'
    },
    {
      name: 'mars'
    },
    {
      name: 'neptune'
    },
  ])

  return (
    <div className="App">
      <Header planets={planets}/>
      <Main planets={planets}/>
    </div>
  );
}

export default App;
