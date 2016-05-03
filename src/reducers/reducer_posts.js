import { FETCH_POSTS, FIND_POST } from '../actions/index';

const INITIAL_STATE = { 
	all: [],
	post: null
};

export default function(state=INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_POSTS:
			return {...state, all:action.payload.items.reverse()};

		case FIND_POST:
			return {...state, post: action.payload};

		default:
			return state;
	}
}