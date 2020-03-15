import React from 'react';
import {Link} from 'react-router-dom'

const Header = ({planets}) =>
  <header className="App-header">
      <nav className='nav-bar'>
        {planets.map((planet, i) =>
          <Link key={i} to={'/' + planet.name}>{planet.name}</Link>
        )}
      </nav>
  </header>

export default Header;
