import React from 'react';
import { connect } from 'react-redux';

import BoardElement from './BoardElement';

function Board( props ) {
  const boardElements = props.elements.map(element => <BoardElement
    childrenData={element}
  />);

  const boardStyle = {
    width: `${props.size.width * 15}px`,
    height: `${props.size.height * 15}px`,
  };

  return (<div className="board" style={boardStyle}>
    {boardElements}
  </div>);
};

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Board);