import React, { Component } from 'react';
import { connect } from 'react-redux';

import { findPost } from '../actions/index';

import PostBase from './post_template';
import Button from './button';
import CommentComponent from 'react-disqus-thread';

class PostPage extends Component {
	constructor(props) {
		super(props);

		this.props.findPost(this.props.params.id);
	}

	render() {
		const post_data = {
			post: this.props.post,
			hasPost: this.props.hasPost
		}

		return (
			<div className="content">
				<div className="row post-container" style={{marginBottom: 30 + 'px' }}>
					<Button dest='/' />
					<PostBase post={post_data} />
					<CommentComponent 
						className="CommentComponent"
						shortname="lian22"
                		identifier={this.props.params.id}
					/>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		post: state.posts.post,
		hasPost: true,
		//id: state.posts.id
	};
}

export default connect(mapStateToProps, { findPost })(PostPage);