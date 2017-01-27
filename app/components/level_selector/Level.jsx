import React from 'react';

function speedToString(speed) {
  if (speed < 150) {
    return 'fast';
  } else if (speed < 250) {
    return 'moderate';
  }

  return 'slow';
}

export default ({ id, size, speed }) => <option value={id}>
  {size.width}x{size.height} ({speedToString(speed)})
    </option>;

export {
  speedToString
};