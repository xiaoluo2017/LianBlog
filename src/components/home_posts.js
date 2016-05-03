import React, { Component } from 'react';

import PostItem from './post_item';
import Loader from './loader';

export default class HomePosts extends Component {
	renderPosts(posts) {
		return posts.map((post) => {
			const id = post.sys.id;
			return (
				<div style={{marginBottom: 30 + 'px' }} key={id} className="content">
					<PostItem post={post} hasPost={this.props.hasPost}/>
				</div>
			);
		});
	}

	render() {
		const posts = this.props.posts;
		if(!posts) {
			return (
				<Loader />
			);
		}

		return (
			<div>
				{ this.renderPosts(posts) }
			</div>
		);
	}
}