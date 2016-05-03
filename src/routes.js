import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import PostPage from './components/post_page';

export default (
	<Route path='/' component={App} >
		<IndexRoute component={Home} />
		<Route path='/posts/:id' component={PostPage} />
	</Route>
);