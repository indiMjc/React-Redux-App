import React from "react";
import "./exchange.css";

const Exchange = props => {
	return (
		<div className="exchange-card">
			<h1>Name: {props.name}</h1>
			<p>Country: {props.country}</p>
			<a href={props.url}>{props.url}</a>
			<p>Trust Score: {props.trustScore}</p>
			<p>Trust Rank: {props.trustRank}</p>
			<p>24hr Volume: {props.btcVol} BTC</p>
			<p>Normalized 24hr Volume: {props.normalizedVol} BTC</p>
		</div>
	);
};

export default Exchange;
