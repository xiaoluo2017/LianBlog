import React from 'react';
import { Link } from 'react-router';

export default (props) => {
	if(props.dest === '/') {
		return (
			<Link to={props.dest} className="button back-button">
				<i className="fa fa-home"></i>
				{props.text}
			</Link>
		);
	}
}