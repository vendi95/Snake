import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board_elements/Board';
import LevelSelector from './components/level_selector/LevelSelector';

export default {
  run() {
    const mockBoard = {
      size: {
        width: 10,
        height: 20,
      },
      elements: [
        {
          type: 'snake',
          position: {
            x: 4,
            y: 10,
          },
        },
        {
          type: 'snake',
          position: {
            x: 5,
            y: 10,
          },
        },
        {
          type: 'snake',
          position: {
            x: 6,
            y: 10,
          },
        },
        {
          type: 'food',
          position: {
            x: 5,
            y: 9,
          },
        },
      ],
    };

    const levels = [
      {
        size: {
          width: 10,
          height: 10,
        },
        speed: 301,
      },
      {
        size: {
          width: 20,
          height: 20,
        },
        speed: 201,
      },
      {
        size: {
          width: 30,
          height: 30,
        },
        speed: 100,
      },
    ];

    ReactDOM.render(
      <div>
        <LevelSelector levels={levels} />
        <Board childrenData={mockBoard} />
      </div>,
            document.getElementById('container'));
  },
};
