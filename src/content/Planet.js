import React from 'react';

function Planet({planet}) {
  return (
    <div className="page">
      {planet.name}
    </div>
  );
}

export default Planet;
