import React from 'react';
import ReactMarkdown from 'react-markdown';

export default (props) => {
	if(props.hasPost) {
		return(
			<div className="post-body">
				<ReactMarkdown source={props.text} />
			</div>
		);
	} else {
		return(
			<div className="post-abstract">
				<ReactMarkdown source={props.text} />
			</div>
		);
	}
}