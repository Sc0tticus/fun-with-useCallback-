import React, { useState, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';

const funcCount = new Set();

const App = () => {
	const [count, setCount] = useState(0);
	const [number, setNumber] = useState(0);

	const incrementCounter = () => {
		setCount(count + 1);
	};
	const decrementCounter = () => {
		setCount(count - 1);
	};

	const incrementNumber = () => {
		setNumber(number + 1);
	};

	funcCount.add(incrementCounter);
	funcCount.add(decrementCounter);
	funcCount.add(incrementNumber);
	alert(funcCount.size);

	return (
		<div className="App">
			<div>Count: {count}</div>
			<button onClick={incrementCounter}>Increase counter</button>
			<button onClick={decrementCounter}>Decrease counter</button>
			<button onClick={incrementNumber}>Increase number</button>
		</div>
	);
};

export default App;
