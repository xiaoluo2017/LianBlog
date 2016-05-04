import { FETCH_POSTS, FIND_POST, SEND_POST_ID } from '../actions/index';

const INITIAL_STATE = { 
	all: [],
	post: null,
	id: null
};

export default function(state=INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_POSTS:
			return {...state, all:action.payload.items.reverse()};

		case SEND_POST_ID:
			return {...state, id: action.payload};

		case FIND_POST:
			return {...state, post: action.payload};

		default:
			return state;
	}
}