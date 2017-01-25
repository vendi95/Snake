import React from 'react';
import SnakeElement from './Snake';
import FoodElement from './Food';

export default ({ childrenData }) => {
  switch (childrenData.type) {
    case 'snake':
      return <SnakeElement position={childrenData.position} />;
    case 'food':
      return <FoodElement position={childrenData.position} />;
    default:
      throw Error('Board element not found!');
  }
};
