import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { getUnit } from '@mui/material/styles/cssUtils';

function Game(props) {
    const [number, setNumber] = useState(getRandomArbitrary());
    const [guessNumber, setGuessNumber] = useState('');
    const [information, setInformation] = useState('');
    const [result, setResult] = useState('');
    const [attempt, setAttempt] = useState(0);

    function getRandomArbitrary(min = 1, max = 100) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    
    const newGame = () => {
        setNumber(getRandomArbitrary());
        setInformation('');
        setResult('');
        setAttempt(0);
    };
    
    const guessFunction = (event) => {
        setGuessNumber(event.target.value);
    };
    
    const Check = () => {
        setAttempt(attempt + 1);
    
        if (!guessNumber) {
            setInformation('Введіть ваше число!!!');
            if (attempt + 1 < 10) {
                return;
            }
        }
    
        if (guessNumber == number) {
            setResult('Гарна робота!');
        } else if (attempt + 1 < 10 && guessNumber > number) {
            setInformation('Число більше ніж N!');
        } else if (attempt + 1 < 10 && guessNumber < number) {
            setInformation('Число меньше ніж N!');
        } else if (attempt + 1 >= 10) {
            setResult('Кінець!');
        }
    };
    
    return (
        <div className="Game">
            <h1>{props.nameTask}</h1>
            <Button variant="outlined" onClick={newGame} disabled={!result}>
                New Game
            </Button>
            <Input type="number" placeholder="Your number" onChange={guessFunction} />
            <Button variant="outlined" onClick={Check} disabled={!!result}>
                Check
            </Button>
            <div>
                Information:
                <div className="block_info">{information}</div>
            </div>
            <div>Attempts: {attempt}</div>
            <div>Result: {result}</div>
        </div>
    );
    
}

export default Game;