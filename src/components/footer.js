import React, { Component } from 'react';

export default () => {
	return (
		<footer>
			<div className="row">
				<div className="content">
					<h5></h5>
				</div>
			</div>

			<div className="row">
				<small className="content">
					© Lian Liu {new Date().getFullYear()} - Oakland, CA -
					Email: <a href="mailto:lliu@atypon.com" target="_blank">lliu@atypon.com</a>
				</small>
			</div>

			<div className="sub-footer">
				<span className="banner"></span>
			</div>
		</footer>
	);
}