import React, { Component } from 'react';
import { Link } from 'react-router';

import Tag from './tag';
import Text from './markdown_text';

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
		return tags.map(tag => {
			return <Tag tag={tag} key={tag}/>;
		});
	}

	renderText(text, hasPost) {
		if(hasPost) {
			return <Text text={makeTextBody(text)} />
		} 

		return <Text text={makeAbstract(text)} />
	}

	render() {
		if(!this.props.post.post) {
			return <div></div>;
		}
		const { fields, sys } = this.props.post.post;
		const hasPost = this.props.post.hasPost;

		return (
			<div className="post-content">
				<div className="post-title">
					<h2 id="title">
						{fields.title}
					</h2>
				</div>

				<time dateTime={fields.date}>
					{timeUtil(fields.date)}
				</time>

				<div className="tag-panel">
					{this.renderTags(fields.tags)}
				</div>

				<div className="post-body">{
					this.renderText(fields.body, hasPost)
				}</div>
			</div>
		);
	}
}