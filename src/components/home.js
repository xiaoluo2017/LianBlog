import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import HomePersonal from './home_personal';
import HomePosts from './home_posts';

import { fetchPosts } from '../actions/index';

class Home extends Component {
	constructor(props) {
		super(props);

		this.props.fetchPosts();
	}

	render() {
		return (
			<div>
				<HomePersonal />
				<HomePosts posts={this.props.posts} hasPost={this.props.hasPost} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts.all,
		hasPost: false
	};
}

export default connect(mapStateToProps, { fetchPosts })(Home);