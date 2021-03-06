import React, { Component } from 'react';
import { Link } from 'react-router';

import Title from './post_title';
import Tag from './tag';
import Text from './markdown_text';
import Loader from './loader';

import timeUtil from '../util/time_util';
import { findPost } from '../actions/index';

function makeAbstract(text) {
	const token = 'ABSTRACT';
	const first = text.indexOf(token);
	const last = text.lastIndexOf(token);
	const abstract = text.substring(first + token.length + 1, last);
	return abstract;
}

function makeTextBody(text) {
	const token = 'ABSTRACT';
	const last = text.lastIndexOf(token);
	const textBody = text.substring(last+ token.length);
	return textBody;
}

export default class PostBase extends Component {
	renderTags(tags) {
		if(!tags) return;
		
		return tags.map(tag => {
			return <Tag tag={tag} key={tag}/>;
		});
	}

	renderText(text, hasPost) {
		if(hasPost) {
			return <Text text={makeTextBody(text)} hasPost={hasPost} />
		} 

		return <Text text={makeAbstract(text)} hasPost={hasPost} />
	}

	render() {
		if(!this.props.post.post) {
			return <Loader />;
		}
		const { fields, sys } = this.props.post.post;
		const hasPost = this.props.post.hasPost;

		return (
			<article className="post-content">
				<Title post={this.props.post.post} hasPost={hasPost}/>

				<time dateTime={fields.date}>
					<a>{timeUtil(fields.date)}</a>
				</time>

				<div className="tag-panel">
					{this.renderTags(fields.tags)}
				</div>

				<div>{
					this.renderText(fields.body, hasPost)
				}</div>
			</article>
		);
	}
}