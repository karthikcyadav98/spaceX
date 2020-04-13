import React, { Component } from 'react';
import logo from './logo.png';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Launches from './pages/Launches';
import Launch from './pages/Launch';
import './App.css';

const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql'
});

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<Router>
					<div className="container">
						<img
							src={logo}
							alt="spacex"
							style={{
								width: 900,
								display: 'block',
								margin: 'auto'
							}}
						/>
						<Route exact path="/" component={Launches} />
						<Route exact path="/launch/:flight_number" component={Launch} />
					</div>
				</Router>
			</ApolloProvider>
		);
	}
}

export default App;
