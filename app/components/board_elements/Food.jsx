import React from 'react';

export default ({ position }) => {
  const divStyle = {
    top: `${position.y * 15}px`,
    left: `${position.x * 15}px`,
  };
  return <div className="food" style={divStyle} />;
};
