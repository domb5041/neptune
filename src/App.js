import React, {useState} from 'react';
import Header from './content/Header'
import Main from './content/Main'
import {createUseStyles} from 'react-jss'


const useStyles = createUseStyles({
  app: {
  }
})

function App() {
  const [planets] = useState([
    {
      name: 'mercury',
      diameter: 4879,
      color: '#A9A9A9'
    },
    {
      name: 'venus',
      diameter: 12104,
      color: '#BDB76B'
    },
    {
      name: 'earth',
      diameter: 12756,
      color: '#20B2AA'
    },
    {
      name: 'mars',
      diameter: 6792,
      color: '#CD5C5C'
    },
    {
      name: 'jupiter',
      diameter: 142984,
      color: '#FFA07A'
    },
    {
      name: 'saturn',
      diameter: 120536,
      color: '#DAA520'
    },
    {
      name: 'uranus',
      diameter: 51118,
      color: '#48D1CC'
    },
    {
      name: 'neptune',
      diameter: 49528,
      color: '#7B68EE'
    },
    {
      name: 'pluto',
      diameter: 2370,
      color: '#E6E6FA'
    },
  ])

  const classes = useStyles()
  return (
    <div className={classes.app}>
      <Header planets={planets}/>
      <Main planets={planets}/>
    </div>
  );
}

export default App;
