import React, { useState } from 'react';
import Button from '@mui/material/Button';

const MyCounter = (props) => {
const initialCount = props.initial !== undefined ? props.initial : 0;
const [count, setCount] = useState(initialCount);
const increment = () => {
    if (props.max > count || props.max === undefined) {
        setCount(count + 1);
    }
};

const decrement = () => {
    if (props.min < count || props.min === undefined) {
        setCount(count - 1);
    }
};

const reset = () => {
    setCount(initialCount);
};

return (
    <div className='myCounter'>
        <h1>{props.nameTask}</h1>
        <span>Поточний рахунок: {count}</span>
        <Button variant="outlined" onClick={increment}>+</Button>
        <Button variant="outlined" onClick={decrement}>-</Button>
        <Button variant="outlined" onClick={reset}>reset</Button>
    </div>
);
};

export default MyCounter;