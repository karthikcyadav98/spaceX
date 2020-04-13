import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Spinner from './spinner/Spinner';
import LaunchItem from './LaunchItem';
import MissonKeys from './MissonKeys';

const LAUNCHES_QUERY = gql`
	query LaunchesQuery {
		launches {
			flight_number
			mission_name
			launch_date_local
			launch_success
		}
	}
`;

class Launches extends Component {
	render() {
		return (
			<Fragment>
				<h1 className="display-4 my-3">Launches</h1>
				<MissonKeys />
				<Query query={LAUNCHES_QUERY}>
					{({ loading, error, data }) => {
						if (loading) {
							return <Spinner />;
						}
						if (error) {
							console.log('something went wrong', error);
						}
						return (
							<Fragment>
								{data.launches.map((item) => <LaunchItem key={item.flight_number} launch={item} />)}
							</Fragment>
						);
					}}
				</Query>
			</Fragment>
		);
	}
}

export default Launches;
