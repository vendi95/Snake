import React from 'react';
import {Link} from 'react-router';

import Board from './board_elements/Board';
import LevelSelector from './level_selector/LevelSelector';

export default ({route}) =>
    <div>
        <Link to="/toplist">Ranklist</Link>
        <LevelSelector levels={route.levels}/>
        <Board />
    </div>;
