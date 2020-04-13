import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

function LaunchItem(props) {
	const { flight_number, mission_name, launch_date_local, launch_success } = props.launch;
	return (
		<div className="card card-body mb-3">
			<div className="row">
				<div className="col-md-9">
					<h4>
						Mission:{' '}
						<span className={launch_success ? 'px-3 mr-2 bg-success' : 'px-3 mr-2 bg-danger'}>
							{mission_name}
						</span>
					</h4>
					<p>
						Date: <Moment format="DD-MM-YYYY HH:mm">{launch_date_local}</Moment>
					</p>
				</div>
				<div className="col-md-3">
					<Link to={`/launch/${flight_number}`} className="btn btn-secondary">
						Launch Details
					</Link>
				</div>
			</div>
		</div>
	);
}

export default LaunchItem;
