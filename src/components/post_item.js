import React, { Component } from 'react';
import { Link } from 'react-router';

import PostBase from './post_template';

export default class Post extends Component {
	render() {
		const post = this.props.post;
		const hasPost = this.props.hasPost;
		const sys = post.sys;

		const post_data = {
			post,
			hasPost
		}

		return (
			<div className="row post-container">
				{/* a back button if in post page*/}
				<PostBase post={post_data}/>
				<div className="post-action">
					<Link to={`posts/${sys.id}`}>Read More</Link>
				</div>
			</div>
		);
	}
}