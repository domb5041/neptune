import React from 'react';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  page: {
    position: 'relative',
    height: 'calc(100vh - 100px)'
  },
  planet: {
    width: 400,
    height: 400,
    background: ({planet}) => planet.color,
    borderRadius: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: ({planet}) => '0 0 500px' + planet.color,
  }
})

const Planet = ({planet}) => {
  const classes = useStyles({planet})
  return (
    <div className={classes.page}>
      <div className={classes.planet}></div>
    </div>
  );
}

export default Planet;
