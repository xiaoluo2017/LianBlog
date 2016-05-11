import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

//import { sendPostId } from '../actions/index';

import PostBase from './post_template';
import ReadMore from './read_more';

export default class Post extends Component {
	constructor(props) {
		super(props);

		//this.props.sendPostId(this.props.post.sys.id);
	}
	render() {
		const post = this.props.post;
		const hasPost = this.props.hasPost;
		const id = post.sys.id

		const post_data = {
			post,
			hasPost,
			id
		}

		return (
			<div className="row post-container">
				{/* a back button if in post page*/}
				<PostBase post={post_data}/>
				<ReadMore id={id} />
			</div>
		);
	}
}

//export default connect(null, { sendPostId })(Post);