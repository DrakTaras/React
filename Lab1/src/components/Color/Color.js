import React, { useState } from 'react';

const colors = ['red', 'yellow', 'black', 'green', 'grey', 'brown'];

const Color = () => {
  const [color, setColor] = useState('red');

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <h2>Task6</h2>
      <h1>
        I'm <span style={{ color: color }}>Product</span>
      </h1>
      <select onChange={handleColorChange}>
        {colors.map((productColor) => (
          <option value={productColor} key={productColor}>
            {productColor}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Color;
