import React from "react";
import { useDispatch } from "react-redux";
import { getExchanges } from "./actions";
import "./App.css";

function App() {
	const dispatch = useDispatch();
	return (
		<div className="App">
			<h1>Top ten cryptocurrency exchanges by 24hr volume:</h1>
			<button onClick={() => dispatch(getExchanges())}>Show top 10</button>
		</div>
	);
}

export default App;
