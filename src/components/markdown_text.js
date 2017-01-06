import React from 'react';
import ReactMarkdown from 'react-markdown';

import CodeBlock from './codeBlock';

export default (props) => {
	if(props.hasPost) {
		return(
			<div className="post-body">
				<ReactMarkdown 	
					source={props.text} 
					renderers={{CodeBlock}} 
				/>
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