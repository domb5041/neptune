import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import Planet from './Planet'

const Main = ({planets}) =>
    <main>
      <Switch>
        <Redirect exact from='/' to="/neptune" />
        {planets.map((planet, i) =>
          <Route
            path={'/' + planet.name}
            render={() => <Planet planet={planet}/>}
            key={i}
          />
        )}
      </Switch>
    </main>

export default Main;
