import React from 'react';
import { Link } from 'react-router';

export default (props) => {
	const title = props.post.fields.title;
	const id = props.post.sys.id;
	if(props.hasPost) {
		return (
			<div className="post-title">
				<h2 id="title">
					{title}
				</h2>
			</div>
		);
	}

	return (
		<div className="post-title">
			<h2 id="title">
				<Link to={`posts/${id}`}>{title}</Link>
			</h2>
		</div>
	);
}