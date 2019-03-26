import React, { Component } from 'react';
import './App.css';
import Game from './containers/Game';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="p-5 bg-light">
					<h1>Tic Tac Toe!</h1>
				</div>
				<Game click={this.togglePlayer} />
				<p />
			</div>
		);
	}
}

export default App;
