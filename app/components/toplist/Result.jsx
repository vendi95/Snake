import React from 'react';
import {speedToString} from '../level_selector/Level'

export default ({ rank, result }) => <tr>
    <td>{rank}.</td>
    <td>{result.username}</td>
    <td>{result.level.size.width}x{result.level.size.height} ({speedToString(result.level.speed)})</td>
    <td>{(new Date(result.date)).toLocaleString()}</td>
    <td>{result.score}</td>
</tr>;
