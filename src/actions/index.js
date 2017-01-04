import axios from 'axios';
import Contentful from 'contentful';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FIND_POST = 'FIND_POST';
//export const SEND_POST_ID = 'SEND_POST_ID';
//export const STORE_POST_ID = 'STORE_POST_ID';

const client = Contentful.createClient({
	space: '8ea9mgwdua70',
  	accessToken: '10fc3f9ba91a3c210c12d2dcdf581ed90818eae7ecbbf5406682f83cb29c1229'
});

export function fetchPosts() {
	const request = client.getEntries({ 
		content_type: '2wKn6yEnZewu2SCCkus4as',
		order: 'fields.date' 
	});

	return (
		{
			type: FETCH_POSTS,
			payload: request
		}
	);
}
/*
export function storePostId(ids) {
	return (
		{
			type: STORE_POST_ID,
			payload: ids
		}
	);
}

export function sendPostId(id) {
	return (
		{
			type: SEND_POST_ID,
			payload: id
		}
	);
}
*/

export function findPost(id) {
	const request = client.getEntry(id);

	return (
		{
			type: FIND_POST,
			payload: request
		}
	);
}



// fetch comments of a post
