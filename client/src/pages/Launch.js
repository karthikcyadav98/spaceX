import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import Spinner from './spinner/Spinner';
import Moment from 'react-moment';

const LAUNCH_QUERY = gql`
	query LaunchQuery($flight_number: Int!) {
		launch(flight_number: $flight_number) {
			flight_number
			mission_name
			launch_year
			launch_date_local
			launch_success
			rocket {
				rocket_id
				rocket_name
				rocket_type
			}
		}
	}
`;

class Launch extends Component {
	render() {
		let { flight_number } = this.props.match.params;
		flight_number = parseInt(flight_number);

		return (
			<Fragment>
				<Query query={LAUNCH_QUERY} variables={{ flight_number }}>
					{({ loading, error, data }) => {
						if (loading) {
							return <Spinner />;
						}
						if (error) {
							console.log('something went wrong', error);
						}

						const {
							mission_name,
							launch_year,
							launch_date_local,
							launch_success,
							rocket: { rocket_id, rocket_name, rocket_type }
						} = data.launch;

						return (
							<div>
								<h1 className="dispaly-4 my-3">Mission: {mission_name}</h1>
								<h1 className="mb-3">Launch Details</h1>
								<ul className="list-group">
									<li className="list-group-item">Flight Number: {flight_number}</li>
									<li className="list-group-item">Launch Year: {launch_year}</li>
									<li className="list-group-item">
										Date: <Moment format="DD-MM-YYYY HH:mm">{launch_date_local}</Moment>
									</li>
									<li className="list-group-item">
										Launch Successfull:{' '}
										<span
											className={launch_success ? 'px-3 mr-2 bg-success' : 'px-3 mr-2 bg-danger'}
										>
											{launch_success ? 'YES' : 'NO'}
										</span>
									</li>

									<h4 className="my-3">Rocket Details</h4>
									<ul className="list-group">
										<li className="list-group-item">Rocket ID: {rocket_id}</li>
										<li className="list-group-item">Rocket Name: {rocket_name}</li>
										<li className="list-group-item">Rocket Type: {rocket_type}</li>
									</ul>
								</ul>
							</div>
						);
					}}
				</Query>
			</Fragment>
		);
	}
}

export default Launch;
