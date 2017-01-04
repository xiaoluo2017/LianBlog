import React from 'react';

export default () => {
	return (
		<div className="section center">
			<div id="avatar" style={{marginLeft: 'auto', marginRight:'auto'}} />
			<h2 id="title">Lian Liu</h2>
            <p>Email: <a href="mailto:lliu@atypon.com" target="_blank">lliu@atypon.com</a></p>
            <div id="contact-panel">
                <a className="social-share-element social-facebook" href="https://www.facebook.com/lian.liu.58910" target="_blank" title="Follow me on Facebook"></a>
                <a className="social-share-element social-codepen" href="http://codepen.io/lianliu/" target="_blank" title="Follow me on Codepen"></a>
                <a className="social-share-element social-twitter" href="https://twitter.com/lianliu19910622" target="_blank" title="Follow me on Twitter"></a>
                <a className="social-share-element social-github" href="https://github.com/lianliu" target="_blank" title="Follow me on GitHub"></a>
                <a className="social-share-element social-linkedin" href="https://www.linkedin.com/in/lian-liu-643029aa" target="_blank" title="Follow me on LinkedIn"></a>
            </div>
		</div>
	);
}