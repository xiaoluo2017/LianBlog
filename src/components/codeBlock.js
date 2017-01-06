import React from 'react';

import CodeBlock from 'react-syntax-highlighter';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBright } from 'react-syntax-highlighter/dist/styles';

export default (props) => {
	return (
		<SyntaxHighlighter 
			language={props.language} 
			style={tomorrowNightBright}
			showLineNumbers={true}
		>
			{props.literal}
		</SyntaxHighlighter>  
	);
}