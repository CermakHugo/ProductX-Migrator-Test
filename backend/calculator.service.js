

import express from 'express';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

class CalculatorService {
    setupUIComponents() {
        const Calculator = () => {
            const [num1, setNum1] = useState('');
            const [num2, setNum2] = useState('');
            const [result, setResult] = useState('');

            const handleAdd = () => {
                setResult(Number(num1) + Number(num2));
            };

            const handleSubtract = () => {
                setResult(Number(num1) - Number(num2));
            };

            const handleMultiply = () => {
                setResult(Number(num1) * Number(num2));
            };

            const handleDivide = () => {
                setResult(Number(num1) / Number(num2));
            };

            return (
                <div>
                    <input
                        type="number"
                        value={num1}
                        onChange={(e) => setNum1(e.target.value)}
                        placeholder="Enter first number"
                    />
                    <input
                        type="number"
                        value={num2}
                        onChange={(e) => setNum2(e.target.value)}
                        placeholder="Enter second number"
                    />
                    <button onClick={handleAdd}>Add</button>
                    <button onClick={handleSubtract}>Subtract</button>
                    <button onClick={handleMultiply}>Multiply</button>
                    <button onClick={handleDivide}>Divide</button>
                    <p>Result: {result}</p>
                </div>
            );
        };

        const rootElement = document.getElementById('root');
        ReactDOM.render(<Calculator />, rootElement);
    }
}

export default CalculatorService;