import React from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom'
import Home from './pages/Home'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className='nav-bar'>
          <Link to='/'>Home</Link>
          <Link to='/page1'>Page 1</Link>
          <Link to='/page2'>Page 2</Link>
          <Link to='/page3'>Page 3</Link>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/page1' component={Page1}/>
          <Route path='/page2' component={Page2}/>
          <Route path='/page3' component={Page3}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
