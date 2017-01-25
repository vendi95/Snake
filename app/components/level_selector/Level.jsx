import React from 'react';

function speedToString(speed) {
  if (speed < 100) {
    return 'fast';
  } else if (speed < 300) {
    return 'moderate';
  }

  return 'slow';
}

export default ({ id, size, speed }) => <option value={id}>
  {size.width}x{size.height} ({speedToString(speed)})
    </option>;
