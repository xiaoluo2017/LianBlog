import React from 'react';
import { Link } from 'react-router';

export default (props) => {
	return (
		<div className="post-action">
			<Link to={`posts/${props.id}`} 
				  className="read-more">
				Read More
				<svg className="shape-icon shape-arrow--broken">
					<polygon points="35,5 25,0 25,4 20,4 20,6 25,6 25,10 "/>
					<rect x="10" y="4" width="5" height="2"/>
					<rect y="4" width="5" height="2"/>
				</svg>
			</Link>
		</div>
	);
}