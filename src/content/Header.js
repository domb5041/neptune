import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  nav: {
    display: 'flex',
    height: 100,
    '& > a': {
      display: 'flex',
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
      fontSize: 30,
      cursor: 'pointer',
      textDecoration: 'none',
      textTransform: 'uppercase',
      color: 'white',
      borderBottom: '3px solid white',
      padding: [3, 3, 0, 3],
      '&.active': {
        borderBottom: 'none',
        borderTop: '3px solid white',
        borderLeft: '3px solid white',
        borderRight: '3px solid white',
        padding: [0, 0, 3, 0],
      }
    }
  },
})

const Header = ({planets, location}) => {
  const classes = useStyles({planets})
  return (
    <header>
        <nav className={classes.nav}>
          {planets.map((planet, i) =>
            <Link
              key={i}
              className={location.pathname === ('/' + planet.name) && 'active'}
              to={'/' + planet.name}>
              {planet.name}
            </Link>
          )}
        </nav>
    </header>
  )
}

export default withRouter(Header);
