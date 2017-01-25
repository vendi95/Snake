import React from 'react';
import BoardElement from './BoardElement';

export default ({ childrenData }) => {
  const boardElements = childrenData.elements.map(element => <BoardElement
    childrenData={element}
  />);

  const boardStyle = {
    width: `${childrenData.size.width * 15}px`,
    height: `${childrenData.size.height * 15}px`,
  };

  return (<div className="board" style={boardStyle}>
    {boardElements}
  </div>);
};
